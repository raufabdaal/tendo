# START HERE — Tendo

**Tendo** is a premium student-first study platform for Ugandan primary learners. P7, P6, P5 and P4 are live across app subjects, and P3 is now live as a thematic-first beta across all 12 official NCDC themes plus a separate CRE/IRE Religious Education beta.

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
10. **`docs/ops/p4-p5-visuals-depth-pass-2026-07-09.md`** — visuals/depth pass before P3.
11. **`docs/ops/ncdc-p3-curriculum-research-2026-07-09.md`** — current P3 thematic research/mapping.
12. **`docs/ops/p3-thematic-app-structure-2026-07-09.md`** — P3 thematic-first app structure.
13. **`docs/ops/p3-thematic-beta-completion-2026-07-12.md`** — P3 all-themes beta completion note.
14. **`docs/ops/p3-review-polish-pass-2026-07-12.md`** — P3 internal review/polish and RE beta summary.
15. **`docs/ops/p3-re-source-research-2026-07-12.md`** — trusted CRE/IRE source register.
16. **`docs/spec/ncdc-native-content-architecture-v4-2026-07-12.md`** — new required student-facing content structure.
17. **`docs/ops/v4-content-architecture-pilot-2026-07-12.md`** — first v4 pilot implementation.

## You have 60 seconds. What's this project now?

- **Primary user:** students.
- **Paying customer:** premium parents/guardians who want academic ROI.
- **Target commercial assumption:** families who can afford around **UGX 50,000/month** for a serious study product.
- **Current priority:** restructure P3–P7 student-facing content using NCDC-native v4 blocks. First pilot routes are `/p3/theme/p3-theme-6-plants` and `/science/p5/p5-keeping-poultry-bees`. P1/P2 will be in the same app later, but not until P3–P7 structure is fixed.
- **Teacher dashboard:** useful but no longer central.
- **Parent dashboard:** strategically important because the parent pays and needs visibility.
- **Trainup status:** archived historical context. Do not treat Trainup as the active product path.
- **Auth status:** local/device sign-in scaffolding only. Real backend authentication is a future task.
- **P4 status:** live beta across English/Math/Science/SST/RE. Math, English, Science and SST are from NCDC subject syllabi/maps; RE is from the NCDC/MoES abridged curriculum and still needs full standard-syllabus confirmation.
- **P3 status:** live thematic beta across 12 NCDC themes, 36 sub-themes and 108 thematic modules; P3 RE beta is live separately across 18 CRE/IRE topics and 54 RE modules pending teacher review.

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

*Tendo · premium parent-funded student-first snapshot · 2026-07-12*
