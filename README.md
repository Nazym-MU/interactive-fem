# FEM Equation Viewer

A web-based interactive viewer for equations extracted from the `fem.tex` LaTeX document. This project extracts sequences of equations, parses their mathematical structures, and renders them dynamically in a browser interface using KaTeX.

## Features
- **Mathematical Rendering**: Client-side LaTeX equation rendering via KaTeX.
- **Interactive Map**: Equations can be clicked to view parent/derived dependencies.
- **Search**: press `/` (or ⌘K) and type an equation number, a label, a section title or a Jacobian block (`system jacobian`, `18.3`, `dM^r/dw`, `derivatives of M w.r.t. h`).
- **System Jacobian Inspection**: every block of (18.1)/(18.37) is clickable. It opens the residual being differentiated next to the block's entry, with the variable highlighted in the residual (for `h`, the geometric coefficients it acts through), chips for the residual's component equations, a map of all blocks (arrow keys move between them), and jumps to the residual, the entry, its derivation chapter and the chapter where the residual is built. Blocks that section 18 doesn't write out are flagged, with a pointer to their derivation where one exists. Entry cards link back to their residual, and residual cards list their Jacobian row.
- **Jacobian structure** lives in `jacobian.js`: which residual each block-row differentiates, the column variables (matched by position, since the multipliers are written ω²/ϖ²/λ², ω³/λ³ and ε³/γ³ in different places), and each block's entry and derivation tags.
- **Top-to-Bottom Comparison Panels**: Expanding equation cards display derived forms easily. 

## Project Structure
- `fem.tex`: The primary source LaTeX document containing chapters of formulations.
- `generate_equations.py`: A Python extraction script. It uses regular expressions to parse `\begin{equation}` and `\begin{align}` blocks, cleans description contexts, maps section titles, and generates a structured JavaScript array.
- `equations.js`: The generated JSON-like data file created by `generate_equations.py`.
- `index.html`: The main web viewer interface.
- `app.js` & `styles.css`: The frontend scripts and stylesheets managing interactive interactions, dynamic overlays, scrolling, and styling.
- `jacobian.js`: The System Jacobian's block structure and the variable-highlighting helper.

## Getting Started
1. **Regenerate the Database (Optional)**: If you update `fem.tex` with new equations or text, regenerate the data file by running:
   ```bash
   python3 generate_equations.py
   ```
2. **View the Application**: serve the folder and open it, e.g. `python3 -m http.server` then http://localhost:8000. Browsers block ES modules loaded from `file://`, so opening `index.html` directly shows a blank page.

## Technologies Used
- HTML / CSS / Vanilla JavaScript
- [KaTeX](https://katex.org/) for rapid math typesetting
- Python 3 `re` (Regex) for document extraction
