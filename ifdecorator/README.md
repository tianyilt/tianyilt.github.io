# Instruction Following Decorator (IFD) - Project Website

This is the project website for the paper "Instruction Following Decorator: A Framework for Robust and Sample-Efficient RLVR Training".

## Project Structure

```
ifdecorator/
├── index.html              # Main project page
├── README.md               # This file
├── static/                 # Static assets
│   ├── css/               # CSS stylesheets
│   │   ├── bulma.min.css
│   │   ├── bulma-carousel.min.css
│   │   ├── bulma-slider.min.css
│   │   ├── fontawesome.all.min.css
│   │   └── index.css
│   ├── js/                # JavaScript files
│   │   ├── bulma-carousel.min.js
│   │   ├── bulma-slider.min.js
│   │   ├── fontawesome.all.min.js
│   │   └── index.js
│   ├── images/            # Image assets
│   │   ├── ifd-figure1.pdf           # Main framework figure
│   │   ├── if-hack-relationship.pdf  # IF vs Hack resistance plot
│   │   ├── ablation-training.pdf     # Training ablation results
│   │   ├── ablation-intentcheck.pdf  # IntentCheck ablation results
│   │   ├── main-results.png          # Performance comparison table (placeholder)
│   │   ├── data-flywheel.png         # Data flywheel diagram (placeholder)
│   │   ├── intentcheck.png           # IntentCheck diagram (placeholder)
│   │   ├── trip-wires.png            # Trip wires diagram (placeholder)
│   │   └── favicon.ico               # Website favicon
│   └── pdfs/              # PDF documents (if needed)
└── figure/                # Original figure files
    ├── ifd-figure1.pdf
    ├── exp_ifeval_ifhack.pdf
    ├── exp-ablation-training-settings.pdf
    ├── exp-ablation-intentcheck.pdf
    ├── LOGO.pdf
    └── appendix/
```

## Setup Instructions

1. **Clone or download** this directory to your web server
2. **Convert PDF figures to PNG** (optional but recommended for web display):
   - Use tools like `pdf2image` in Python or online converters
   - Convert the following PDFs to PNG format:
     - `static/images/ifd-figure1.pdf` → `ifd-figure1.png`
     - `static/images/if-hack-relationship.pdf` → `if-hack-relationship.png`
     - `static/images/ablation-training.pdf` → `ablation-training.png`
     - `static/images/ablation-intentcheck.pdf` → `ablation-intentcheck.png`
3. **Create missing images**:
   - `main-results.png` - Screenshot or recreation of Table 1 from the paper
   - `data-flywheel.png` - Diagram showing the cooperative-adversarial data flywheel
   - `intentcheck.png` - Diagram illustrating the IntentCheck module
   - `trip-wires.png` - Visualization of the trip wires mechanism
4. **Update links** in `index.html`:
   - Replace `#` placeholders with actual URLs for paper, code, etc.
   - Update author information when ready for publication
5. **Serve the website**:
   - Can be served directly from any web server
   - For local testing: `python -m http.server 8000` in the ifdecorator directory

## Key Features

- **Responsive design** using Bulma CSS framework
- **Academic project page template** with standard sections
- **Social media integration** with proper meta tags
- **BibTeX citation** ready for academic use
- **Mobile-friendly** layout and navigation

## Customization

- Update meta tags in `<head>` section for SEO
- Modify colors and styling in `static/css/index.css`
- Add more sections by following the existing HTML structure
- Include additional JavaScript functionality in `static/js/index.js`

## Dependencies

All dependencies are included or loaded via CDN:
- Bulma CSS framework
- Font Awesome icons
- Academic icons
- Google Fonts
- jQuery

## License

This website template is based on the Academic Project Page Template, licensed under Creative Commons Attribution-ShareAlike 4.0 International License. 