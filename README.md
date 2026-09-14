# Adham Abu Hager — Portfolio

Professional portfolio for **Adham Abu Hager**, a Full Stack Developer based in Amman, Jordan.

**Live:** [my-portfolio-five-azure-69.vercel.app](https://my-portfolio-five-azure-69.vercel.app)

## What this site prioritizes

- A recruiter-friendly introduction with direct access to selected work, contact details, CV, GitHub, and LinkedIn.
- Case-study presentation of two verified projects rather than a long repository list.
- Backend depth—including API design, authorization, consistency, realtime systems, testing, and operations—alongside modern frontend delivery.
- Clear separation between experience, training, and education.

## Selected projects

### Aoun

A deployed Arabic in-kind donation coordination platform. The case study is based on the current frontend and backend repositories and covers the verified booking, waitlist, matching, handover, chat, notification, moderation, security, testing, and operational workflows.

- [Live product](https://aoun-project-theta.vercel.app/)
- [Frontend repository](https://github.com/abuhager/Aoun-Project_FrontEnd)
- [Backend repository](https://github.com/abuhager/Aoun-Project_BackEnd)

### UniEvents

An ASP.NET Core MVC university event system with capacity-aware booking, FIFO waitlist promotion, ticket generation and verification, attendance check-in, analytics, and Excel exports. The portfolio links to the latest `main` branch.

- [Source on `main`](https://github.com/abuhager/privateevent/tree/main)

## Technical approach

- Next.js App Router and TypeScript.
- Static rendering for the portfolio content.
- One small Client Component for the accessible mobile navigation; the remaining UI renders as Server Components.
- `next/image` with local, correctly sized project media.
- `next/font` for self-hosted Geist fonts.
- Native CSS with responsive layouts, visible focus states, reduced-motion support, and no runtime styling dependency.
- Metadata API routes for Open Graph, manifest, sitemap, robots, favicon, canonical URL, and structured Person data.

## Information sources

Portfolio claims are kept in `lib/data.ts` and were checked in this order:

1. Current CV.
2. GitHub repositories.
3. Project README files.
4. Source code.
5. Live deployments.

The previous portfolio copy was not treated as a source of truth.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

Run all code checks with:

```bash
npm run verify
```
