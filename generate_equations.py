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
    eq['label'] = label_overrides.get(tag, f'Equation {tag}')
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
