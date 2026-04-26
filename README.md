# RevForm Studio

A SaaS dashboard for managing custom forms, tracking submissions, and viewing response metrics.

## What this project does

Build beautiful forms, share them instantly, and analyze the responses from a simple dashboard.

## Project goal

A form builder dashboard for form status, submissions, and response activity.

## Main features

- Form configuration listing
- Submission statistics
- Active/Draft/Closed statuses
- Analytics-focused UI

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Supabase client setup with safe fallback

## Folder structure

```text
app/
components/
data/
lib/
public/
types/
```

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. Import that repository in Vercel as a Next.js project.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` when the backend is ready.
4. Deploy. The app still works without those variables because it falls back to local dummy data.

## Supabase-ready notes

This project currently reads from `data/dummy.ts` through `lib/data-source.ts`.
The Supabase client in `lib/supabase.ts` only initializes when both public environment
variables are present, so the app does not crash when `.env` is missing.

## Credit

Developed by @balrev
