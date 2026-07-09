# Tendo — Next.js app

This is the runnable Next.js 15 app for Tendo. The non-code parts of the project (docs, curriculum source, ops notes) live one level up at `../`.

## Run locally

```bash
cd app
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
cd app
npm run build
```

## Current app shape

- Role-based local/device sign-in (`Student` or `Teacher`).
- Student home, study, practice and papers.
- Teacher workspace with dashboard, worksheets, teacher-set questions/manual marking and reports.
- P6 and P7 content across Mathematics, English, Integrated Science, Social Studies and Religious Education.
- Presentation/sample teacher dashboard data can be disabled with `NEXT_PUBLIC_TENDO_PRESENTATION_DATA=off`.

## Strategic note

The app is now student-first. The old Trainup/school-specific pilot route has been archived. Future organisation branding should only be added after the direct-to-student product is stable.

## Deploy to Vercel

Set in Vercel project settings:

- **Framework Preset:** Next.js
- **Root Directory:** `app`
