// =============================================
// BrevetMaster — Main Application Logic
// =============================================

// ===== All Subjects Data =====
const ALL_SUBJECTS = [];

function initSubjects() {
  // Collect all subject data from global variables
  const dataVars = [
    typeof FRANCAIS_DATA !== 'undefined' ? FRANCAIS_DATA : null,
    typeof MATHS_DATA !== 'undefined' ? MATHS_DATA : null,
    typeof HISTOIRE_DATA !== 'undefined' ? HISTOIRE_DATA : null,
    typeof GEOGRAPHIE_DATA !== 'undefined' ? GEOGRAPHIE_DATA : null,
    typeof EMC_DATA !== 'undefined' ? EMC_DATA : null,
    typeof PHYSIQUE_CHIMIE_DATA !== 'undefined' ? PHYSIQUE_CHIMIE_DATA : null,
    typeof SVT_DATA !== 'undefined' ? SVT_DATA : null,
    typeof TECHNOLOGIE_DATA !== 'undefined' ? TECHNOLOGIE_DATA : null,
  ];

  dataVars.forEach(data => {
    if (data) ALL_SUBJECTS.push(data);
  });
}

// ===== Progress Management =====
const STORAGE_KEY = 'brevetmaster_progress';

function getProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
}

function markQuizCompleted(subjectId, chapterId, score, total) {
  const progress = getProgress();
  if (!progress[subjectId]) progress[subjectId] = {};
  progress[subjectId][chapterId] = { score, total, date: Date.now() };
  saveProgress(progress);
  updateGlobalProgressDisplay();
}

function getSubjectProgress(subjectId) {
  const progress = getProgress();
  const subjectProgress = progress[subjectId] || {};
  const subject = ALL_SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return 0;
  const totalChapters = subject.chapters.length;
  const completedChapters = Object.keys(subjectProgress).length;
  return totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
}

function getGlobalProgress() {
  if (ALL_SUBJECTS.length === 0) return 0;
  let totalChapters = 0;
  let completedChapters = 0;
  const progress = getProgress();
  
  ALL_SUBJECTS.forEach(subject => {
    totalChapters += subject.chapters.length;
    const sp = progress[subject.id] || {};
    completedChapters += Object.keys(sp).length;
  });
  
  return totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
}

function updateGlobalProgressDisplay() {
  const pct = getGlobalProgress();
  const globalText = document.getElementById('global-progress-text');
  if (globalText) globalText.textContent = pct + '%';
  
  // Update progress cards if visible
  updateSubjectCardsProgress();
}

function updateSubjectCardsProgress() {
  ALL_SUBJECTS.forEach(subject => {
    const bar = document.querySelector(`[data-subject-progress="${subject.id}"]`);
    if (bar) {
      bar.style.width = getSubjectProgress(subject.id) + '%';
    }
  });
}

// ===== Stats Counter =====
function updateStats() {
  let totalChapters = 0;
  let totalFiches = 0;
  let totalQuiz = 0;
  
  ALL_SUBJECTS.forEach(subject => {
    totalChapters += subject.chapters.length;
    subject.chapters.forEach(ch => {
      totalFiches += (ch.fiches || []).length;
      totalQuiz += (ch.quiz || []).length;
    });
  });
  
  animateCounter('stat-subjects', ALL_SUBJECTS.length);
  animateCounter('stat-chapters', totalChapters);
  animateCounter('stat-fiches', totalFiches);
  animateCounter('stat-quiz', totalQuiz);
}

function animateCounter(elementId, target) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  const duration = 1000;
  const start = performance.now();
  const startVal = 0;
  
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(update);
  }
  
  requestAnimationFrame(update);
}

// ===== Render Subjects Grid =====
function renderSubjectsGrid() {
  const grid = document.getElementById('subjects-grid');
  if (!grid) return;
  
  grid.innerHTML = ALL_SUBJECTS.map((subject, index) => {
    const chapterCount = subject.chapters.length;
    const ficheCount = subject.chapters.reduce((sum, ch) => sum + (ch.fiches || []).length, 0);
    const quizCount = subject.chapters.reduce((sum, ch) => sum + (ch.quiz || []).length, 0);
    const progress = getSubjectProgress(subject.id);
    
    return `
      <div class="subject-card" style="--card-color: ${subject.color}" 
           onclick="navigateToSubject('${subject.id}')"
           role="button" tabindex="0"
           onkeydown="if(event.key==='Enter')navigateToSubject('${subject.id}')">
        <div class="subject-card-icon" style="background: ${subject.color}15; border-color: ${subject.color}30">
          ${subject.icon}
        </div>
        <div class="subject-card-name">${subject.name}</div>
        <div class="subject-card-desc">${chapterCount} chapitres · ${ficheCount} fiches de révision</div>
        <div class="subject-card-meta">
          <span>📝 ${quizCount} questions</span>
        </div>
        <div class="subject-card-progress">
          <div class="subject-card-progress-bar" 
               data-subject-progress="${subject.id}"
               style="width: ${progress}%; background: ${subject.color}"></div>
        </div>
      </div>
    `;
  }).join('');
}



// ===== Navigation =====
function navigateHome() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('subject-view').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateSubjectCardsProgress();
  history.pushState({}, '', window.location.pathname);
}

function navigateToSubject(subjectId) {
  const subject = ALL_SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return;
  
  document.getElementById('home-view').classList.add('hidden');
  const subjectView = document.getElementById('subject-view');
  subjectView.classList.add('active');
  
  renderSubjectView(subject);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState({ subject: subjectId }, '', `#${subjectId}`);
}

// ===== Render Subject View =====
function renderSubjectView(subject) {
  const container = document.getElementById('subject-view');
  
  container.innerHTML = `
    <button class="back-btn" onclick="navigateHome()">← Retour aux matières</button>
    
    <div class="subject-header">
      <div class="subject-header-icon" style="background: ${subject.color}15; border-color: ${subject.color}30">
        ${subject.icon}
      </div>
      <div class="subject-header-info">
        <h2>${subject.name}</h2>
        <p>${subject.chapters.length} chapitres</p>
      </div>
    </div>
    
    <div class="chapters-list" id="chapters-list">
      ${subject.chapters.map((chapter, index) => renderChapter(subject, chapter, index)).join('')}
    </div>
  `;
}

function renderChapter(subject, chapter, index) {
  const progress = getProgress();
  const subjectProgress = progress[subject.id] || {};
  const isCompleted = !!subjectProgress[chapter.id];
  const ficheCount = (chapter.fiches || []).length;
  const quizCount = (chapter.quiz || []).length;
  
  return `
    <div class="chapter-item" id="chapter-${chapter.id}">
      <div class="chapter-header" onclick="toggleChapter('${chapter.id}')">
        <div class="chapter-header-left">
          <div class="chapter-number" style="${isCompleted ? `background: ${subject.color}20; color: ${subject.color}; border-color: ${subject.color}40` : ''}">
            ${isCompleted ? '✓' : index + 1}
          </div>
          <div>
            <div class="chapter-title">${chapter.title}</div>
            ${chapter.summary ? `<div class="chapter-summary">${chapter.summary}</div>` : ''}
          </div>
        </div>
        <div class="chapter-header-right">
          <span class="chapter-badge">${ficheCount} fiches</span>
          <span class="chapter-badge">${quizCount} quiz</span>
          <span class="chapter-arrow">▼</span>
        </div>
      </div>
      <div class="chapter-content">
        <div class="chapter-tabs">
          <button class="chapter-tab active" onclick="switchTab('${chapter.id}', 'fiches', this)">📖 Fiches</button>
          <button class="chapter-tab" onclick="switchTab('${chapter.id}', 'quiz', this)">🧠 Quiz</button>
        </div>
        <div class="fiche-container active" id="fiches-${chapter.id}">
          ${renderFiches(chapter)}
        </div>
        <div class="quiz-container" id="quiz-${chapter.id}">
          ${renderQuiz(subject, chapter)}
        </div>
      </div>
    </div>
  `;
}

// ===== Toggle Chapter =====
function toggleChapter(chapterId) {
  const item = document.getElementById(`chapter-${chapterId}`);
  if (!item) return;
  
  // Close other chapters
  document.querySelectorAll('.chapter-item.expanded').forEach(el => {
    if (el.id !== `chapter-${chapterId}`) {
      el.classList.remove('expanded');
    }
  });
  
  item.classList.toggle('expanded');
}

// ===== Tab Switching =====
function switchTab(chapterId, tab, btn) {
  // Update tab buttons
  const tabContainer = btn.parentElement;
  tabContainer.querySelectorAll('.chapter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  
  // Show/hide content
  const fichesContainer = document.getElementById(`fiches-${chapterId}`);
  const quizContainer = document.getElementById(`quiz-${chapterId}`);
  
  if (tab === 'fiches') {
    fichesContainer.classList.add('active');
    quizContainer.classList.remove('active');
  } else {
    fichesContainer.classList.remove('active');
    quizContainer.classList.add('active');
  }
}

// ===== Render Fiches =====
function renderFiches(chapter) {
  if (!chapter.fiches || chapter.fiches.length === 0) {
    return '<p style="color: var(--text-muted); padding: 20px;">Aucune fiche disponible.</p>';
  }
  
  const nav = chapter.fiches.map((fiche, i) => `
    <button class="fiche-nav-btn ${i === 0 ? 'active' : ''}" 
            onclick="switchFiche('${chapter.id}', ${i}, this)">
      ${fiche.title}
    </button>
  `).join('');
  
  const content = chapter.fiches.map((fiche, i) => `
    <div class="fiche-content" id="fiche-${chapter.id}-${i}" style="${i !== 0 ? 'display:none' : ''}">
      ${fiche.content}
    </div>
  `).join('');
  
  return `
    <div class="fiche-nav">${nav}</div>
    ${content}
  `;
}

function switchFiche(chapterId, index, btn) {
  // Update nav buttons
  btn.parentElement.querySelectorAll('.fiche-nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  // Show/hide fiches
  const container = document.getElementById(`fiches-${chapterId}`);
  container.querySelectorAll('.fiche-content').forEach((f, i) => {
    f.style.display = i === index ? 'block' : 'none';
  });
}

// ===== Render Quiz =====
function renderQuiz(subject, chapter) {
  if (!chapter.quiz || chapter.quiz.length === 0) {
    return '<p style="color: var(--text-muted); padding: 20px;">Aucun quiz disponible.</p>';
  }
  
  return `
    <div id="quiz-engine-${chapter.id}">
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" id="quiz-progress-${chapter.id}" style="width: 0%"></div>
        </div>
        <span class="quiz-progress-text" id="quiz-progress-text-${chapter.id}">1/${chapter.quiz.length}</span>
      </div>
      <div id="quiz-question-area-${chapter.id}"></div>
      <div class="quiz-actions">
        <button class="quiz-next-btn" id="quiz-next-${chapter.id}" onclick="nextQuestion('${subject.id}', '${chapter.id}')">
          Suivant →
        </button>
      </div>
    </div>
  `;
}

// ===== Quiz Engine =====
const quizState = {};

function initQuiz(subjectId, chapterId) {
  const subject = ALL_SUBJECTS.find(s => s.id === subjectId);
  const chapter = subject.chapters.find(c => c.id === chapterId);
  
  quizState[chapterId] = {
    currentIndex: 0,
    score: 0,
    total: chapter.quiz.length,
    answered: false,
    questions: [...chapter.quiz].sort(() => Math.random() - 0.5) // Shuffle
  };
  
  showQuestion(subjectId, chapterId);
}

function showQuestion(subjectId, chapterId) {
  const state = quizState[chapterId];
  if (!state) {
    initQuiz(subjectId, chapterId);
    return;
  }
  
  const question = state.questions[state.currentIndex];
  const area = document.getElementById(`quiz-question-area-${chapterId}`);
  const progressBar = document.getElementById(`quiz-progress-${chapterId}`);
  const progressText = document.getElementById(`quiz-progress-text-${chapterId}`);
  const nextBtn = document.getElementById(`quiz-next-${chapterId}`);
  
  state.answered = false;
  nextBtn.classList.remove('visible');
  
  const qText = question.question || question.q;
  const qOptions = question.options || question.o;
  const qExplanation = question.explanation || question.e;
  
  const pct = ((state.currentIndex) / state.total) * 100;
  progressBar.style.width = pct + '%';
  progressText.textContent = `${state.currentIndex + 1}/${state.total}`;
  
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  area.innerHTML = `
    <div class="quiz-question">
      <div class="quiz-question-text">${qText}</div>
      <div class="quiz-options">
        ${qOptions.map((opt, i) => `
          <button class="quiz-option" onclick="answerQuestion('${subjectId}', '${chapterId}', ${i})" id="opt-${chapterId}-${i}">
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-explanation-${chapterId}">
        ${qExplanation ? `<strong>Explication :</strong> ${qExplanation}` : ''}
      </div>
    </div>
  `;
}

function answerQuestion(subjectId, chapterId, selectedIndex) {
  const state = quizState[chapterId];
  if (!state || state.answered) return;
  
  state.answered = true;
  const question = state.questions[state.currentIndex];
  const correctIndex = question.correct !== undefined ? question.correct : question.c;
  
  if (selectedIndex === correctIndex) {
    state.score++;
  }
  
  // Style options
  const qOptions = question.options || question.o;
  qOptions.forEach((_, i) => {
    const optEl = document.getElementById(`opt-${chapterId}-${i}`);
    optEl.classList.add('disabled');
    if (i === correctIndex) {
      optEl.classList.add('correct');
    } else if (i === selectedIndex && selectedIndex !== correctIndex) {
      optEl.classList.add('wrong');
    }
  });
  
  // Show explanation
  const explanationEl = document.getElementById(`quiz-explanation-${chapterId}`);
  const qExplanation = question.explanation || question.e;
  if (qExplanation) {
    explanationEl.classList.add('visible');
  }
  
  // Show next button
  const nextBtn = document.getElementById(`quiz-next-${chapterId}`);
  if (state.currentIndex < state.total - 1) {
    nextBtn.textContent = 'Suivant →';
  } else {
    nextBtn.textContent = 'Voir les résultats →';
  }
  nextBtn.classList.add('visible');
}

function nextQuestion(subjectId, chapterId) {
  const state = quizState[chapterId];
  if (!state) return;
  
  state.currentIndex++;
  
  if (state.currentIndex >= state.total) {
    showQuizResults(subjectId, chapterId);
    return;
  }
  
  showQuestion(subjectId, chapterId);
}

function showQuizResults(subjectId, chapterId) {
  const state = quizState[chapterId];
  const pct = Math.round((state.score / state.total) * 100);
  
  // Save progress
  markQuizCompleted(subjectId, chapterId, state.score, state.total);
  
  // Determine score class and message
  let scoreClass, message;
  if (pct >= 80) {
    scoreClass = 'excellent';
    message = '🌟 Excellent ! Tu maîtrises parfaitement ce chapitre !';
  } else if (pct >= 60) {
    scoreClass = 'good';
    message = '👍 Bien joué ! Encore un petit effort pour être au top !';
  } else if (pct >= 40) {
    scoreClass = 'average';
    message = '📚 Pas mal, mais revois les fiches pour t\'améliorer !';
  } else {
    scoreClass = 'poor';
    message = '💪 Ne te décourage pas ! Relis bien les fiches et réessaie !';
  }
  
  const engine = document.getElementById(`quiz-engine-${chapterId}`);
  engine.innerHTML = `
    <div class="quiz-results">
      <div class="quiz-results-score ${scoreClass}">${pct}%</div>
      <div class="quiz-results-label">${state.score}/${state.total} bonnes réponses</div>
      <div class="quiz-results-message">${message}</div>
      <button class="quiz-retry-btn" onclick="retryQuiz('${subjectId}', '${chapterId}')">
        🔄 Recommencer le quiz
      </button>
    </div>
  `;
  
  // Update the chapter number to show completed
  const chapterNumber = document.querySelector(`#chapter-${chapterId} .chapter-number`);
  const subject = ALL_SUBJECTS.find(s => s.id === subjectId);
  if (chapterNumber && subject) {
    chapterNumber.textContent = '✓';
    chapterNumber.style.background = subject.color + '20';
    chapterNumber.style.color = subject.color;
    chapterNumber.style.borderColor = subject.color + '40';
  }
  
  // Update progress bar
  const progressBar = document.getElementById(`quiz-progress-${chapterId}`);
  if (progressBar) progressBar.style.width = '100%';
}

function retryQuiz(subjectId, chapterId) {
  delete quizState[chapterId];
  
  const subject = ALL_SUBJECTS.find(s => s.id === subjectId);
  const chapter = subject.chapters.find(c => c.id === chapterId);
  
  const engine = document.getElementById(`quiz-engine-${chapterId}`);
  engine.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" id="quiz-progress-${chapterId}" style="width: 0%"></div>
      </div>
      <span class="quiz-progress-text" id="quiz-progress-text-${chapterId}">1/${chapter.quiz.length}</span>
    </div>
    <div id="quiz-question-area-${chapterId}"></div>
    <div class="quiz-actions">
      <button class="quiz-next-btn" id="quiz-next-${chapterId}" onclick="nextQuestion('${subjectId}', '${chapterId}')">
        Suivant →
      </button>
    </div>
  `;
  
  initQuiz(subjectId, chapterId);
}

// ===== Auto-init quiz when tab switches =====
const originalSwitchTab = window.switchTab;
window.switchTab = function(chapterId, tab, btn) {
  // Call original
  const tabContainer = btn.parentElement;
  tabContainer.querySelectorAll('.chapter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  
  const fichesContainer = document.getElementById(`fiches-${chapterId}`);
  const quizContainer = document.getElementById(`quiz-${chapterId}`);
  
  if (tab === 'fiches') {
    fichesContainer.classList.add('active');
    quizContainer.classList.remove('active');
  } else {
    fichesContainer.classList.remove('active');
    quizContainer.classList.add('active');
    
    // Init quiz if not already initialized
    if (!quizState[chapterId]) {
      // Find subject for this chapter
      const subject = ALL_SUBJECTS.find(s => s.chapters.some(c => c.id === chapterId));
      if (subject) {
        initQuiz(subject.id, chapterId);
      }
    }
  }
};

// ===== Progress Modal =====
function toggleProgress() {
  const modal = document.getElementById('progress-modal');
  modal.classList.toggle('active');
  
  if (modal.classList.contains('active')) {
    renderProgressModal();
  }
}

function renderProgressModal() {
  const globalPct = getGlobalProgress();
  const progress = getProgress();
  
  // Update circle
  const circleFill = document.getElementById('progress-circle-fill');
  const circleText = document.getElementById('progress-circle-text');
  const circumference = 213.6;
  const offset = circumference - (globalPct / 100) * circumference;
  circleFill.style.strokeDashoffset = offset;
  circleText.textContent = globalPct + '%';
  
  // Count completed quizzes
  let completedCount = 0;
  Object.values(progress).forEach(sp => {
    completedCount += Object.keys(sp).length;
  });
  document.getElementById('progress-detail').textContent = `${completedCount} quiz complétés`;
  
  // Render subject progress rows
  const container = document.getElementById('progress-subjects');
  container.innerHTML = ALL_SUBJECTS.map(subject => {
    const pct = getSubjectProgress(subject.id);
    return `
      <div class="progress-subject-row">
        <span class="progress-subject-icon">${subject.icon}</span>
        <span class="progress-subject-name">${subject.name}</span>
        <div class="progress-subject-bar">
          <div class="progress-subject-bar-fill" style="width: ${pct}%; background: ${subject.color}"></div>
        </div>
        <span class="progress-subject-pct">${pct}%</span>
      </div>
    `;
  }).join('');
}

// Close modal on overlay click
document.getElementById('progress-modal').addEventListener('click', function(e) {
  if (e.target === this) toggleProgress();
});

// ===== Search =====
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  
  if (query.length < 2) {
    searchResults.classList.remove('active');
    return;
  }
  
  const results = [];
  
  ALL_SUBJECTS.forEach(subject => {
    // Search in subject name
    if (subject.name.toLowerCase().includes(query)) {
      results.push({
        icon: subject.icon,
        title: subject.name,
        sub: 'Matière',
        action: () => navigateToSubject(subject.id)
      });
    }
    
    // Search in chapters
    subject.chapters.forEach(chapter => {
      if (chapter.title.toLowerCase().includes(query)) {
        results.push({
          icon: subject.icon,
          title: chapter.title,
          sub: subject.name,
          action: () => {
            navigateToSubject(subject.id);
            setTimeout(() => toggleChapter(chapter.id), 300);
          }
        });
      }
      
      // Search in fiches
      if (chapter.fiches) {
        chapter.fiches.forEach(fiche => {
          if (fiche.title.toLowerCase().includes(query)) {
            results.push({
              icon: '📄',
              title: fiche.title,
              sub: `${subject.name} → ${chapter.title}`,
              action: () => {
                navigateToSubject(subject.id);
                setTimeout(() => toggleChapter(chapter.id), 300);
              }
            });
          }
        });
      }
    });
  });
  
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-no-results">Aucun résultat trouvé</div>';
  } else {
    searchResults.innerHTML = results.slice(0, 8).map((r, i) => `
      <div class="search-result-item" onclick="searchResultClick(${i})">
        <span class="search-result-icon">${r.icon}</span>
        <div class="search-result-info">
          <div class="search-result-title">${r.title}</div>
          <div class="search-result-sub">${r.sub}</div>
        </div>
      </div>
    `).join('');
    
    // Store actions for click handlers
    searchResults._actions = results.slice(0, 8).map(r => r.action);
  }
  
  searchResults.classList.add('active');
});

function searchResultClick(index) {
  const actions = searchResults._actions;
  if (actions && actions[index]) {
    actions[index]();
    searchInput.value = '';
    searchResults.classList.remove('active');
  }
}

// Close search on click outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('#nav-search-wrapper')) {
    searchResults.classList.remove('active');
  }
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Handle Browser Back/Forward =====
window.addEventListener('popstate', function() {
  const hash = window.location.hash.replace('#', '');
  if (hash && ALL_SUBJECTS.find(s => s.id === hash)) {
    navigateToSubject(hash);
  } else {
    navigateHome();
  }
});
// ===== Import / Export Progress =====
function exportProgress() {
  const progress = getProgress();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "brevetmaster_sauvegarde_" + new Date().toISOString().split('T')[0] + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (typeof importedData === 'object') {
        saveProgress(importedData);
        alert("✅ Sauvegarde importée avec succès !");
        // Update UI
        updateGlobalProgressDisplay();
        if (document.getElementById('progress-modal').classList.contains('active')) {
          renderProgressModal();
        }
        // Force re-render of subject cards if on home page
        if (!document.getElementById('home-view').classList.contains('hidden')) {
          renderSubjectsGrid();
        }
      }
    } catch (err) {
      alert("❌ Erreur lors de l'importation : fichier JSON invalide.");
    }
    // Reset file input so same file can be imported again if needed
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ===== Initialize App =====
function init() {
  initSubjects();
  renderSubjectsGrid();
  updateStats();
  updateGlobalProgressDisplay();
  
  // Check for hash navigation
  const hash = window.location.hash.replace('#', '');
  if (hash && ALL_SUBJECTS.find(s => s.id === hash)) {
    navigateToSubject(hash);
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
