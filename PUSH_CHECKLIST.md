# PUSH CHECKLIST — v5 FCC-mobile UX Overhaul + NCDC Content Alignment
# 2026-07-13 — All P7 subjects (Math, English, Science, SST) reformatted
# RE pending CRE/IRE teacher review
#
# Copy the entire /home/user/tendo/app/ folder over your local clone.
# Then run: cd app && npm install && npm run build

# ============================================================
# NEW FILES — copy these 4 files into your local app/
# ============================================================

app/components/SimplifiedTopicView.tsx
  → FCC-style module viewer: handles 3 content formats, quiz-gated Next button, auto key-term bolding

app/components/InlineQuiz.tsx
  → Reusable inline quiz component for modules

app/components/SharedTopicPage.tsx
  → Shared wrapper for all [topic]/page.tsx routes

app/components/SubjectTopicList.tsx
  → Shared clean topic list for all subject pages


# ============================================================
# MODIFIED FILES — overwrite these in your local copy
# ============================================================

# --- Core UX (v5 FCC-mobile) ---
app/components/AppNav.tsx
  → Hamburger menu header, no bottom nav, context-aware back button

app/components/AuthGate.tsx
  → Routes to /study, simplified sign-in (no filler copy)

app/components/StudyDirectory.tsx
  → Clean subject grid + continue chip

app/app/page.tsx
  → Returns null (AuthGate handles routing)

app/app/p3-home/page.tsx
app/app/p4-home/page.tsx
app/app/p5-home/page.tsx
app/app/p6-home/page.tsx
  → All redirect to /study

app/app/globals.css
  → ~650 lines v5 CSS appended at bottom (header, cards, module viewer, quiz, responsive)

# --- P7 Mathematics (11 topics) ---
app/app/math/p7/page.tsx
app/app/math/p7/[topic]/page.tsx
app/lib/topics.ts
  → Quadrilaterals added, 2 quiz explanations fixed, 1 module enriched

# --- P7 English (7 topics) ---
app/app/english/p7/page.tsx
app/app/english/p7/[topic]/page.tsx
app/lib/english-topics.ts
  → 12 Structure Formulas + Correct/Incorrect + UNEB traps added

# --- P7 Science (8 topics) ---
app/app/science/p7/page.tsx
app/app/science/p7/[topic]/page.tsx
app/lib/science-topics.ts
  → 13 Definition/Types/Examples blocks in NCDC format, Uganda-specific sources added

# --- P7 Social Studies (10 topics) ---
app/app/social-studies/p7/page.tsx
app/app/social-studies/p7/[topic]/page.tsx
app/lib/social-topics.ts
  → Lakes of Africa rebuilt (basin/rift/volcanic), 15 Definition lines, Uganda examples

# --- All P4/P5/P6 subject pages (updated to use shared components) ---
app/app/math/p4/page.tsx
app/app/math/p4/[topic]/page.tsx
app/app/math/p5/page.tsx
app/app/math/p5/[topic]/page.tsx
app/app/math/p6/page.tsx
app/app/math/p6/[topic]/page.tsx
app/app/science/p4/page.tsx
app/app/science/p4/[topic]/page.tsx
app/app/science/p5/page.tsx
app/app/science/p5/[topic]/page.tsx
app/app/science/p6/page.tsx
app/app/science/p6/[topic]/page.tsx
app/app/english/p4/page.tsx
app/app/english/p4/[topic]/page.tsx
app/app/english/p5/page.tsx
app/app/english/p5/[topic]/page.tsx
app/app/english/p6/page.tsx
app/app/english/p6/[topic]/page.tsx
app/app/social-studies/p4/page.tsx
app/app/social-studies/p4/[topic]/page.tsx
app/app/social-studies/p5/page.tsx
app/app/social-studies/p5/[topic]/page.tsx
app/app/social-studies/p6/page.tsx
app/app/social-studies/p6/[topic]/page.tsx
app/app/re/p4/page.tsx
app/app/re/p4/[topic]/page.tsx
app/app/re/p5/page.tsx
app/app/re/p5/[topic]/page.tsx
app/app/re/p6/page.tsx
app/app/re/p6/[topic]/page.tsx
app/app/re/p7/page.tsx
app/app/re/p7/[topic]/page.tsx


# ============================================================
# DO NOT COPY
# ============================================================
app/.next/
app/node_modules/
tmp/
.cache/
