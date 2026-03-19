// ============================================================
// FEM Dynamic Wetting · Main Application Engine
// ============================================================

import { equations as allEquations, sections } from './equations.js';

// Filter out equations that shouldn't appear in the main flow (like jacobian entries)
const equations = allEquations.filter(e => !e.hidden);

// ---- Performance: Lazy rendering constants ----
const WINDOW_SIZE = 20;        // render current ± this many
const cardCache = new Map();   // idx -> fully rendered HTMLElement
const allCards = [];           // placeholder/rendered card refs (indexed by equation idx)
const allDividers = [];        // section divider elements (sparse, indexed by eq idx)
const allTransforms = [];      // transform annotation elements (sparse, indexed by eq idx)

// ---- State ----
const state = {
  currentIdx: -1,          // index in the equations array
  revealedUpTo: -1,        // highest revealed equation index
  activeRef: null,          // currently highlighted back-reference eq id
};

// ---- DOM refs ----
const flow          = document.getElementById('equation-flow');
const progressFill  = document.getElementById('progress-fill');
const eqCounter     = document.getElementById('eq-counter');
const btnPrev       = document.getElementById('btn-prev');
const btnNext       = document.getElementById('btn-next');
const timelineTrack = document.getElementById('timeline-progress');
const timelineDots  = document.getElementById('timeline-dots');
const tocList       = document.getElementById('toc-list');
const tocPanel      = document.getElementById('toc-panel');
const tocOverlay    = document.getElementById('toc-overlay');
const btnToc        = document.getElementById('btn-toc');
const btnTocClose   = document.getElementById('btn-toc-close');
const refLinesSvg   = document.getElementById('ref-lines');

// Comparison panel
const comparePanel   = document.getElementById('compare-panel');
const compareOverlay = document.getElementById('compare-overlay');
const compareTop     = document.getElementById('compare-top');
const compareBottom  = document.getElementById('compare-bottom');
const btnCompareClose = document.getElementById('btn-compare-close');
const btnCompareGoto  = document.getElementById('btn-compare-goto');

// Chapter comparison panel
const chapterComparePanel   = document.getElementById('chapter-compare-panel');
const chapterCompareOverlay = document.getElementById('chapter-compare-overlay');
const chapterCompareLeft    = document.getElementById('chapter-compare-left');
const chapterCompareRight   = document.getElementById('chapter-compare-right');
const chapterCompareLeftTitle  = document.getElementById('chapter-compare-left-title');
const chapterCompareRightTitle = document.getElementById('chapter-compare-right-title');
const btnChapterCompareClose   = document.getElementById('btn-chapter-compare-close');

// ---- Wait for KaTeX to load ----
function waitForKatex() {
  return new Promise(resolve => {
    if (window.katex) return resolve();
    const check = setInterval(() => {
      if (window.katex) { clearInterval(check); resolve(); }
    }, 50);
  });
}

const latexMacros = {
  "\\dt": "\\Delta_t",
  "\\ca": "Ca",
  "\\re": "Re",
  "\\st": "St",
  "\\be": "Be",
  "\\es": "Es",
  "\\cg": "Cg",
  "\\cs": "Cs",
  "\\omeg": "\\partial",
  "\\vphi": "\\phi",
  "\\vpsi": "\\psi",
  "\\sigt": "\\sigma",
  "\\eps": "\\varepsilon",
  "\\gaml": "\\gamma",
  "\\lam": "\\lambda",
  "\\mcal": "\\mathcal",
  "\\bfl": "\\boldsymbol{l}",
  "\\bfn": "\\boldsymbol{n}",
  "\\bft": "\\boldsymbol{t}",
  "\\bfP": "\\boldsymbol{P}",
  "\\bfu": "\\boldsymbol{u}",
  "\\bfv": "\\boldsymbol{v}",
  "\\bfc": "\\boldsymbol{c}",
  "\\bfg": "\\boldsymbol{g}",
  "\\bfhat": "\\hat{\\boldsymbol{#1}}",
  "\\nablas": "\\nabla^s",
  "\\nablasdot": "\\nabla^s \\cdot",
  "\\pa": "\\partial",
  "\\tf": "\\tilde",
  "\\ov": "\\overline",
  "\\un": "\\underline",
  "\\del": "\\partial"
};

// ---- Render a single equation card (full, with KaTeX) ----
function renderEquation(eq, idx) {
  const card = document.createElement('div');
  card.className = 'eq-card';
  card.id = `eq-${eq.id}`;
  card.dataset.idx = idx;
  card.dataset.eqId = eq.id;

  // Number badge
  const numBadge = document.createElement('div');
  numBadge.className = 'eq-number';
  numBadge.textContent = `(${eq.id})`;
  card.appendChild(numBadge);

  // Label
  if (eq.label) {
    const label = document.createElement('div');
    label.className = 'eq-label';
    label.textContent = eq.label;
    card.appendChild(label);
  }

  // Math
  const mathDiv = document.createElement('div');
  mathDiv.className = 'eq-math';

  let renderLatex = eq.latex;
  if (eq.id === '18.1' || eq.id === '18.37') {
    const jacobianMap = {
      '\\partial_u \\hat{M}^r': '18.2', '\\partial_w \\hat{M}^r': '18.3', '\\partial_p \\hat{M}^r': '18.4', '\\partial_{\\omega^2} \\hat{M}^r': '18.5', '\\partial_h \\hat{M}^r': '18.8',
      '\\partial_u \\hat{M}^z': '18.9', '\\partial_w \\hat{M}^z': '18.10', '\\partial_p \\hat{M}^z': '18.11', '\\partial_{\\omega^2} \\hat{M}^z': '18.12', '\\partial_{\\omega^3} \\hat{M}^z': '18.13', '\\partial_{\\epsilon^3} \\hat{M}^z': '18.14', '\\partial_h \\hat{M}^z': '18.15',
      '\\partial_u \\hat{C}': '18.16', '\\partial_w \\hat{C}': '18.17', '\\partial_p \\hat{C}': '18.18', '\\partial_h \\hat{C}': '18.22',
      '\\partial_u \\hat{K}': '18.23', '\\partial_w \\hat{K}': '18.24', '\\partial_p \\hat{K}': '18.25', '\\partial_h \\hat{K}': '18.29',
      '\\partial_u \\hat{I}': '18.30', '\\partial_w \\hat{I}': '18.31', '\\partial_p \\hat{I}': '18.32', '\\partial_h \\hat{I}': '18.36'
    };
    for (const [key, id] of Object.entries(jacobianMap)) {
      renderLatex = renderLatex.replace(key, `\\htmlId{jacob-${id}}{\\htmlClass{jacob-link}{${key}}}`);
    }
  }

  try {
    katex.render(renderLatex, mathDiv, {
      displayMode: true,
      throwOnError: false,
      trust: true,
      strict: false,
      macros: latexMacros
    });
  } catch (e) {
    mathDiv.textContent = renderLatex;
  }

  // Attach event listeners for jacobian matrix items if any
  if (eq.id === '18.1' || eq.id === '18.37') {
    setTimeout(() => {
      const links = mathDiv.querySelectorAll('[id^="jacob-"]');
      links.forEach(link => {
        const targetId = link.id.replace('jacob-', '');
        if (targetId) {
          link.classList.add('jacob-link-item');
          link.style.cursor = 'pointer';
          link.title = `View equation ${targetId}`;
          link.addEventListener('click', (e) => {
            e.stopPropagation();
            openComparison(eq, targetId);
          });
        }
      });
    }, 0);
  }

  card.appendChild(mathDiv);

  // Description
  if (eq.description) {
    const desc = document.createElement('div');
    desc.className = 'eq-desc';
    desc.textContent = eq.description;
    card.appendChild(desc);
  }

  // Reference links
  if (eq.references && eq.references.length > 0) {
    const refDiv = document.createElement('div');
    refDiv.className = 'eq-desc';
    refDiv.style.marginTop = '10px';
    refDiv.innerHTML = '<span style="color:var(--fg-faint); font-size:0.75rem; font-family:var(--font-sans);">Builds on: </span>';
    eq.references.forEach((refId, i) => {
      const refEq = allEquations.find(e => e.id === refId);
      const link = document.createElement('span');
      link.className = 'eq-ref-link';
      link.textContent = `(${refId})`;
      link.title = refEq ? refEq.label : `Equation ${refId}`;
      link.addEventListener('click', (e) => { e.stopPropagation(); openComparison(eq, refId); });
      link.addEventListener('mouseenter', () => showRefLine(eq.id, refId));
      link.addEventListener('mouseleave', () => hideRefLines());
      refDiv.appendChild(link);
      if (i < eq.references.length - 1) {
        refDiv.appendChild(document.createTextNode('  '));
      }
    });
    card.appendChild(refDiv);
  }

  // Make the entire card clickable to jump to it
  card.style.cursor = 'pointer';
  card.title = 'Click to focus this equation';
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.eq-ref-link') && !e.target.closest('.jacob-link-item')) {
      goTo(idx);
    }
  });

  return card;
}

// ---- Create lightweight placeholder ----
function createPlaceholder(eq, idx) {
  const ph = document.createElement('div');
  ph.className = 'eq-card eq-placeholder';
  ph.id = `eq-${eq.id}`;
  ph.dataset.idx = idx;
  ph.dataset.eqId = eq.id;
  ph.style.display = 'none';
  return ph;
}

// ---- Ensure a card at idx is fully rendered (lazy KaTeX) ----
function ensureRendered(idx) {
  if (cardCache.has(idx)) return;
  const eq = equations[idx];
  const rendered = renderEquation(eq, idx);
  // Replace placeholder in DOM
  const placeholder = allCards[idx];
  placeholder.replaceWith(rendered);
  allCards[idx] = rendered;
  cardCache.set(idx, rendered);
}

// ---- Render equations within window around centerIdx ----
function renderWindow(centerIdx) {
  const start = Math.max(0, centerIdx - WINDOW_SIZE);
  const end = Math.min(equations.length - 1, centerIdx + WINDOW_SIZE);
  for (let i = start; i <= end; i++) {
    if (i <= state.revealedUpTo) {
      ensureRendered(i);
    }
  }
}

// ---- Insert transform annotation between cards ----
function renderTransform(eq) {
  if (!eq.transform) return null;
  const div = document.createElement('div');
  div.className = 'eq-transform';
  div.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
    <span class="eq-transform-label">${eq.transform}</span>
  `;
  return div;
}

// ---- Section dividers ----
function renderSectionDivider(section) {
  const div = document.createElement('div');
  div.className = 'section-divider';
  div.id = `section-${section.id}`;

  // Check if this section has a parallel chapter
  const pair = parallelChapters.find(p => p.left === section.id || p.right === section.id);
  const compareBtn = pair ? `<button class="section-compare-btn" data-left="${pair.left}" data-right="${pair.right}" title="Compare with parallel chapter">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/></svg>
    Compare
  </button>` : '';

  div.innerHTML = `
    <span class="section-title">
      ${section.title}
      ${section.subtitle ? `<span class="section-subtitle">${section.subtitle}</span>` : ''}
    </span>
    ${compareBtn}
  `;

  // Attach event listener for compare button
  if (pair) {
    setTimeout(() => {
      const btn = div.querySelector('.section-compare-btn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openChapterComparison(btn.dataset.left, btn.dataset.right);
        });
      }
    }, 0);
  }

  return div;
}

// ---- Build all cards as placeholders (fast, no KaTeX) ----
async function buildFlow() {
  await waitForKatex();

  let currentSection = null;

  equations.forEach((eq, idx) => {
    // Insert section divider if section changes
    if (eq.section !== currentSection) {
      currentSection = eq.section;
      const sec = sections.find(s => s.id === eq.section);
      if (sec) {
        const divider = renderSectionDivider(sec);
        divider.style.display = 'none';
        flow.appendChild(divider);
        allDividers[idx] = divider;
      }
    }

    // Transform annotation
    const transform = renderTransform(eq);
    if (transform) {
      transform.style.display = 'none';
      transform.dataset.forIdx = idx;
      flow.appendChild(transform);
      allTransforms[idx] = transform;
    }

    // Lightweight placeholder (no KaTeX rendering)
    const placeholder = createPlaceholder(eq, idx);
    flow.appendChild(placeholder);
    allCards[idx] = placeholder;
  });

  // Build timeline dots
  buildTimeline();
  // Build TOC
  buildTOC();
  // Reveal first equation
  goTo(0);
}

// ---- Navigation ----
function goTo(idx) {
  if (idx < 0 || idx >= equations.length) return;

  const prevIdx = state.currentIdx;
  state.currentIdx = idx;
  if (idx > state.revealedUpTo) state.revealedUpTo = idx;

  // Lazy-render equations in the visible window
  renderWindow(idx);

  // Only update cards in the visible window + a small buffer
  const updateStart = Math.max(0, idx - WINDOW_SIZE - 5);
  const updateEnd = Math.min(equations.length - 1, idx + WINDOW_SIZE + 5);

  for (let i = updateStart; i <= updateEnd; i++) {
    const card = allCards[i];
    card.classList.remove('current', 'faded', 'entering');

    if (i <= state.revealedUpTo) {
      // Show section dividers and transforms
      showElementsBefore(i);
      card.style.display = '';

      if (i === idx) {
        card.classList.add('visible', 'current');
        if (i > prevIdx) card.classList.add('entering');
      } else {
        card.classList.add('visible', 'faded');
      }
    } else {
      card.style.display = 'none';
    }
  }

  // Hide cards far outside the window that were previously visible
  // (for performance: collapse them so browser doesn't layout them)
  for (let i = 0; i < updateStart; i++) {
    const card = allCards[i];
    if (i <= state.revealedUpTo && card.style.display !== 'none') {
      // Keep them in DOM but collapsed for scroll position
      card.classList.remove('current', 'entering');
      card.classList.add('visible', 'faded');
    }
  }

  // Scroll to current
  const currentCard = allCards[idx];
  if (currentCard) {
    setTimeout(() => {
      currentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  updateUI();
  clearReferenceHighlight();
}

function showElementsBefore(idx) {
  // Show preceding section-divider and transform annotation
  if (allDividers[idx]) allDividers[idx].style.display = '';
  if (allTransforms[idx]) allTransforms[idx].style.display = '';
}

function next() { goTo(state.currentIdx + 1); }
function prev() { goTo(state.currentIdx - 1); }

// ---- Cached timeline/TOC arrays for fast access ----
let timelineDotArray = [];
let tocItemArray = [];

// ---- Update UI state ----
function updateUI() {
  const idx = state.currentIdx;
  const total = equations.length;
  const eq = equations[idx];

  // Counter
  eqCounter.textContent = `(${eq.id}) — ${idx + 1} of ${total}`;

  // Progress bar
  const pct = ((idx + 1) / total) * 100;
  progressFill.style.width = `${pct}%`;
  timelineTrack.style.width = `${pct}%`;

  // Buttons
  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === total - 1;

  // Timeline dots - use cached array
  if (timelineDotArray.length > 0) {
    // Only update previously active, current, and nearby dots
    timelineDotArray.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === idx) dot.classList.add('active');
      else if (i <= state.revealedUpTo) dot.classList.add('visited');
    });
  }

  // TOC - use cached array, update only active
  tocItemArray.forEach(item => {
    item.classList.toggle('active', item.dataset.idx === String(idx));
  });
}

// ---- Timeline ----
function buildTimeline() {
  timelineDots.innerHTML = '';
  const showAll = equations.length <= 40;
  timelineDotArray = [];

  equations.forEach((eq, idx) => {
    const dot = document.createElement('div');
    dot.className = 'timeline-dot';
    dot.style.left = `${(idx / (equations.length - 1)) * 100}%`;
    dot.title = `(${eq.id}) ${eq.label}`;
    dot.addEventListener('click', () => goTo(idx));

    if (idx === 0 || eq.section !== equations[idx - 1].section) {
      dot.classList.add('section-start');
    }

    if (!showAll && idx > 0 && eq.section === equations[idx - 1]?.section) {
      dot.style.display = 'none';
    }

    timelineDots.appendChild(dot);
    timelineDotArray[idx] = dot;
  });
}

// ---- TOC ----
function buildTOC() {
  tocList.innerHTML = '';
  let currentSection = null;
  tocItemArray = [];

  equations.forEach((eq, idx) => {
    if (eq.section !== currentSection) {
      currentSection = eq.section;
      const sec = sections.find(s => s.id === eq.section);
      if (sec) {
        const secLabel = document.createElement('div');
        secLabel.className = 'toc-section-label';
        secLabel.textContent = sec.title;
        secLabel.style.cursor = 'pointer';
        secLabel.addEventListener('click', () => {
          goTo(idx);
          closeTOC();
        });
        tocList.appendChild(secLabel);
      }
    }

    const item = document.createElement('div');
    item.className = 'toc-item';
    item.dataset.idx = idx;
    item.innerHTML = `<span class="toc-number">(${eq.id})</span>${eq.label}`;
    item.addEventListener('click', () => {
      goTo(idx);
      closeTOC();
    });
    tocList.appendChild(item);
    tocItemArray[idx] = item;
  });
}

function openTOC() {
  tocPanel.classList.remove('hidden');
  tocPanel.classList.add('visible');
  tocOverlay.classList.remove('hidden');
  tocOverlay.classList.add('visible');
}
function closeTOC() {
  tocPanel.classList.remove('visible');
  tocPanel.classList.add('hidden');
  tocOverlay.classList.remove('visible');
  tocOverlay.classList.add('hidden');
}

// ---- Side-by-side comparison panel ----
let compareTargetId = null;

function openComparison(currentEq, refId) {
  const refEq = allEquations.find(e => e.id === refId);
  if (!refEq) return;
  compareTargetId = refId;

  fillCompareCard(compareTop, refEq, 'Derives from');
  fillCompareCard(compareBottom, currentEq, 'Current');

  const arrowLabel = comparePanel.querySelector('.compare-arrow-label');
  arrowLabel.textContent = 'builds to';

  comparePanel.classList.remove('hidden');
  compareOverlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    comparePanel.classList.add('visible');
    compareOverlay.classList.add('visible');
  });
}

function fillCompareCard(container, eq, badgeText) {
  const badge = container.querySelector('.compare-badge');
  badge.textContent = badgeText;
  badge.className = 'compare-badge' + (badgeText !== 'Current' ? ' ref' : '');

  container.querySelector('.compare-eq-number').textContent = `(${eq.id})`;
  container.querySelector('.compare-eq-label').textContent = eq.label || '';
  container.querySelector('.compare-eq-desc').textContent = eq.description || '';

  const mathDiv = container.querySelector('.compare-eq-math');
  mathDiv.innerHTML = '';
  try {
    katex.render(eq.latex, mathDiv, {
      displayMode: true,
      throwOnError: false,
      trust: true,
      strict: false,
      macros: latexMacros
    });
  } catch (e) {
    mathDiv.textContent = eq.latex;
  }
}

function closeComparison() {
  comparePanel.classList.remove('visible');
  compareOverlay.classList.remove('visible');
  setTimeout(() => {
    comparePanel.classList.add('hidden');
    compareOverlay.classList.add('hidden');
  }, 400);
  compareTargetId = null;
}

// ---- Back-reference highlight (for hover) ----
function highlightReference(refId) {
  clearReferenceHighlight();
  const refCard = document.getElementById(`eq-${refId}`);
  if (!refCard) return;
  state.activeRef = refId;
  refCard.classList.add('referenced');
  refCard.classList.remove('faded');
}

function clearReferenceHighlight() {
  if (state.activeRef !== null) {
    const refCard = document.getElementById(`eq-${state.activeRef}`);
    if (refCard) {
      refCard.classList.remove('referenced');
      const refIdx = equations.findIndex(e => e.id === state.activeRef);
      if (refIdx < state.currentIdx) refCard.classList.add('faded');
    }
    state.activeRef = null;
  }
  hideRefLines();
}

// ---- Reference connection lines (SVG) ----
function showRefLine(fromId, toId) {
  hideRefLines();

  const fromCard = document.getElementById(`eq-${fromId}`);
  const toCard = document.getElementById(`eq-${toId}`);
  if (!fromCard || !toCard) return;

  const fromRect = fromCard.getBoundingClientRect();
  const toRect = toCard.getBoundingClientRect();

  const x1 = fromRect.left + 16;
  const y1 = fromRect.top + fromRect.height / 2;
  const x2 = toRect.left + 16;
  const y2 = toRect.bottom;

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const midY = (y1 + y2) / 2;
  line.setAttribute('d', `M ${x1} ${y1} C ${x1 - 40} ${midY}, ${x2 - 40} ${midY}, ${x2} ${y2}`);
  line.classList.add('ref-line');
  refLinesSvg.appendChild(line);

  requestAnimationFrame(() => line.classList.add('visible'));

  toCard.classList.add('referenced');
  toCard.classList.remove('faded');
}

function hideRefLines() {
  refLinesSvg.innerHTML = '';
  // Only clear the specific referenced card tracked in state
  if (state.activeRef) return; // Don't clear if we have an active ref
  document.querySelectorAll('.eq-card.referenced').forEach(card => {
    card.classList.remove('referenced');
    const eqId = card.dataset.eqId;
    const idx = equations.findIndex(e => e.id === eqId);
    if (idx >= 0 && idx < state.currentIdx) card.classList.add('faded');
  });
}

// ---- Parallel chapters for side-by-side comparison ----
const parallelChapters = [
  { left: 'the_r_momentum_residuals', right: 'the_z_momentum_equation', label: 'r-momentum vs z-momentum' },
  { left: 'derivatives_of_m_i_r_with_respect_to_u_q', right: 'derivatives_of_m_i_z_with_respect_to_u_q', label: 'dM^r/du vs dM^z/du' },
  { left: 'derivatives_of_m_i_r_with_respect_to_w_q', right: 'derivatives_of_m_i_z_with_respect_to_w_q', label: 'dM^r/dw vs dM^z/dw' },
  { left: 'derivatives_of_m_i_r_with_respect_to_p_q', right: 'derivatives_of_m_i_z_with_respect_to_p_q', label: 'dM^r/dp vs dM^z/dp' },
  { left: 'derivatives_of_m_i_r_with_respect_to_sig', right: 'derivatives_of_m_i_z_with_respect_to_sig', label: 'dM^r/dσ vs dM^z/dσ' },
  { left: 'derivatives_of_m_i_r_with_respect_to_var', right: 'derivatives_of_m_i_z_with_respect_to_var', label: 'dM^r/dε vs dM^z/dε' },
  { left: 'derivatives_of_m_i_r_with_respect_to_lam', right: 'derivatives_of_m_i_z_with_respect_to_lam', label: 'dM^r/dλ vs dM^z/dλ' },
  { left: 'derivatives_of_m_i_r_with_respect_to_gam', right: 'derivatives_of_m_i_z_with_respect_to_gam', label: 'dM^r/dγ vs dM^z/dγ' },
  { left: 'derivatives_of_m_i_r_with_respect_to_h_q', right: 'derivatives_of_m_i_z_with_respect_to_h_q', label: 'dM^r/dh vs dM^z/dh' },
  { left: 'r_momentum_residuals', right: 'z_momentum_residuals', label: 'r-momentum summary vs z-momentum summary' },
];

// ---- Chapter comparison ----
let chapterSyncingScroll = false;

function getEquationsInSection(sectionId) {
  return equations.filter(eq => eq.section === sectionId);
}

function openChapterComparison(leftSectionId, rightSectionId) {
  const leftEqs = getEquationsInSection(leftSectionId);
  const rightEqs = getEquationsInSection(rightSectionId);
  if (leftEqs.length === 0 && rightEqs.length === 0) return;

  const leftSec = sections.find(s => s.id === leftSectionId);
  const rightSec = sections.find(s => s.id === rightSectionId);

  chapterCompareLeftTitle.textContent = leftSec ? leftSec.title : leftSectionId;
  chapterCompareRightTitle.textContent = rightSec ? rightSec.title : rightSectionId;

  // Clear previous content
  const leftBody = chapterCompareLeft.querySelector('.chapter-compare-eqs');
  const rightBody = chapterCompareRight.querySelector('.chapter-compare-eqs');
  leftBody.innerHTML = '';
  rightBody.innerHTML = '';

  // Render equations side by side
  const maxLen = Math.max(leftEqs.length, rightEqs.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < leftEqs.length) {
      leftBody.appendChild(renderCompareChapterCard(leftEqs[i]));
    } else {
      leftBody.appendChild(createEmptySlot());
    }
    if (i < rightEqs.length) {
      rightBody.appendChild(renderCompareChapterCard(rightEqs[i]));
    } else {
      rightBody.appendChild(createEmptySlot());
    }
  }

  // Show panel
  chapterComparePanel.classList.remove('hidden');
  chapterCompareOverlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    chapterComparePanel.classList.add('visible');
    chapterCompareOverlay.classList.add('visible');
  });

  // Synchronized scrolling
  const leftCol = chapterCompareLeft;
  const rightCol = chapterCompareRight;
  leftCol.onscroll = () => {
    if (chapterSyncingScroll) return;
    chapterSyncingScroll = true;
    rightCol.scrollTop = leftCol.scrollTop;
    chapterSyncingScroll = false;
  };
  rightCol.onscroll = () => {
    if (chapterSyncingScroll) return;
    chapterSyncingScroll = true;
    leftCol.scrollTop = rightCol.scrollTop;
    chapterSyncingScroll = false;
  };
}

function renderCompareChapterCard(eq) {
  const card = document.createElement('div');
  card.className = 'chapter-eq-card';

  const numBadge = document.createElement('div');
  numBadge.className = 'chapter-eq-number';
  numBadge.textContent = `(${eq.id})`;
  card.appendChild(numBadge);

  if (eq.label) {
    const label = document.createElement('div');
    label.className = 'chapter-eq-label';
    label.textContent = eq.label;
    card.appendChild(label);
  }

  const mathDiv = document.createElement('div');
  mathDiv.className = 'chapter-eq-math';
  try {
    katex.render(eq.latex, mathDiv, {
      displayMode: true,
      throwOnError: false,
      trust: true,
      strict: false,
      macros: latexMacros
    });
  } catch (e) {
    mathDiv.textContent = eq.latex;
  }
  card.appendChild(mathDiv);

  if (eq.description) {
    const desc = document.createElement('div');
    desc.className = 'chapter-eq-desc';
    desc.textContent = eq.description;
    card.appendChild(desc);
  }

  return card;
}

function createEmptySlot() {
  const slot = document.createElement('div');
  slot.className = 'chapter-eq-card chapter-eq-empty';
  slot.innerHTML = '<span style="color:var(--fg-faint);font-size:0.8rem;">—</span>';
  return slot;
}

function closeChapterComparison() {
  chapterComparePanel.classList.remove('visible');
  chapterCompareOverlay.classList.remove('visible');
  setTimeout(() => {
    chapterComparePanel.classList.add('hidden');
    chapterCompareOverlay.classList.add('hidden');
  }, 400);
}

// ---- Keyboard navigation ----
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    next();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    prev();
  } else if (e.key === 'Escape') {
    closeComparison();
    closeChapterComparison();
    closeTOC();
    clearReferenceHighlight();
  }
});

// ---- Button listeners ----
btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prev);
btnToc.addEventListener('click', openTOC);
btnTocClose.addEventListener('click', closeTOC);
tocOverlay.addEventListener('click', closeTOC);

// Comparison panel
btnCompareClose.addEventListener('click', closeComparison);
compareOverlay.addEventListener('click', closeComparison);
btnCompareGoto.addEventListener('click', () => {
  if (compareTargetId) {
    const idx = equations.findIndex(e => e.id === compareTargetId);
    if (idx >= 0) {
      goTo(idx);
    } else {
      const matrixIdx = equations.findIndex(e => e.id === '18.37' || e.id === '18.1');
      if (matrixIdx >= 0) goTo(matrixIdx);
    }
  }
  closeComparison();
});

// Chapter comparison panel
if (btnChapterCompareClose) {
  btnChapterCompareClose.addEventListener('click', closeChapterComparison);
}
if (chapterCompareOverlay) {
  chapterCompareOverlay.addEventListener('click', closeChapterComparison);
}

// ---- Scroll wheel navigation (optional) ----
let scrollTimeout = null;
document.addEventListener('wheel', (e) => {
  if (scrollTimeout) return;
  scrollTimeout = setTimeout(() => { scrollTimeout = null; }, 400);

  if (e.deltaY > 30) next();
  else if (e.deltaY < -30) prev();
}, { passive: true });

// ---- Touch swipe support ----
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener('touchend', (e) => {
  const delta = touchStartY - e.changedTouches[0].clientY;
  if (delta > 50) next();
  else if (delta < -50) prev();
}, { passive: true });

// ---- Init ----
buildFlow();
