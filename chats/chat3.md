# App State Slide Template

_Started 2026-05-10 00:51 UTC_

---

## User

I need a slide template to use for all App State courses, including but not limited to ITM courses. It should use App State colors but not have a black or gold background. A white background is fine, but it can have other colors that are not too dramatic (eye-straining). Make it modern and bold, and include the App State logo only on the title screen. To start, create three designs for the title screen and one interior.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: snip]_

I have everything I need — the existing flyer establishes the App State palette (block A logo, blue #03659c, gold #FFCC00, paper #f4f3ee, plus a secondary set of warm/cool tones). Let me build the slide template using a 16:9 design and present three title variants plus one interior on a design canvas.

**System I'm committing to:**
- 1920×1080 slides, Helvetica
- Backgrounds: white, paper #f4f3ee, soft App State blue tints — no black or gold fills
- Gold and blue used as accents (rules, badges, type highlights)
- Block A logo appears only on title slides
- Bold display type, generous scale, 1pt rules and small uppercase kickers as connective tissue

_[tool: copy_files]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Three title directions and one interior on the canvas:

- **A · Editorial split** — paper bg, oversize headline, gold rule, logo top-right
- **B · Color block split** — App State blue panel anchors course identity, white panel carries the lecture title
- **C · Duotone numeral** — cool paper bg with a giant ghosted lecture number as graphic device
- **Interior** — white, two-column with kicker/headline + numbered list and a pull-quote callout (no logo)

All 1920×1080. Black/gold appear only as small accents — never as backgrounds. Tell me which direction to push further (or mix elements across them) and I'll build out the rest of the deck (section dividers, full-bleed image, quote, two-up content, end card).

## User

All of these are good, and might be used for different courses, but the one for my MTL-2010 course will be based on Direction C. We have a very specific set of slide templates for this course. Develop the following: Slide template created. Six-slide skeleton at _video-slide-template.pptx. Plain 16:9 layouts, named placeholders ({{COURSE_CODE}}, {{WEEK_NUMBER}}, {{WEEK_TOPIC}}, {{RELEASE_DATE}}, {{LAST_WEEK_RECAP}}, {{FOCUS_CONTENT}}, {{DUE_ITEMS}}, {{NEXT_WEEK_PREVIEW}}, {{SIGNOFF_LINE}}), and a small [Slide N of 6 — Section] marker on each so we can sanity-check the structure. See the uploaded file for content sections, but we have total artistic freedom for the design. My real details (Use only what is needed from the following): Paul Wallace, Ph.D.
 
Professor of Media, Technology, and Learning Design
International Leadership Graduate Certificate
Fulbright Scholar Alumnus
 
Department of Media, Career Studies, and Leadership Development
Reich College of Education / Appalachian State University

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: snip]_

_[tool: copy_starter_component]_

_[tool: copy_files]_

_[tool: write_file]_

_[tool: done]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Six-slide skeleton built at `templates/mtl-2010/MTL-2010 Weekly Template.html`, based on Direction C:

1. **Title** — `{{COURSE_CODE}}`, Week `{{WEEK_NUMBER}}`, `{{WEEK_TOPIC}}`, `{{RELEASE_DATE}}` + Block A logo + Paul Wallace credit
2. **Recap** — "Where We Are" / `{{LAST_WEEK_RECAP}}`
3. **Focus** — "This Week's Focus" / `{{FOCUS_CONTENT}}` (numbered list, 3 rows)
4. **Due** — "What's Due" / `{{DUE_ITEMS}}` (3-card grid)
5. **Ahead** — "Looking Ahead" / `{{NEXT_WEEK_PREVIEW}}` (two-column with pull quote)
6. **Sign-off** — `{{SIGNOFF_LINE}}` + `{{COURSE_CODE}}`, Week `{{WEEK_NUMBER}}`

Each slide carries a `[ Slide N of 6 — Section ]` dev marker bottom-right. Placeholders are styled as monospace blue/brick chips so they're easy to spot and replace. Logo appears only on slides 1 and (implicitly via the wrap layout) sign-off — actually only slide 1 carries the Block A; sign-off is logo-free per the original brief.

## User

Verifier agent check completed

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Slide 3 tightened — list padding reduced from 30→22px, fonts trimmed (38→34px title, 22→20px desc), headline scaled down to 96px. The optional third row should now clear the footer.

## User

Verifier agent check completed

## Assistant

_[tool: snip]_

Slide 3 fix verified clean. Template is ready at `templates/mtl-2010/MTL-2010 Weekly Template.html` — six-slide skeleton, all named placeholders in place, dev markers on every slide.

## User

My name only needs to be on slide 1: Dr. Paul Wallace is better for this audience. No Fulbright info or ITL line, just name and position. The quote sections do not need attribution by the instructor. Create the title screen using Direction A, B, and C, so I can see all here in context. They can simply be the first 3 slides in the deck.

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Three title variants now stacked at slides 1–3, then Recap → Focus → Due → Ahead → Sign-off. Personal info trimmed everywhere:
- Title slides only: **Dr. Paul Wallace · Professor of Media, Technology & Learning Design**
- Interior footers and sign-off no longer carry your name
- Quote attribution removed from the Ahead slide

Click through 1→3 to compare A (editorial), B (color block), C (duotone numeral) side by side in real context. Once you've picked, I'll delete the other two and renumber.

## User

Let's go with Direction A — Editorial split instead. Revise the content slides to reflect this design. Is there a way to make the title card "week topic" incorporate the blue color for one word in the title? Create this slide template with just that design.

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: done]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Direction A is now the only direction in the file. Title slide carries the blue accent word, gold rule, and editorial split; content slides 2–6 inherit the same paper bg, gold rule motif, and section-marker treatment so the deck reads as one system.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Title placeholder shrunk to 130px and now wraps cleanly within slide bounds. Token names simplified to `{{TOPIC}}` and `{{ACCENT}}`.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Slide 3 reflowed — headline trimmed to 88px, list reduced to two rows, padding tightened. Optional third row removed; duplicate row 2's markup if a week needs three beats.

## User

Reduce "Where we are." on slide two to make more room for {{LAST_WEEK_RECAP}} -- which needs half the room on the slide.

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Slide 2 now splits 50/50 — "Where we are." trimmed to 88px on the left, `{{LAST_WEEK_RECAP}}` gets the full right half with its own column rule and breathing room.

## User

How to export this as a PPTX file for use as my template?

## Assistant

_[tool: invoke_skill]_

_[tool: snip]_

_[tool: show_to_user]_

_[tool: gen_pptx]_

_[tool: snip]_

Download triggered — **MTL-2010 Weekly Template.pptx** (6 slides, editable text/shapes, speaker notes attached).

A couple of notes for using it as a template in PowerPoint:

- The `{{TOKEN}}` strings come through as plain editable text — click any of them to retype with the week's content.
- Block A logo is a raster image; it'll keep its position and ratio when you save the file as a PowerPoint template (`.potx`) via *File → Save As → PowerPoint Template*.
- Helvetica is used throughout. If a viewer doesn't have it, PowerPoint will substitute Arial (visually nearly identical at this scale).
- Speaker notes for each slide are pre-filled with replacement instructions — clear them before recording.

If you want me to regenerate with web-safe fonts baked in (so it looks identical on any machine), or to swap the `{{TOKEN}}` placeholders for real first-week content as a starting point, say the word.

## User

Changes: 1. Slide 4 has three pre-styled cards labeled Deliverable 01/02/03 with hardcoded sample text ("Discussion post.", "Reading log entry.", "Due by Friday · AsULearn dropbox", etc.). Most weeks have one or two items, not three.  So, swap the hardcoded sample text in the cards for explicit named placeholders — {{DELIV_1_TITLE}}, {{DELIV_1_DETAIL}}, {{DELIV_2_TITLE}}, etc. — and I will add logic in the task to set unused slots to — or leave them visually muted. 2. The Focus slide expects two numbered beats. Slide 3 has "01" and "02" labels with a beat title and supporting line each. Same recommendation: replace the hardcoded sample text with {{FOCUS_1_TITLE}}, {{FOCUS_1_DETAIL}}, {{FOCUS_2_TITLE}}, {{FOCUS_2_DETAIL}} so the task knows what to fill where. 3. Slide 5 has READ / WATCH columns. Useful when there's both a reading and a video for next week, awkward when there isn't. Same fix: {{READ_LABEL}} (e.g., "Lambert, Ch. 1") and {{WATCH_LABEL}} (e.g., "Bear 71 VR — 20 min"). 4. There should be no instructions on the cards that are not in variables, as this template will be automatically generated with content. Change any reamining content that is text, e.g. slide 5 quote "“Come into next week with the framework already in your head — we’ll spend our time using it, not learning it.” to a variable.

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: gen_pptx]_

Updated template variables in place and regenerated the PPTX:

**Slide 3 — Focus:** `{{FOCUS_1_TITLE}}`, `{{FOCUS_1_DETAIL}}`, `{{FOCUS_2_TITLE}}`, `{{FOCUS_2_DETAIL}}`

**Slide 4 — Due:** `{{DELIV_1_TITLE}}` / `{{DELIV_1_DETAIL}}` through `{{DELIV_3_*}}`. Headline changed from "Three things to turn in" → "What's due this week" so it doesn't lie when there's only one or two.

**Slide 5 — Ahead:** `{{AHEAD_LEAD}}`, `{{AHEAD_DETAIL}}`, `{{AHEAD_QUOTE}}` for the pull-quote, plus `{{READ_LABEL}}` and `{{WATCH_LABEL}}`.

**Also varablized everywhere instructional copy was hardcoded:** `{{TITLE_LEAD}}` (slide 1), `{{RECAP_LEAD}}` + `{{RECAP_DETAIL}}` (slide 2), `{{SIGNOFF_NOTE}}` (slide 6).

The static section headlines ("Where we are.", "The core of this week.", "Next week.", "What's due this week.") are kept as fixed template furniture — they're the slide's identity, not weekly content. If you want any of those swapped to variables too, say so.

Download fired: **MTL-2010 Weekly Template.pptx**.

