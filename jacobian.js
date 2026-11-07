// ============================================================
// System Jacobian structure: which residual each block-row differentiates,
// which variable each block-column is, and where every block lives in the notes.
//
// The column order is the one in (18.1)/(18.37). The notes use different symbols
// for the boundary multipliers in different places, so columns are matched by
// position and by the coefficient each derivative produces:
//   column ω²  = ϖ² in the derivation chapters, written ∂_{λ²} in (18.5)/(18.12)  -> d_{ii,jj,n}
//   column ω³  = λ³ in the derivation chapters, written ∂_{λ³} in (18.13)          -> f_{ii,jj,n}
//   column ε³  = γ³ in the derivation chapters, written ∂_{γ³} in (18.14)          -> f_{ii,jj,t}
// ============================================================

export const JAC_COLS = [
  { key: 'u',    tex: 'u',          name: 'u',  words: 'u radial velocity',
    hl: { letters: ['u'] } },
  { key: 'w',    tex: 'w',          name: 'w',  words: 'w axial velocity',
    hl: { letters: ['w'] } },
  { key: 'p',    tex: 'p',          name: 'p',  words: 'p pressure',
    hl: { letters: ['p'] } },
  { key: 'om2',  tex: '\\omega^2',  name: 'ω²', words: 'omega2 varpi2 lambda2 multiplier boundary 2',
    alias: 'ϖ² in the derivations, λ² in section 18',
    hl: { cmds: ['\\varpi', '\\omega', '\\lambda'], sup: '2' } },
  { key: 'om3',  tex: '\\omega^3',  name: 'ω³', words: 'omega3 lambda3 multiplier boundary 3 normal',
    alias: 'λ³ in the derivations and section 18',
    hl: { cmds: ['\\lambda', '\\varpi', '\\omega', '\\nu'], sup: '3' } },
  { key: 'eps3', tex: '\\epsilon^3', name: 'ε³', words: 'epsilon3 gamma3 multiplier boundary 3 tangential',
    alias: 'γ³ in the derivations and section 18',
    hl: { cmds: ['\\gamma', '\\varrho', '\\epsilon', '\\varepsilon'], sup: '3' } },
  // h never appears explicitly in a residual: it moves the mesh nodes, so ∂/∂h
  // acts on the geometric coefficients a, b, c, d, f.
  { key: 'h',    tex: 'h',          name: 'h',  words: 'h focal length mesh nodes',
    hl: { letters: ['a', 'b', 'c', 'd', 'f'] }, viaCoefficients: true },
];

export const JAC_ROWS = [
  {
    key: 'Mr', tex: '\\hat{M}^r', plain: 'M^r', name: 'r-momentum',
    residual: '17.1', parts: ['17.2', '17.3', '17.4', '17.5'], chapter: '4.1',
    entries: { u: '18.2', w: '18.3', p: '18.4', om2: '18.5', om3: null, eps3: null, h: '18.8' },
    derivations: {
      u: ['4.157', '4.172'], w: ['4.173', '4.186'], p: ['4.187', '4.190'],
      om2: ['4.200', '4.203'], om3: ['4.204', '4.207'], eps3: ['4.208', '4.211'], h: ['4.220', '4.244'],
    },
    notes: {
      om2: '(18.38): this block is zero when boundary 2 is a straight line parallel to the r axis.',
      eps3: '(18.39–40): this block is zero when boundary 3 is a straight line parallel to the z axis.',
    },
  },
  {
    key: 'Mz', tex: '\\hat{M}^z', plain: 'M^z', name: 'z-momentum',
    residual: '17.6', parts: ['17.7', '17.8', '17.9', '17.10'], chapter: '5.1',
    entries: { u: '18.9', w: '18.10', p: '18.11', om2: '18.12', om3: '18.13', eps3: '18.14', h: '18.15' },
    derivations: {
      u: ['5.107', '5.114'], w: ['5.115', '5.124'], p: ['5.125', '5.128'],
      om2: ['5.138', '5.141'], om3: ['5.142', '5.145'], eps3: ['5.146', '5.149'], h: ['5.158', '5.180'],
    },
    notes: {
      om3: '(18.39–40): this block is zero when boundary 3 is a straight line parallel to the z axis.',
    },
  },
  {
    key: 'C', tex: '\\hat{C}', plain: 'C', name: 'continuity',
    residual: '17.11', parts: [], chapter: '6.1',
    entries: { u: '18.16', w: '18.17', p: '18.18', om2: '18.19', om3: '18.20', eps3: null, h: '18.22' },
    zeros: ['p', 'om2', 'om3', 'eps3'],
    derivations: { u: ['6.11', '6.13'], w: ['6.14', '6.16'], h: ['6.17', '6.19'] },
    notes: {},
  },
  {
    key: 'K', tex: '\\hat{K}', plain: 'K', name: 'kinematic boundary condition',
    residual: '17.12', parts: [], chapter: '13.1',
    entries: { u: '18.23', w: '18.24', p: '18.25', om2: '18.26', om3: '18.27', eps3: null, h: null },
    zeros: ['p', 'om2', 'om3', 'eps3'],
    derivations: { u: ['13.14', '13.16'], w: ['13.17', '13.19'], h: ['13.20', '13.24'] },
    notes: {},
  },
  {
    key: 'I', tex: '\\hat{I}', plain: 'I', name: 'impermeability',
    residual: '17.13', parts: [], chapter: '8.1',
    // (18.34) is written ∂_{ν³} and (18.35) ∂_s; they sit in the ω³ and ε³ slots of (18.37).
    entries: { u: '18.30', w: '18.31', p: '18.32', om2: '18.33', om3: '18.34', eps3: '18.35', h: '18.36' },
    zeros: ['p', 'om2', 'om3', 'eps3'],
    derivations: { u: ['8.17', '8.19'], w: ['8.20', '8.22'], h: ['8.23', '8.25'] },
    notes: {},
  },
];

// Fast lookups: entry tag -> {r, c}, residual tag -> row index
export const ENTRY_INDEX = new Map();
export const RESIDUAL_INDEX = new Map();
JAC_ROWS.forEach((row, r) => {
  RESIDUAL_INDEX.set(row.residual, r);
  row.parts.forEach(t => RESIDUAL_INDEX.set(t, r));
  JAC_COLS.forEach((col, c) => {
    const tag = row.entries[col.key];
    if (tag) ENTRY_INDEX.set(tag, { r, c });
  });
});

export function cellTex(r, c) {
  const col = JAC_COLS[c];
  const sub = col.tex.length === 1 ? col.tex : `{${col.tex}}`;
  return `\\partial_${sub} ${JAC_ROWS[r].tex}`;
}

export function isZeroBlock(r, c) {
  return (JAC_ROWS[r].zeros || []).includes(JAC_COLS[c].key);
}

// ---- Highlight every occurrence of a variable inside a LaTeX string ----
// Reads the symbol together with its sub/superscripts (so u_{l(e,jj)} is one unit),
// optionally keeps only a given superscript (λ³ but not λ²), and wraps each match
// in \htmlClass{var-hl}{...}. Returns the new LaTeX and how many matches there were.
function readGroup(s, i) {
  if (s[i] === '{') {
    let depth = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === '{') depth++;
      else if (s[j] === '}' && --depth === 0) return [s.slice(i + 1, j), j + 1];
    }
    return [s.slice(i + 1), s.length];
  }
  if (s[i] === '\\') {
    const m = /^\\[a-zA-Z]+/.exec(s.slice(i));
    if (m) return [m[0], i + m[0].length];
  }
  return [s[i] || '', i + 1];
}

export function highlightSymbol(latex, spec) {
  let out = '';
  let count = 0;
  let i = 0;
  while (i < latex.length) {
    let sym = null;
    if (spec.cmds) {
      for (const cmd of spec.cmds) {
        if (latex.startsWith(cmd, i) && !/[a-zA-Z]/.test(latex[i + cmd.length] || '')) { sym = cmd; break; }
      }
    }
    if (!sym && spec.letters) {
      const ch = latex[i];
      // A bare letter immediately followed by a subscript, not part of a command or word.
      if (spec.letters.includes(ch) && latex[i + 1] === '_' && !/[a-zA-Z\\]/.test(latex[i - 1] || '')) sym = ch;
    }
    if (!sym) { out += latex[i++]; continue; }

    let j = i + sym.length;
    let sup = null;
    while (latex[j] === '_' || latex[j] === '^') {
      const isSup = latex[j] === '^';
      const [group, next] = readGroup(latex, j + 1);
      if (isSup) sup = group.trim();
      j = next;
    }
    if (spec.sup && sup !== spec.sup) { out += latex.slice(i, j); i = j; continue; }
    out += `\\htmlClass{var-hl}{${latex.slice(i, j)}}`;
    count++;
    i = j;
  }
  return { latex: out, count };
}
