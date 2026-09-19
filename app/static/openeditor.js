import { uploadManuscript, pollUntilDone, cancelJob } from './api.js';

document.addEventListener('alpine:init', () => {
  Alpine.data('openEditorApp', () => ({
    // ─── UPLOAD state ───
    currentPhase: 'upload',
    selectedFile: null,
    isDragOver: false,
    fileError: null,
    sessionId: null,          // NEW — real session id from /api/upload
    uploadError: null,        // NEW — surfaces real backend upload errors

    // ─── PROCESSING state ───
    checkRows: [
      { label: 'File type', done: false, status: 'PENDING' },
      { label: 'File size', done: false, status: 'PENDING' },
      { label: 'Word count', done: false, status: 'WAITING' },
      { label: 'Document readable', done: false, status: 'WAITING' }
    ],
    processingPercent: 0,
    elapsedSeconds: 0,
    elapsedTimer: null,
    pollHandle: null,         // NEW — holds { promise, cancel } from pollUntilDone
    carouselEnabled: true,
    jutlpArticles: [{
      title: 'The Artificial Intelligence Assessment Scale (AIAS): A Framework for Ethical Integration of Generative AI in Educational Assessment',
      author: 'Mike Perkins, Leon Furze, Jasper Roe, Jason MacVaugh',
      abstract: 'This JUTLP article introduces the AI Assessment Scale as a practical framework for deciding when and how generative AI can be used in educational assessment.',
      url: 'https://open-publishing.org/journals/index.php/jutlp/article/view/810/769'
    }],
    jutlpArticleIndex: 0,
    jutlpRotateTimer: null,
    showCancelConfirm: false,

    // ─── RESULTS state (still simulated — out of scope for this week) ───
    totalCorrections: 34,
    freeItems: [
      { label: 'Heading hierarchy', status: '12 FIXED' },
      { label: 'Line spacing and margins', status: '9 FIXED' },
      { label: 'In-text citation format', status: '8 FIXED' },
      { label: 'Title page and running head', status: '5 FIXED' }
    ],
    lockedItems: [
      { label: 'Reference list validated', status: '6 FLAGGED' },
      { label: 'DOIs checked against Crossref', status: 'LOCKED' },
      { label: 'Broken references reported', status: 'LOCKED' }
    ],
    hasDownloaded: false,
    resultsPayload: null,     // NEW — will hold the real results once wired up

    get fileSizeLabel() {
      if (!this.selectedFile) return '';
      const mb = this.selectedFile.size / (1024 * 1024);
      return mb.toFixed(1) + ' MB';
    },

    init() {
      window.onbeforeunload = () => {
        if ((this.currentPhase === 'results' || this.currentPhase === 'upgrade' || this.currentPhase === 'download') && !this.hasDownloaded) {
          return 'You have a completed report you have not downloaded yet.';
        }
      };
    },

    onFileSelected(event) {
      this.applyFile(event.target.files[0]);
    },

    onFileDropped(event) {
      const file = event.dataTransfer.files[0];
      this.applyFile(file);
      const input = document.getElementById('file-input');
      if (input && event.dataTransfer.files.length) {
        input.files = event.dataTransfer.files;
      }
    },

    applyFile(file) {
      if (!file) return;
      const validExtensions = ['.docx', '.rtf'];
      const fileName = file.name.toLowerCase();
      const isValid = validExtensions.some(ext => fileName.endsWith(ext));
      if (!isValid) {
        this.fileError = 'This file type is not supported. Please upload a Microsoft Word document (.docx).';
        this.selectedFile = null;
        return;
      }
      this.fileError = null;
      this.selectedFile = file;
    },

    removeFile() {
      this.selectedFile = null;
      const input = document.getElementById('file-input');
      if (input) input.value = '';
    },

    get canSubmit() {
      return !!this.selectedFile && !this.fileError;
    },

    get elapsedFormatted() {
      const m = Math.floor(this.elapsedSeconds / 60);
      const s = this.elapsedSeconds % 60;
      return `${m}:${s.toString().padStart(2, '0')}`;
    },

    stepNumber() {
      if (this.currentPhase === 'upload' || this.currentPhase === 'checking') return 1;
      if (this.currentPhase === 'processing' || this.currentPhase === 'cancelled' || this.currentPhase === 'timeout') return 2;
      if (this.currentPhase === 'results' || this.currentPhase === 'upgrade') return 3;
      return 4;
    },

    // ─── REAL upload + processing (replaces the old simulated flow) ───

    async startChecking() {
      if (!this.canSubmit) return;
      this.currentPhase = 'checking';
      this.uploadError = null;

      // "Checking" stays a quick client-side visual step (per G-01: checking
      // is not a separate endpoint) — then we actually hit the real API.
      this.checkRows = [
        { label: 'File type', done: true, status: '.DOCX' },
        { label: 'File size', done: true, status: this.fileSizeLabel },
        { label: 'Word count', done: false, status: 'UPLOADING...' },
        { label: 'Document readable', done: false, status: 'WAITING' }
      ];

      try {
        const { session_id } = await uploadManuscript(this.selectedFile);
        this.sessionId = session_id;
        this.checkRows[2].done = true;
        this.checkRows[2].status = 'SUBMITTED';
        this.checkRows[3].done = true;
        this.checkRows[3].status = 'PROCESSING';
        this.startProcessing();
      } catch (err) {
        // Real backend rejected the upload — surface it and go back to upload.
        this.uploadError = err.message || 'Upload failed. Please try again.';
        this.fileError = this.uploadError;
        this.currentPhase = 'upload';
      }
    },

    startProcessing() {
      this.currentPhase = 'processing';
      this.processingPercent = 0;
      this.elapsedSeconds = 0;

      // Real elapsed-time display, ticking independently of the poll interval.
      this.elapsedTimer = setInterval(() => {
        this.elapsedSeconds++;
      }, 1000);

      this.pollHandle = pollUntilDone(
        this.sessionId,
        (payload, step) => {
          // Real progress from the backend's 202 responses.
          this.processingPercent = payload.progress ?? this.processingPercent;
        }
      );

      this.pollHandle.promise
        .then((resultsPayload) => {
          clearInterval(this.elapsedTimer);
          this.stopJutlpRotation();
          this.resultsPayload = resultsPayload;
          this.currentPhase = 'results';
        })
        .catch((err) => {
          clearInterval(this.elapsedTimer);
          this.stopJutlpRotation();
          if (err.errorCode === 'CANCELLED') {
            this.currentPhase = 'cancelled';
          } else if (err.errorCode === 'TIMEOUT') {
            this.currentPhase = 'timeout';
          } else {
            // Pipeline error / session not found — no dedicated screen yet,
            // fall back to timeout screen's messaging for now. Worth a real
            // "error" phase in a future task.
            console.error('Processing failed:', err);
            this.currentPhase = 'timeout';
          }
        });

      this.fetchJutlpArticles().then(() => this.startJutlpRotation());
    },

    requestCancel() {
      this.showCancelConfirm = true;
    },

    async confirmCancel() {
      this.showCancelConfirm = false;
      if (this.pollHandle) this.pollHandle.cancel(); // stop polling immediately client-side
      if (this.sessionId) {
        try {
          await cancelJob(this.sessionId); // tell the backend to actually stop
        } catch (err) {
          console.warn('Cancel request failed:', err);
          // Not much the user can do about this — the poll is already
          // stopped client-side, so we proceed with the cancelled UI state
          // regardless, per the Z-03 guarantee.
        }
      }
      if (this.elapsedTimer) clearInterval(this.elapsedTimer);
      this.stopJutlpRotation();
      this.selectedFile = null;
      const input = document.getElementById('file-input');
      if (input) input.value = '';
      this.currentPhase = 'cancelled';
    },

    keepProcessing() {
      this.showCancelConfirm = false;
    },

    resetToUpload() {
      if (this.pollHandle) this.pollHandle.cancel();
      if (this.elapsedTimer) clearInterval(this.elapsedTimer);
      this.selectedFile = null;
      this.hasDownloaded = false;
      this.sessionId = null;
      this.currentPhase = 'upload';
      const input = document.getElementById('file-input');
      if (input) input.value = '';
    },

    goToUpgrade() {
      this.currentPhase = 'upgrade';
    },
    payAndDownload() {
      // No real payment — just advances state. Still simulated; out of scope this week.
      this.currentPhase = 'download';
    },

    downloadManuscript() {
      // Still simulated — out of scope this week (results/download wiring is next).
      this.hasDownloaded = true;
    },

    get currentArticle() {
      return this.jutlpArticles[this.jutlpArticleIndex];
    },

    async fetchJutlpArticles() {
      try {
        const res = await fetch('/api/jutlp-articles');
        if (!res.ok) throw new Error('Article feed unavailable');
        const data = await res.json();
        if (Array.isArray(data.articles) && data.articles.length) {
          this.jutlpArticles = data.articles;
          this.jutlpArticleIndex = 0;
        }
      } catch (e) {
        console.warn('JUTLP article feed unavailable:', e);
      }
    },

    nextJutlpArticle() {
      if (this.jutlpArticles.length <= 1) return;
      let nextIndex = Math.floor(Math.random() * this.jutlpArticles.length);
      if (nextIndex === this.jutlpArticleIndex) {
        nextIndex = (nextIndex + 1) % this.jutlpArticles.length;
      }
      this.jutlpArticleIndex = nextIndex;
    },

    startJutlpRotation() {
      this.stopJutlpRotation();
      if (this.jutlpArticles.length > 1) {
        this.jutlpRotateTimer = setInterval(() => this.nextJutlpArticle(), 150000);
      }
    },

    stopJutlpRotation() {
      if (this.jutlpRotateTimer) {
        clearInterval(this.jutlpRotateTimer);
        this.jutlpRotateTimer = null;
      }
    },

    retryProcessing() {
      // Retry needs a fresh upload — the old session's file is gone per the
      // timeout contract, so send them back to Upload rather than pretending
      // to reprocess the same (deleted) file.
      this.resetToUpload();
    },
  }));
});