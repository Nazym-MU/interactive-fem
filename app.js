// ============================================================
// FEM Dynamic Wetting · Main Application Engine
// ============================================================

import { equations as allEquations, sections } from './equations.js';

// Filter out equations that shouldn't appear in the main flow (like jacobian entries)
const equations = allEquations.filter(e => !e.hidden);

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

// ---- Wait for KaTeX to load ----
function waitForKatex() {
  return new Promise(resolve => {
    if (window.katex) return resolve();
    const check = setInterval(() => {
      if (window.katex) { clearInterval(check); resolve(); }
    }, 50);
  });
}

// ---- Render a single equation card ----
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
      macros: {
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
      }
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
            // Show the matrix in Current, and the block in Derives From
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

  return card;
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
  div.innerHTML = `
    <span class="section-title">
      ${section.title}
      ${section.subtitle ? `<span class="section-subtitle">${section.subtitle}</span>` : ''}
    </span>
  `;
  return div;
}

// ---- Build all cards (hidden initially) ----
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
      }
    }

    // Transform annotation
    const transform = renderTransform(eq);
    if (transform) {
      transform.style.display = 'none';
      transform.dataset.forIdx = idx;
      flow.appendChild(transform);
    }

    // Equation card
    const card = renderEquation(eq, idx);
    flow.appendChild(card);
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

  // Update all cards
  const cards = flow.querySelectorAll('.eq-card');
  cards.forEach((card, i) => {
    card.classList.remove('current', 'faded', 'entering');

    if (i <= state.revealedUpTo) {
      // Show section dividers and transforms
      showElementsBefore(card);
      card.style.display = '';

      if (i === idx) {
        card.classList.add('visible', 'current');
        if (i > prevIdx) card.classList.add('entering');
      } else if (i < idx) {
        card.classList.add('visible', 'faded');
      } else {
        card.classList.add('visible', 'faded');
      }
    } else {
      card.style.display = 'none';
    }
  });

  // Scroll to current
  const currentCard = document.getElementById(`eq-${equations[idx].id}`);
  if (currentCard) {
    setTimeout(() => {
      currentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  updateUI();
  clearReferenceHighlight();
}

function showElementsBefore(card) {
  // Show preceding section-divider and transform annotation
  let prev = card.previousElementSibling;
  while (prev && !prev.classList.contains('eq-card')) {
    prev.style.display = '';
    if (prev.classList.contains('section-divider')) {
      prev.style.opacity = '1';
    }
    prev = prev.previousElementSibling;
  }
}

function next() { goTo(state.currentIdx + 1); }
function prev() { goTo(state.currentIdx - 1); }

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

  // Timeline dots
  timelineDots.querySelectorAll('.timeline-dot').forEach((dot, i) => {
    dot.classList.remove('active', 'visited');
    if (i === idx) dot.classList.add('active');
    else if (i <= state.revealedUpTo) dot.classList.add('visited');
  });

  // TOC
  tocList.querySelectorAll('.toc-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.idx === String(idx)) item.classList.add('active');
  });
}

// ---- Timeline ----
function buildTimeline() {
  timelineDots.innerHTML = '';
  // For 200+ equations, show section markers + nearby dots
  const showAll = equations.length <= 40;

  equations.forEach((eq, idx) => {
    const dot = document.createElement('div');
    dot.className = 'timeline-dot';
    dot.style.left = `${(idx / (equations.length - 1)) * 100}%`;
    dot.title = `(${eq.id}) ${eq.label}`;
    dot.addEventListener('click', () => goTo(idx));

    // Mark section starts
    if (idx === 0 || eq.section !== equations[idx - 1].section) {
      dot.classList.add('section-start');
    }

    // Hide dots if too many (show only section starts)
    if (!showAll && idx > 0 && eq.section === equations[idx - 1]?.section) {
      dot.style.display = 'none';
    }

    timelineDots.appendChild(dot);
  });
}

// ---- TOC ----
function buildTOC() {
  tocList.innerHTML = '';
  let currentSection = null;

  equations.forEach((eq, idx) => {
    if (eq.section !== currentSection) {
      currentSection = eq.section;
      const sec = sections.find(s => s.id === eq.section);
      if (sec) {
        const secLabel = document.createElement('div');
        secLabel.className = 'toc-section-label';
        secLabel.textContent = sec.title;
        // Make section label clickable to jump to first eq in section
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

  // Fill top side (referenced equation, older)
  fillCompareCard(compareTop, refEq, 'Derives from');
  // Fill bottom side (current equation, newer)
  fillCompareCard(compareBottom, currentEq, 'Current');

  // Arrow label
  const arrowLabel = comparePanel.querySelector('.compare-arrow-label');
  arrowLabel.textContent = 'builds to';

  // Show panel
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

  // Animate in
  requestAnimationFrame(() => line.classList.add('visible'));

  // Also softly highlight the target
  toCard.classList.add('referenced');
  toCard.classList.remove('faded');
}

function hideRefLines() {
  refLinesSvg.innerHTML = '';
  // Remove referenced class from non-active refs
  flow.querySelectorAll('.eq-card.referenced').forEach(card => {
    const eqId = card.dataset.eqId;
    if (eqId !== state.activeRef) {
      card.classList.remove('referenced');
      const idx = equations.findIndex(e => e.id === eqId);
      if (idx < state.currentIdx) card.classList.add('faded');
    }
  });
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
      // If hidden jacobian entry, jump to the matrix
      const matrixIdx = equations.findIndex(e => e.id === '18.37' || e.id === '18.1');
      if (matrixIdx >= 0) goTo(matrixIdx);
    }
  }
  closeComparison();
});

// ---- Scroll wheel navigation (optional) ----
let scrollTimeout = null;
document.addEventListener('wheel', (e) => {
  // Debounce to prevent too-fast scrolling
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
