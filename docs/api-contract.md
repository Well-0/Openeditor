# OpenEditor — API Contract (G-01)

> Source of truth for how the frontend (writer.html) talks to the Flask backend.
> Covers the 4 canonical screens: Upload → Processing → Results → Download.
> Endpoints and line refs below match the current `app/main.py`.

---

## Screen 1 — Upload

### `POST /api/upload`

**Request:** `multipart/form-data`, field name `file`, a `.docx` file.

**Success (200):**
```json
{ "session_id": "d83eff1c-1e94-4638-9c4c-801fa3875112" }
```
Processing starts immediately in a background thread — frontend should move to the
Processing screen and begin polling `GET /api/results/<session_id>` right away.

**Failure (400):**
```json
{ "error": "No file uploaded" }
```
```json
{ "error": "Only .docx files are accepted" }
```
```json
{
  "error": "Document is too long (18,342 words). The maximum is 10,000 words. Please shorten the manuscript and try again.",
  "word_count": 18342,
  "max_word_count": 10000
}
```

**Failure (413 — file too large):**
```json
{ "error": "File too large", "detail": "Maximum upload size is 16 MB." }
```
> ⚠️ Backend defaults are **16 MB / 10,000 words**. PRD/Zac's design specifies **20 MB / ~15,000 words**.
> This is a live mismatch — resolving it is G-02's job (env vars `MAX_UPLOAD_MB` and `MAX_WORD_COUNT`
> need to be updated to match, or the frontend copy needs to change — team decision needed).

**Client-side vs. server-side validation:**
- File type, empty file, obviously-wrong extension → **client-side**, before any request is sent (per Z-02: "user knows exactly why a file is rejected before anything is submitted to the backend").
- File size, word count, fake `.docx` (wrong content), corrupted file, password-protected file → **server-side**, since these require actually reading the file. These come back as 400/413 above.
- Network failure mid-upload → **client-side** (fetch/XHR error handling, no server response).

---

## Screen 2 — Processing

### `GET /api/results/<session_id>` (polled repeatedly while processing)

**While running (202):**
```json
{ "status": "processing", "progress": 45, "stage": "structure" }
```

**Stage → step-label mapping** (per `STAGE_TO_STEP` in `app/static/script.js`):
| `stage` value | UI step |
|---|---|
| `starting`, `structure`, `analysis` | 0 |
| `refs`, `references` | 1 |
| `llm`, `editorial` | 2 |
| `building`, `finalizing`, `done` | 3 |

**Done (200):** see Results screen below — same endpoint, different payload once `status` isn't `processing`.

**Cancelled (409):**
```json
{ "status": "cancelled", "error": "Processing cancelled" }
```

**Timeout (504):**
```json
{ "status": "timeout", "error": "Analysis exceeded the 10-minute time limit and was stopped. The document may be very large or complex — try shortening it and submitting again." }
```
> Server timeout is `ANALYSIS_TIMEOUT_SECONDS` (default 600s = 10 min) — matches PRD's ~10 min ceiling from Z-03. No change needed here, unlike the upload limits above.

**Pipeline error (500):**
```json
{ "error": "Pipeline failed" }
```

### `POST /api/cancel/<session_id>`

**Request:** no body needed, just the session ID in the URL.

**Success (200):**
```json
{ "status": "cancelled" }
```
Sets `cancel_requested: true` server-side — the pipeline checks this cooperatively at its next
progress checkpoint and stops. **Not instant** — there may be a brief delay between clicking
Cancel and the backend actually halting, depending on which pipeline stage it's in.

**Not found (404):**
```json
{ "error": "Session not found" }
```

**Guarantee after cancel:** no file is retained — the session is marked cancelled, and the temp
directory holding the uploaded file is not referenced again. Frontend should treat cancel as
"return to a fresh Upload screen, nothing retained" per Z-03.

### `GET /api/jutlp-articles` (carousel)

**Request:** optional query param `limit` (default 10, max 12, min 1 — note: main.py's docstring
says default 30, but the service function itself defaults to 10 — worth reconciling).

**Success (200):**
```json
{
  "articles": [
    {
      "title": "The Artificial Intelligence Assessment Scale (AIAS): A Framework for Ethical Integration of Generative AI in Educational Assessment",
      "author": "Mike Perkins, Leon Furze, Jasper Roe, Jason MacVaugh",
      "abstract": "This JUTLP article introduces the AI Assessment Scale as a practical framework for deciding when and how generative AI can be used in educational assessment...",
      "url": "https://open-publishing.org/journals/index.php/jutlp/article/view/810/769"
    }
  ]
}
```

**⚠️ Important — this is a live scraper, not static data.** `get_jutlp_articles()` fetches and
parses real pages from `open-publishing.org` (the JUTLP journal site) on a cache miss, caching
results for 6 hours. If the scrape fails entirely (site down, structure changed, network issue),
it falls back to one hardcoded article (the AIAS one shown above) so the endpoint never errors
out — it always returns at least one article. Worth flagging to the team: this is an external
dependency outside our control, and if `open-publishing.org` changes its page structure, the
scraper could silently degrade to always showing the fallback article without any error surfacing.

Implement carousel as a **toggle flag** (`CAROUSEL_ENABLED`), default ON, with the existing
fallback article as the safety net — per G-03 spec. Pending Joey sign-off (Z-03 note).

---

## Screen 3 — Results

### `GET /api/results/<session_id>` (same endpoint as polling, once done)

**Success (200):**
```json
{
  "total_notes": 12,
  "high_priority": 3,
  "categories": { "Structure": 2, "Front Page": 4, "Style": 5, "References": 1, "Editorial": 0 },
  "issues": [
    { "rule_id": "SEC004", "message": "Missing Methods subsection", "status": "fail", "source": "validator" }
  ],
  "ref_verifications": [ "..." ],
  "language_corrections": [ "..." ],
  "summary": "Issues found: Missing Methods subsection; ... (+2 more)",
  "download_url": "/api/download/d83eff1c-1e94-4638-9c4c-801fa3875112",
  "filename": "manuscript.docx",
  "output_filename": "manuscript_reviewed.docx",
  "llm_available": true,
  "llm_error": null,
  "stage_errors": []
}
```

**Zero-issue run:** `total_notes: 0`, `issues: []` — frontend must still render a success state
("processed successfully, no major issues found" per Z-04), not treat this as an error.

**Paywall fields:** none of the current payload has `free`/`locked` split fields — the
`freeItems`/`lockedItems` split in the old `writer.html` was hardcoded client-side mock data, not
something the backend ever returned. **G-04 to confirm:** frontend should map `issues` by
`status` (`fail` = needs action, `warn` = flagged) rather than expecting a free/locked field —
this naturally fits Z-04's "auto-fixed vs. needs-action" framing without backend changes.

**Clean vs. tracked-changes toggle:** not currently supported — `download_url` returns one file
(the tracked-changes version). A separate "clean" version would require a new endpoint or query
param — **not built this sprint**. G-04 should document this as: tracked-only for now, clean-vs-tracked
toggle deferred.

---

## Screen 4 — Download

### `GET /api/download/<session_id>`

**Success (200):** binary file stream, `Content-Disposition` set for download, filename from
`output_filename`.

**Not found (404):**
```json
{ "error": "Session not found" }
```

**Retry semantics (G-05 — see separate decision doc):** the endpoint is currently **idempotent**
— nothing in the code marks a session as "consumed" after download, so re-calling this endpoint
again with the same `session_id` will succeed again as long as the session/temp file still exist.
**Recommended contract (per G-05):** treat first *successful, byte-complete* transfer as consumed
client-side (`hasDownloaded = true`), keep the file server-side until session TTL expires (24h per
Joey), so a failed/interrupted download can be retried without re-uploading. No backend change
needed to support this — it's a frontend-side bookkeeping decision layered on an already-idempotent
endpoint.

---

## Open items for follow-up tasks

- **G-02:** resolve the 16MB/10k-word (backend) vs. 20MB/15k-word (PRD) mismatch.
- **G-03:** confirm `jutlp-articles` payload shape; implement `CAROUSEL_ENABLED` toggle.
- **G-04:** confirm `issues[].status` → auto-fixed/needs-action mapping is sufficient; document
  that clean-vs-tracked toggle is deferred.
- **G-05:** written retry rule (drafted above) — needs explicit reply to Humaid to unblock H-05.
- **G-06:** none of the failure payloads above currently include `session_id` or `filename`
  consistently across all error cases — needs a pass to guarantee `{ error_code, session_id,
  filename }` shape everywhere, per G-06.