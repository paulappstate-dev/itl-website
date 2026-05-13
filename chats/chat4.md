# ITL Program Website

_Started 2026-05-12 22:11 UTC_

---

## User

Create a website prototype for the ITL program. Focus on design first, we will add full content later with Claude Code.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: copy_files]_

I have a strong foundation from the existing flyer and design directions — established palette (App State gold/black + Lake Blue/Brick Orange/Grass Green accents, Paper #f4f3ee), Arial + Times New Roman type pairing, three-pillar structure, and the "Lead across borders" / virtual collaboration story. I'll build the website prototype in that same visual system so the print and web read as one program.

**System I'm committing to:**
- **Type:** Arial for everything except occasional Times New Roman italic for emotional/quote moments
- **Color rhythm:** Paper background as the workhorse; gold for identity moments; black sections as punctuation; the three pillar colors (blue/orange/green) as a structural device that recurs from pillars → coursework chips → callouts
- **Layout:** Editorial single-page scroll with a sticky nav, big type, hairline rules, and color-block sections — feels like the trifold unfolded into a website
- **Editability:** Plain static HTML (no React) so you can hand to Claude Code and edit copy directly later

Let me build it.

_[tool: write_file]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Built a long-scroll homepage at `website/ITL Website.html` that extends the established ITL print system into the web.

**What's there:**
- **Top utility bar + sticky nav** with Block A lockup + ITL stamp
- **Hero** — "Lead / *across* / borders." massive headline, lede + black meta-card
- **Gold at-a-glance band** — 15 cr / 5 courses / 100% online / 0 travel
- **Three pillars** — Cultural Intelligence, Cross-Cultural Comms, Distributed Leadership in blue/orange/green blocks
- **Signature feature** — virtual collaboration with peers abroad, 4-week scaffolded timeline
- **Coursework** — 5 courses with code chips and pillar-color accents
- **Lake Blue pull-quote band**
- **Who it's for** — three audience cards
- **Black portfolio band** — "A portfolio, not just a transcript"
- **Admissions + FAQ** side-by-side
- **Faculty teaser** (placeholder names)
- **Mega gold CTA** — "Leadership without borders."
- **Black footer** with brand block, nav, contact

**Notes for next pass:**
- Faculty/testimonial/course codes are placeholders — flagged for content swap
- Static HTML (no React) so Claude Code can edit copy directly
- Responsive collapse to single column under 980px (mobile nav still needs a real menu)

Let me know what to push on — more sections, alternate hero directions, or a mobile/tablet sweep.

## User

Need a sticky menu that is attached to the sticky nav, in order to jump to different sections on mobile (Responsive). Get rid of this line: "Boone, NC · Reich COE · 2026–27". Three Pillars text in the color columns needs to be larger to read easily. And the highlight text in those columns should be white, as the yellow is very hard to read. Change the Signature feature to the Portfolio. Same size as the current Signature feature, but with Portfolio as the focus (delete the existing Portfolio section).In Coursework, ITL 5300 and ITL 5400 use the same brown highlight color. Find a unique color for all (The course names are fine, but the numbers are: ITL 6100, 6200, 6300, 6400, and 6500). Reduce the size of the quote section. Make it so it can hold a photo of the student/faculty and maybe a carousel for sliding through multiple quotes. The cards (Sector A, etc.) under the "Who it's for section" could use some color, either as unique backgrounds, outlines, etc. Admissions and Common questions are nice, but they don't line up properly vertically, so it's better to separate them into sections, one on top of the other. Get rid of the Faculty section, as we mostly use adjuncts. We never abbreviate as "Reich COE"; use RCOE or the full name: "Reich College of Education."

## Assistant

_[tool: update_todos]_

Working through the list. Let me make all the changes in one pass.

_[tool: str_replace_edit]_

Now the structural HTML changes:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now replace the quote section, delete the portfolio band, kill the faculty section, color the cards, and stack admissions/FAQ:Now the body HTML: replace the quote section, delete the portfolio band, color the cards, restructure admissions/FAQ, remove faculty:

_[tool: str_replace_edit]_

Now delete the old portfolio block, remove the faculty section, split admissions/FAQ into separate stacked sections, and update the footer:

_[tool: str_replace_edit]_

Now add the JS for the mobile menu burger and quote carousel before `</body>`:

_[tool: str_replace_edit]_

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

All requested changes applied. Highlights:

- **Mobile drawer:** Burger button appears under 980px next to the Apply CTA; tapping it slides open a numbered section-jump list under the sticky nav, closes on link tap or resize-up.
- **Pillars:** Bumped body to 17px / h3 to 34px, list-row text to 15px, monospace mini-labels now white instead of gold.
- **Portfolio replaces Signature:** Same two-column black/paper layout, four numbered artifact rows (comms guide, collab playbook, CQ self-assessment, capstone deliverable). Old portfolio band removed.
- **Coursework:** Renumbered 6100–6500; each course gets a unique left-edge color (blue / green / orange / roof-green / gold).
- **Quote section:** Reduced vertical pad, added 4:5 photo slot (placeholder pattern + tag), arrow + dot controls, 3 slides cycling. Photo slot ready for real headshots.
- **Who it's for cards:** Each gets a thick top border + tinted background + filled solid label chip in its sector color (blue / orange / green).
- **Admissions / FAQ:** Now two separate stacked sections with their own headers and intros; admissions steps run in a 2-column grid inside their section so they balance visually.
- **Faculty section:** Removed; footer Program nav and mobile drawer updated.
- **Reich COE:** Replaced everywhere with RCOE (nav lockup) or full "Reich College of Education" (utility bar, footer brand block, copyright).

Awaiting the verifier; flag anything else you want pushed.

## User

Verifier agent check completed

## Assistant

Verifier passed — all changes are live and working as requested.

