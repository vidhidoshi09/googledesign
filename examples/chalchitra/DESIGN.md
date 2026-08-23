---
name: Chalchitra
description: A mood- and genre-driven movie recommendation design system, built around glowing gradient orbs on a warm paper-white canvas.
colors:
  background: "#FAFAF6"
  surface: "#FFFFFF"
  surface-dim: "#F2F1EA"
  surface-bright: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F5F4EE"
  surface-container: "#EFEDE4"
  surface-container-high: "#E7E4D8"
  surface-container-highest: "#DEDACB"
  on-surface: "#17181A"
  on-surface-variant: "#63645E"
  on-background: "#17181A"
  outline: "#D6D3C6"
  outline-variant: "#EAE8DE"
  primary: "#17181A"
  on-primary: "#FAFAF6"
  primary-container: "#EFEDE4"
  on-primary-container: "#17181A"
  secondary: "#63645E"
  on-secondary: "#FAFAF6"
  secondary-container: "#EAE8DE"
  on-secondary-container: "#17181A"
  error: "#C43D3D"
  on-error: "#FFFFFF"
  error-container: "#F8DCDC"
  on-error-container: "#5A1414"
  genre-poetry: "#8E2FBE"
  genre-poetry-glow: "#B84FE0"
  genre-poetry-container: "#F1DDF9"
  genre-slice-of-life: "#A85A15"
  genre-slice-of-life-glow: "#E8963C"
  genre-slice-of-life-container: "#FBE7CE"
  genre-thriller: "#A82E2E"
  genre-thriller-glow: "#D93A3A"
  genre-thriller-container: "#F8D8D4"
  genre-alien: "#7A6B1A"
  genre-alien-glow: "#C9B93B"
  genre-alien-container: "#F3EEC7"
  genre-drama: "#1F4FBE"
  genre-drama-glow: "#4A7FE8"
  genre-drama-container: "#DCE6FB"
  genre-wonder: "#1F7A3A"
  genre-wonder-glow: "#3FB65C"
  genre-wonder-container: "#DBF2E1"
  imdb-yellow: "#F5C518"
  on-imdb-yellow: "#000000"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 56px
    fontWeight: "500"
    lineHeight: 60px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 34px
    fontWeight: "500"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: "500"
    lineHeight: 30px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  none: 0px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin: 40px
components:
  orb-poetry:
    backgroundColor: "{colors.genre-poetry}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  orb-poetry-glow:
    backgroundColor: "{colors.genre-poetry-glow}"
  orb-slice-of-life:
    backgroundColor: "{colors.genre-slice-of-life}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  orb-slice-of-life-glow:
    backgroundColor: "{colors.genre-slice-of-life-glow}"
  orb-thriller:
    backgroundColor: "{colors.genre-thriller}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  orb-thriller-glow:
    backgroundColor: "{colors.genre-thriller-glow}"
  orb-alien:
    backgroundColor: "{colors.genre-alien}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  orb-alien-glow:
    backgroundColor: "{colors.genre-alien-glow}"
  orb-drama:
    backgroundColor: "{colors.genre-drama}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  orb-drama-glow:
    backgroundColor: "{colors.genre-drama-glow}"
  orb-wonder:
    backgroundColor: "{colors.genre-wonder}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
  orb-wonder-glow:
    backgroundColor: "{colors.genre-wonder-glow}"
  card-movie:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  card-movie-hover:
    backgroundColor: "{colors.surface-container-low}"
  chip-genre:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  chip-genre-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm}"
  badge-imdb:
    backgroundColor: "{colors.imdb-yellow}"
    textColor: "{colors.on-imdb-yellow}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  input-mood:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "#000000"
    textColor: "{colors.on-primary}"
  button-text:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    padding: "{spacing.sm}"
---

# Chalchitra

## Overview

Chalchitra ("moving picture") is a mood- and genre-driven movie discovery
experience. Instead of a scrollable grid of posters, recommendations surface
as soft, glowing orbs floating on a warm paper-white canvas — each orb a
genre, sized and colored by its own emotional register. Clicking an orb
blooms it open into a short list of recommended films.

The aesthetic is **Editorial Ambient**: a quiet, gallery-white backdrop lets
color do the work of navigation. There is no chrome, no nav bar, no visual
noise — just an open canvas, a single line of text ("describe your mood, or
pick a genre"), and light. The tone is closer to a poster wall in a
well-loved single-screen cinema than a streaming app.

## Colors

The palette is built around a near-white, warm paper background so that
saturated genre colors read as light sources rather than UI chrome.

- **Background (#FAFAF6):** Warm off-white canvas. Never pure white — keeps the glow of the orbs from looking clinical.
- **Primary (#17181A, near-black):** Reserved for body text, primary buttons, and the selected-chip state. The one neutral, confident anchor color.
- **Genre colors:** Each genre owns one hue in two strengths — a `-glow` variant for the orb's radial-gradient center, and a deeper base variant (AA-safe for white label text and used for chips/accents) — never mixed across genres:
  - **Poetry — Orchid (glow #B84FE0 / base #8E2FBE):** lyrical, introspective, slow cinema.
  - **Slice of Life — Amber (glow #E8963C / base #A85A15):** warm, observational, character-driven.
  - **Thriller — Red (glow #D93A3A / base #A82E2E):** tense, high-stakes, pulse-quickening.
  - **Alien — Olive (glow #C9B93B / base #7A6B1A):** strange, speculative, first-contact wonder.
  - **Drama — Blue (glow #4A7FE8 / base #1F4FBE):** weighty, emotional, the largest and most central orb.
  - **Wonder — Green (glow #3FB65C / base #1F7A3A):** hopeful, coming-of-age, renewal.
- **IMDb yellow (#F5C518):** used exclusively for the rating badge on movie cards — instantly recognizable, never repurposed.

## Typography

**Fraunces** (a warm, slightly eccentric display serif) carries headlines and
the app's poetic voice — genre names, film titles. **Inter** handles every
functional surface: body copy, labels, buttons, metadata. The serif/sans
pairing separates "the feeling of the film" from "the facts about the film."

- **Display / Headline:** Fraunces Medium, set loose and large for the mood prompt and genre names inside an opened orb.
- **Title:** Inter Semibold for film titles inside recommendation cards.
- **Body:** Inter Regular for synopses and the mood-input placeholder.
- **Label:** Inter Medium/Semibold, small and often uppercase with wide tracking, for director credits, year, and chip text.

## Layout & Spacing

An unbounded, borderless canvas — not a fixed grid. Orbs are placed with
generous, irregular negative space so the layout feels discovered rather
than engineered.

- **Canvas:** Full-viewport, no visible container edges. A left-aligned prompt column sets the entry point; orbs drift across the remaining space at varying depths (implied by size and blur).
- **Orb sizing:** Orb diameter communicates recommendation strength/breadth for that genre — bigger orb, more films available right now.
- **Spacing:** 8px base rhythm. Use `lg`/`xl` between the prompt column and the orb field so the two never compete for attention.
- **Cards:** When an orb opens, its recommendations lay out as a small vertical stack of `card-movie`, anchored near the orb that spawned them — the card visually "belongs" to its genre color via a thin accent edge.

## Elevation & Depth

Depth comes from soft radial glow and blur, not drop shadows.

- **Orbs:** Each orb is a radial gradient (saturated genre color at center, fading to transparent) sitting on a heavy Gaussian blur, producing a "light source" effect rather than a flat circle.
- **Cards:** `card-movie` uses a single soft, neutral shadow (never colored) so cards read as physically above the canvas without competing with the orb glow.
- **Hover:** Orbs brighten and scale slightly (1.03×) on hover; cards lift 2px with a slightly larger shadow.

## Shapes

- **Orbs:** Perfect circles, always. This is the one non-negotiable shape rule — orbs must never be cropped, squared, or given hard edges.
- **Cards (`rounded.lg`, 24px):** Generously rounded to feel soft next to the orbs.
- **Chips and buttons (`rounded.full`):** Pill-shaped, matching the orb motif at UI scale.
- **Badges (`rounded.sm`, 8px):** The one small-radius exception — the IMDb badge should read as a tight, factual stamp, not a soft pill.

## Components

### Orbs (`orb-*`)

The primary navigation device. Each `orb-<genre>` token pairs a genre's base
color (AA-safe against white label text) with white label text; the
matching `-glow` color renders as the radial gradient's bright center so
the orb still reads as luminous. Orbs float freely, respond to hover/tap,
and expand in place to reveal recommendations — they never navigate to a
new screen.

### Movie Card (`card-movie`)

Represents one recommended film: poster thumbnail, title + year (Fraunces
title-lg), director (Inter label-md, muted), and an IMDb rating badge. A
2px left border tinted with the parent genre color ties the card back to
its orb.

### Chips (`chip-genre`)

A compact, textual alternative to the orbs — used once a genre is active, to
let the user switch between genres without losing their place. Selected
state (`chip-genre-selected`) inverts to the near-black primary color,
independent of genre color, to keep the active-state language consistent.

### IMDb Badge (`badge-imdb`)

Fixed yellow/black pairing per IMDb's own brand color — the only component
in the system that ignores the genre-color rule, by design, since it must
stay instantly recognizable as third-party data.

### Mood Input (`input-mood`)

A single borderless text field ("Describe your mood…") that sits above the
orb field as an alternate entry point to genre selection — typing a mood
and pressing enter highlights the orbs whose genres best match it.

## Do's and Don'ts

- Do keep exactly one saturated color per genre, used consistently across its orb, chip, and card accent.
- Don't apply genre color to body text or backgrounds — it is reserved for orbs, selected chips, and card accent edges only.
- Do keep orbs perfectly circular with soft blur — never crop, mask, or square them.
- Don't stack more than one primary (near-black) action per view; the orb field itself is the primary interaction.
- Do use Fraunces only for genre names, film titles, and the mood prompt — never for dense body copy or metadata.
- Don't recolor the IMDb badge; it must always render in IMDb's official yellow/black.
- Do let negative space between orbs vary — a mechanically even grid breaks the "discovered" feeling this system relies on.
