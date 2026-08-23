# Chalchitra

A mood- and genre-driven movie recommendation design system. Recommendations
surface as soft, glowing gradient orbs floating on a warm paper-white
canvas — one orb per genre — instead of a conventional poster grid. Built
around a near-black/warm-white "Editorial Ambient" palette with six
saturated genre accent colors, paired Fraunces (display serif) and Inter
(body sans) typography.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | The complete design system specification in DESIGN.md format, including both structured YAML design tokens (frontmatter) and human-readable style guidance (markdown body). Covers the neutral/genre color system, the Fraunces + Inter type scale, orb/card/chip/badge component specs, and layout guidance for the orb canvas. |
| `preview.html` | A live, interactive showcase: type a mood or click a genre orb to bloom open a small stack of recommended films (poster, title, year, director, IMDb rating). Self-contained — no build step, open directly in a browser. |
| `tailwind.config.js` | A Tailwind CSS v3 theme configuration derived from the design tokens in the DESIGN.md frontmatter. Covers colors, typography, border-radius, and spacing. Component tokens are intentionally excluded — Tailwind's utility-first approach handles component styling through composition of these primitives. |
| `design_tokens.json` | A [Design Tokens Community Group](https://www.designtokens.org/) JSON file containing all design tokens from the DESIGN.md frontmatter. This format is interoperable with tools like Figma, Style Dictionary, and other token pipelines. |

`tailwind.config.js` and `design_tokens.json` are generated directly from
`DESIGN.md` via the `@google/design.md` CLI:

```bash
npx @google/design.md export --format tailwind DESIGN.md > tailwind.config.js
npx @google/design.md export --format dtcg DESIGN.md > design_tokens.json
```
