# ITL Website

Marketing site for the Graduate Certificate in International Leadership at Appalachian State University. Lives at **appitl.info**.

Owner: Paul Wallace (`wallacepr@appstate.edu`), program coordinator.

## Read these before writing any copy

1. **`_docs/copy-deck.md`** — the settled copy for every section, plus the section order, the global replacements list, and a record of phrasing that was deliberately removed. Copy in the deck is final; paste it verbatim rather than rewriting it.
2. **`_Context/paul-voice.md`** — Paul's voice rules. **This file is not in the repo**; it lives on Paul's machine. If a task calls for new copy the deck does not cover, ask Paul for it rather than inventing a voice. The register for this site is more formal than his student-facing writing: graduate program, plain and professional, no idiom, no terminal prepositions.

Anything the deck does not cover, flag rather than guess. The deck's "Open items" section lists what is still unconfirmed.

## Structure

Single static page. No build step, no framework, no dependencies.

- `index.html` — the entire site: inline `<style>` in the head, content, and two small inline scripts at the bottom (mobile nav drawer, faculty quote carousel).
- `block-a.png` — App State Block A logo, used in the nav and footer.
- `_docs/` — the copy deck.
- `chats/`, `project/` — original Claude Design handoff bundle. Historical, not deployed content.

Section order in `index.html` (matches the deck):

Hero `#program` → stat bar → Who It's For `#who` → Coursework `#courses` → Course Structure `#structure` → Portfolio `#portfolio` → Faculty `#faculty` → FAQ `#faq` → Apply `#admissions` → Closing `#closing` → footer

`#faculty` is deliberately excluded from header and footer navigation until it carries real student voices.

## Design system

Defined as CSS custom properties at the top of `index.html`. Do not introduce new colors or fonts.

- **Type:** Arial for everything; Times New Roman italic only for the `<em>` accent inside headlines.
- **Color:** App State gold `#FFCC00` and black as the spine; paper `#f4f3ee` as the workhorse background; blue `#03659c`, orange `#c6602a`, green `#69aa61`, roof `#537a6b` as the structural accent set.
- Course accent colors and Portfolio row colors map one to one: 6100 blue, 6200 green, 6300 orange, 6400 roof.
- Section backgrounds alternate paper → white → paper → paper2 so no two adjacent sections match.
- Responsive collapse to a single column under 980px; the mobile section-jump drawer lives in the sticky nav.

## Content constraints

These have caused rework before. They are not stylistic preferences.

- **Never name a partner institution** or promise an external collaboration. No Okayama, no named partners.
- **Never promise travel, study abroad, or collaboration with peers abroad.** The FAQ's careful phrasing — offered in the past, never guaranteed — is the only claim the site makes.
- **No tuition figures, term dates, decision timelines, or lead times.** Everything must stay evergreen.
- **Spell out "CQ" as Cultural Intelligence** on first use in any section that mentions it. Prospective students do not know the acronym.
- **Twelve credits, four courses.** ITL 6500 and the practicum no longer exist; do not reintroduce them.
- Use "Reich College of Education" or "RCOE", never "Reich COE". The department is "Media, Career Studies and Leadership Development", spelled out, with "and" rather than an ampersand.

## Deploying

Cloudflare Worker with static assets, connected to this repo via the Cloudflare GitHub integration. **Pushing to `main` deploys.** There is no build command and no staging environment.

Edge caching can delay a change appearing by several minutes. To force it: Cloudflare dashboard → the `appitl.info` zone → Caching → Configuration → Purge Everything.

The site sits behind Cloudflare Access and is not publicly reachable.
