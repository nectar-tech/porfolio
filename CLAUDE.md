# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static HTML portfolio for Nectar, a multidisciplinary designer. No build tools, no framework, no package manager — pure HTML/CSS/JS. Open any file directly in a browser or serve with any static server.

```bash
# Quickest way to preview locally
open home.html

# Or serve with Python (avoids some cross-origin quirks)
python3 -m http.server 8080
```

## File structure

| File | Purpose |
|---|---|
| `home.html` | Main portfolio: hero, project cards grid, about, contact |
| `neon-odyssey.html` | Case study — The Neon Odyssey (learning game) |
| `academics-project.html` | Case study — Academix |
| `rimon-case-study.html` | Case study — Rimon |

Each file is fully self-contained: all CSS lives in a `<style>` block in `<head>` and all JS in a `<script>` block before `</body>`. There are no shared stylesheets or script files.

## Design system

All pages share the same visual identity. CSS variables are defined in `:root` in each file — keep them consistent when editing:

| Token | Value | Role |
|---|---|---|
| `--cream` / `--bg` | `#faf9f4` / `#F9F8F5` | Page background |
| `--orange` / `--accent` | `#cd7542` / `#C1693A` | Brand accent, links, highlights |
| `--text` / `--text-dark` | `#1a1a1a` | Body text |
| `--muted` / `--text-mid` | `#646464` / `#6B7280` | Secondary text |
| `--border` | `rgba(205,117,66,0.18–0.20)` | Dividers and outlines |

**Font inconsistency:** `home.html`, `neon-odyssey.html`, and `academics-project.html` use **DM Sans**; `rimon-case-study.html` uses **Inter**. Both are loaded from Google Fonts inline.

## Navigation pattern

Every page has a sticky nav with:
- Brand link `"Nectar."` (orange, bold) → `home.html` or `#hero`
- CV download button (pill style, orange outline)

Case study pages additionally have a `← Back` link near the top that returns to `home.html`.

## Project cards (home.html)

Work cards live in `#work .work-list`. Each `.project-card` has:
- `.card-visual` — image area with a colored background
- `.card-body` — meta (client + year), title, tag chips, CTA button

Cards with `href="#"` are placeholders (Marhaba projects); `neon-odyssey.html` is the only fully linked case study from the home page.
