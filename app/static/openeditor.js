document.addEventListener('alpine:init', () => {
  Alpine.data('openEditorApp', () => ({
    // ─── UPLOAD state ───
    currentPhase: 'upload',
    selectedFile: null,
    isDragOver: false,
    fileError: null,

    // ─── PROCESSING state (checking is a sub-state — see TODO) ───
    checkRows: [
      { label: 'File type', done: false, status: 'PENDING' },
      { label: 'File size', done: false, status: 'PENDING' },
      { label: 'Word count', done: false, status: 'WAITING' },
      { label: 'Document readable', done: false, status: 'WAITING' }
    ],
    processingPercent: 0,
    elapsedSeconds: 0,
    processingTimer: null,
    elapsedTimer: null,

    // ─── RESULTS state ───
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
        this.fileError = 'This file type is not supported. Please upload a Microsoft Word document (.docx).'
        this.selectedFile = null;
        return;
      }
      this.fileError=null;
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
      if (this.currentPhase === 'upload'|| this.currentPhase === 'checking') return 1;
      if (this.currentPhase === 'processing') return 2;
      if (this.currentPhase === 'results' || this.currentPhase === 'upgrade') return 3;
      return 4;
    },

    startChecking() {
      if (!this.canSubmit) return;
      this.currentPhase = 'checking';
      this.runChecklist();
    },

    runChecklist() {
      // Hardcoded rows + fixed delays — no real validation happening here.
      this.checkRows = [
        { label: 'File type', done: false, status: '.DOCX' },
        { label: 'File size', done: false, status: '4.2 MB OF 20 MB' },
        { label: 'Word count', done: false, status: 'COUNTING...' },
        { label: 'Document readable', done: false, status: 'WAITING' }
      ];

      const delays = [500, 1100, 1700, 2300];
      delays.forEach((delay, i) => {
        setTimeout(() => {
          this.checkRows[i].done = true;
          if (this.checkRows[i].label === 'Word count') this.checkRows[i].status = 'COUNTED';
          if (this.checkRows[i].label === 'Document readable') this.checkRows[i].status = 'READABLE';
          if (i === this.checkRows.length - 1) {
            setTimeout(() => this.startProcessing(), 400);
          }
        }, delay);
      });
    },

    startProcessing() {
      this.currentPhase = 'processing';
      this.processingPercent = 0;
      this.elapsedSeconds = 0;

      const totalDurationMs = 5000; // fixed simulated duration — "Stops at 5:00"
      const stepMs = 100;
      let elapsedMs = 0;

      this.processingTimer = setInterval(() => {
        elapsedMs += stepMs;
        this.processingPercent = Math.min(100, (elapsedMs / totalDurationMs) * 100);
        if (elapsedMs >= totalDurationMs) {
          clearInterval(this.processingTimer);
          clearInterval(this.elapsedTimer);
          this.currentPhase = 'results';
        }
      }, stepMs);

      this.elapsedTimer = setInterval(() => {
        this.elapsedSeconds++;
      }, 1000);
    },

    cancelProcessing() {
      clearInterval(this.processingTimer);
      clearInterval(this.elapsedTimer);
      this.resetToUpload();
    },

    resetToUpload() {
      clearInterval(this.processingTimer);
      clearInterval(this.elapsedTimer);
      this.selectedFile = null;
      this.hasDownloaded = false;
      this.currentPhase = 'upload';
      const input = document.getElementById('file-input');
      if (input) input.value = '';
    },
    goToUpgrade() {
        this.currentPhase = 'upgrade';
    },
    payAndDownload() {
        // No real payment/file returned per spec — just advances state.
        this.currentPhase = 'download';
    },

    downloadManuscript() {
    // No real file returned per spec — just marks as downloaded.
    this.hasDownloaded = true;
    },
  }));
});