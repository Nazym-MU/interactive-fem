// ============================================================
// FEM Dynamic Wetting · Main Application Engine
// Bump ?v= here and in index.html on every deploy: GitHub Pages lets browsers cache
// files for 10 minutes, and a new index.html with old CSS/data renders broken.
// ============================================================

import { equations as allEquations, sections } from './equations.js?v=2';
import {
  JAC_ROWS, JAC_COLS, ENTRY_INDEX, RESIDUAL_INDEX,
  cellTex, isZeroBlock, highlightSymbol,
} from './jacobian.js?v=2';

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

  const isMatrix = eq.id === '18.1' || eq.id === '18.37';
  const renderLatex = isMatrix ? linkJacobianCells(eq.latex) : eq.latex;

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
  if (isMatrix) wireJacobianCells(mathDiv);

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

  // Jacobian entry -> the residual it differentiates and its derivation chapter
  const entryPos = ENTRY_INDEX.get(eq.id);
  if (entryPos) card.appendChild(renderEntryLinks(entryPos.r, entryPos.c));
  // Summary residual -> every block of its Jacobian row
  if (RESIDUAL_INDEX.has(eq.id) && JAC_ROWS[RESIDUAL_INDEX.get(eq.id)].residual === eq.id) {
    card.appendChild(renderResidualRowLinks(RESIDUAL_INDEX.get(eq.id)));
  }

  // Make the entire card clickable to jump to it
  card.style.cursor = 'pointer';
  card.title = 'Click to focus this equation';
  card.addEventListener('click', (e) => {
    if (!e.target.closest('.eq-ref-link') && !e.target.closest('.jacob-link-item') && !e.target.closest('.eq-jac-link')) {
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
  const typing = e.target.closest && e.target.closest('input, textarea');
  if (!typing && (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'))) {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
    return;
  }
  if (typing) return; // the search box handles its own keys
  if (jac.open) {
    const moves = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] };
    if (moves[e.key]) {
      e.preventDefault();
      const r = Math.min(JAC_ROWS.length - 1, Math.max(0, jac.r + moves[e.key][0]));
      const c = Math.min(JAC_COLS.length - 1, Math.max(0, jac.c + moves[e.key][1]));
      openJacobian(r, c);
    } else if (e.key === 'Escape') {
      closeJacobian();
    }
    return;
  }
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
// Scrolling inside a panel, the TOC or the search results scrolls that, not the flow.
const SCROLLABLE_UI = '#jac-panel, #compare-panel, #chapter-compare-panel, #toc-panel, #search';
document.addEventListener('wheel', (e) => {
  if (e.target.closest && e.target.closest(SCROLLABLE_UI)) return;
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
  if (e.target.closest && e.target.closest(SCROLLABLE_UI)) return;
  const delta = touchStartY - e.changedTouches[0].clientY;
  if (delta > 50) next();
  else if (delta < -50) prev();
}, { passive: true });

// ============================================================
// System Jacobian: cells, cross-links and the entry panel
// ============================================================

const eqById = (id) => allEquations.find(e => e.id === id);
const idxOf = (id) => equations.findIndex(e => e.id === id);

function renderKatex(latex, el, displayMode = true) {
  try {
    katex.render(latex, el, { displayMode, throwOnError: false, trust: true, strict: false, macros: latexMacros });
  } catch (e) {
    el.textContent = latex;
  }
}

// Wrap every ∂_x R̂ cell of the matrix so it can be clicked.
function linkJacobianCells(latex) {
  JAC_ROWS.forEach((row, r) => JAC_COLS.forEach((col, c) => {
    const key = cellTex(r, c);
    latex = latex.replace(key, `\\htmlData{jr=${r},jc=${c}}{${key}}`);
  }));
  return latex;
}

function wireJacobianCells(root) {
  root.querySelectorAll('[data-jr]').forEach(el => {
    const r = Number(el.dataset.jr);
    const c = Number(el.dataset.jc);
    el.classList.add('jacob-link-item');
    el.title = `∂/∂${JAC_COLS[c].name} of the ${JAC_ROWS[r].name} residual — open side by side`;
    el.addEventListener('click', (e) => { e.stopPropagation(); openJacobian(r, c); });
  });
}

function makeLink(text, title, onClick, extraClass = '') {
  const link = document.createElement('span');
  link.className = `eq-ref-link eq-jac-link ${extraClass}`.trim();
  link.textContent = text;
  link.title = title;
  link.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
  return link;
}

function linkRow(labelText) {
  const div = document.createElement('div');
  div.className = 'eq-desc eq-jac-row';
  const label = document.createElement('span');
  label.className = 'eq-jac-row-label';
  label.textContent = labelText;
  div.appendChild(label);
  return div;
}

// On an entry card, e.g. (18.3): which residual it differentiates, by what, and where it's derived.
function renderEntryLinks(r, c) {
  const row = JAC_ROWS[r];
  const col = JAC_COLS[c];
  const div = linkRow(`∂/∂${col.name} of `);
  div.appendChild(makeLink(`(${row.residual})`, `${row.name} residual`, () => openJacobian(r, c)));
  const deriv = row.derivations[col.key];
  if (deriv) {
    div.appendChild(document.createTextNode('  ·  derived in '));
    div.appendChild(makeLink(`(${deriv[0]})–(${deriv[1]})`, 'Go to the derivation chapter', () => goTo(idxOf(deriv[0]))));
  }
  div.appendChild(document.createTextNode('  ·  '));
  div.appendChild(makeLink('side by side', 'Show this entry next to its residual', () => openJacobian(r, c), 'eq-jac-open'));
  return div;
}

// On a summary residual card, e.g. (17.1): one chip per block of its Jacobian row.
function renderResidualRowLinks(r) {
  const row = JAC_ROWS[r];
  const div = linkRow('Jacobian row: ');
  JAC_COLS.forEach((col, c) => {
    const tag = row.entries[col.key];
    const zero = isZeroBlock(r, c);
    const chip = makeLink(`∂${col.name}`, tag ? `(${tag})${zero ? ' — zero block' : ''}` : 'not written out in section 18',
      () => openJacobian(r, c), `eq-jac-chip${zero ? ' zero' : ''}${tag ? '' : ' missing'}`);
    div.appendChild(chip);
  });
  return div;
}

// ---- Panel ----
const jac = { open: false, r: 0, c: 0, leftId: null, candidates: [], counts: [] };
const jacPanel    = document.getElementById('jac-panel');
const jacOverlay  = document.getElementById('jac-overlay');
const jacTitle    = document.getElementById('jac-title');
const jacMap      = document.getElementById('jac-map');
const jacLeft     = document.getElementById('jac-left');
const jacRight    = document.getElementById('jac-right');
const jacChips    = document.getElementById('jac-chips');
const jacLeftNote = document.getElementById('jac-left-note');
const jacRightNote = document.getElementById('jac-right-note');
const jacArrow    = document.getElementById('jac-arrow-label');
const jacActions  = document.getElementById('jac-actions');

function openJacobian(r, c) {
  const row = JAC_ROWS[r];
  const col = JAC_COLS[c];
  jac.r = r;
  jac.c = c;
  jac.candidates = [row.residual, ...row.parts].filter(id => eqById(id));
  jac.counts = jac.candidates.map(id => highlightSymbol(eqById(id).latex, col.hl).count);

  // Start on the summary residual if the variable shows up there, otherwise on the
  // component equation where it shows up most.
  let start = 0;
  if (jac.counts[0] === 0) {
    let most = 0;
    jac.counts.forEach((n, i) => { if (n > most) { most = n; start = i; } });
  }

  renderKatex(`${cellTex(r, c)}`, jacTitle, false);
  renderKatex(`\\dfrac{\\partial}{\\partial ${col.tex}}`, jacArrow, false);
  renderJacMap();
  renderJacRight();
  showJacLeft(jac.candidates[start]);

  if (!jac.open) {
    jac.open = true;
    jacPanel.classList.remove('hidden');
    jacOverlay.classList.remove('hidden');
    requestAnimationFrame(() => {
      jacPanel.classList.add('visible');
      jacOverlay.classList.add('visible');
      scrollMapToActive(); // the map had no size while the panel was hidden
    });
  }
}

function closeJacobian() {
  if (!jac.open) return;
  jac.open = false;
  jacPanel.classList.remove('visible');
  jacOverlay.classList.remove('visible');
  setTimeout(() => {
    if (jac.open) return;
    jacPanel.classList.add('hidden');
    jacOverlay.classList.add('hidden');
  }, 400);
}

function fillJacCard(card, eq, latex) {
  card.querySelector('.compare-eq-number').textContent = eq ? `(${eq.id})` : '';
  card.querySelector('.compare-eq-label').textContent = eq ? (eq.label || '') : '';
  const math = card.querySelector('.compare-eq-math');
  math.innerHTML = '';
  renderKatex(latex, math);
}

function showJacLeft(id) {
  const row = JAC_ROWS[jac.r];
  const col = JAC_COLS[jac.c];
  const eq = eqById(id);
  jac.leftId = id;

  // Chips: the summary residual and its component equations, with how often the variable appears.
  jacChips.innerHTML = '';
  if (jac.candidates.length > 1) {
    jac.candidates.forEach((cid, i) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'jac-chip' + (cid === id ? ' active' : '') + (jac.counts[i] ? ' has' : '');
      chip.innerHTML = `(${cid})${jac.counts[i] ? `<span class="jac-chip-count">${jac.counts[i]}</span>` : ''}`;
      chip.title = jac.counts[i]
        ? `${col.viaCoefficients ? 'geometric coefficients' : col.name} appear${jac.counts[i] === 1 ? 's' : ''} ${jac.counts[i]}× here`
        : `no explicit ${col.name} here`;
      chip.addEventListener('click', () => showJacLeft(cid));
      jacChips.appendChild(chip);
    });
  }

  const { latex, count } = highlightSymbol(eq.latex, col.hl);
  fillJacCard(jacLeft, eq, latex);

  const elsewhere = jac.candidates.filter((cid, i) => cid !== id && jac.counts[i] > 0).map(cid => `(${cid})`);
  const deriv = row.derivations[col.key];
  let note;
  if (col.viaCoefficients) {
    note = count
      ? `h never appears explicitly: it moves the mesh nodes, so ∂/∂h acts on the geometric coefficients a, b, c, d, f highlighted here (${count}).`
      : `h never appears explicitly: it moves the mesh nodes, so ∂/∂h acts on the geometric coefficients inside ${elsewhere.join(', ') || 'the element terms'}.`;
  } else if (count) {
    note = count === 1
      ? `${col.name} appears in 1 highlighted term; differentiating it gives the entry on the right.`
      : `${col.name} appears in ${count} highlighted terms; differentiating them gives the entry on the right.`;
  } else if (elsewhere.length) {
    note = `${col.name} doesn't appear in (${id}) directly; it sits inside ${elsewhere.join(', ')}.`;
  } else {
    note = `${col.name} doesn't appear explicitly in the summary residual${deriv ? `; the derivation (${deriv[0]})–(${deriv[1]}) shows where it enters` : ''}.`;
  }
  jacLeftNote.textContent = note;
  renderJacActions();
}

function renderJacRight() {
  const row = JAC_ROWS[jac.r];
  const col = JAC_COLS[jac.c];
  const tag = row.entries[col.key];
  const zero = isZeroBlock(jac.r, jac.c);
  const deriv = row.derivations[col.key];
  const notes = [];

  if (tag) {
    fillJacCard(jacRight, eqById(tag), eqById(tag).latex);
  } else {
    fillJacCard(jacRight, null, `${cellTex(jac.r, jac.c)} ${zero ? '= 0' : '= \\;?'}`);
    jacRight.querySelector('.compare-eq-label').textContent = 'Not written out in section 18';
    if (zero) notes.push('Zero block in (18.37); the notes don’t give it its own equation.');
    else if (deriv) notes.push(`Section 18 doesn’t write this block out, but its derivation is in (${deriv[0]})–(${deriv[1]}).`);
    else notes.push('This block isn’t in the notes.');
  }
  if (col.alias) notes.push(`Column ${col.name} of (18.1) is ${col.alias}.`);
  if (row.notes[col.key]) notes.push(row.notes[col.key]);
  jacRightNote.textContent = notes.join(' ');
}

function renderJacMap() {
  jacMap.innerHTML = '';
  jacMap.style.gridTemplateColumns = `auto repeat(${JAC_COLS.length}, 1fr)`;
  jacMap.appendChild(document.createElement('span'));
  JAC_COLS.forEach((col, c) => {
    const head = document.createElement('span');
    head.className = 'jac-map-head' + (c === jac.c ? ' active' : '');
    renderKatex(col.tex, head, false);
    jacMap.appendChild(head);
  });
  JAC_ROWS.forEach((row, r) => {
    const head = document.createElement('span');
    head.className = 'jac-map-head row' + (r === jac.r ? ' active' : '');
    renderKatex(row.tex, head, false);
    jacMap.appendChild(head);
    JAC_COLS.forEach((col, c) => {
      const tag = row.entries[col.key];
      const zero = isZeroBlock(r, c);
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'jac-map-cell'
        + (r === jac.r && c === jac.c ? ' active' : '')
        + (zero ? ' zero' : '')
        + (!tag && !zero ? ' missing' : '');
      cell.textContent = zero ? '0' : (tag || '—');
      cell.title = `∂${row.plain}/∂${col.name}` + (tag ? ` (${tag})` : zero ? ' — zero block' : ' — not written out in section 18');
      cell.addEventListener('click', () => openJacobian(r, c));
      jacMap.appendChild(cell);
    });
  });
  scrollMapToActive();
}

// On narrow screens the map scrolls sideways; keep the selected block in view.
function scrollMapToActive() {
  const active = jacMap.querySelector('.jac-map-cell.active');
  if (active && jacMap.scrollWidth > jacMap.clientWidth) {
    jacMap.scrollLeft = Math.max(0, active.offsetLeft - (jacMap.clientWidth - active.offsetWidth) / 2);
  }
}

function renderJacActions() {
  const row = JAC_ROWS[jac.r];
  const col = JAC_COLS[jac.c];
  const tag = row.entries[col.key];
  const deriv = row.derivations[col.key];
  jacActions.innerHTML = '';
  const add = (text, id) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'compare-goto-btn';
    btn.textContent = text;
    btn.addEventListener('click', () => {
      closeJacobian();
      const idx = idxOf(id);
      if (idx >= 0) goTo(idx);
    });
    jacActions.appendChild(btn);
  };
  add(`Go to residual (${jac.leftId})`, jac.leftId);
  if (tag) add(`Go to entry (${tag})`, tag);
  if (deriv) add(`Derivation (${deriv[0]})–(${deriv[1]})`, deriv[0]);
  add(`Where ${row.plain} comes from (${row.chapter})`, row.chapter);
}

document.getElementById('btn-jac-close').addEventListener('click', closeJacobian);
jacOverlay.addEventListener('click', closeJacobian);

// ============================================================
// Search: equations, sections and Jacobian blocks
// ============================================================

const searchInput   = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchIndex = [];
let searchHits = [];
let searchActive = 0;

const GREEK = {
  'α': 'alpha', 'β': 'beta', 'γ': 'gamma', 'δ': 'delta', 'ε': 'epsilon', 'ζ': 'zeta', 'η': 'eta',
  'θ': 'theta', 'λ': 'lambda', 'μ': 'mu', 'ν': 'nu', 'ξ': 'xi', 'π': 'pi', 'ρ': 'rho', 'σ': 'sigma',
  'τ': 'tau', 'φ': 'phi', 'ψ': 'psi', 'ω': 'omega', 'ϖ': 'varpi', 'ϱ': 'varrho',
};

function norm(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[α-ωϖϱ]/g, ch => ` ${GREEK[ch] || ''} `)
    .replace(/[^a-z0-9.]+/g, ' ')
    .replace(/(^|\s)\.+|\.+(?=\s|$)/g, ' ') // keep dots only inside tags like 18.3
    .trim()
    .replace(/\s+/g, ' ');
}

function buildSearchIndex() {
  sections.forEach(sec => {
    const idx = equations.findIndex(e => e.section === sec.id);
    if (idx < 0) return;
    searchIndex.push({
      kind: 'section', idx, title: sec.title, sub: sec.subtitle || 'Section',
      fields: { label: norm(sec.title), section: norm(sec.subtitle) },
    });
  });
  equations.forEach((eq, idx) => {
    const sec = sections.find(s => s.id === eq.section);
    searchIndex.push({
      kind: 'eq', idx, id: eq.id, title: eq.label, sub: sec ? sec.title : '',
      fields: { id: eq.id, label: norm(eq.label), section: norm(sec ? sec.title : ''), desc: norm(eq.description) },
    });
  });
  JAC_ROWS.forEach((row, r) => JAC_COLS.forEach((col, c) => {
    const tag = row.entries[col.key];
    searchIndex.push({
      kind: 'jac', r, c, title: `∂${row.plain}/∂${col.name}`,
      sub: `System Jacobian · ${row.name} residual${tag ? ` · (${tag})` : ''}`,
      fields: {
        label: norm(`jacobian block d${row.plain} d${col.key} ${row.plain} ${col.words} ${row.name}`),
        section: 'system jacobian',
      },
    });
  }));
}

const FIELD_WEIGHTS = { id: 8, label: 4, section: 2, desc: 1 };

function fieldScore(text, token) {
  if (!text) return 0;
  const words = text.split(' ');
  if (words.includes(token)) return 1;
  if (words.some(w => w.startsWith(token))) return 0.8;
  if (token.length >= 3 && text.includes(token)) return 0.5;
  return 0;
}

function scoreEntry(entry, tokens, phrase) {
  let total = 0;
  for (const token of tokens) {
    let best = 0;
    for (const [field, weight] of Object.entries(FIELD_WEIGHTS)) {
      const text = entry.fields[field];
      if (!text) continue;
      const s = field === 'id' ? (text === token ? 1 : text.startsWith(token) ? 0.6 : 0) : fieldScore(text, token);
      best = Math.max(best, s * weight);
    }
    if (best === 0) return 0; // every word must match somewhere
    total += best;
  }
  if (phrase.length > 2 && entry.fields.label && entry.fields.label.includes(phrase)) total += 6;
  if (entry.kind === 'section') total += 1;
  return total;
}

// Filler words never have to match ("derivatives of M w.r.t. h").
const STOPWORDS = new Set(['of', 'the', 'a', 'an', 'to', 'and', 'in', 'on', 'for', 'with', 'respect',
  'wrt', 'w.r.t', 'w.r.t.', 'by', 'is']);

function runSearch() {
  const all = norm(searchInput.value);
  const tokens = all.split(' ').filter(t => t && !STOPWORDS.has(t));
  const phrase = tokens.join(' ');
  if (!tokens.length) { hideSearch(); return; }
  searchHits = searchIndex
    .map(entry => ({ entry, score: scoreEntry(entry, tokens, phrase) }))
    .filter(h => h.score > 0)
    .sort((a, b) => b.score - a.score || (a.entry.idx ?? 1e9) - (b.entry.idx ?? 1e9))
    .slice(0, 12)
    .map(h => h.entry);
  searchActive = 0;
  renderSearchResults();
}

function renderSearchResults() {
  searchResults.innerHTML = '';
  if (!searchHits.length) {
    searchResults.innerHTML = '<div class="search-empty">No matches</div>';
    searchResults.hidden = false;
    return;
  }
  searchHits.forEach((hit, i) => {
    const item = document.createElement('div');
    item.className = 'search-item' + (i === searchActive ? ' active' : '');
    item.setAttribute('role', 'option');
    const badge = hit.kind === 'section' ? '§' : hit.kind === 'jac' ? '∂' : `(${hit.id})`;
    item.innerHTML = `<span class="search-badge ${hit.kind}"></span><span class="search-text"><span class="search-title"></span><span class="search-sub"></span></span>`;
    item.querySelector('.search-badge').textContent = badge;
    item.querySelector('.search-title').textContent = hit.title;
    item.querySelector('.search-sub').textContent = hit.sub;
    // mousedown, not click: fires before the input loses focus and closes the list
    item.addEventListener('mousedown', (e) => { e.preventDefault(); chooseSearchHit(hit); });
    item.addEventListener('mousemove', () => { if (searchActive !== i) { searchActive = i; highlightSearchItem(); } });
    searchResults.appendChild(item);
  });
  searchResults.hidden = false;
}

function highlightSearchItem() {
  [...searchResults.children].forEach((el, i) => el.classList.toggle('active', i === searchActive));
  const active = searchResults.children[searchActive];
  if (active) active.scrollIntoView({ block: 'nearest' });
}

function chooseSearchHit(hit) {
  searchInput.value = '';
  hideSearch();
  searchInput.blur();
  closeTOC();
  closeComparison();
  if (hit.kind === 'jac') {
    openJacobian(hit.r, hit.c);
  } else {
    closeJacobian();
    goTo(hit.idx);
  }
}

function hideSearch() {
  searchResults.hidden = true;
  searchHits = [];
}

searchInput.addEventListener('input', runSearch);
searchInput.addEventListener('focus', () => { if (searchInput.value) runSearch(); });
searchInput.addEventListener('blur', () => setTimeout(hideSearch, 100));
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!searchHits.length) return;
    searchActive = (searchActive + (e.key === 'ArrowDown' ? 1 : -1) + searchHits.length) % searchHits.length;
    highlightSearchItem();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (searchHits[searchActive]) chooseSearchHit(searchHits[searchActive]);
  } else if (e.key === 'Escape') {
    searchInput.value = '';
    hideSearch();
    searchInput.blur();
  }
});

// ---- Init ----
buildSearchIndex();
buildFlow();
