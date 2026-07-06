# START HERE — Tendo

**Tendo** is a child-friendly study platform for Ugandan upper-primary learners and teachers. It serves **Primary Six (P6)** and **Primary Seven (P7 PLE)** across the official NCDC subjects.

> *Tendo* (Luganda): "praise / commendation" — what parents say when PLE results come back.

---

## You have 10 seconds. What do I read?

1. **`STATUS.md`** — current state, latest UX/auth changes, and what is still open.
2. **`HANDOFF.md`** — no-context restart handoff for the next session.
3. **`CHECKLIST.md`** — execution tracker and remaining production-cleanup tasks.
4. **`DECISIONS.md`** — architecture/product decisions, including role sign-in and UX declutter rules.
5. **`CHANGELOG.md`** — dated record of what changed.
6. **`docs/ops/ux-auth-production-cleanup-2026-07-07.md`** — latest UX/auth/production cleanup handoff.

## You have 60 seconds. What's this project now?

- **For students:** P6 and P7 learners studying Mathematics, English, Integrated Science, Social Studies, and Religious Education.
- **For teachers:** class dashboard, worksheets, content issue reports, past-paper browsing, and the same content library learners use for lesson inspiration.
- **Current UX direction:** role-specific experiences. Students see only their signed-in grade; teachers use a separate hamburger-menu workspace and can browse both P6 and P7 content.
- **Auth status:** local/device sign-in scaffolding only. Real backend authentication is a future task.
- **Production focus:** reduce clutter, especially on mobile. Remove text that does not help the current user take the next action.

## Folder map

```
tendo/
├─ START_HERE.md
├─ README.md · STATUS.md · HANDOFF.md · CHANGELOG.md
├─ CHECKLIST.md · DECISIONS.md · MANUAL_TASKS.md
├─ app/                       Next.js app
│  ├─ app/                    routes
│  ├─ components/             UI and client logic
│  └─ lib/                    content/data/session helpers
├─ content/
│  └─ curriculum/             NCDC curriculum maps
└─ docs/
   ├─ spec/                   specs and content architecture
   ├─ sales/                  school-facing materials
   ├─ ops/                    handoffs, audits, deployment notes
   └─ prompts/                reusable AI prompts
```

## Run locally

```bash
cd app
npm install
npm run dev
```

## Build check

```bash
cd app
npm run build
```

## Documentation rule

Every meaningful product/code session should update:

- `STATUS.md`
- `HANDOFF.md`
- `CHECKLIST.md`
- `CHANGELOG.md`
- `DECISIONS.md` if an architecture/product decision changed
- `docs/ops/` when a detailed handoff/audit is useful

---

*Tendo · current product snapshot · 2026-07-07*
