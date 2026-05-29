---
name: JioFrames AI Notes
colors:
  surface: "#131318"
  surface-dim: "#0F0F14"
  surface-bright: "#37373D"
  surface-container-lowest: "#0D0D12"
  surface-container-low: "#1B1B21"
  surface-container: "#1F1F26"
  surface-container-high: "#2A2A30"
  surface-container-highest: "#34343B"
  on-surface: "#E4E1E9"
  on-surface-variant: "#C5C2CE"
  inverse-surface: "#2F2F36"
  inverse-on-surface: "#F2EFF8"
  outline: "#908D9A"
  outline-variant: "#46434F"
  surface-tint: "#ADC6FF"
  primary: "#ADC6FF"
  on-primary: "#003062"
  primary-container: "#004691"
  on-primary-container: "#D8E2FF"
  inverse-primary: "#0059C4"
  secondary: "#BEC6DC"
  on-secondary: "#283141"
  secondary-container: "#3E4759"
  on-secondary-container: "#DAE2F9"
  tertiary: "#FFBA8F"
  on-tertiary: "#4C2700"
  tertiary-container: "#6B3A00"
  on-tertiary-container: "#FFD9BE"
  error: "#FFB4AB"
  on-error: "#690005"
  error-container: "#93000A"
  on-error-container: "#FFDAD6"
  primary-fixed: "#D8E2FF"
  primary-fixed-dim: "#ADC6FF"
  on-primary-fixed: "#001945"
  on-primary-fixed-variant: "#004691"
  secondary-fixed: "#DAE2F9"
  secondary-fixed-dim: "#BEC6DC"
  on-secondary-fixed: "#121B2B"
  on-secondary-fixed-variant: "#3E4759"
  tertiary-fixed: "#FFD9BE"
  tertiary-fixed-dim: "#FFBA8F"
  on-tertiary-fixed: "#2B1300"
  on-tertiary-fixed-variant: "#6B3A00"
  background: "#131318"
  on-background: "#E4E1E9"
  surface-variant: "#46434F"
  record: "#B71C1C"
  on-record: "#FFFFFF"
typography:
  display:
    fontFamily: Google Sans
    fontSize: 57px
    fontWeight: "400"
    lineHeight: 64px
    letterSpacing: -0.25px
  headline-lg:
    fontFamily: Google Sans
    fontSize: 32px
    fontWeight: "400"
    lineHeight: 40px
  headline-md:
    fontFamily: Google Sans
    fontSize: 28px
    fontWeight: "400"
    lineHeight: 36px
  headline-sm:
    fontFamily: Google Sans
    fontSize: 24px
    fontWeight: "400"
    lineHeight: 32px
  title-lg:
    fontFamily: Google Sans
    fontSize: 22px
    fontWeight: "500"
    lineHeight: 28px
  title-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: "500"
    lineHeight: 24px
    letterSpacing: 0.15px
  title-sm:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.1px
  body-lg:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: 0.5px
  body-md:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
    letterSpacing: 0.25px
  body-sm:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
    letterSpacing: 0.4px
  label-lg:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.1px
  label-md:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.5px
  label-sm:
    fontFamily: Roboto
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 28px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 16px
  margin: 16px
components:
  fab-capture:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    size: 56px
  fab-capture-hover:
    backgroundColor: "#7D4500"
    textColor: "{colors.on-tertiary-container}"
  fab-recording:
    backgroundColor: "{colors.record}"
    textColor: "{colors.on-record}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
    size: 56px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-fixed}"
    textColor: "{colors.on-primary-fixed}"
  button-tonal:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  button-tonal-hover:
    backgroundColor: "{colors.secondary-fixed}"
    textColor: "{colors.on-secondary-fixed}"
  button-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  card-note-elevated:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-note-elevated-hover:
    backgroundColor: "{colors.surface-container}"
  card-note-filled:
    backgroundColor: "{colors.surface-container-highest}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-note-filled-hover:
    backgroundColor: "{colors.surface-container-high}"
  card-ai-summary:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  search-bar:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.full}"
    padding: "{spacing.md}"
  search-bar-focused:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
  input-field:
    backgroundColor: "{colors.surface-container-highest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
  chip-filter:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  chip-filter-selected:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  chip-assist:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  nav-item:
    backgroundColor: transparent
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
  nav-item-active:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.full}"
    typography: "{typography.label-md}"
  list-item-note:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    padding: "{spacing.md}"
  list-item-note-hover:
    backgroundColor: "{colors.surface-container}"
  badge-recording:
    backgroundColor: "{colors.record}"
    textColor: "{colors.on-record}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  badge-private:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  badge-ai-tag:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
---

# JioFrames AI Notes

## Brand & Style

JioFrames AI Notes is an ambient personal memory system for the JioFrames smart glasses platform. The product captures thoughts, conversations, and moments effortlessly and surfaces them when needed — transforming captured voice into structured, searchable knowledge.

The design language follows **Material Design 3** (Material You), adapted for a dark-first mobile companion app that pairs with smart eyewear. The interface is calm and deeply intelligent — designed to stay entirely out of the user's way during capture and reveal its capabilities during retrieval.

The aesthetic is **Dark Ambient Intelligence**: a near-black canvas with tonal color layering, luminous accent colors for active states, and a strong typographic hierarchy that makes information instantly scannable. The design respects the ambient nature of the product — minimal, unobtrusive, and deeply purposeful.

## Colors

The color system follows Material Design 3's dynamic color architecture with a deep indigo primary aligned to the Jio brand identity, and a warm amber tertiary reserved exclusively for capture states.

- **Primary (#ADC6FF, luminous indigo):** The core interaction color — primary buttons, active states, AI-generated content highlights, and focused navigational indicators. The light tonal value ensures maximum accessibility against dark surfaces.
- **Secondary (#BEC6DC, cool slate):** Secondary UI chrome, navigation bar active indicators, and supporting metadata. Grounds the interface with calm, structural neutrality.
- **Tertiary (#FFBA8F, warm amber):** Capture and recording accent. Used exclusively for the record FAB, active capture states, and live note indicators. The warm orange creates immediate high-contrast visual signaling against the dark canvas.
- **Record (#B71C1C, deep red):** Active recording state. Used only when a session is in progress to signal that capture is occurring. Never used for decorative purposes.
- **Error (#FFB4AB):** Standard M3 error state — validation failures, destructive actions, and connection errors.
- **Surfaces:** A seven-step tonal neutral system using pure color shifts (no borders) to communicate depth and component elevation. Surface levels range from `#0D0D12` (deepest) to `#34343B` (most elevated interactive surface).

## Typography

The type system follows the **Material Design 3 type scale** using **Google Sans** for display, headline, and title styles — providing a rounded humanist feel aligned with the Google ecosystem — and **Roboto** for body and label text at small sizes.

For Hinglish and multilingual input (a core JioFrames use case), implement **Noto Sans Devanagari** as a body font fallback for seamless language switching in transcriptions and note content.

- **Display (57px):** Splash screens and onboarding only. Never used within the main app flow.
- **Headlines (32px–24px):** Screen titles and major section headings. Set in Google Sans Regular to feel approachable, not authoritative.
- **Titles (22px–14px):** Note titles, card headings, modal headers, and list section labels.
- **Body (16px–12px):** Note content, AI transcriptions, summaries, and retrieval responses. Roboto ensures maximum legibility at conversational reading sizes.
- **Labels (14px–11px):** Tags, timestamps, navigation labels, chip text, and all metadata. Letter-spacing is slightly elevated to improve legibility at small sizes.

## Layout & Spacing

The layout follows the Material Design 3 **4-column compact mobile grid** with 16px margins and 8px base spacing unit.

- **Grid:** 4 columns, 16px gutters, 16px screen margins on all handsets.
- **Touch targets:** All interactive elements maintain a minimum 48×48dp touch target regardless of visual size.
- **Navigation:** A bottom Navigation Bar anchors primary navigation for one-handed reachability. Three destinations: Notes, Search, Settings.
- **Capture entry:** The Extended FAB floats above the Navigation Bar at the bottom-right of Notes and Search screens.
- **Bottom sheets:** Note detail, AI actions, and offline sync notifications surface via Modal Bottom Sheets rather than full navigation pushes — preserving context.
- **Scrollable lists:** Continuous scroll with 8px vertical item spacing. No pagination; note lists grow downward without interruption.

## Elevation & Depth

Depth follows M3's **tonal surface elevation** model for dark themes. Color shifts replace drop shadows entirely on surfaces below Level 3.

- **Level 0 – Base (`#131318`):** The main app canvas. Status bar and navigation bar backgrounds.
- **Level 1 – Raised (`#1B1B21`):** Note list card backgrounds. The primary content layer.
- **Level 2 – Elevated (`#1F1F26`):** Elevated cards, bottom sheet interiors, and secondary containers.
- **Level 3 – Floating (`#2A2A30`):** Search bars, text input fields, and navigation bar background.
- **Level 4 – Overlay (`#34343B`):** Dialogs, menus, action sheets, and the highest interactive surfaces.

Interactive state layers follow M3 opacity specifications: hover at 8%, pressed at 12%, dragged at 16%, using the element's content color.

## Shapes

The shape system follows the **Material Design 3 Shape Scale**, using rounded corners exclusively. The scale ranges from Extra Small (tight, data-dense contexts) to Full (pills and FABs), reflecting the warm, personal nature of a memory product.

- **None (0px):** Structural dividers only. Never applied to visible component containers.
- **Extra Small (4px):** Text input fields, dense data cells, and inline text chips within note content.
- **Small (8px):** Filter chips, assist chips, snackbars, and tooltip containers.
- **Medium (12px):** Note cards, info cards, bottom sheet drag handles, and content-area containers.
- **Large (16px):** Navigation drawer items, side sheets, and prominent surface containers.
- **Extra Large (28px):** Modal dialogs, large FABs, and featured content blocks.
- **Full (9999px):** Extended FABs, all badge types, search bars, and pill-shaped buttons.

## Components

### Floating Action Button (FAB)

The FAB is the primary capture entry point and must remain accessible at all times on Notes and Search screens.

- **`fab-capture` (amber):** Extended FAB labeled "Record" using tertiary-container amber. Sits above the Navigation Bar, bottom-right. Transitions to `fab-recording` on activation using M3's standard 300ms emphasized easing.
- **`fab-recording` (deep red):** Active recording state FAB labeled "Stop" with a pulsing animation on the recording icon. Immediately communicates that capture is in progress. AI processing occurs silently in the background — no transcript or preview is shown.

### Cards

Two card variants maintain a clear visual distinction between user-created and AI-generated content:

- **Elevated cards (`card-note-elevated`):** Used for user voice notes, text notes, and image notes in the list view. The subtle tonal lift from the base surface groups content naturally.
- **Filled cards (`card-note-filled`):** Used for AI-generated summaries, action item extractions, and pinned smart notes. The highest surface container token visually distinguishes AI output.
- **AI summary card (`card-ai-summary`):** A prominently tinted primary-container card used inside note detail views for transcription summaries and extracted action items.

### Search Bar

A full-width, rounded search bar (`search-bar`) pins to the top of the Retrieval screen beneath the app bar. It accepts natural language queries rather than keyword search. Placeholder text: "Ask anything about your notes…". The search bar transitions to `search-bar-focused` on tap, expanding slightly and elevating the surface container level.

### Chips

- **Filter chips (`chip-filter`):** Appear in a horizontal scrollable row below the search bar. Pre-defined filters: All, Tasks, Meetings, Personal, Ideas. Selected state uses `chip-filter-selected` with secondary-container fill.
- **Assist chips (`chip-assist`):** Appear in note detail view footers. AI-suggested follow-up actions: Set Reminder, Share, Export, Translate. Always rendered with a leading icon.

### Navigation Bar

Bottom Navigation Bar with three destinations using M3 active indicator pills:

1. **Notes** — Home screen note list
2. **Search** — AI retrieval and natural language query
3. **Settings** — Privacy controls, offline sync, and language preferences

Active items use `nav-item-active` with `secondary-container` fill. Inactive items use `nav-item` with `on-surface-variant` label color.

### Badges

- **`badge-recording`:** Red dot badge that appears on the Notes tab icon when a recording session is active from the glasses.
- **`badge-private`:** Lock icon badge on cards flagged as private. Excluded from AI retrieval and memory generation.
- **`badge-ai-tag`:** Primary-container pill for auto-generated topic tags on note cards (Finance, Meeting, Personal, etc.).

## Do's and Don'ts

- Do use tertiary amber exclusively for capture/recording states — never for decoration or secondary actions.
- Do maintain a minimum 48×48dp touch target for all interactive elements, including chips and nav items.
- Don't show live transcriptions, AI summaries, or any processing UI during active recording — the interface must stay minimal until capture ends.
- Do apply elevated cards for user-created content and filled cards for AI-generated content to preserve a clear content-origin hierarchy.
- Don't apply more than one primary-color action per screen — the FAB is always the primary action.
- Do use label typography for all metadata (timestamps, note types, tags) — body typography is reserved for note content and retrieval responses.
- Don't break the tonal surface hierarchy — never place a lighter elevation level inside a higher elevation container at the same visual layer.
- Do support Hinglish display in all text components — test note titles, tags, and summaries with mixed Hindi-English content.
- Don't use colored shadows — this is a tonal elevation system. Drop shadows are reserved for dialogs only and must use the M3 shadow color token.
