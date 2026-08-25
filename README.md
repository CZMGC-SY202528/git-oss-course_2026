# Git & Open Source Contribution — Course Site

A self-contained static site (no build step) covering:
- **Module 1** — Git Fundamentals (repos, commits, branches, merges)
- **Module 2** — Contributing to Open Source (issues, pull requests, code review)
- **Assignments** — one per module, with rubrics
- **Quizzes** — embedded in each module, graded instantly in-browser

## Files
```
index.html          course home + roadmap
module1.html         Git fundamentals lesson + quiz
module2.html         contributing lesson + quiz
assignments.html      both assignments + rubrics
assets/style.css      shared design system
assets/script.js      quiz grading logic
```

## Publish it on your GitHub profile (GitHub Pages)

You have two good options:

### Option A — a dedicated course repo (recommended)
1. Create a new repository on your **personal profile**, e.g. `git-oss-course`.
2. Upload these files (keep the folder structure — `assets/` must stay a subfolder).
3. Go to **Settings → Pages**.
4. Under "Build and deployment," set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`.
5. Save. Your course goes live at:
   `https://<your-username>.github.io/git-oss-course/`

### Option B — your profile's root site
If you want it at `https://<your-username>.github.io/` directly:
1. Create a repository named **exactly** `<your-username>.github.io`.
2. Upload these files to its root.
3. Enable Pages the same way (Settings → Pages → Deploy from branch → `main` → `/root`).
4. It will be live at `https://<your-username>.github.io/`.

> Either way, GitHub Pages typically takes 1–2 minutes to build after your first push. Refresh the Pages settings tab to see the live link once it's ready.

## Editing content later
- Quiz questions live directly in `module1.html` / `module2.html` as `<div class="quiz-q" data-correct="...">` blocks — copy an existing block to add a question.
- Colors and type are defined once as CSS variables at the top of `assets/style.css`.
- No backend, no build tools, no dependencies beyond a Google Fonts CDN link — this can be hosted anywhere that serves static files, not just GitHub Pages.

## Suggested course sequence
Point students to Module 1 first (local Git only), then Module 2 (GitHub workflow on `CZMGC-SY202528`), assigning the matching assignment right after each module.

## Certificate page
`certificate.html` lets a student (or you) fill in their name, team, quiz scores, and assignment links, then generates a printable/PDF-able completion certificate (`window.print()` — no server, no dependencies). Useful as a portfolio artifact or as a quick grading record.

## Structured assignment submission (GitHub-native, no Google Form needed)
Instead of students pasting links in chat, use GitHub's own issue/PR forms — they live in a separate small bundle, `github-templates/`, included alongside this site. See `github-templates/README.md` for exact deployment steps; short version:

1. Create a repository named **`.github`** inside the `CZMGC-SY202528` organization (this is a GitHub-recognized special repo name).
2. Upload the contents of `github-templates/.github/` into it, preserving the `ISSUE_TEMPLATE/` folder.
3. Every repo in the org that doesn't have its own templates will automatically pick these up:
   - **New issue** → choice between "Contribution task" (Assignment 2) and "Assignment 1 submission" forms, both with required fields and checklists.
   - **New pull request** → auto-fills with the What / Why / How-to-test template and a checklist, including a `Closes #` reminder.
