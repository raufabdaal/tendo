# START HERE — Tendo

**Tendo** is a premium student-first study platform for Ugandan primary learners. We start with **P7** and **P6**, then move class by class until the full primary app is complete.

> *Tendo* (Luganda): "praise / commendation" — what parents say when results come back.

---


# NON-NEGOTIABLE RULE: NCDC FIRST, BUILD SECOND

For every class and every subject, Tendo must follow this order:

1. **Research the official NCDC curriculum requirements.**
2. **Document the subject/class structure clearly.**
3. **Create or update the curriculum map.**
4. **Build learner-facing content from that map only.**
5. **Review and correct content before exposing it as premium-ready.**

If a topic, route, subject, class or practice bank is not aligned to the NCDC curriculum, it should not be treated as valid product work. We are building the curriculum in a better app form — not inventing our own syllabus.

---

# BETA QUALITY RULE: LIVE BETA DOES NOT MEAN ROUGH DRAFT

When content is marked beta, it should still be built to the best standard we can produce ourselves. Beta means it is live for testers to review and catch remaining mistakes; it does **not** mean incomplete, careless, filler or low-quality work is acceptable.

Builder responsibility before beta:
1. Follow the NCDC map.
2. Build complete lessons, examples, checks and quizzes.
3. Do our own correction pass.
4. Run the build.
5. Then expose for beta review.

Reviewers are a second safety layer, not a replacement for our own quality work.

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
9. **`docs/ops/p4-p7-live-beta-review-pass-2026-07-09.md`** — review gate before the next class.
10. **`docs/ops/p4-p5-visuals-depth-pass-2026-07-09.md`** — current visuals/depth pass before P3.

## You have 60 seconds. What's this project now?

- **Primary user:** students.
- **Paying customer:** premium parents/guardians who want academic ROI.
- **Target commercial assumption:** families who can afford around **UGX 50,000/month** for a serious study product.
- **Current priority:** start P3 NCDC research and curriculum mapping. P4/P5 visuals and depth pass is closed at AI-builder level. P4 RE remains beta from NCDC/MoES abridged curriculum until full standard-syllabus confirmation.
- **Teacher dashboard:** useful but no longer central.
- **Parent dashboard:** strategically important because the parent pays and needs visibility.
- **Trainup status:** archived historical context. Do not treat Trainup as the active product path.
- **Auth status:** local/device sign-in scaffolding only. Real backend authentication is a future task.
- **P4 status:** live beta across English/Math/Science/SST/RE. Math, English, Science and SST are from NCDC subject syllabi/maps; RE is from the NCDC/MoES abridged curriculum and still needs full standard-syllabus confirmation.

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
