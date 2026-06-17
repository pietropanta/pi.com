# GitHub Copilot instructions for pi.com ✅

## Quick summary

- This repository is extremely small and currently contains only `README.md` with a brief Portuguese note. There are no source files, build scripts, tests, or CI workflows present.
- Primary contact / owner: `pietropanta` (default branch: `main`).

---

## How to be immediately productive 🔧

- Start by inspecting `README.md` (root) — it indicates this is a training/learning repo. Use the file as a source of context and language cues (Portuguese).
- If you need to add code, prefer small, self-contained changes and open a PR for review; document any new commands in `README.md`.
- If a language or framework is added (e.g., Node, Python), also add minimal dev scripts (`package.json` `scripts`, `Makefile`, or `pyproject.toml`) and a short `README` section explaining how to build/run/tests locally.

## Conventions & patterns to follow here ✨

- Language: the current README uses Portuguese. Keep documentation comments and commit messages understandable to the repo owner; short bilingual comments (EN/PT) are acceptable if you plan to broaden contributors.
- Keep changes small and incremental — this repo appears used for learning/training. Avoid large architectural overhauls without prior discussion.
- No test or CI conventions exist yet — when adding tests, add a lightweight CI workflow (`.github/workflows/ci.yml`) that runs the tests and lints.

## Integration points & checks 🔍

- Before adding dependencies, check with the owner via an issue or PR description explaining the need and the added maintenance cost.
- If you add external services or API keys, ensure they are configurable via env vars and never committed to the repository.

## Practical examples & suggested prompts for AI agents 💬

- "Scaffold a minimal Node.js project with ESLint, Jest, and scripts to run tests; update `README.md` with commands and open a PR explaining choices."
- "Add a simple Python `pyproject.toml` and `pytest` setup and include a `tox`/Github Actions matrix workflow for >1 Python version."
- "Create a small sample component or script that demonstrates the repo's learning goal and include a test and README snippet showing how to run it."

## File references 📁

- `README.md` — current project description and the only existing file.
- `.github/copilot-instructions.md` — you are reading/creating this file.

---

## When unsure, ask or open an issue 🗣️

- If a change is ambiguous (language choice, framework, CI, test approach), open an issue describing options and tradeoffs instead of making unilateral, large changes.
- Tag `@pietropanta` in the PR or issue for review and guidance.

---

If any section is unclear or you want me to expand specific workflows (e.g., suggest a default CI, test frameworks, or sample scaffolding), tell me which one and I'll update this file. ✅
