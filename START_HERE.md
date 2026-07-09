# START HERE — Tendo

**Tendo** is a premium student-first study platform for Ugandan primary learners. We start with **P7** and **P6**, then move class by class until the full primary app is complete.

> *Tendo* (Luganda): "praise / commendation" — what parents say when results come back.

---

## You have 10 seconds. What do I read?

1. **`STATUS.md`** — current state and what is still open.
2. **`HANDOFF.md`** — no-context restart handoff.
3. **`DECISIONS.md`** — especially `DEV-027` and `DEV-028`.
4. **`CHECKLIST.md`** — execution tracker and remaining tasks.
5. **`docs/ops/premium-parent-student-first-strategy-2026-07-09.md`** — premium parent-funded direction.
6. **`docs/ops/primary-content-completion-roadmap-2026-07-09.md`** — content-first roadmap.
7. **`docs/ops/content-corrections-workflow-2026-07-09.md`** — how to fix/restructure content safely.
8. **`docs/ops/parent-dashboard-roi-roadmap-2026-07-09.md`** — parent dashboard direction.

## You have 60 seconds. What's this project now?

- **Primary user:** students.
- **Paying customer:** premium parents/guardians who want academic ROI.
- **Target commercial assumption:** families who can afford around **UGX 50,000/month** for a serious study product.
- **Current priority:** complete and polish content, starting with **P7**, then move class by class.
- **Teacher dashboard:** useful but no longer central.
- **Parent dashboard:** strategically important because the parent pays and needs visibility.
- **Trainup status:** archived historical context. Do not treat Trainup as the active product path.
- **Auth status:** local/device sign-in scaffolding only. Real backend authentication is a future task.

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
   ├─ sales/                  legacy school-facing materials; not current strategy
   ├─ ops/                    handoffs, audits, roadmap notes
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

*Tendo · premium parent-funded student-first snapshot · 2026-07-09*
