# JioFrames AI Notes

A dark-first Material Design 3 design system for an ambient personal memory app on the JioFrames smart glasses platform. Built around a luminous indigo primary, warm amber capture accent, and a seven-step tonal surface system — with Google Sans and Roboto for the M3 type scale.

## Files

| File | Description |
|------|-------------|
| `DESIGN.md` | The complete design system specification in DESIGN.md format, including both structured YAML design tokens (frontmatter) and human-readable style guidance (markdown body). Covers the full Material Design 3 color system, M3 type scale, M3 shape scale, and component specifications for FABs, cards, chips, search bars, navigation bar, badges, and list items. |
| `tailwind.config.js` | A Tailwind CSS v3 theme configuration derived from the design tokens in the DESIGN.md frontmatter. Covers colors, typography (fontFamily + fontSize), border-radius, and spacing. Component tokens are intentionally excluded — Tailwind's utility-first approach handles component styling through composition of these primitives. |
| `design_tokens.json` | A [Design Tokens Community Group](https://www.designtokens.org/) JSON file containing all design tokens from the DESIGN.md frontmatter, including component-level tokens. This format is interoperable with tools like Figma, Style Dictionary, and other token pipelines. |
