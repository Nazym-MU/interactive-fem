#!/usr/bin/env python3
"""Generate equations.js from fem.tex - v2 with proper subsections."""

import re
import json

with open('fem.tex', 'r') as f:
    tex = f.read()

# ─── Extract section structure ───
section_pattern = re.compile(r'\\(section|subsection|subsubsection)\{((?:[^{}]|\{[^{}]*\})+)\}')
sections_raw = []
for m in section_pattern.finditer(tex):
    title = m.group(2).strip()
    title = re.sub(r'\\\(([^)]*)\\\)', r'\1', title)
    title = title.replace(r'\(', '').replace(r'\)', '').replace('$', '')
    # Textual replacements for math commands in title
    title = title.replace(r'\mathcal{M}', 'M')
    title = title.replace(r'\mathcal{C}', 'C')
    title = title.replace(r'\mathcal{S}', 'S')
    title = title.replace(r'\mathcal{I}', 'I')
    title = title.replace(r'\mathcal{K}', 'K')
    title = title.replace(r'\dt', 'dt')
    title = title.replace(r'\ca', 'Ca')
    title = title.replace(r'\cM', 'M')
    title = title.replace('\\', '')
    title = title.replace('{', '').replace('}', '')
    sections_raw.append({
        'level': m.group(1),
        'title': title,
        'pos': m.start()
    })

# ─── Extract all equations ───
env_pattern = re.compile(
    r'\\begin\{(equation|align)\}\s*(.*?)\s*\\end\{\1\}',
    re.DOTALL
)

def _repl_space(m):
    return ' ' * (m.end() - m.start())

tex_clean = re.sub(r'\\begin\{[^}]*\}.*?\\end\{[^}]*\}', _repl_space, tex, flags=re.DOTALL)
tex_clean = re.sub(r'\\\[.*?\\\]', _repl_space, tex_clean, flags=re.DOTALL)
tex_clean = re.sub(r'\$\$.*?\$\$', _repl_space, tex_clean, flags=re.DOTALL)

raw_equations = []
for m in env_pattern.finditer(tex):
    env_type = m.group(1)
    body = m.group(2).strip()
    
    start_pos = m.start()
    end_pos = m.end()
    context_before = tex_clean[max(0, start_pos - 600):start_pos]
    context_after = tex_clean[end_pos:end_pos + 600]

    tags = list(re.finditer(r'\\tag\{([^}]+)\}', body))
    if not tags:
        continue

    last_index = 0
    for i, tag_m in enumerate(tags):
        tag = tag_m.group(1).strip()
        chunk = body[last_index:tag_m.start()].strip()

        # Clean up chunk boundaries
        chunk = re.sub(r'\\nonumber\s*\\\\', '', chunk).strip()
        chunk = re.sub(r'^\\\\', '', chunk).strip()
        chunk = re.sub(r'\\nonumber$', '', chunk).strip()

        if env_type == 'align':
            latex = '\\begin{aligned}\n' + chunk + '\n\\end{aligned}'
        else:
            latex = chunk

        raw_equations.append({
            'tag': tag,
            'latex_raw': latex,
            'pos': start_pos, # keep original for context
            'end_pos': end_pos,
            'context_before': context_before,
            'context_after': context_after,
        })
        last_index = tag_m.end()

# ─── KaTeX conversion ───
def convert_to_katex(latex):
    s = latex
    s = re.sub(r'\\pmb\s*\{', r'\\boldsymbol{', s)
    s = re.sub(r'\\pmb\s+', r'\\boldsymbol ', s)
    s = re.sub(r'\\bm\s*\{', r'\\boldsymbol{', s)
    # Remove trailing commas/periods from math
    s = s.rstrip(',. ')
    lines = s.split('\n')
    lines = [l.rstrip() for l in lines]
    s = '\n'.join(lines)
    return s.strip()

# ─── Assign sections with full hierarchy ───
section_ids_map = {}

def get_section_id(section, subsection, subsubsection):
    # Create a combined key
    if subsubsection:
        key = f"{section}|{subsection}|{subsubsection}"
    elif subsection:
        key = f"{section}|{subsection}"
    else:
        key = section
    
    if key not in section_ids_map:
        # Create clean id from most specific name
        parts = key.split('|')
        name = parts[-1]
        sid = re.sub(r'[^a-z0-9]+', '_', name.lower()).strip('_')[:40]
        section_ids_map[key] = {
            'id': sid,
            'title': parts[-1],
            'subtitle': parts[0] if len(parts) > 1 else '',
            'key': key,
        }
    return section_ids_map[key]['id']

for eq in raw_equations:
    eq['section_name'] = ''
    eq['subsection_name'] = ''
    eq['subsubsection_name'] = ''
    for sec in sections_raw:
        if sec['pos'] < eq['pos']:
            if sec['level'] == 'section':
                eq['section_name'] = sec['title']
                eq['subsection_name'] = ''
                eq['subsubsection_name'] = ''
            elif sec['level'] == 'subsection':
                eq['subsection_name'] = sec['title']
                eq['subsubsection_name'] = ''
            elif sec['level'] == 'subsubsection':
                eq['subsubsection_name'] = sec['title']
    
    eq['section_id'] = get_section_id(
        eq['section_name'], eq['subsection_name'], eq['subsubsection_name']
    )

# ─── Find references ───
all_tags = set(eq['tag'] for eq in raw_equations)

def find_references(eq, all_tags):
    refs = set()
    ctx = eq['context_before']
    for m in re.finditer(r'\((\d+\.\d+)\)', ctx):
        ref = m.group(1)
        if ref != eq['tag'] and ref in all_tags:
            refs.add(ref)
    for m in re.finditer(r'equation\s+(\d+\.\d+)', ctx, re.IGNORECASE):
        ref = m.group(1)
        if ref != eq['tag'] and ref in all_tags:
            refs.add(ref)
    return sorted(refs)

for eq in raw_equations:
    eq['references'] = find_references(eq, all_tags)

# ─── Extract description from context ───
def extract_description(ctx):
    # ctx is already stripped of block math environments
    text = ctx[-2000:] # only take the last 2000 chars

    # Remove inline math
    text = re.sub(r'\\\(.*?\\\)', '', text)
    text = re.sub(r'\$.*?\$', '', text)
    # Remove LaTeX commands with arguments
    text = re.sub(r'\\[a-zA-Z]+\*?\{[^}]*\}', '', text)
    # Remove standalone LaTeX commands
    text = re.sub(r'\\[a-zA-Z]+\*?', '', text)
    # Remove braces, carets, underscores, math symbols
    text = re.sub(r'[{}_^~&]', '', text)
    # Remove stray backslashes
    text = text.replace('\\', '')
    # Remove numeric artifacts like "1^n_v^e"
    text = re.sub(r'\d+\^[a-zA-Z_^{}]+', '', text)
    # Collapse whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    # Split into sentences
    sentences = [s.strip() for s in re.split(r'(?<=[.;:!])\s+', text) if len(s.strip()) > 20]
    # Take the last sentence that looks like prose (has some letters)
    for s in reversed(sentences):
        # Must be mostly alphabetic
        alpha = sum(1 for c in s if c.isalpha())
        if alpha < len(s) * 0.7:  # Stricter requirement to avoid math-only strings like Hii nr2 + [ 4Ca Es + Be ] 2,f
            continue
        desc = s.rstrip('.;:, ')
        desc = re.sub(r'^[^A-Za-z]*', '', desc)
        if desc and desc[0].islower():
            desc = desc[0].upper() + desc[1:]
        if len(desc) > 200:
            desc = desc[:200].rsplit(' ', 1)[0]
        if len(desc) > 20:
            return desc
    return ''

for eq in raw_equations:
    eq['description'] = extract_description(eq['context_before'])

# ─── Labels ───
label_overrides = {
    '2.1': 'ALE Momentum Equation',
    '2.2': 'Stress Tensor',
    '2.3': 'Continuity (Mass Conservation)',
    '2.4': 'Axis Impermeability',
    '2.5': 'Axis No-Tangential-Stress',
    '2.6': 'Free Surface KBC',
    '2.7': 'Tangential DBC (Free Surface)',
    '2.8': 'Normal DBC (Free Surface)',
    '2.9': 'Surface Divergence Identity',
    '2.10': 'Combined DBC1',
    '2.11': 'Surface-Bulk Velocity (SC1)',
    '2.12': 'Surface Tension vs Density (TDC1)',
    '2.13': 'Mass Exchange (MEC1)',
    '2.14': 'Density Transport (DTC1)',
    '2.15': 'Vector Calculus Identity',
    '2.16': 'Product Rule Expansion',
    '2.17': 'Rearranged Convective Term',
    '2.18': 'DTC1 Substituted',
    '2.19': 'DTC1 Final Form',
    '2.20': 'Solid Impermeability (IC)',
    '2.21': 'Slip Condition (SC2)',
    '2.22': 'Generalised Navier Slip (GNSC)',
    '2.23': 'GNSC with SC1',
    '2.24': 'Surface Tension vs Density (TDC2)',
    '2.25': 'Mass Exchange (MEC2)',
    '2.26': 'Density Transport (DTC2)',
    '2.27': 'DTC2 Reformulated',
    '2.28': "Young's Equation",
    '2.29': 'Mass Balance at Contact Line',
    '2.30': 'Normal m1 via Rotation',
    '2.31': 'Tangent m2',
    '2.32': 'Solid Contact Angle',
    '2.33': 'cos(theta) = m1 dot m2',
    '2.34': 'Normal Stress on Bdry 4',
    '2.35': 'Tangential Stress on Bdry 4',
    '2.36': 'Momentum Non-dim (Step 1)',
    '2.37': 'Dimensionless Stress Tensor',
    '2.38': 'Non-dim Momentum Equation',
    '2.39': 'Reynolds Number',
    '2.40': 'Stokes Number',
    '2.41': 'Dimensionless Continuity',
    '2.42': 'Axis Impermeability (Non-dim)',
    '2.43': 'Axis No-Stress (Non-dim)',
    '2.44': 'KBC (Non-dim)',
    '2.45': 'DBC Non-dim (Step 1)',
    '2.46': 'DBC1 (Non-dim)',
    '2.47': 'SC1 (Non-dim)',
    '2.48': 'TDC1 (Non-dim)',
    '2.49': 'MEC1 (Non-dim)',
    '2.50': 'DTC1 (Non-dim)',
    '2.51': 'IC (Non-dim)',
    '2.52': 'SC2 (Non-dim)',
    '2.53': 'GNSC (Non-dim)',
    '2.54': 'TDC2 (Non-dim)',
    '2.55': 'MEC2 (Non-dim)',
    '2.56': 'DTC2 (Non-dim)',
    '2.57': "Young's Equation (Non-dim)",
    '2.58': 'MBC (Non-dim)',
    '2.59': 'Contact Angle (Non-dim)',
    '3.1': 'r-Momentum (Components)',
    '3.2': 'z-Momentum (Components)',
    '3.3': 'Continuity (Components)',
    '3.4': 'KBC (Components)',
    '3.5': 'IC (Components)',
    '4.1': 'r-Momentum Residual',
    '4.2': 'Tensor Divergence Identity',
    '4.3': 'Applied to Stress',
    '4.4': 'Residual with IBP',
    '4.5': 'After Divergence Theorem',
    '4.6': 'Grad-Stress (Matrix)',
    '4.7': 'Grad-Stress (Components)',
    '4.8': 'Grad-Stress Simplified',
    '4.9': 'Full Residual M_i^r',
    '4.10': 'Cross-Derivative Integral',
    '4.11': 'Integration by Parts',
    '4.12': 'IBP Step 1',
    '4.13': 'Derivative Exchange',
    '4.14': 'Second IBP',
    '4.15': 'Continuity Substitution',
    '4.16': 'Expanded Residual',
    '4.17': 'Boundary Decomposition',
    '4.18': 'M_i^r = Sum of Parts',
    '4.19': 'Bulk Residual M^{r,0}',
    '4.20': 'Free Surface M^{r,1}',
    '4.21': 'Solid Surface M^{r,2}',
    '4.22': 'Symmetry Axis M^{r,3}',
    '4.23': 'Separatrix M^{r,5}',
    '4.24': 'DBC1 Restatement',
    '4.25': 'phi_i e_r dot P dot n^1',
    '4.26': 'Surface Div Identity',
    '4.27': 'Identity Applied',
    '4.28': 'Rearranged',
    '4.29': 'Surface Gradient 1D',
    '4.30': 'Projection Computation',
    '4.31': 'Simplified Projection',
    '4.32': 'Surface Div Result',
    '4.33': 'Stress dot n^1 Final',
    '4.34': 'M^{r,1} Intermediate',
    '4.35': 'M^{r,1} Div Theorem',
    '4.36': 'M^{r,1} with Endpoints',
    '4.37': 'Apex Normal Vector',
    '4.38': 'Bdry 2 Stress Integral',
    '4.39': 'GNSC Substitution',
    '4.40': 'Stress dot n^2 Expanded',
    '4.41': 'Stress dot n^2 Components',
    '4.42': 'Stress dot n^2 Regrouped',
    '4.43': 'M^{r,2} Expression',
    '4.44': 'Bdry 3 Stress Integral',
    '4.45': 'Stress dot n^3 Decomposed',
    '4.46': 'Stress dot n^3 Simplified',
    '4.47': 'M^{r,3} Expression',
    '4.49': 'Stress dot n^4 Decomposed',
    '4.50': 'Stress dot n^4 Simplified',
    '4.51': 'M^{r,4} Expression',
    '4.52': 'BDF2 for du/dt',
    '4.53': 'BDF2 for dw/dt',
    '4.54': 'Mesh Velocity u^c',
    '4.55': 'Mesh Velocity w^c',
    '4.56': 'M^{r,0} with BDF2',
    '4.57': 'M^{r,1} with BDF2',
    '4.58': 'M^{r,2} with BDF2',
    '4.59': 'M^{r,3} with BDF2',
    '4.60': 'M^{r,5} with BDF2',
    '4.61': 'M^{r,0} Rescaled',
    '4.62': 'M^{r,1} Rescaled',
    '4.63': 'M^{r,2} Rescaled',
    '4.64': 'M^{r,3} Rescaled',
    '4.65': 'M^{r,5} Rescaled',
    '4.66': 'FE: u(r,z,t)',
    '4.67': 'FE: w(r,z,t)',
    '4.68': 'FE: r^c(r,z,t)',
    '4.69': 'FE: z^c(r,z,t)',
    '4.70': 'FE: p(r,z,t)',
    '4.71': 'FE: sigma^1',
    '4.72': 'FE: lambda^2',
    '4.73': 'FE: lambda^3',
    '4.74': 'FE: gamma^3',
    '4.75': 'FE: lambda^4',
    '4.76': 'FE: gamma^4',
    '4.77': 'FE: u^s',
    '4.78': 'FE: w^s',
    '4.79': 'FE: p^g',
    '4.80': 'FE: sigma^2',
    '4.81': 'Residual Decomposition',
    '4.82': 'M^{r,0} Global Sums',
    '4.83': 'M^{r,1} Global Sums',
    '4.84': 'M^{r,2} Global Sums',
    '4.85': 'M^{r,3} Global Sums',
    '4.86': 'M^{r,5} Global Sums',
    '4.87': 'M^{r,0} Rearranged',
    '4.88': 'M^{r,1} Rearranged',
    '4.89': 'M^{r,2} Rearranged',
    '4.90': 'M^{r,3} Rearranged',
    '4.91': 'M^{r,4} Rearranged',
    '4.92': 'M^{r,0} Reordered',
    '4.93': 'M^{r,1} Reordered',
    '4.94': 'M^{r,2} Reordered',
    '4.95': 'M^{r,3} Reordered',
    '4.96': 'M^{r,4} Reordered',
    '4.97': 'Element-wise Decomposition',
    '4.98': 'Gravity Term',
    '4.99': 'Viscous + Mass Term',
    '4.100': 'Convection + ALE Term',
    '4.101': 'Pressure Term',
    '4.102': 'Bdry 1 (Elements)',
    '4.103': 'Bdry 2 (Elements)',
    '4.104': 'Bdry 3 (Elements)',
    '4.105': 'Bdry 4 (Elements)',
    '4.106': 'Gravity (Local)',
    '4.107': 'Viscous+Mass (Local)',
    '4.108': 'Convection (Local)',
    '4.109': 'Pressure (Local)',
    '4.110': 'Bdry 1 (Local)',
    '4.111': 'Bdry 2 (Local)',
    '4.112': 'Bdry 3 (Local)',
    '4.113': 'Bdry 4 (Local)',
    '4.114': 'Gravity (Bdry Numbering)',
    '4.115': 'Visc+Mass (Bdry Num)',
    '4.116': 'Convection (Bdry Num)',
    '4.117': 'Pressure (Bdry Num)',
    '4.118': 'Bdry 1 (Bdry Num)',
    '4.119': 'Bdry 2 (Bdry Num)',
    '4.120': 'Bdry 3 (Bdry Num)',
    '4.121': 'Bdry 4 (Bdry Num)',
    '4.122': 'Gravity (ii Index)',
    '4.123': 'Visc+Mass (ii Index)',
    '4.124': 'Convection (ii Index)',
    '4.125': 'Pressure (ii Index)',
    '4.126': 'Bdry 1 (ii Index)',
    '4.127': 'Bdry 2 (ii Index)',
    '4.128': 'Bdry 3 (ii Index)',
    '4.129': 'Bdry 4 (ii Index)',
    '4.130': 'Full Decomposition',
    '4.131': 'M^{r,1} Boundary',
    '4.132': 'Gravity Integral',
    '4.133': 'Viscous+Mass Integrals',
    '4.134': 'Convection Integrals',
    '4.135': 'Pressure Integral',
    '4.136': 'Bdry 1 Integrals',
    '4.137': 'Bdry 2 Integrals',
    '4.138': 'Bdry 3 Integrals',
    '4.139': 'Bdry 4 Integrals',
    '4.140': 'Compact M^{0,a}',
    '4.141': 'Compact M^{0,b}',
    '4.142': 'Compact M^{0,c}',
    '4.143': 'Compact M^{0,d}',
    '4.144': 'Compact Bdry 1',
    '4.145': 'Compact Bdry 2',
    '4.146': 'Compact Bdry 3',
    '4.147': 'Compact Bdry 4',
    '4.157': 'Jacobian dM/du',
    '4.158': 'Jacobian Simplified',
    '4.159': 'dM^{0,b}/du Expanded',
    '4.160': 'dM^{0,b}/du Reduced',
    '4.161': 'dM^{0,b}/du Compact',
    '4.162': 'dM^{0,c}/du Expanded',
    '4.163': 'dM^{0,c}/du Reduced',
    '4.164': 'dM^{0,c}/du Compact',
    '4.165': 'dM^{r,1}/du Expanded',
    '4.166': 'dM^{r,1}/du Compact',
    '4.167': 'dM^{r,2}/du Expanded',
    '4.168': 'dM^{r,2}/du Compact',
    '4.169': 'dM^{r,3}/du Expanded',
    '4.170': 'dM^{r,3}/du Compact',
    '4.171': 'dM^{r,4}/du Expanded',
    '4.172': 'dM^{r,4}/du Compact',

    # ─── Section 5: z-momentum (mirrors section 4 r-momentum) ───
    '5.1': 'z-Momentum Residual',
    '5.2': 'Tensor Divergence Identity (z)',
    '5.3': 'Applied to Stress (z)',
    '5.4': 'Residual with IBP (z)',
    '5.5': 'After Divergence Theorem (z)',
    '5.6': 'Grad-Stress (Matrix, z)',
    '5.7': 'Grad-Stress (Components, z)',
    '5.8': 'Grad-Stress Simplified (z)',
    '5.9': 'Full Residual M_i^z',
    '5.10': 'Boundary Decomposition (z)',
    '5.11': 'DBC1 Restatement (z)',
    '5.12': 'phi_i e_z dot P dot n^1',
    '5.13': 'Surface Div Identity (z)',
    '5.14': 'Identity Applied (z)',
    '5.15': 'Rearranged (z)',
    '5.16': 'Surface Gradient 1D (z)',
    '5.17': 'Projection Computation (z)',
    '5.18': 'Simplified Projection (z)',
    '5.19': 'Surface Div Result (z)',
    '5.20': 'Stress dot n^1 Final (z)',
    '5.21': 'M^{z,1} Div Theorem',
    '5.22': 'M^{z,1} with Endpoints',
    '5.23': 'Apex Normal Vector (z)',
    '5.24': 'Bdry 2 Stress Integral (z)',
    '5.25': 'GNSC Substitution (z)',
    '5.26': 'Stress dot n^2 Expanded (z)',
    '5.27': 'Stress dot n^2 Components (z)',
    '5.28': 'Stress dot n^2 Regrouped (z)',
    '5.30': 'M^{z,2} Expression',
    '5.31': 'Bdry 3 Stress Integral (z)',
    '5.32': 'Stress dot n^3 Decomposed (z)',
    '5.33': 'M^{z,3} Expression',
    '5.35': 'Stress dot n^4 Decomposed (z)',
    '5.36': 'Stress dot n^4 Simplified (z)',
    '5.37': 'M^{z,4} Expression',
    '5.38': 'M^{z,0} with BDF2',
    '5.39': 'M^{z,1} with BDF2',
    '5.40': 'M^{z,2} with BDF2',
    '5.41': 'M^{z,3} with BDF2',
    '5.42': 'M^{z,4} with BDF2',
    '5.45': 'M^{z,0} Rescaled',
    '5.46': 'M^{z,1} Rescaled',
    '5.47': 'M^{z,2} Rescaled',
    '5.48': 'M^{z,3} Rescaled',
    '5.49': 'M^{z,4} Rescaled',
    '5.50': 'M^{z} Residual Decomposition',
    '5.51': 'M^{z,0} Global Sums',
    '5.52': 'M^{z,1} Global Sums',
    '5.53': 'M^{z,2} Global Sums',
    '5.54': 'M^{z,3} Global Sums',
    '5.55': 'M^{z,4} Global Sums',
    '5.56': 'M^{z,0} Rearranged',
    '5.57': 'M^{z,1} Rearranged',
    '5.58': 'M^{z,2} Rearranged',
    '5.59': 'M^{z,3} Rearranged',
    '5.60': 'M^{z,4} Rearranged',
    '5.61': 'M^{z,0} Reordered',
    '5.62': 'M^{z,1} Reordered',
    '5.63': 'M^{z,2} Reordered',
    '5.64': 'M^{z,3} Reordered',
    '5.65': 'M^{z,4} Reordered',
    '5.66': 'Element-wise Decomposition (z)',
    '5.67': 'Gravity Term (z)',
    '5.68': 'Viscous + Mass Term (z)',
    '5.69': 'Convection + ALE Term (z)',
    '5.70': 'Pressure Term (z)',
    '5.71': 'Bdry 1 (Elements, z)',
    '5.72': 'Bdry 2 (Elements, z)',
    '5.73': 'Bdry 3 (Elements, z)',
    '5.74': 'Bdry 4 (Elements, z)',
    '5.75': 'Gravity (Local, z)',
    '5.76': 'Viscous+Mass (Local, z)',
    '5.77': 'Convection (Local, z)',
    '5.78': 'Pressure (Local, z)',
    '5.79': 'Bdry 1 (Local, z)',
    '5.80': 'Bdry 2 (Local, z)',
    '5.81': 'Bdry 3 (Local, z)',
    '5.82': 'Bdry 4 (Local, z)',
    '5.83': 'Gravity (Bdry Numbering, z)',
    '5.84': 'Visc+Mass (Bdry Num, z)',
    '5.85': 'Convection (Bdry Num, z)',
    '5.86': 'Pressure (Bdry Num, z)',
    '5.87': 'Bdry 1 (Bdry Num, z)',
    '5.88': 'Bdry 2 (Bdry Num, z)',
    '5.89': 'Bdry 3 (Bdry Num, z)',
    '5.90': 'Bdry 4 (Bdry Num, z)',
    '5.91': 'Gravity (ii Index, z)',
    '5.92': 'Visc+Mass (ii Index, z)',
    '5.93': 'Convection (ii Index, z)',
    '5.94': 'Pressure (ii Index, z)',
    '5.95': 'Bdry 1 (ii Index, z)',
    '5.96': 'Bdry 2 (ii Index, z)',
    '5.97': 'Bdry 3 (ii Index, z)',
    '5.98': 'Bdry 4 (ii Index, z)',
    '5.99': 'Full Decomposition (z)',
    '5.100': 'M^{z,1} Boundary',
    '5.101': 'Gravity Integral (z)',
    '5.102': 'Viscous+Mass Integrals (z)',
    '5.103': 'Convection Integrals (z)',
    '5.104': 'Pressure Integral (z)',
    '5.105': 'Bdry 1 Integrals (z)',
    '5.106': 'Bdry 2 Integrals (z)',

    # ─── Section 6: Continuity equation ───
    '6.1': 'Continuity Equation',
    '6.2': 'Continuity Residual C_i',
    '6.3': 'C_i with FE Approximation',
    '6.4': 'C_i Rearranged',
    '6.5': 'C_i Gathered Sums',
    '6.6': 'C_i Element-wise',
    '6.7': 'C_i Local Numbering (j)',
    '6.8': 'C_i Local Numbering (i,j)',
    '6.9': 'C_i = Sum of C_{e,ii}',
    '6.10': 'C_{e,ii} Definition',
    '6.11': 'dC_i/du Global',
    '6.12': 'dC_{e,ii}/du Expanded',
    '6.13': 'dC_{e,ii}/du Compact',
    '6.14': 'dC_i/dw Global',
    '6.15': 'dC_{e,ii}/dw Expanded',
    '6.16': 'dC_{e,ii}/dw Compact',
    '6.17': 'dC_i/dh Global',
    '6.18': 'dC_{e,ii}/dh Expanded',
    '6.19': 'dC_{e,ii}/dh Local Spines',

    # ─── Section 7: Slip condition SC2 ───
    '7.1': 'SC2 Equation Recalled',
    '7.2': 'SC2 Residual S_i^2',
    '7.3': 'S_i^2 with FE Approximation',
    '7.4': 'S_i^2 Rearranged',
    '7.5': 'S_i^2 Gathered Sums',
    '7.6': 'S_i^2 Element-wise',
    '7.7': 'S_i^2 = Sum of S_{e,ii}^2',
    '7.8': 'S_{e,ii}^2 Definition',
    '7.9': 'dS_i^2/du Global',
    '7.10': 'dS_{e,ii}^2/du Expanded',
    '7.11': 'dS_{e,ii}^2/du Compact',
    '7.12': 'dS_i^2/dw Global',
    '7.13': 'dS_{e,ii}^2/dw Expanded',
    '7.14': 'dS_{e,ii}^2/dw Compact',
    '7.15': 'dS_i^2/dε Global',
    '7.16': 'dS_{e,ii}^2/dε Expanded',
    '7.17': 'dS_{e,ii}^2/dε Compact',
    '7.18': 'dS_i^2/dh Global',
    '7.19': 'dS_{e,ii}^2/dh Step 1',
    '7.20': 'dS_{e,ii}^2/dh Step 2',
    '7.21': 'dS_{e,ii}^2/dh Step 3',
    '7.22': 'dS_{e,ii}^2/dh Compact',
    '7.23': 'dS_{e,ii}^2/dh Final',
    '7.30': 'S_{e,ii}^2 Reordered',
    '7.31': 'S_{e,ii}^2 Compact Form',
    '7.32': 'dS^2/du Compact',
    '7.33': 'dS^2/dw Compact',
    '7.34': 'dS^2/dε Compact',
    '7.35': 'dS^2/dh Compact',

    # ─── Section 8: Impermeability I2 ───
    '8.1': 'I2 Equation Recalled',
    '8.2': 'I2 Residual I_i',
    '8.3': 'I_i with FE Approximation',
    '8.4': 'I_i Rearranged',
    '8.5': 'I_i Gathered Sums',
    '8.6': 'I_i Element-wise',
    '8.7': 'I_i = Sum of I_{e,ii}',
    '8.8': 'I_{e,ii} Definition',
    '8.9': 'dI_i/du Global',
    '8.10': 'dI_{e,ii}/du Expanded',
    '8.11': 'dI_{e,ii}/du Compact',
    '8.12': 'dI_i/dw Global',
    '8.13': 'dI_{e,ii}/dw Expanded',
    '8.14': 'dI_{e,ii}/dw Compact',
    '8.15': 'dI_i/dh Global',
    '8.16': 'dI_{e,ii}/dh Step 1',
    '8.17': 'dI_{e,ii}/dh Expanded',
    '8.18': 'dI_{e,ii}/dh Compact',
    '8.19': 'I_{e,ii} Reordered',
    '8.20': 'I_{e,ii} Compact Form',
    '8.21': 'dI/du Compact',
    '8.22': 'dI/dw Compact',

    # ─── Section 12: Slip condition SC1 ───
    '12.1': 'SC1 Equation Recalled',
    '12.2': 'SC1 Residual S_i^1',
    '12.3': 'S_i^1 with FE Approximation',
    '12.4': 'S_i^1 Rearranged',
    '12.5': 'S_i^1 Gathered Sums',
    '12.6': 'S_i^1 Element-wise',
    '12.7': 'S_i^1 = Sum of S_{e,ii}^1',
    '12.8': 'S_{e,ii}^1 Definition',
    '12.9': 'dS_i^1/du Global',
    '12.10': 'dS_{e,ii}^1/du Expanded',
    '12.11': 'dS_{e,ii}^1/du Compact',
    '12.12': 'dS_i^1/dw Global',
    '12.13': 'dS_{e,ii}^1/dw Expanded',
    '12.14': 'dS_{e,ii}^1/dw Compact',
    '12.15': 'dS_i^1/dσ Global',
    '12.16': 'dS_{e,ii}^1/dσ Expanded',
    '12.17': 'dS_{e,ii}^1/dσ Compact',
    '12.18': 'dS_i^1/dh Global',
    '12.25': 'S_{e,ii}^1 Reordered',
    '12.26': 'S_{e,ii}^1 Compact Form',
    '12.27': 'dS^1/du Compact',
    '12.28': 'dS^1/dw Compact',
    '12.29': 'dS^1/dσ Compact',
    '12.30': 'dS^1/dh Compact',
    '12.35': 'dS_{e,ii}^1/dh Expanded',
    '12.36': 'dS_{e,ii}^1/dh Compact',

    # ─── Section 13: Kinematic boundary condition KBC ───
    '13.1': 'KBC Equation Recalled',
    '13.2': 'KBC Residual K_i',
    '13.3': 'K_i with FE Approximation',
    '13.4': 'K_i Rearranged',
    '13.5': 'K_i Gathered Sums',
    '13.6': 'K_i Element-wise',
    '13.7': 'K_i = Sum of K_{e,ii}',
    '13.8': 'K_{e,ii} Definition',
    '13.11': 'dK_i/du Global',
    '13.12': 'dK_{e,ii}/du Compact',
    '13.13': 'dK_i/dw Global',
    '13.14': 'dK_{e,ii}/dw Compact',
    '13.15': 'dK_i/dh Global',
    '13.16': 'dK_{e,ii}/dh Step 1',
    '13.17': 'dK_{e,ii}/dh Expanded',
    '13.18': 'dK_{e,ii}/dh Compact',
    '13.19': 'K_{e,ii} Reordered',
    '13.24': 'dK/dh Compact',

    # ─── Section 17: Summary of residual equations ───
    '17.1': 'M_i^r Summary',
    '17.2': 'M_{e,ii}^r Bulk',
    '17.3': 'M_{e,ii}^{r,1} Free Surface',
    '17.4': 'M_{e,ii}^{r,2} Solid Surface',
    '17.5': 'M_{e,ii}^{r,3} Symmetry Axis',
    '17.6': 'M_i^z Summary',
    '17.7': 'M_{e,ii}^z Bulk',
    '17.8': 'M_{e,ii}^{z,1} Free Surface',
    '17.9': 'M_{e,ii}^{z,2} Solid Surface',
    '17.10': 'M_{e,ii}^{z,3} Symmetry Axis',
    '17.11': 'C_i Summary',
    '17.12': 'K_i Summary',
    '17.13': 'I_i Summary',

    # ─── Section 18: System Jacobian ───
    '18.1': 'System Jacobian Matrix',
    '18.2': 'J: dM^r/du',
    '18.3': 'J: dM^r/dw',
    '18.4': 'J: dM^r/dp',
    '18.5': 'J: dM^r/dλ^2',
    '18.8': 'J: dM^r/dh',
    '18.9': 'J: dM^z/du',
    '18.10': 'J: dM^z/dw',
    '18.11': 'J: dM^z/dp',
    '18.12': 'J: dM^z/dλ^2',
    '18.13': 'J: dM^z/dλ^3',
    '18.14': 'J: dM^z/dγ^3',
    '18.15': 'J: dM^z/dh',
    '18.16': 'J: dC/du',
    '18.17': 'J: dC/dw',
    '18.18': 'J: dC/dp = 0',
    '18.19': 'J: dC/dλ^2 = 0',
    '18.20': 'J: dC/dλ^3 = 0',
    '18.22': 'J: dC/dh',
    '18.23': 'J: dK/du',
    '18.24': 'J: dK/dw',
    '18.25': 'J: dK/dp = 0',
    '18.26': 'J: dK/dλ^2 = 0',
    '18.27': 'J: dK/dλ^3 = 0',
    '18.30': 'J: dI/du',
    '18.31': 'J: dI/dw',
    '18.32': 'J: dI/dp = 0',
    '18.33': 'J: dI/dλ^2 = 0',
    '18.34': 'J: dI/dν^3 = 0',
    '18.35': 'J: dI/ds = 0',
    '18.36': 'J: dI/dh',
    '18.37': 'Jacobian with Zero Blocks',
    '18.38': 'dM^r/dω^2 = 0 (flat bdry 2)',
    '18.39-40': 'dM^r/dε^3 = dM^z/dω^3 = 0 (flat bdry 3)',

    # ─── Section 19: Basis functions ───
    '19.1': 'ψ_1 (Pressure Basis)',
    '19.2': 'ψ_2 (Pressure Basis)',
    '19.3': 'ψ_3 (Pressure Basis)',
    '19.4': 'φ_1 (Velocity Basis)',
    '19.5': 'φ_2 (Velocity Basis)',
    '19.6': 'φ_3 (Velocity Basis)',
    '19.7': 'φ_4 (Velocity Basis)',
    '19.8': 'φ_5 (Velocity Basis)',
    '19.9': 'φ_6 (Velocity Basis)',
    '19.10': 'dψ_1/dξ, dψ_1/dη',
    '19.11': 'dψ_2/dξ, dψ_2/dη',
    '19.12': 'dψ_3/dξ, dψ_3/dη',
    '19.13': 'dφ_1/dξ, dφ_1/dη',
    '19.14': 'dφ_2/dξ, dφ_2/dη',
    '19.15': 'dφ_3/dξ, dφ_3/dη',
    '19.16': 'dφ_4/dξ, dφ_4/dη',
    '19.17': 'dφ_5/dξ, dφ_5/dη',
    '19.18': 'dφ_6/dξ, dφ_6/dη',
    '19.19': 'd²φ_1/dξ², d²φ_1/dξdη, d²φ_1/dη²',
    '19.20': 'd²φ_2/dξ², d²φ_2/dξdη, d²φ_2/dη²',
    '19.21': 'd²φ_3/dξ², d²φ_3/dξdη, d²φ_3/dη²',
    '19.22': 'd²φ_4/dξ², d²φ_4/dξdη, d²φ_4/dη²',
    '19.23': 'd²φ_5/dξ², d²φ_5/dξdη, d²φ_5/dη²',
    '19.24': 'd²φ_6/dξ², d²φ_6/dξdη, d²φ_6/dη²',

    # ─── Section 20: Integrals over triangular elements ───
    '20.1': 'Isoparametric Mapping r(ξ,η)',
    '20.2': 'Isoparametric Mapping z(ξ,η)',
    '20.3': 'Jacobian Matrix J',
    '20.4': 'Jacobian Determinant |J|',
    '20.6': 'dr/dξ, dr/dη Expansion',
    '20.7': 'dz/dξ, dz/dη Expansion',
    '20.11': 'a-Integral a_{ii,jj}^{r,r}',
    '20.15': 'a-Integral a_{ii,jj}^{z,z}',
    '20.16': 'a-Integral a_{ii,jj}^{r,z}',
    '20.18': 'a-Integral a_{ii,jj}^{z,r}',
    '20.19': 'a-Integral a_{ii,kk,jj}^r',
    '20.21': 'a-Integral a_{ii,kk,jj}^z',
    '20.22': 'a-Integral a_{ii}',
    '20.25': 'b-Integral b_{ii,jj}^r',
    '20.26': 'b-Integral b_{ii,jj}^z',
    '20.28': 'da^{r,r}/dh Derivative',
    '20.29': 'da^{z,z}/dh Derivative',
    '20.31': 'da^{r,z}/dh Derivative',
    '20.32': 'da^{z,r}/dh Derivative',
    '20.34': 'da^r_{ii,kk,jj}/dh Derivative',
    '20.35': 'da^z_{ii,kk,jj}/dh Derivative',
    '20.37': 'da_{ii}/dh Derivative',
    '20.38': 'db^r/dh Derivative',
    '20.40': 'db^z/dh Derivative',
    '20.41': 'dJ/dh Jacobian Derivative',
    '20.43': 'dφ/dr in Terms of dh',
    '20.44': 'dφ/dz in Terms of dh',
    '20.47': 'd²φ/dr² in Terms of dh',
    '20.48': 'd²φ/drdz in Terms of dh',
    '20.50': 'd²φ/dz² in Terms of dh',
    '20.52': 'dψ/dr in Terms of dh',
    '20.55': 'dψ/dz in Terms of dh',
    '20.58': 'd(dr/dξ)/dh',
    '20.61': 'd(dr/dη)/dh',
    '20.64': 'd(dz/dξ)/dh',
    '20.67': 'd(dz/dη)/dh',
    '20.70': 'd(d²r/dξ²)/dh',
    '20.73': 'd(d²r/dξdη)/dh',
    '20.76': 'd(d²z/dξ²)/dh',
    '20.79': 'd(d²z/dξdη)/dh',
    '20.82': 'd|J|/dh',
    '20.85': 'd(1/|J|)/dh',

    # ─── Section 21: Line elements (free surface & liquid-solid) ───
    '21.1': 'Free Surface Arc Length ds^1',
    '21.2': 'Free Surface dr/ds, dz/ds',
    '21.3': 'Normal n^1 Components',
    '21.4': 'Tangent t^1 Components',
    '21.6': 'ds^1 in Terms of dξ',
    '21.8': 'c-Integral c_{t_r,jj,ii}^s',
    '21.9': 'c-Integral c_{t_z,jj,ii}^s',
    '21.10': 'c-Integral c_{ii,jj,n_r}',
    '21.11': 'c-Integral c_{ii,jj,n_z}',
    '21.12': 'c-Integral c_{ii,n_r}',
    '21.13': 'c-Integral c_{ii,n_z}',
    '21.14': 'dc_{t_r}/dh Derivative',
    '21.15': 'dc_{t_z}/dh Derivative',
    '21.16': 'dc_{n_r}/dh Derivative',
    '21.19': 'dc_{n_z}/dh Derivative',
    '21.21': 'Liquid-Solid Arc Length ds^2',
    '21.22': 'Liquid-Solid dr/ds, dz/ds',
    '21.25': 'ds^2 in Terms of dξ',
    '21.29': 'd-Integral d_{t_r,t_r,ii,jj}',
    '21.32': 'd-Integral d_{t_r,t_z,ii,jj}',
    '21.33': 'd-Integral d_{t_z,t_z,ii,jj}',
    '21.34': 'd-Integral d_{t_r,t_r,ii}',
    '21.35': 'd-Integral d_{t_z,t_z,ii}',
    '21.37': 'd-Integral d_{ii,jj,n_r}',
    '21.39': 'd-Integral d_{ii,jj,n_z}',
    '21.40': 'dd_{t_r,t_r,ii,jj}/dh',
    '21.41': 'dd_{t_r,t_z,ii,jj}/dh',
    '21.42': 'dd_{t_z,t_z,ii,jj}/dh',
    '21.43': 'dd_{t_r,t_r,ii}/dh',
    '21.50': 'dd_{ii,jj,n_r}/dh',
    '21.53': 'dd_{ii,jj,n_z}/dh',
    '21.56': 'Symmetry Axis Line Element',
    '21.60': 'f-Integral f_{ii,jj,n_r}',
    '21.63': 'f-Integral f_{ii,jj,n_z}',
    '21.64': 'f-Integral f_{t_r,ii,jj}',
    '21.65': 'f-Integral f_{t_z,ii,jj}',
    '21.66': 'df_{ii,jj,n_r}/dh',
    '21.68': 'df_{ii,jj,n_z}/dh',
    '21.70': 'df_{t_r,ii,jj}/dh',
    '21.71': 'df_{t_z,ii,jj}/dh',
    '21.72': 'Separatrix Line Element',
    '21.73': 'g-Integral g_{ii,jj,n_r}',
    '21.74': 'g-Integral g_{ii,jj,n_z}',
    '21.81': 'dg_{ii,jj,n_r}/dh',
    '21.84': 'dg_{ii,jj,n_z}/dh',
    '21.88': 'dc_{ii,jj,n_r}/dh',
    '21.91': 'dc_{ii,jj,n_z}/dh',
    '21.92': 'dc_{ii,n_r}/dh',
    '21.94': 'dc_{ii,n_z}/dh',
    '21.97': 'd(ds^1)/dh',
    '21.98': 'd(t_r^1)/dh, d(t_z^1)/dh',
    '21.101': 'd(n_r^1)/dh, d(n_z^1)/dh',
    '21.104': 'd(dr^1/dξ)/dh',
    '21.107': 'd(dz^1/dξ)/dh',
    '21.110': 'd(ds^2)/dh',
    '21.113': 'd(t_r^2)/dh, d(t_z^2)/dh',
    '21.116': 'd(n_r^2)/dh, d(n_z^2)/dh',
    '21.119': 'd(dr^2/dξ)/dh',
    '21.122': 'd(dz^2/dξ)/dh',
    '21.125': 'd(ds^3)/dh',
    '21.128': 'd(t_r^3)/dh, d(t_z^3)/dh',
    '21.131': 'd(n_r^3)/dh, d(n_z^3)/dh',
    '21.134': 'd(dr^3/dξ)/dh',
    '21.137': 'd(dz^3/dξ)/dh',

    # ─── Section 22: Derivatives of r and z with respect to h ───
    '22.1': 'dr/dh for Boundary 1',
    '22.2': 'dz/dh for Boundary 1',
    '22.3': 'dr/dh for Boundary 2',
    '22.4': 'dz/dh for Boundary 2',
    '22.5': 'dr/dh for Boundary 3',
    '22.6': 'dz/dh for Boundary 3',
    '22.7': 'dr/dh for Bulk Nodes',
    '22.8': 'dz/dh for Bulk Nodes',
    '22.9': 'dr/dh, dz/dh Summary',
}

# ─── Reference overrides ───
ref_overrides = {
    '2.2': ['2.1'], '2.3': ['2.1'], '2.5': ['2.4'],
    '2.8': ['2.7'], '2.10': ['2.7', '2.8', '2.9'],
    '2.12': ['2.11'], '2.14': ['2.13'],
    '2.16': ['2.15'], '2.17': ['2.16'],
    '2.18': ['2.14', '2.17'], '2.19': ['2.18'],
    '2.22': ['2.21'], '2.23': ['2.22', '2.11'],
    '2.25': ['2.24'], '2.26': ['2.25'], '2.27': ['2.26'],
    '2.29': ['2.28'], '2.30': ['2.29'],
    '2.33': ['2.30'],
    '2.36': ['2.1'], '2.37': ['2.2'],
    '2.38': ['2.36'], '2.39': ['2.38'], '2.40': ['2.38'],
    '2.41': ['2.3'],
    '2.42': ['2.4'], '2.43': ['2.5'],
    '2.44': ['2.6'], '2.45': ['2.10'], '2.46': ['2.45'],
    '2.47': ['2.11'], '2.48': ['2.12'],
    '2.49': ['2.13'], '2.50': ['2.19'],
    '2.51': ['2.20'], '2.52': ['2.21'],
    '2.53': ['2.22', '2.52'],
    '2.54': ['2.24'], '2.55': ['2.25'],
    '2.56': ['2.27'], '2.57': ['2.28'],
    '2.58': ['2.29'], '2.59': ['2.33'],
    '3.1': ['2.38'], '3.2': ['2.38'],
    '3.3': ['2.41'], '3.4': ['2.44'], '3.5': ['2.51'],
    '4.1': ['3.1'], '4.3': ['4.2'],
    '4.4': ['4.1', '4.3'], '4.5': ['4.4'],
    '4.7': ['4.6'], '4.8': ['4.7'],
    '4.9': ['4.5', '4.8'],
    '4.12': ['4.10', '4.11'], '4.13': ['4.12'],
    '4.14': ['4.13'], '4.15': ['4.14', '2.41'],
    '4.16': ['4.9', '4.15'],
    '4.17': ['4.16'], '4.18': ['4.16', '4.17'],
    '4.19': ['4.18'], '4.20': ['4.18'],
    '4.21': ['4.18'], '4.22': ['4.18'],
    '4.23': ['4.18'],
    '4.24': ['2.46'], '4.25': ['4.24'],
    '4.27': ['4.26'], '4.28': ['4.27'],
    '4.29': ['4.28'], '4.30': ['4.29'],
    '4.31': ['4.30'], '4.32': ['4.28', '4.31'],
    '4.33': ['4.25', '4.32'],
    '4.34': ['4.20', '4.33'], '4.35': ['4.34'],
    '4.36': ['4.35'],
    '4.39': ['2.53'], '4.40': ['4.39'],
    '4.41': ['4.40'], '4.42': ['4.41'],
    '4.43': ['4.21', '4.42'],
    '4.45': ['4.22'], '4.46': ['4.45'],
    '4.47': ['4.22', '4.46'],
    '4.49': ['4.23'], '4.50': ['4.49'],
    '4.51': ['4.23', '4.50'],
    '4.53': ['4.52'], '4.54': ['4.52'], '4.55': ['4.52'],
    '4.56': ['4.19', '4.52'], '4.57': ['4.36'],
    '4.58': ['4.43'], '4.59': ['4.47'], '4.60': ['4.51'],
    '4.61': ['4.56'], '4.62': ['4.57'],
    '4.63': ['4.58'], '4.64': ['4.59'], '4.65': ['4.60'],
    '4.66': [], '4.67': ['4.66'], '4.68': ['4.66'],
    '4.69': ['4.66'], '4.70': ['4.66'],
    '4.71': ['4.66'], '4.72': ['4.66'],
    '4.73': ['4.66'], '4.74': ['4.66'],
    '4.75': ['4.66'], '4.76': ['4.66'],
    '4.77': ['4.66'], '4.78': ['4.66'],
    '4.79': ['4.66'], '4.80': ['4.66'],
    '4.81': ['4.82'],
    '4.82': ['4.61', '4.66'], '4.83': ['4.62', '4.66'],
    '4.84': ['4.63', '4.66'], '4.85': ['4.64', '4.66'],
    '4.86': ['4.65', '4.66'],
    '4.87': ['4.82'], '4.88': ['4.83'],
    '4.89': ['4.84'], '4.90': ['4.85'], '4.91': ['4.86'],
    '4.92': ['4.87'], '4.93': ['4.88'],
    '4.94': ['4.89'], '4.95': ['4.90'], '4.96': ['4.91'],
    '4.97': ['4.92'],
    '4.98': ['4.97'], '4.99': ['4.97'],
    '4.100': ['4.97'], '4.101': ['4.97'],
    '4.102': ['4.97'], '4.103': ['4.97'],
    '4.104': ['4.97'], '4.105': ['4.97'],
    '4.106': ['4.98'], '4.107': ['4.99'],
    '4.108': ['4.100'], '4.109': ['4.101'],
    '4.110': ['4.102'], '4.111': ['4.103'],
    '4.112': ['4.104'], '4.113': ['4.105'],
    '4.114': ['4.106'], '4.115': ['4.107'],
    '4.116': ['4.108'], '4.117': ['4.109'],
    '4.118': ['4.110'], '4.119': ['4.111'],
    '4.120': ['4.112'], '4.121': ['4.113'],
    '4.122': ['4.114'], '4.123': ['4.115'],
    '4.124': ['4.116'], '4.125': ['4.117'],
    '4.126': ['4.118'], '4.127': ['4.119'],
    '4.128': ['4.120'], '4.129': ['4.121'],
    '4.130': ['4.122'],
    '4.131': ['4.130'],
    '4.132': ['4.122'], '4.133': ['4.123'],
    '4.134': ['4.124'], '4.135': ['4.125'],
    '4.136': ['4.126'], '4.137': ['4.127'],
    '4.138': ['4.128'], '4.139': ['4.129'],
    '4.140': ['4.132'], '4.141': ['4.133'],
    '4.142': ['4.134'], '4.143': ['4.135'],
    '4.144': ['4.136'], '4.145': ['4.137'],
    '4.146': ['4.138'], '4.147': ['4.139'],
    '4.157': ['4.141', '4.142'],
    '4.158': ['4.157'],
    '4.159': ['4.141'], '4.160': ['4.159'], '4.161': ['4.160'],
    '4.162': ['4.142'], '4.163': ['4.162'], '4.164': ['4.163'],
    '4.165': ['4.144'], '4.166': ['4.165'],
    '4.167': ['4.145'], '4.168': ['4.167'],
    '4.169': ['4.146'], '4.170': ['4.169'],
    '4.171': ['4.147'], '4.172': ['4.171'],
}

# ─── Apply overrides and build ───
for eq in raw_equations:
    tag = eq['tag']
    if tag in label_overrides:
        eq['label'] = label_overrides[tag]
    else:
        # Try to infer label from partial derivative for Jacobian components
        # e.g., \partial_{w_q}\mathcal{M}_{e,ii}^{r,0b}
        clean_latex = re.sub(r'\\begin\{aligned\}|\\end\{aligned\}|\\begin\{equation\}|\\end\{equation\}', '', eq['latex_raw']).strip()
        clean_latex = clean_latex.replace('&', '')  # Remove any alignment & characters
        m = re.search(r'^\\partial_\{([^\}]+)\}(?:\\mathcal|\\hat)\{?([A-Za-z]+)\}?_?\{?[^\}^=]*\}?\^?\{?([^\}^=]*)\}?', clean_latex.replace(' ', ''))
        if m:
            var = m.group(1).replace('_q', '')
            # Convert greek letters to unicode for better readability
            var = var.replace('\\sigma', 'σ').replace('\\lambda', 'λ').replace('\\gamma', 'γ').replace('\\omega', 'ω').replace('\\varpi', 'ω').replace('\\varepsilon', 'ε').replace('\\epsilon', 'ε')
            var = var.replace('\\', '')
            
            sym = m.group(2)
            sup = m.group(3)
            if sup:
                eq['label'] = f"∂{sym}^{{{sup}}}/∂{var}"
            else:
                eq['label'] = f"∂{sym}/∂{var}"
        else:
            eq['label'] = f'Equation {tag}'

    eq['latex'] = convert_to_katex(eq['latex_raw'])
    if tag in ref_overrides:
        eq['references'] = ref_overrides[tag]

# ─── Generate JS ───
def js_escape(s):
    s = s.replace('`', '\\`')
    s = s.replace('${', '\\${')
    return s

# Build unique section list (in order)
seen_sids = set()
ordered_sections = []
for eq in raw_equations:
    sid = eq['section_id']
    if sid not in seen_sids:
        seen_sids.add(sid)
        info = section_ids_map[[k for k,v in section_ids_map.items() if v['id'] == sid][0]]
        ordered_sections.append(info)

# Build transform string
def make_transform(eq):
    refs = eq['references']
    if not refs:
        return None
    return 'From (' + '), ('.join(refs) + ')'

lines = []
lines.append('// ============================================================')
lines.append('// FEM Dynamic Wetting - Complete Equation Data')
lines.append('// ============================================================')
lines.append(f'// Generated from fem.tex - {len(raw_equations)} equations')
lines.append('// ============================================================')
lines.append('')
lines.append('export const sections = [')
for sec in ordered_sections:
    subtitle = sec['subtitle'].replace("'", "\\'") if sec['subtitle'] else ''
    title = sec['title'].replace("'", "\\'")
    if subtitle:
        lines.append(f"  {{ id: '{sec['id']}', title: '{title}', subtitle: '{subtitle}' }},")
    else:
        lines.append(f"  {{ id: '{sec['id']}', title: '{title}' }},")
lines.append('];')
lines.append('')
lines.append('export const equations = [')

for eq in raw_equations:
    tag = eq['tag']
    label = json.dumps(eq['label'])  # JSON-safe string
    desc_raw = (eq.get('description', '') or '').replace('\n', ' ').strip()
    desc = json.dumps(desc_raw)  # JSON-safe string
    refs = json.dumps(eq['references'])
    transform = make_transform(eq)
    transform_str = json.dumps(transform) if transform else 'null'
    latex = js_escape(eq['latex'])
    section_id = eq['section_id']
    
    # Hide individual jacobian block equations from main flow
    hidden = 'true' if (tag.startswith('18.') and tag not in ['18.1', '18.37']) else 'false'
    
    lines.append('  {')
    lines.append(f"    id: '{tag}',")
    lines.append(f"    section: '{section_id}',")
    lines.append(f"    label: {label},")
    lines.append(f"    latex: String.raw`{latex}`,")
    lines.append(f"    description: {desc},")
    lines.append(f"    references: {refs},")
    lines.append(f"    transform: {transform_str},")
    lines.append(f"    hidden: {hidden},")
    lines.append('  },')

lines.append('];')
lines.append('')

with open('equations.js', 'w') as f:
    f.write('\n'.join(lines) + '\n')

print(f"Generated equations.js: {len(raw_equations)} equations, {len(ordered_sections)} sections")
for sec in ordered_sections:
    count = sum(1 for eq in raw_equations if eq['section_id'] == sec['id'])
    print(f"  [{sec['id']}] {sec['title']}: {count} eqs")
