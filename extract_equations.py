#!/usr/bin/env python3
"""Extract equations from fem.tex and generate equations.js data."""

import re
import json

with open('fem.tex', 'r') as f:
    tex = f.read()

# Extract all equations with their tags
eq_pattern = re.compile(
    r'\\begin\{equation\}\s*(.*?)\s*\\end\{equation\}',
    re.DOTALL
)

equations = []
for m in eq_pattern.finditer(tex):
    body = m.group(1).strip()
    # Extract tag
    tag_m = re.search(r'\\tag\{([^}]+)\}', body)
    if tag_m:
        tag = tag_m.group(1)
        latex = body[:tag_m.start()].strip()
    else:
        continue
    
    # Clean up the latex
    # Replace \pmb with \boldsymbol
    latex = latex.replace(r'\pmb ', r'\boldsymbol{') 
    # Actually let's be more careful with \pmb
    latex = re.sub(r'\\pmb\s*\{', r'\\boldsymbol{', latex)
    latex = re.sub(r'\\pmb\s+', r'\\boldsymbol ', latex)
    
    # Get context (200 chars before the equation)
    start_pos = m.start()
    context_before = tex[max(0, start_pos-500):start_pos]
    
    equations.append({
        'tag': tag,
        'latex': latex,
        'context': context_before,
        'pos': start_pos
    })

# Extract section structure
section_pattern = re.compile(r'\\(section|subsection|subsubsection)\{([^}]+)\}')
sections = []
for m in section_pattern.finditer(tex):
    sections.append({
        'level': m.group(1),
        'title': m.group(2),
        'pos': m.start()
    })

# Assign sections to equations
for eq in equations:
    eq['section_title'] = 'Introduction'
    eq['subsection_title'] = ''
    eq['subsubsection_title'] = ''
    for sec in sections:
        if sec['pos'] < eq['pos']:
            if sec['level'] == 'section':
                eq['section_title'] = sec['title']
                eq['subsection_title'] = ''
                eq['subsubsection_title'] = ''
            elif sec['level'] == 'subsection':
                eq['subsection_title'] = sec['title']
                eq['subsubsection_title'] = ''
            elif sec['level'] == 'subsubsection':
                eq['subsubsection_title'] = sec['title']

# Find references in context
ref_pattern = re.compile(r'(?:equation|eq\.?|equations?)\s*\(?(\d+\.\d+)\)?', re.IGNORECASE)

for eq in equations:
    refs = []
    # Search context before for references
    for rm in ref_pattern.finditer(eq['context']):
        ref_tag = rm.group(1)
        if ref_tag != eq['tag']:
            refs.append(ref_tag)
    # Also check for references like "(2.46)" in context
    paren_refs = re.findall(r'\((\d+\.\d+)\)', eq['context'])
    for pr in paren_refs:
        if pr != eq['tag'] and pr not in refs:
            refs.append(pr)
    eq['references'] = list(set(refs))

# Print summary
print(f"Found {len(equations)} equations")
print(f"Found {len(sections)} sections")
print()

# Group by section
from collections import OrderedDict
by_section = OrderedDict()
for eq in equations:
    key = eq['section_title']
    if key not in by_section:
        by_section[key] = []
    by_section[key].append(eq)

for sec, eqs in by_section.items():
    print(f"  {sec}: {len(eqs)} equations ({eqs[0]['tag']} - {eqs[-1]['tag']})")

# Output JSON for inspection
output = []
for eq in equations:
    output.append({
        'tag': eq['tag'],
        'section': eq['section_title'],
        'subsection': eq['subsection_title'],
        'subsubsection': eq['subsubsection_title'],
        'latex': eq['latex'],
        'references': eq['references']
    })

with open('equations_extracted.json', 'w') as f:
    json.dump(output, f, indent=2)

print(f"\nWrote equations_extracted.json")
