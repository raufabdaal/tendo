# Update / Overwrite Protocol

*Purpose: make every session easy for the founder to apply manually to the GitHub-connected local copy.*

---

## Rule for every delivery

At the end of each meaningful change, the agent must always report four things clearly:

1. **What changed**
2. **Why it changed**
3. **Which files changed**
4. **What the founder should do with each file**
   - **Overwrite existing file**
   - **Add new file**
   - **Delete file**
   - **No action needed**

## Non-negotiable push-package rule

Whenever the founder is close to pushing, says “ready to push”, asks for a milestone handoff, or when a session produces files that may be copied into the GitHub-connected local repo, the agent must provide an **exact file action list**.

The list must be grouped exactly as:

1. **Files to overwrite** — existing files the founder should replace.
2. **Files to add** — new files/folders the founder should copy into the repo.
3. **Files to delete** — files that should be removed, or `None` if no deletion is needed.
4. **Do not copy** — generated or unsafe folders such as `app/.next/`, `app/node_modules/`, caches, env secrets.
5. **Build status** — command run and result.
6. **Suggested commit message**.

This is required because the founder often uses a manual overwrite workflow and may lose agent context. Future agents must not answer vaguely with “copy the changed files”; they must name the exact paths.

---

## Delivery format to use every time

### Summary
- Short description of the task completed.

### Files changed
For each file, list:
- file path
- action: overwrite existing file / add new file
- one-line purpose

### Founder action
Use a clean checklist format:

- [ ] Overwrite `path/to/file`
- [ ] Add new file `path/to/file`

### Notes
- Mention anything intentionally not changed.
- Mention any sensitive files avoided.
- Mention any follow-up dependency before the next push.

---

## Example

### Summary
Cleaned the status docs to remove merge-conflict leftovers and reflect the Trainup pilot state.

### Files changed
- `STATUS.md` — **overwrite existing file** — current project status rewritten
- `HANDOFF.md` — **overwrite existing file** — next-session instructions cleaned up
- `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md` — **add new file** — curriculum coverage audit

### Founder action
- [ ] Overwrite `STATUS.md`
- [ ] Overwrite `HANDOFF.md`
- [ ] Add new file `docs/ops/ncdc-p7-math-coverage-audit-2026-06-30.md`

### Notes
- Did not touch `.gitignore`, env files, or deployment config.
- Next suggested step: audit question bank alignment.

---

## Current agreement

The founder has confirmed:
- manual overwrite is the preferred workflow
- not every file should be overwritten
- sensitive or unrelated files should be left alone unless explicitly needed
- documentation quality should be more thorough than before

This file should be treated as the standing protocol for future sessions.
