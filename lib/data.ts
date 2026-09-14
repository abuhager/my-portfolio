import { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Adham Abu Hager',
  initials: 'AH',
  role: 'Full-Stack Developer',
  location: 'Amman, Jordan',
  headline: 'I build complete web products—from clear interfaces to reliable backend systems.',
  introduction:
    'Computer Science graduate working across TypeScript, Node.js, React, Next.js, and ASP.NET Core. I turn real workflows into secure, maintainable applications with a strong focus on backend engineering.',
  availability: 'Open to full-time and internship opportunities',
  about:
    'I enjoy owning the full path from an idea to a working product: understanding the workflow, shaping the data model, building the API, connecting the interface, and validating the result. My strongest area is backend development, while my full-stack experience helps me make practical decisions across the whole system.',
  focus: [
    {
      title: 'Product-minded',
      detail: 'I translate user needs and multi-step workflows into features that are understandable and useful.',
    },
    {
      title: 'Backend-focused',
      detail: 'I care about business rules, authorization, data consistency, performance, and clean service boundaries.',
    },
    {
      title: 'Quality-aware',
      detail: 'I use automated checks, testing, CI, error handling, and production diagnostics to reduce surprises.',
    },
  ],
  skillGroups: [
    { title: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'C++'] },
    { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Bootstrap'] },
    {
      title: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'ASP.NET Core MVC', 'REST APIs', 'Socket.IO', 'Native ESM'],
    },
    {
      title: 'Data',
      items: ['MongoDB', 'Mongoose', 'SQL Server', 'Entity Framework Core', 'Prisma', 'Redis'],
    },
    {
      title: 'Quality & Delivery',
      items: ['Git', 'GitHub', 'Postman', 'Playwright', 'GitHub Actions', 'Vercel', 'Render'],
    },
    {
      title: 'Engineering',
      items: ['Authentication', 'RBAC', 'API Design', 'Testing', 'Background Jobs', 'Layered Architecture'],
    },
  ],
  projects: [
    {
      id: 'aoun',
      number: '01',
      title: 'Aoun',
      subtitle: 'Arabic in-kind donation coordination platform',
      summary:
        'A deployed MVP that brings item donations, need requests, booking, communication, handover, and moderation into one role-based platform.',
      contribution:
        'Built the product end to end across a Next.js frontend and a TypeScript Native ESM backend. I designed the workflows, API boundaries, authorization, real-time communication, transaction-sensitive booking logic, and operational safeguards.',
      highlights: [
        'Access and refresh-token authentication with rotation, reuse detection, OTP verification, RBAC, secure cookies, and Redis-backed rate limiting.',
        'Real-time chat and notifications, waitlists, safe-hub and direct handover flows, reports, appeals, ratings, trust levels, and configurable admin controls.',
        'MongoDB transactions and per-user locks for booking and quota consistency, batched waitlist queries, a durable outbox worker, health checks, and managed indexes.',
        'Automated checks, Playwright end-to-end coverage, GitHub Actions CI, and production deployments on Vercel and Render.',
      ],
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.IO', 'Playwright'],
      links: [
        { label: 'Live product', href: 'https://aoun-project-theta.vercel.app/', primary: true },
        { label: 'Frontend', href: 'https://github.com/abuhager/Aoun-Project_FrontEnd' },
        { label: 'Backend', href: 'https://github.com/abuhager/Aoun-Project_BackEnd' },
      ],
      image: 'https://raw.githubusercontent.com/abuhager/Aoun-Project_FrontEnd/main/docs/screenshots/hero.webp',
      imageAlt: 'Aoun platform home page in Arabic',
      status: 'Deployed MVP',
    },
    {
      id: 'unievents',
      number: '02',
      title: 'UniEvents',
      subtitle: 'University event management and booking system',
      summary:
        'A university event platform for managing capacity-aware bookings, waitlists, attendance, tickets, and administrative reporting.',
      contribution:
        'Built the server-rendered application with C#, MVC controllers, Razor views, Entity Framework Core, and SQL Server. Implemented secure role-based workflows, smart capacity logic, and the event lifecycle from booking to check-in.',
      highlights: [
        'Session-based authentication with BCrypt password hashing and protected Student and Admin workflows.',
        'Capacity-aware booking with duplicate prevention, a FIFO waitlist, and automatic promotion when a confirmed attendee cancels or capacity increases.',
        'PDF ticket generation, ticket verification and check-in, admin analytics, and Excel booking exports.',
      ],
      technologies: ['C#', 'ASP.NET Core MVC', '.NET 8', 'EF Core', 'SQL Server', 'BCrypt', 'QuestPDF', 'ClosedXML'],
      links: [{ label: 'View source', href: 'https://github.com/abuhager/privateevent/tree/main', primary: true }],
      status: 'Source available',
    },
  ],
  timeline: [
    {
      id: 'quark',
      period: 'Oct 2025 — Jan 2026',
      title: 'Software Development Trainee (.NET)',
      organization: 'Quark Software',
      kind: 'Experience',
      detail: 'Practiced .NET fundamentals, C# syntax, object-oriented programming, and programming logic through console exercises.',
    },
    {
      id: 'dot-jordan',
      period: 'Jan 2026 — Apr 2026',
      title: 'Full-Stack Web Development — MERN',
      organization: 'DOT Jordan · 130 hours',
      kind: 'Training',
      detail: 'Hands-on training in React, Node.js, Express.js, MongoDB, REST APIs, Git, and responsive web development.',
    },
    {
      id: 'programming-advices',
      period: '12 completed courses',
      title: 'Software Engineering & Database Foundations',
      organization: 'Programming Advices Platform',
      kind: 'Training',
      detail: 'Structured study of programming foundations, problem solving, OOP, algorithms, databases, and software development practices.',
    },
    {
      id: 'university',
      period: '2022 — 2026',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Al-Zaytoonah University of Jordan',
      kind: 'Education',
      detail: 'Computer Science graduate based in Amman, Jordan.',
    },
  ],
  contact: {
    headline: 'Have a role or project where I can contribute?',
    tagline: 'I am currently open to full-time, junior, and internship opportunities in full-stack and backend development.',
    links: [
      { label: 'abuhager360@gmail.com', href: 'mailto:abuhager360@gmail.com', icon: 'mail' },
      { label: 'GitHub', href: 'https://github.com/abuhager', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adham-abuhager/', icon: 'linkedin' },
      { label: '+962 7 9728 3384', href: 'tel:+962797283384', icon: 'phone' },
    ],
  },
};
