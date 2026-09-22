---
name: Kinetic Drafting Portfolio
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#434656'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#124aef'
  primary: '#0041e1'
  on-primary: '#ffffff'
  primary-container: '#2f5cff'
  on-primary-container: '#f0f0ff'
  inverse-primary: '#b8c3ff'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#555656'
  on-tertiary: '#ffffff'
  tertiary-container: '#6e6e6e'
  on-tertiary-container: '#f3f1f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Barlow Condensed
    fontSize: 96px
    fontWeight: '700'
    lineHeight: 96px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0.01em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-dimension:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
    letterSpacing: 0.12em
  label-coordinate:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '500'
    lineHeight: 10px
    letterSpacing: 0.15em
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system translates the rigorous precision of CAD schematics, mechanical vector sheets, and architectural drafting boards into an interactive digital portfolio environment. The visual persona is hyper-rational, exact, and unapologetically technical—treating design work not merely as decorative artifacts, but as deliberate engineering systems composed of data, coordinates, tolerances, and structural logic.

The interface evokes the tactile clarity of an architect’s vellum desk or an aerospace vector blueprint. Spatial relationships are defined by datum lines, registration crop marks, orthogonal axes, and live coordinate feedback. The aesthetic eschews ambient fuzziness, blurred backdrops, and artificial drop shadows in favor of hair-thin linework, hairline borders, corner reticles, and unyielding geometric tension.

## Colors

The palette mimics physical drafting media and plotter ink:
- **Drafting Vellum / Matrix Neutral (`#E8E8E8` to `#F0F0F0`)**: The primary light ground, patterned with fine 1px grid rules at variable opacities.
- **Deep Plotter Ink (`#0A0A0A`)**: Used for dominant typographical elements, major structural dividing rules, and high-priority framing lines.
- **Blueprint Vector Accent (`#2F5CFF`)**: The operative technical accent. This pigment is reserved strictly for functional mechanics: interactive triggers, coordinate readouts, active guide vectors, dimensional arrow heads, bezier vertices, cursor anchors, and live system telemetry. It is strictly never deployed as an expansive surface fill.
- **Annotation Slate (`#767676`)**: Subdued secondary metadata, non-active layout rules, and supplementary dimensional notations.

In Dark Mode (`#0A0A0A` to `#111111`), the substrate converts to a digital terminal drafting board; typography transitions to sharp drafting white (`#F2F2F2`), structural lines take on subdued wireframe values (`#222222`), while the `#2F5CFF` beacon accent remains constant across both modes to preserve spatial focus.

## Typography

Typographic hierarchy enforces the tension between architectural authority, human readability, and computational precision:

- **Display & Headlines (`Barlow Condensed`)**: Rendered in all-caps or calibrated title casing. Titles include explicit datum line guides: horizontal hairline rules overlaid behind or traversing the text block at the `CAP_HT` (cap-height) and `BASE` (baseline) positions, accented with miniature end-cap ticks.
- **Body Discourse (`Geist`)**: Neutral, unpretentious grotesque chosen for its razor-sharp legibility against structural backgrounds. Line height is tuned specifically for documentation readability.
- **Technical Telemetry (`JetBrains Mono`)**: Strict tabular numbers and monospaced glyphs applied to indexes (`[REF_01]`), dimensional readouts (`W: 1440.00 PX`), bounding-box coordinates, and technical metadata. Always set with generous letter-spacing to emphasize inspection aesthetics.

## Layout & Spacing

The canvas is constructed over an explicit 12-column isometric blueprint grid flanked by physical layout margins. All content units adhere to a dual-grid spacing model: an overarching macro rhythm based on modular intervals (1rem / 1.5rem / 2.5rem) and an underlying micro grid of 8px increments that governs tick marks, crosshairs, and leader line extensions.

### Responsive Breakpoints & Reflow
- **Desktop (≥ 1280px)**: Strict 12-column layout with fixed outer drafting margins (`margin-desktop`) containing project serial metadata, active viewport dimensions, and navigational coordinates in the borders. Gutter rules display vertical hairline dividers.
- **Tablet (768px – 1279px)**: 8-column layout. Structural guidelines collapse to internal cell frames. Margin decreases to `margin-tablet`, while secondary technical indices condense into collapsible inspector strips.
- **Mobile (< 768px)**: 4-column layout. Vertical framing borders persist on the screen edges with integrated tick rulers. Corner crop marks adapt directly to the card bounding boxes, maintaining the draft sheet aesthetic within a single vertical stream.

## Elevation & Depth

Depth is conveyed through orthogonal planar layering and precision linework rather than volumetric light sources or blurred shadows:

- **No Diffuse Shadows**: Blur radii are eliminated across the system. The interface remains resolutely planar, emulating physical sheet-drafting.
- **Orthogonal Framing (Crisp Borders)**: Tiers are delineated by 1px solid structural rules. Primary containers use `#0A0A0A` (or `#333333` in dark mode), while tertiary sub-divisions rely on 1px dashed or dotted guide lines (`#BCBCBC` / `#262626`).
- **Registration Reticles & Crops**: Panels achieve separation via exterior corner crop marks (4px L-shaped markers spaced 2px off container corners) and registration crosshairs (`+`) at central intersections.
- **Vector Hover Offsets**: Elevated state interaction is represented by physical offset wireframes: hovering an element prompts a 1px solid `#2F5CFF` stroke offset by +2px on the X/Y axes, referencing an uncommitted vector blueprint path.

## Shapes

The geometry across this system is completely unrounded (`roundedness: 0`). Curved radiuses contradict the mechanical discipline of technical drafts, vector bounding boundaries, and plot sheets:

- Every surface, panel, interactive zone, and viewport retains hard 90° right angles.
- Chamfered or cut corners (45° angle notches of 4px) are permitted exclusively on active tabs, primary status tags, and inspection badges to signify component indexing.
- Interactive nodes, drag vertices, and bezier handles maintain strict square proportions (4x4px or 6x6px solid boxes anchored directly on intersection lines).

## Components

### Buttons & Trigger Mechanics
- **Primary Technical Action**: 0px border radius, 1px solid border in `#0A0A0A`. Background is transparent with high-contrast text. On hover, the container displays miniature corner anchors (3px corner brackets in `#2F5CFF`) accompanied by an inline coordinate prefix (e.g., `[ACT_01]`). The text color shifts to `#2F5CFF`. Never fills with solid accent color.
- **Secondary Action**: Borderless with an inline leading crosshair icon (`+`) and terminal leader rule (`---`) that extends horizontally on hover.

### Chips & Status Readouts
- Monospaced badges enclosed by 1px light grey borders. Chamfered top-right corner.
- Status indicators feature a 4x4px flashing square node in `#2F5CFF` flanked by operational text: `STATUS: PRODUCTION_SPEC_READY`.

### Input Fields & Search Bars
- Transparent fields bound by a bottom 1px solid rule and flanking corner notches. Label rests above the baseline in `label-dimension` typography.
- Focused state activates the bottom rule to 1px solid `#2F5CFF` with live dimension labels indicating current text length and pixel coordinates (`L: 24CH | W: 320PX`).

### Cards & Project Inspection Panels
- Bounded by 1px solid lines with outward-facing corner crop marks.
- Header bands incorporate an inspection datum strip displaying reference numbers, revision indicators (`REV_2.4`), and aspect ratios.
- Integrated dimension callouts with 1px extension lines and centered alphanumeric measurements (e.g., `|--- 480.00mm ---|`) flanking project previews.

### Checkboxes & Radio Selection
- **Checkboxes**: Pure 12x12px square outlines. Checked state is marked by an internal cross (`×`) or solid 6x6px inner square in `#2F5CFF`.
- **Radio Toggles**: Diamond outline (rotated 45° square); active state reveals a centered crosshair (`+`) in `#2F5CFF`.

### Technical Drafting Callouts (Specialized)
- Floating annotation nodes consisting of an anchor point (2x2px solid circle), a 45° angled leader line terminating in a horizontal shelf, and a JetBrains Mono metadata flag delivering contextual portfolio project specifications.


