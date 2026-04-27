# Artimind

A cinematic AI editorial studio. Landing page + blog.

🌐 [artimind.art](https://artimind.art)
📰 [@artimindArt](https://x.com/artimindArt)

---

## Stack

- **Pure HTML / CSS / JS** — no framework, no build step for the landing
- **Client-side routing** via hash routes (`#/`, `#/work/:slug`, `#/blog`, `#/blog/:slug`, `#/about`)
- **Markdown blog** with a Node.js build script (`build-posts.js`)
- **Hosted on Vercel** with automatic deploys on push
- **GitHub Actions** rebuild `posts.json` when `posts/*.md` changes

---

## Repo structure

```
.
├── index.html              ← The landing (single file, all pages)
├── 404.html                ← 404 fallback with brand identity
├── vercel.json             ← Routing + headers config
├── robots.txt              ← Search engine directives
├── sitemap.xml             ← URL index for search engines
├── posts/                  ← Blog posts in Markdown
│   ├── the-json-system.md
│   ├── last-train-breakdown.md
│   └── kling-3-deep-dive.md
├── posts.json              ← Generated. Do NOT edit by hand.
├── build-posts.js          ← Build script (runs on push via GitHub Action)
├── package.json
├── .github/workflows/
│   └── build-posts.yml     ← CI: rebuild posts.json on push
└── README.md               ← You are here.
```

---

## Local dev

```bash
# Just open index.html in a browser. No build step needed for the landing.
open index.html

# After editing posts/*.md, rebuild the JSON:
npm run build
```

---

## Adding a blog post

1. Create a new `.md` file in `/posts` (filename = URL slug).
2. Copy this frontmatter at the top:

```yaml
---
slug: my-new-post
title_b: "BOLD TITLE"
title_it: "italic subtitle"
category: process
categoryLabel: Process
date: 2026-04-26
readtime: "5 min read"
excerpt: "Short summary for the listing."
coverFill: fill-1
tags: [tag1, tag2]
related: [other-post-slug]
---
```

3. Write your markdown body below.
4. Commit and push. The GitHub Action will rebuild `posts.json` automatically.

Categories: `process`, `workflow`, `tool`, `behind-the-drop`, `prompt-pack`, `essay`.

---

## Deploy

The site is deployed on Vercel. Any push to `main` triggers a redeploy.

For initial setup: import the repo at [vercel.com/new](https://vercel.com/new) and connect the domain in **Project → Settings → Domains**.

---

## Credits

Built and maintained by Javier · [Artimind Studio](https://artimind.art) · Santander, Spain.
