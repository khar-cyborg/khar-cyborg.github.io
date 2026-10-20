# Kharmukilan Muthuraman — Portfolio

A static, single-page portfolio for a Forward Deployed Engineer: plain HTML/CSS/JS, so there's no build step and no dependencies.

```
portfolio/
├── index.html            # Page shell + SEO / Open Graph tags
├── css/styles.css        # Design tokens, light/dark themes, layout
├── js/main.js            # Renders the content from the data file
├── data/portfolio.js     # ← ALL CONTENT LIVES HERE
└── assets/
    ├── img/              # portrait.jpg, favicon.svg
    └── badges/           # 16 optimized certification badges (256×256)
```

## Run locally

Double-click `index.html`. The site works straight from the file system (the data file is `.js` instead of `.json` for this reason).

Or serve it locally:

```bash
npx serve .
# or
python -m http.server 8000
```

## Update content

Edit `data/portfolio.js`, save, and refresh. Things to fill in:

| Field | Where | Notes |
|---|---|---|
| Experience highlights | `experience[0].roles[n].highlights` | Impact bullets per role (numbers help). Text starting with "Your …" / "Add …" shows a yellow "Placeholder" tag |
| LinkedIn URL | `profile.linkedin` | Empty = hidden |
| Résumé PDF | `profile.resume` | Put the PDF in `assets/` and set the path |
| Location | `profile.location` | Empty = hidden |
| Microsoft Learn transcript link | `microsoftTranscript` | Learn → Profile → Transcript → Share link |
| Google Cloud PCA verify link | the `Professional Cloud Architect` entry's `verify` | Credly/Accredible link if you have one |

To add a certification: drop the badge image in `assets/badges/` and add an entry to `certifications` (`group` is `anthropic`, `google` or `microsoft`).
To add a project: add an entry to `projects` (problem → built → outcome → stack).

## Deploy

Live at **https://khar-cyborg.github.io**. It's served by GitHub Pages from the `main` branch of the `khar-cyborg/khar-cyborg.github.io` repo.

To publish a change:

```bash
git add -A
git commit -m "Update portfolio"
git push
```

GitHub Pages rebuilds automatically, usually within a minute. You can watch progress in the repo's **Actions** tab.

If you move to a custom domain later, update `og:url`, `og:image` and the `canonical` link in `index.html`.

## Privacy

The site intentionally excludes date of birth, registration/roll numbers, certificate serial and credential numbers, grades, raw certificate scans, and work email. Credentials are verified via the issuers' public links instead.
