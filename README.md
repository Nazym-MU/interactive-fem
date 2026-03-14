# FEM Equation Viewer

A web-based interactive viewer for equations extracted from the `fem.tex` LaTeX document. This project extracts sequences of equations, parses their mathematical structures, and renders them dynamically in a browser interface using KaTeX.

## Features
- **Mathematical Rendering**: Client-side LaTeX equation rendering via KaTeX.
- **Interactive Map**: Equations can be clicked to view parent/derived dependencies.
- **System Jacobian Inspection**: Block matrices like the Jacobian can be explored. Users can click on respective components to open direct comparisons between variables.
- **Top-to-Bottom Comparison Panels**: Expanding equation cards display derived forms easily. 

## Project Structure
- `fem.tex`: The primary source LaTeX document containing chapters of formulations.
- `generate_equations.py`: A Python extraction script. It uses regular expressions to parse `\begin{equation}` and `\begin{align}` blocks, cleans description contexts, maps section titles, and generates a structured JavaScript array.
- `equations.js`: The generated JSON-like data file created by `generate_equations.py`.
- `index.html`: The main web viewer interface.
- `app.js` & `styles.css`: The frontend scripts and stylesheets managing interactive interactions, dynamic overlays, scrolling, and styling.

## Getting Started
1. **Regenerate the Database (Optional)**: If you update `fem.tex` with new equations or text, regenerate the data file by running:
   ```bash
   python3 generate_equations.py
   ```
2. **View the Application**: Open `index.html` in your favorite modern web browser. No local web server is strictly necessary for basic usage!

## Technologies Used
- HTML / CSS / Vanilla JavaScript
- [KaTeX](https://katex.org/) for rapid math typesetting
- Python 3 `re` (Regex) for document extraction
