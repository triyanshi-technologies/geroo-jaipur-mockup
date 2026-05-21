# Geroo Jaipur · Homepage (Option 1 — Heritage)

A self-contained HTML / CSS / JS prototype of the Geroo Jaipur homepage, in the
Heritage colour palette (Ink & Cream) with Modern Minimal display typography.

## Run it
Just open `index.html` in any modern browser. No build step required — React
and Babel are loaded from a CDN at runtime, and the JSX files are transpiled
in the browser.

For best results serve it over a local web server (so the browser can fetch
the `js/*.jsx` files):

```bash
# from this folder
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Structure
```
index.html              → app shell + mount point
css/app.css             → global styles
js/shared.jsx           → ImgSlot, VideoSlot, Icon, helpers
js/images.jsx           → product image URLs (Shopify CDN)
js/sections.jsx         → Hero carousel, Bestsellers, Celebrity Closet,
                          Wedding CTA, Activity Ticker, Promo Bar, Nav
js/HeritageHome.jsx     → page composition + sections specific to this page
assets/geroo-logo.png   → brand mark
```

## Going to production
Before launching:
1. **Replace the in-browser Babel** with a real build — Vite / Next / esbuild
   will give you ~10× faster first paint by removing the JSX transpile step.
2. **Swap CDN React** for a bundled, minified production build.
3. **Replace placeholder copy** (founder quote, atelier stats, review quotes,
   celebrity names, press logos) with real content.
4. **Wire the carousels & forms** to your Shopify backend / Klaviyo / etc.
5. **Add proper responsive breakpoints** below 1440px — current design is
   designed at 1440px and horizontal-scrolls below that.
