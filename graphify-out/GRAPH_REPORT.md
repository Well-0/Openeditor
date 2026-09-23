# Graph Report - Openeditor  (2026-09-24)

## Corpus Check
- 145 files · ~171,896 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 3, .css 2, .example 1)

## Summary
- 2792 nodes · 6756 edges · 107 communities (98 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 93 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- output generation samfix py
- apply acronym corrections
- jutlp validator py
- append body comment
- citation formatting corrections py
- dedupe edits
- get sentence coherence flags
- detect heading level 1
- main py
- jutlp editorial examples py
- document normalisation services py
- apply abbreviation corrections
- reference reconstructor py
- doc analysis pipeline
- already correct
- get front page
- apply heading corrections
- format author query text
- apply caption apa7 comments
- fixture Module
- acronym corrections py
- appendix removal py
- api js
- apply abstract plan
- build word counts
- make comment element
- anchor comment on paragraph
- output generation py
- citationFound Module
- Graphify Knowledge Graph
- feedback gen pipeline py
- apply decimal corrections
- heading zone transition
- script js
- acronym store py
- app services
- build prompts
- apply number word corrections
- find after
- append affiliation before notes
- reference checker py
- table keep together py
- llm client py
- table page breaks py
- jutlp articles py
- keywords generation py
- apply body run format
- canonical jultp template py
- Renumber visible Author Query labels
- find anchor above
- extract references
- cli copybot py
- table n notation comments py
- has comments content type
- body llm edits py
- find quote spans
- patch content types
- anchor comment on paragraph
- test acronym api py
- grammar corrections py
- Run LLM based editorial review
- check abstract
- build front page asset check
- reference type checker py
- editorial review comments py
- output filename py
- author affiliation marker count
- check text dois
- number word corrections py
- timestamps py
- editorial feedback py
- canonical insert index
- check duplicate references
- iter paren citations
- apply table section boundary comments
- apply tracked style change
- decimal corrections py
- make textbox wrap around text
- extract body citation keys
- build summary
- Return one summary entry per
- add document summary comment
- ack contains
- is deidentified manuscript
- Return True when canonical label
- ensure normal style body rpr
- fingerprint ref
- Discussion section that is present
- is main section heading
- extract ref author part
- Return every normalised surname key
- docx enum style
- inspect abstract py
- test intro page break py
- rules Module
- ProcessingCancelled Module
- check entry year
- graphify js
- build user prompt
- extract field
- setup sh
- opencode json
- app init py
- copybot Module

## God Nodes (most connected - your core abstractions)
1. `load_paragraphs()` - 90 edges
2. `build_edited_document()` - 53 edges
3. `validate()` - 51 edges
4. `doc_analysis_pipeline()` - 41 edges
5. `apply_acronym_corrections()` - 41 edges
6. `generate_commented_docx()` - 41 edges
7. `ParagraphRecord` - 37 edges
8. `documentBodyFormatCheck()` - 36 edges
9. `iter_paragraphs_with_zone()` - 29 edges
10. `apply_number_word_corrections()` - 29 edges

## Surprising Connections (you probably didn't know these)
- `Results Status Mapping` --semantically_similar_to--> `Four-Stage Manuscript Workflow`  [INFERRED] [semantically similar]
  docs/api-contract.md → app/templates/writer.html
- `Client-Side Manuscript Validation` --semantically_similar_to--> `Upload Limit Mismatch`  [INFERRED] [semantically similar]
  app/templates/writer.html → docs/api-contract.md
- `test_strip_leading_number_variants()` --calls--> `strip_leading_section_number()`  [EXTRACTED]
  tests/test_heading_corrections.py → app/domain/canonical_jultp_template.py
- `TestEditorialReviewService` --uses--> `EditorialNote`  [INFERRED]
  tests/test_editorial_review_service.py → app/domain/editorial_feedback.py
- `TestEditorialReviewService` --uses--> `EditorialReviewResult`  [INFERRED]
  tests/test_editorial_review_service.py → app/domain/editorial_feedback.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Manuscript Review Pipeline** — readme_open_editor_bot, readme_jutlp_manuscript_review, readme_openai_editorial_review, readme_flask_document_processing_pipeline [EXTRACTED 1.00]
- **Canonical API Screen Flow** — app_templates_writer_four_stage_manuscript_workflow, docs_api_contract_processing_state_machine, docs_api_contract_results_status_mapping, docs_api_contract_idempotent_download [EXTRACTED 1.00]
- **Deterministic Validation Stack** — jutlp_validator_checklist_deterministic_jutlp_validation, jutlp_validator_checklist_paragraph_row_model, jutlp_validator_checklist_required_section_checks, jutlp_validator_checklist_front_page_checks, jutlp_validator_checklist_rule_report_format [EXTRACTED 1.00]

## Communities (107 total, 9 thin omitted)

### Community 0 - "output generation samfix py"
Cohesion: 0.04
Nodes (81): _append_author_query_runs(), _author_query_parts(), _body_alignment_ok(), _body_font_ok(), _body_indent_ok(), _body_line_spacing_ok(), _body_spacing_ok(), _build_affiliation_mismatch_message() (+73 more)

### Community 1 - "apply acronym corrections"
Cohesion: 0.05
Nodes (78): apply_acronym_corrections(), _matches_definition(), Run the full acronym pass against ``input_path``, writing to ``output_path``.…, Attempt to align ``letters`` against the leading section of ``words``. Walks…, If `words` contain a valid full form for `acro`, return the phrase. Walks the…, _try_match_definition(), _build_docx(), _build_docx_with_inserted_run() (+70 more)

### Community 2 - "jutlp validator py"
Cohesion: 0.06
Nodes (62): build_report(), check_abstract_single_paragraph(), check_block_quote_style(), check_body_paragraph_styles(), check_combined_results_discussion(), check_conclusion_length(), check_discussion_subsections(), check_dot_points() (+54 more)

### Community 3 - "append body comment"
Cohesion: 0.07
Nodes (66): _append_body_comment(), _apply_citation_plan(), _apply_document_body_plan(), _apply_editorial_review_comment_plan(), _apply_front_page_asset_plan(), _apply_heading_1_text_normalization(), _apply_heading_2_title_case(), _apply_intro_page_break() (+58 more)

### Community 4 - "citation formatting corrections py"
Cohesion: 0.06
Nodes (56): apply_citation_formatting_corrections(), _apply_corrections_to_para(), _Element, Insert missing space after p. / pp. in in-text page references. APA style…, Add a space after p./pp. before page numbers as tracked changes. Returns…, _apply_corrections_to_para(), apply_et_al_corrections(), _corrected_bracket() (+48 more)

### Community 5 - "dedupe edits"
Cohesion: 0.06
Nodes (53): _dedupe_edits(), _propagate_repeated_edits(), Apply accepted exact edits to repeated matching body text. The LLM reviews each…, _validate_edit(), _apply_body_and_reference_style_fixes(), _apply_body_edit_plan(), _apply_intra_paragraph_tracked_replace(), Apply tracked style changes for body and reference paragraphs: - Required body… (+45 more)

### Community 6 - "get sentence coherence flags"
Cohesion: 0.07
Nodes (47): get_sentence_coherence_flags(), _is_usable_reason(), Call the LLM and return a list of ``{original, reason}`` dicts.…, True if ``reason`` is a real explanation, not a degenerate verdict. Guards…, io, pytest, _make_doc(), parametrize (+39 more)

### Community 7 - "detect heading level 1"
Cohesion: 0.07
Nodes (51): detect_heading_level_1(), extract_main_sections(), extract_subsections(), load_paragraphs(), Scan a .docx file and return its Heading 1 section text and positions., _front_page_paragraphs_for_deid(), Read up to the first ~15 front-page paragraphs of ``docxpath``. Used by the…, docx (+43 more)

### Community 8 - "main py"
Cohesion: 0.06
Nodes (51): _acronym_admin_active(), _acronym_admin_authed(), acronyms_admin_login(), acronyms_admin_logout(), acronyms_admin_page(), add_acronym_api(), analyse_cli(), _body_edit_items() (+43 more)

### Community 9 - "jutlp editorial examples py"
Cohesion: 0.08
Nodes (46): Few-shot editorial examples extracted from real JUTLP editor decisions. These…, JUTLP editorial guidelines extracted from 'JUTLP Template 2026.docx'. Last…, ParagraphRecord, _build_system_prompt(), _build_user_prompt(), _canonical_section_for(), _extract_front_page_content(), _find_sections_by_text() (+38 more)

### Community 10 - "document normalisation services py"
Cohesion: 0.09
Nodes (46): _accept_tracked_changes(), _ancestor_paragraph_index(), _delete_guidance_paragraphs(), _is_paragraph_blank(), NormalisationReport, normalise_docx(), _Element, Path (+38 more)

### Community 11 - "apply abbreviation corrections"
Cohesion: 0.08
Nodes (49): apply_abbreviation_corrections(), _find_first_match(), _iter_text_runs(), _overlaps_quote(), _process_paragraph(), _Element, Return the earliest rule-match in ``text`` as ``(start, end, replacement,…, Apply every matching rule in ``para_el``, returning updated ``next_change_id``.… (+41 more)

### Community 12 - "reference reconstructor py"
Cohesion: 0.09
Nodes (46): build_apa7_from_crossref(), _build_book(), _build_book_chapter(), _build_dataset(), _build_dissertation(), _build_edited_book(), _build_journal_article(), _build_preprint() (+38 more)

### Community 13 - "doc analysis pipeline"
Cohesion: 0.07
Nodes (41): doc_analysis_pipeline(), _has_reference_issue_summary_comment(), _hyperlink_plain_urls_in_refs(), _inject_crossref_doi_links(), _insert_suspicious_ref_comments(), _max_revision_id(), _normalise(), _patch_settings_show_markup() (+33 more)

### Community 14 - "already correct"
Cohesion: 0.07
Nodes (45): _already_correct(), apply_reference_indent_corrections(), _is_heading(), _resolved_name(), _build_style_hanging_map(), _resolve(), _build_style_name_map(), _Element (+37 more)

### Community 15 - "get front page"
Cohesion: 0.07
Nodes (39): get_front_page(), abstractFormatCheck(), abstractFound(), _apply_missing_practitioner_stub(), authorFound(), build_author_check_plan(), _build_front_page_affiliations_dump(), _build_missing_abstract_components_message() (+31 more)

### Community 16 - "apply heading corrections"
Cohesion: 0.08
Nodes (41): apply_heading_corrections(), _apply_tracked_edit(), _build_style_level_map(), _corrected_heading(), _direct_text_runs(), _heading_level(), _level_from_name(), _norm() (+33 more)

### Community 17 - "format author query text"
Cohesion: 0.09
Nodes (28): _format_author_query_text(), generate_commented_docx(), Generate a reviewed `.docx` with inline comments and a validation summary page., Return the canonical section a fail-rule belongs to, or None. SEC001-008 map…, _section_for_rule(), count_comments_in_docx(), get_comment_anchor_texts(), fixture (+20 more)

### Community 18 - "apply caption apa7 comments"
Cohesion: 0.11
Nodes (36): apply_caption_apa7_comments(), Emit one APA 7 caption-split comment per offending paragraph. Returns…, Document, Path, read_docx(), apply_narrative_citation_corrections(), Apply tracked "&" -> "and" fixes for APA narrative citations., hashlib (+28 more)

### Community 19 - "fixture Module"
Cohesion: 0.07
Nodes (8): fixture, rules(), TestDeidentifiedWithAuthorLeak, TestFrontPageIssues, TestMissingMethodSubsection, TestStructureAndEndmatterIssues, TestValidDeidentified, TestValidIdentified

### Community 20 - "acronym corrections py"
Cohesion: 0.09
Nodes (38): _append_author_query_runs(), _apply_mutations(), _author_query_parts(), _bracketed_spans(), _build_bullet(), _build_replacement(), _build_zone_map(), _collect_inline_definitions() (+30 more)

### Community 21 - "appendix removal py"
Cohesion: 0.09
Nodes (35): Flag content that appears AFTER the reference list (appendices). JUTLP house…, _iter_text_runs(), _needs_apa7_split(), _Element, Flag figure/table captions that aren't split into APA 7 paragraphs. APA 7…, Yield (run_el, text) for runs we may safely anchor a comment on., Return True when the paragraph holds a full single-paragraph figure/table…, get_style_name() (+27 more)

### Community 22 - "api js"
Cohesion: 0.09
Nodes (26): cancelJob(), CAROUSEL_ENABLED, downloadUrl(), fetchCarouselArticles(), _mapUploadErrorCode(), pollResults(), pollUntilDone(), STAGE_TO_STEP (+18 more)

### Community 23 - "apply abstract plan"
Cohesion: 0.07
Nodes (32): _apply_abstract_plan(), _flush(), _apply_heading_center_alignment(), _apply_heading_keep_next(), _apply_inline_keywords_split(), _apply_missing_keywords_stub(), _apply_tracked_style_fixes(), _direct_space_after_is_zero() (+24 more)

### Community 24 - "build word counts"
Cohesion: 0.10
Nodes (37): _build_word_counts(), _classify_word(), _freq_ratio(), get_spell_corrections(), _levenshtein(), Return ``(verdict, candidate)`` for a single suspect word. Verdict is one of: *…, Cheap Levenshtein implementation — we only ever compare short words so the…, Ratio of dictionary frequency between candidate and source word. Both… (+29 more)

### Community 25 - "make comment element"
Cohesion: 0.09
Nodes (33): _make_comment_element(), _patch_rels(), Replace the run with (before | comment-anchored content | after). When…, _split_run_for_action(), _anchor_paragraph_comment(), _build_comment(), _classify(), _distinct() (+25 more)

### Community 26 - "anchor comment on paragraph"
Cohesion: 0.12
Nodes (36): _anchor_comment_on_paragraph(), apply_appendix_removal(), _find_appendix_start(), _is_appendix_heading(), _is_heading_paragraph(), _paragraph_has_image(), _passthrough(), _Element (+28 more)

### Community 27 - "output generation py"
Cohesion: 0.08
Nodes (36): _append_author_query_runs(), _append_validation_summary(), _author_query_parts(), _build_comment_ref_run(), _comment_group_key(), _dedupe_pending_comments(), _find_span(), _format_summary_line() (+28 more)

### Community 28 - "citationFound Module"
Cohesion: 0.07
Nodes (36): citationFound(), _count_abstract_lines(), _count_title_lines(), _extract_keywords_list(), _find_abstract_heading_in_front(), _find_blank_line_after_index(), _find_citation_heading_in_front(), _find_introduction_heading_in_front() (+28 more)

### Community 29 - "Graphify Knowledge Graph"
Cohesion: 0.06
Nodes (36): Graphify Knowledge Graph, OAPA Brand Mark, Acronym Management UI, Editor Admin Authentication, Persistent Acronym Storage, Editorial Results Dashboard, JUTLP Article Carousel, Manuscript Upload Workflow (+28 more)

### Community 30 - "feedback gen pipeline py"
Cohesion: 0.10
Nodes (25): Deterministic abbreviation / journal-style fixes emitted as tracked changes.…, apply_normal_style_corrections(), Reset the Normal paragraph style to JUTLP template requirements. If an author's…, Patch the Normal style in styles.xml to match JUTLP template requirements.…, Flag a reference list that is not in alphabetical order. APA 7 (which JUTLP…, concurrent_futures, lxml, re (+17 more)

### Community 31 - "apply decimal corrections"
Cohesion: 0.11
Nodes (28): apply_decimal_corrections(), Run both decimal checks over ``input_path`` and write to ``output_path``.…, _build_docx(), _Element, Path, Tests for the decimal-precision and comma-as-decimal checks., The classic example: thousand separators and comma-decimals together., The example from the client's brief, end-to-end. (+20 more)

### Community 32 - "heading zone transition"
Cohesion: 0.10
Nodes (31): heading_zone_transition(), initial_zone(), iter_paragraphs_with_zone(), normalise_heading(), Lower-case, strip numeric prefix and trailing colon-suffix., Return the new zone given a heading paragraph's style and text. A real Heading…, Determine the starting zone for the very first paragraph. If the document has…, Yield ``(para_el, zone)`` for every ``w:p`` in document order. Convenience for… (+23 more)

### Community 33 - "script js"
Cohesion: 0.10
Nodes (28): _activateStep(), _clearPollDelay(), clearUploadError(), displayFile(), fetchJutlpArticles(), finishStepAnimation(), groupItems(), JUTLP_FALLBACK_ARTICLE (+20 more)

### Community 34 - "acronym store py"
Cohesion: 0.10
Nodes (31): add_acronym(), _ensure_file_exists(), load_acronyms(), _load_seed(), Path, Persistent store for the editor-managed acronym allow-list. The list lives as a…, Restore the on-disk store to the bundled seed. Used by tests., Return the bundled seed JSON as a fresh dict. (+23 more)

### Community 35 - "app services"
Cohesion: 0.11
Nodes (28): app_services, _fix_au_spellings(), get_grammar_corrections(), _has_au_us_suffix_swap(), _is_au_to_us_replacement(), _is_proper_noun_correction(), Return True if original looks like a proper noun, surname, acronym, or tech…, Return True if the correction would flip Australian English to American English. (+20 more)

### Community 36 - "build prompts"
Cohesion: 0.17
Nodes (11): build_prompts(), Build (system_prompt, user_prompt) from parsed document data., _make_paragraphs(), _make_parsed_structure(), Build a minimal set of ParagraphRecord objects for testing., The prompt instructs the LLM to use specific severity labels. Originally…, Regression: sections headed by an ALIAS ("Methodology", "Findings", "Literature…, A titled heading ("Introduction: Background") maps to its canonical section so… (+3 more)

### Community 37 - "apply number word corrections"
Cohesion: 0.16
Nodes (30): apply_number_word_corrections(), Scan body paragraphs and emit tracked-change replacements for digits 0-9.…, _build_docx_with_paragraph(), _count_changes(), Path, Tests for digit-to-word tracked-change corrections. These tests build minimal…, A digit INSIDE quoted text retains the source's form., Unquoted digit in a paragraph that also has a quoted digit must still be… (+22 more)

### Community 38 - "find after"
Cohesion: 0.11
Nodes (31): _find_after(), _find_first_heading(), _find_first_non_empty_para(), _find_front_matter_anchor(), _find_front_matter_rule_anchor(), _find_front_style(), _find_front_text(), _find_heading() (+23 more)

### Community 39 - "append affiliation before notes"
Cohesion: 0.10
Nodes (31): _append_affiliation_before_notes(), _append_plain_text_run(), _append_plain_text_run_with_size(), _append_text_with_line_breaks(), _append_text_with_superscript_markers(), _append_tracked_replace(), _apply_author_plan(), _apply_style_if_needed() (+23 more)

### Community 40 - "reference checker py"
Cohesion: 0.10
Nodes (27): _cache_get(), _cache_set(), check_submitted_hyperlinks(), _cr_item_summary(), _extract_ref_hyperlinks(), _get_apa_via_content_negotiation(), _llm_check_reference(), _llm_resolve_mismatch() (+19 more)

### Community 41 - "table keep together py"
Cohesion: 0.15
Nodes (27): _apply_caption_keep_next(), apply_table_keep_together(), _ensure_keep_next(), _ensure_trpr(), _ensure_trpr_child(), _para_style(), _para_text(), _Element (+19 more)

### Community 42 - "llm client py"
Cohesion: 0.16
Nodes (16): call_llm(), call_llm_json(), get_client(), LLMError, Exception, Raised when the LLM call fails after retries., Create an OpenAI client., Send a structured-output request to the OpenAI Chat Completions API. Returns… (+8 more)

### Community 43 - "table page breaks py"
Cohesion: 0.20
Nodes (26): apply_table_page_breaks(), _cell_text(), _make_page_break_paragraph(), _page_break_anchor(), _para_has_page_break(), _para_style(), _para_text(), _preceded_by_page_break() (+18 more)

### Community 44 - "jutlp articles py"
Cohesion: 0.17
Nodes (26): _abstract_candidates(), _article_details_url(), _clean_abstract_candidate(), _clean_text(), _extract_abstract(), _extract_article_urls(), _extract_author(), _extract_title() (+18 more)

### Community 45 - "keywords generation py"
Cohesion: 0.14
Nodes (24): _build_user_prompt(), _clean_one(), _dedupe_case_insensitive(), generate_keywords(), _is_acceptable(), LLM-driven keyword generation for manuscripts missing a Keywords section.…, Strip surrounding whitespace and quotes; collapse internal whitespace., Return up to ``_MAX_KEYWORDS`` keyword candidates for the manuscript. Best-… (+16 more)

### Community 46 - "apply body run format"
Cohesion: 0.12
Nodes (27): _apply_body_run_format(), _apply_table_caption_formatting(), _apply_tracked_body_format_fixes(), _apply_tracked_body_paragraph_format(), _apply_tracked_body_run_format(), _apply_tracked_table_cell_borders(), _apply_tracked_table_formatting(), _apply_tracked_table_properties() (+19 more)

### Community 47 - "canonical jultp template py"
Cohesion: 0.14
Nodes (24): _build_section_rename_map(), _merges_two_sections(), _normalise_subsection(), Remove a leading heading number from ``text`` (e.g. "2. Literature" ->…, Lower-case, collapse whitespace, strip a leading heading number and any…, Return the canonical main section a heading fragment names, or None. Matches…, True when ``alias`` merges two *distinct* canonical sections (e.g. "Results and…, ``normalised alias -> canonical label`` for safe heading renames. Built from… (+16 more)

### Community 48 - "Renumber visible Author Query labels"
Cohesion: 0.17
Nodes (24): Renumber visible Author Query labels after every comment pass has run., _renumber_final_author_queries(), apply_au_spelling_corrections(), Scan every eligible paragraph and apply AU spelling tracked changes. Returns…, _comment_ids_in_document_order(), _renumber_author_queries_by_anchor_order(), _accepted_visible_text(), _assert_no_visible_timestamp() (+16 more)

### Community 49 - "find anchor above"
Cohesion: 0.09
Nodes (22): _find_anchor_above(), _find_content_authors(), _fix_au_spellings_in_text(), _is_title_case_title(), _normalised_label_text(), Apply AU_CORRECTIONS to any US spellings found in text, preserving…, Return ``text`` rewritten in academic title case. Rules applied (APA 7 /…, titleFound() (+14 more)

### Community 50 - "extract references"
Cohesion: 0.15
Nodes (13): extract_references(), _is_appendix_heading(), Return ``(start_index, end_index)`` bounding the References section. ``start``…, _references_window(), _build_docx_with_sections(), parametrize, A paper with reference-styled paragraphs but NO References heading still has…, Build a docx from a list of (kind, text) blocks. kind: "h1" → Heading 1, "ref"… (+5 more)

### Community 51 - "cli copybot py"
Cohesion: 0.18
Nodes (20): _heading_level_1_sections(), _is_generic_copyedit_output(), main(), _print_heading_normalization_summary(), Path, _rename_generic_copyedit_output(), _show_heading_level_1_sections(), _status() (+12 more)

### Community 52 - "table n notation comments py"
Cohesion: 0.15
Nodes (21): apply_table_n_notation_comments(), _is_capital_n_header(), _iter_text_runs(), _Element, Flag capital "N" used as a table column header. In statistical reporting the…, Yield (run_el, text) for runs we may safely anchor a comment on., True when the paragraph is a table cell whose only content is "N"., Emit one comment per table column header that is a bare capital "N". Returns… (+13 more)

### Community 53 - "has comments content type"
Cohesion: 0.10
Nodes (8): has_comments_content_type(), has_comments_relationship(), Return ordered list of (text, has_ins, [commentRangeStart ids]) for every…, The combined 'Results and Discussion' fixture has no standalone Discussion…, SEC005 + DIS001-003 comments anchor inside the inserted Discussion stub, NOT on…, The inserted Discussion stub sits after Results and before References in…, TestFiveFailuresFiveComments, TestOneFailureOneComment

### Community 54 - "body llm edits py"
Cohesion: 0.13
Nodes (19): _body_paragraphs(), build_body_edit_plan(), _fix_au_spellings(), _is_skippable_paragraph(), _llm_edits_for_paragraph(), LLM-generated surgical copy-edits for the document body. Produces tracked-…, Return the symmetric token difference between ``find`` and ``replace``. Tokens…, Replace any US spellings in text with AU equivalents. (+11 more)

### Community 55 - "find quote spans"
Cohesion: 0.15
Nodes (8): find_quote_spans(), is_in_quote(), Return True when the half-open range ``[start, end)`` overlaps any quotation…, Return a list of ``(start, end)`` half-open intervals locating every paired-…, Tests for the inline-quotation detection helper. The helper underpins JUTLP's…, Single quote marks are ambiguous (apostrophes!) so the helper deliberately…, TestFindQuoteSpans, TestIsInQuote

### Community 56 - "patch content types"
Cohesion: 0.19
Nodes (19): _patch_content_types(), apply_short_paragraph_comments(), _first_token_span(), _iter_text_runs(), _paragraph_text(), _Element, Flag short prose paragraphs (<3 sentences) with Word comments. This pass emits…, Yield editable visible text runs from ``para_el``. Runs inside tracked-change… (+11 more)

### Community 57 - "anchor comment on paragraph"
Cohesion: 0.17
Nodes (20): _anchor_comment_on_paragraph(), apply_reference_order_comments(), _build_comment(), _find_references_heading(), _first_inversion(), _passthrough(), _Element, Comment on a reference list that is not alphabetically ordered. Comment-only —… (+12 more)

### Community 58 - "test acronym api py"
Cohesion: 0.10
Nodes (8): client(), gated_client(), fixture, Smoke tests for the acronym admin HTTP endpoints. Skipped when Flask isn't…, Read-only access stays open so the pipeline can still load the list., Boot the Flask app with auth disabled and the store pointed at tmp., Boot the app with the editor-password gate enabled., test_gated_get_still_open_when_not_authed()

### Community 59 - "grammar corrections py"
Cohesion: 0.15
Nodes (17): _anchor_visible_span(), apply_contingent_grammar_comments(), apply_grammar_corrections(), _apply_phrase_correction(), _contingent_sva_comment(), _find_phrase_in_runs(), _Element, Grammar corrections as Word tracked changes using LLM. The LLM returns a list… (+9 more)

### Community 60 - "Run LLM based editorial review"
Cohesion: 0.20
Nodes (9): Run LLM-based editorial review on a JUTLP manuscript. Pipeline: 1. Parse DOCX…, run_editorial_review(), _strip_internal_markers(), main(), Demo script for JUTLP Copy-Editor AI — LLM Editorial Review. Usage: python…, patch, The LLM occasionally quotes our '[Subheading]' or '###' markers verbatim in its…, TestEditorialReviewService (+1 more)

### Community 61 - "check abstract"
Cohesion: 0.20
Nodes (17): check_abstract(), _fp008(), _long_abstract_doc(), _parsed(), Tests for the JUTLP abstract length rule: the abstract must fit lines 7–23 of…, The body (after Introduction) must not be swallowed into the abstract., The length flag must be its OWN comment (not folded into the merge/style…, Regression: an abstract that is NOT styled 'Front Page Text' (authors routinely… (+9 more)

### Community 62 - "build front page asset check"
Cohesion: 0.15
Nodes (19): build_front_page_asset_check_plan(), _collect_relationship_ids(), _element_has_textbox(), _find_heading1_index(), _front_page_body_paras(), _heading_should_be_left_aligned(), _insert_front_page_text_box_from_template(), _looks_like_figure_number() (+11 more)

### Community 63 - "reference type checker py"
Cohesion: 0.19
Nodes (18): _check_book(), _check_book_chapter(), _check_conference(), _check_dataset(), _check_journal(), _check_podcast(), check_reference_type_style(), _check_report() (+10 more)

### Community 64 - "editorial review comments py"
Cohesion: 0.22
Nodes (17): build_editorial_review_comment_plan(), _build_section_anchor_map(), _comment_family(), _format_comment(), _group_similar_comments(), _is_body_prose(), _is_paragraph_length_note(), _is_table_or_figure_text() (+9 more)

### Community 65 - "output filename py"
Cohesion: 0.27
Nodes (15): build_output_filename(), build_output_filename_from_author_line(), _first_author_last_name(), _get_author_line_and_markers(), _get_document_year(), _remove_superscript_runs_from_author_line(), _unique_output_filename(), test_corrected_author_line_uses_doc_affiliation_markers() (+7 more)

### Community 66 - "author affiliation marker count"
Cohesion: 0.16
Nodes (17): _author_affiliation_marker_count(), _author_naming_pattern_valid(), authorFormatCheck(), _authors_with_multiple_affiliation_markers(), _build_author_naming_query(), _default_affiliations_text_for_authors(), _default_authors_line_for_markers(), _extract_author_affiliation_markers() (+9 more)

### Community 67 - "check text dois"
Cohesion: 0.23
Nodes (9): check_text_dois(), DOIT: Validate every DOI-shaped substring found in the plain text of each…, _cr_item(), Return a fake ``_lookup_doi`` that resolves DOIs from a dict. ``None`` value…, A reference that quotes the same DOI twice (bare + URL form) should only hit…, _stub_lookup(), TestCheckTextDOIs, _spy() (+1 more)

### Community 68 - "number word corrections py"
Cohesion: 0.17
Nodes (14): _apply_corrections_to_para(), _bracket_spans(), _in_any_span(), _is_sentence_start(), _para_plain_text(), _Element, Spell out whole numbers 0-9 in running prose as tracked changes. Most academic…, Return character spans (start, end) covered by paren/bracket/brace pairs.… (+6 more)

### Community 69 - "timestamps py"
Cohesion: 0.18
Nodes (14): now_sydney_iso(), Shared timestamp helper for Word comments and tracked changes. Word stores the…, Return the current time as an ISO-8601 string with the Sydney offset. Example:…, _sydney_tz(), datetime, Tests for the shared Sydney-time stamp helper. Word comments and tracked…, Sydney is UTC+10 (standard) or UTC+11 (daylight saving). If the tz database is…, Second precision only — keeps the stamp tidy and matches the previous format's… (+6 more)

### Community 70 - "editorial feedback py"
Cohesion: 0.31
Nodes (11): EditorialNote, EditorialReviewResult, LLM verdict on a single deterministic structural check result., StructuralValidation, _length_note(), _plan(), test_non_paragraph_notes_still_fall_back_to_section_heading(), test_paragraph_length_comments_anchor_only_to_body_prose() (+3 more)

### Community 71 - "canonical insert index"
Cohesion: 0.17
Nodes (14): _canonical_insert_index(), _next_h1_after(), _heading_para_index(), _para_style_val(), _para_text(), Return the pStyle val used by existing Heading-1 paragraphs. Documents vary:…, Index within ``all_paras`` of the Heading-1 paragraph that IS ``section``…, Return the index within ``all_paras`` to insert the stub for ``section``. Place… (+6 more)

### Community 72 - "check duplicate references"
Cohesion: 0.20
Nodes (11): check_duplicate_references(), check_entry_author(), check_orphan_citations(), check_reference_citations(), check_references(), check_references_section(), CONS001: Every reference should be cited somewhere in the body text., CONS002: Every in-text citation should appear in the reference list. (+3 more)

### Community 73 - "iter paren citations"
Cohesion: 0.20
Nodes (7): _iter_paren_citations(), Yield ``(surname, year)`` tuples for every parenthetical citation. Handles…, Coverage for the multi-citation parenthesis parser., The reported bug: a four-citation paren block produced ZERO matches because the…, APA disambiguators like ``2020a`` must survive., A `(see ...)` aside without a Surname,Year pair must yield nothing — even…, TestParenCitationIterator

### Community 74 - "apply table section boundary comments"
Cohesion: 0.39
Nodes (14): apply_table_section_boundary_comments(), Comment on sections that open and/or close directly with a table. Returns…, _add_table(), _comment_texts(), _new_doc(), Tests for the table section-boundary (open/close with a table) check., test_no_tables_is_noop(), test_opening_and_closing_different_tables_both_flagged() (+6 more)

### Community 75 - "apply tracked style change"
Cohesion: 0.27
Nodes (13): _apply_tracked_style_change(), Remove direct formatting that would override a heading style. A paragraph that…, _strip_conflicting_direct_format_for_heading(), _body_para(), _ppr(), A body paragraph restyled to a heading must shed its body formatting. When the…, Only size/spacing are stripped — bold stays (headings are bold anyway)., Restyling to the reference style must NOT strip the run size — only heading… (+5 more)

### Community 76 - "decimal corrections py"
Cohesion: 0.24
Nodes (11): _find_next_action(), _get_style_name(), _has_corrected_form_in_tracked_ins(), _iter_text_runs(), _process_paragraph(), _Element, Two journal-style decimal checks emitted as Word comments. 1. **Excess…, Return True if a sibling ``<w:ins>`` already supplies ``comma_value`` with the… (+3 more)

### Community 77 - "make textbox wrap around text"
Cohesion: 0.29
Nodes (12): _make_textbox_wrap_around_text(), Make a front-page floating textbox use *square* text-wrapping so the…, _anchor_para(), _Element, The front-page editorial textbox must wrap text around it, not overlay it. The…, Schema order: the wrap element must precede docPr in the anchor., test_behinddoc_is_cleared(), test_breathing_margins_added() (+4 more)

### Community 78 - "extract body citation keys"
Cohesion: 0.22
Nodes (7): _extract_body_citation_keys(), _extract_body_citations(), _normalise_surname(), Lowercase, strip accents, punctuation, and possessive 's for fuzzy match.…, Return {normalised_surname: readable_label} for all in-text citations in the…, Return set of normalised first-author surnames found in body citations., TestNormaliseSurname

### Community 79 - "build summary"
Cohesion: 0.17
Nodes (9): _build_summary(), _dedup_sam_issues(), _llm_notes_to_results(), Convert Sam's build_edited_document plan into frontend issue dicts., Remove Sam's issues that duplicate existing ones (3+ significant word overlap)., Poll for analysis results. --- tags: - Results parameters: - in: path name:…, results(), _sam_plan_to_issues() (+1 more)

### Community 80 - "Return one summary entry per"
Cohesion: 0.21
Nodes (11): Return one summary entry per repeated spelling correction. The tracked-change…, summarize_spelling_correction_repeats(), _docx_xml(), An unquoted US spelling in the same paragraph as a quoted one must still be…, A US-spelled word INSIDE quoted text must NOT be rewritten — direct quotations…, test_generalizability_is_changed_to_australian_spelling(), test_repeated_spelling_fix_gets_one_author_query_comment(), test_spelling_summary_groups_case_variants_of_same_fix() (+3 more)

### Community 81 - "add document summary comment"
Cohesion: 0.20
Nodes (12): add_document_summary_comment(), add_paragraph_comment(), _make_comment_element(), _patch_content_types(), _patch_rels(), Ensure `document.xml.rels` contains the comments relationship., Ensure `[Content_Types].xml` declares `word/comments.xml`., Attach a single document-level Word comment to the first body paragraph. Used… (+4 more)

### Community 82 - "ack contains"
Cohesion: 0.23
Nodes (12): _ack_contains(), _all_alias_norms(), _collect_acknowledgements_issues(), _collect_discussion_subheading_issues(), _collect_method_subheading_issues(), _collect_results_reference_issues(), _find_next_heading1_index(), _matches_required_subsection() (+4 more)

### Community 83 - "is deidentified manuscript"
Cohesion: 0.23
Nodes (12): _is_deidentified_manuscript(), Return True if the manuscript was deliberately stripped of identity. Three…, _make_deid_state(), Minimal abstract_state stub — the deidentified check only reads docxpath., Plain `[Authors removed for blind review]` placeholder anywhere in the front-…, The placeholder regex covers the 'Affiliations removed' phrasing too., A manuscript that genuinely lacks affiliations (but has authors and no…, test_deidentified_detected_by_affiliations_removed_placeholder() (+4 more)

### Community 84 - "Return True when canonical label"
Cohesion: 0.31
Nodes (4): Return True when ``canonical_label`` is satisfied by ``found_subs``.…, subsection_alias_match(), Direct tests of the alias matcher — no docx fixture needed., TestSubsectionAliasMatch

### Community 85 - "ensure normal style body rpr"
Cohesion: 0.31
Nodes (9): _ensure_normal_style_body_rpr(), _passthrough_copy(), Pin the body font + size on the Normal style's run properties. The template's…, _doc_with_normal(), _normal_rpr(), Tests for body-font enforcement: the Normal style must carry Arial 11pt so…, A docx whose Normal style is a non-template font/size., test_already_correct_normal_style_no_change() (+1 more)

### Community 86 - "fingerprint ref"
Cohesion: 0.22
Nodes (5): _fingerprint_ref(), _normalise_text(), Collapse a reference to a normalised fingerprint for duplicate detection., Replace curly quotes with their straight ASCII equivalents., TestCitationRegexes

### Community 87 - "Discussion section that is present"
Cohesion: 0.27
Nodes (4): A Discussion section that is present but not yet Heading-1 styled (the author…, No tracked-inserted 'Discussion' heading paragraph should exist., The Discussion-subsection comment must anchor on the original (non-inserted)…, TestPresentUnstyledDiscussionNoStub

### Community 88 - "is main section heading"
Cohesion: 0.22
Nodes (9): _is_main_section_heading(), True for a real ``Heading 1`` paragraph OR a non-empty paragraph whose text…, True if ``text`` is exactly a JUTLP main-section name or alias. Matching is…, _text_matches_main_section(), True if a Heading-1 paragraph is the section itself (exact / 'name:' prefix),…, _section_heading_present(), Minimal ParagraphRecord-like stub for heading-presence checks., _rec() (+1 more)

### Community 89 - "extract ref author part"
Cohesion: 0.31
Nodes (5): _extract_ref_author_part(), Return the author/group-author portion of a reference entry. Slices everything…, Return ``(normalised_surname, display_surname)`` for a reference entry, or None…, _sort_key_and_label(), TestExtractRefAuthorPart

### Community 90 - "Return every normalised surname key"
Cohesion: 0.36
Nodes (4): Return every normalised surname-key a reference can plausibly match. For person…, _ref_surname_keys(), Person refs (with a comma) must NOT have an acronym alias generated — otherwise…, TestRefSurnameKeys

### Community 91 - "docx enum style"
Cohesion: 0.32
Nodes (7): docx_enum_style, docx_enum_text, Reference entries must be justified (w:jc=both), not left-aligned. Two layers…, Return the w:jc value of the APA 7 reference style, or None., _ref_style_jc(), test_left_aligned_author_reference_style_is_replaced_with_justified(), test_template_reference_style_is_justified()

### Community 92 - "inspect abstract py"
Cohesion: 0.29
Nodes (5): get_comment_anchors(), get_ref_entries(), Inspect the processed output vs the original to find comment placement issues., Map comment id -> paragraph text snippet where the anchor sits., Return numbered reference entries from the document.

### Community 93 - "test intro page break py"
Cohesion: 0.48
Nodes (6): _doc(), _intro_has_page_break(), Tests for the front-page / body page break before the Introduction., Regression: a numbered "1. Introduction" heading must still get the front-…, test_page_break_inserted_before_numbered_introduction(), test_page_break_inserted_before_plain_introduction()

### Community 95 - "ProcessingCancelled Module"
Cohesion: 0.47
Nodes (6): ProcessingCancelled, ProcessingTimeout, Exception, _run(), _pipeline(), _update_progress()

### Community 97 - "graphify js"
Cohesion: 0.40
Nodes (3): IMPORTANT: keep the reminder string free of backticks and $(...) constructs., ref_fs, ref_path

### Community 98 - "build user prompt"
Cohesion: 0.50
Nodes (4): _build_user_prompt(), Remove parenthetical citations and URLs before sending to LLM., _strip_citations(), _build_user_prompt()

### Community 99 - "extract field"
Cohesion: 0.50
Nodes (4): _extract_field(), _llm_notes_to_results(), Read a field from dict/object safely with a default., Normalize LLM editorial notes into validator-like result dictionaries.

## Knowledge Gaps
- **20 isolated node(s):** `$schema`, `plugin`, `STAGE_TO_STEP`, `PROC_STEPS`, `JUTLP_FALLBACK_ARTICLE` (+15 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 818 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `load_paragraphs()` connect `detect heading level 1` to `output generation samfix py`, `jutlp validator py`, `append body comment`, `get sentence coherence flags`, `main py`, `jutlp editorial examples py`, `get front page`, `apply heading corrections`, `format author query text`, `apply abstract plan`, `build word counts`, `make comment element`, `output generation py`, `citationFound Module`, `app services`, `build prompts`, `reference checker py`, `canonical jultp template py`, `find anchor above`, `extract references`, `body llm edits py`, `grammar corrections py`, `Run LLM based editorial review`, `check abstract`, `editorial review comments py`, `output filename py`, `author affiliation marker count`, `editorial feedback py`, `check duplicate references`, `extract body citation keys`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Why does `doc_analysis_pipeline()` connect `doc analysis pipeline` to `apply acronym corrections`, `jutlp validator py`, `append body comment`, `main py`, `document normalisation services py`, `apply abbreviation corrections`, `already correct`, `apply heading corrections`, `format author query text`, `apply caption apa7 comments`, `make comment element`, `anchor comment on paragraph`, `feedback gen pipeline py`, `apply decimal corrections`, `heading zone transition`, `apply number word corrections`, `table keep together py`, `table page breaks py`, `Renumber visible Author Query labels`, `cli copybot py`, `table n notation comments py`, `patch content types`, `anchor comment on paragraph`, `grammar corrections py`, `Run LLM based editorial review`, `apply table section boundary comments`, `add document summary comment`, `ProcessingCancelled Module`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `apply_acronym_corrections()` connect `apply acronym corrections` to `acronym store py`, `doc analysis pipeline`, `acronym corrections py`, `patch content types`, `make comment element`, `feedback gen pipeline py`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `STAGE_TO_STEP` to the rest of the system?**
  _20 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `output generation samfix py` be split into smaller, more focused modules?**
  _Cohesion score 0.044105854049719326 - nodes in this community are weakly interconnected._
- **Should `apply acronym corrections` be split into smaller, more focused modules?**
  _Cohesion score 0.05063291139240506 - nodes in this community are weakly interconnected._
- **Should `jutlp validator py` be split into smaller, more focused modules?**
  _Cohesion score 0.0635814889336016 - nodes in this community are weakly interconnected._