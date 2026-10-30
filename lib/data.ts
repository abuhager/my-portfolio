import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Adham Abu Hager',
  initials: 'AH',
  role: 'Junior Software Developer',
  location: 'Amman, Jordan',
  headline:
    'Web applications. Practical workflows.',
  introduction:
    'Computer Science graduate working across React / Next.js, Node.js and ASP.NET Core. My projects include a live donation MVP and a .NET event-booking application, with experience in requirements, workflow testing and deployment.',
  about:
    'My background combines C# / .NET training with MERN training at DOT Jordan. I took Aoun from an idea to a deployed donation MVP and developed UniEvents as my graduation project. In HelpDesk and Khutwa, my contributions focus on requirements, testing user journeys, reproducing issues and guiding improvements. I use web-based AI tools for coding assistance, explanations, debugging and code review.',
  principles: [
    { title: 'Model the workflow', detail: 'I turn real multi-step journeys—booking, handover, reporting, and moderation—into explicit states and rules.' },
    { title: 'Protect the boundaries', detail: 'I pay attention to authentication, authorization, validation, data exposure, and consistency between operations.' },
    { title: 'Verify the workflow', detail: 'I test user journeys, reproduce issues and check releases. Automated tests and CI in the project repositories provide additional checks.' },
  ],
  skillGroups: [
    { title: 'Frontend', description: 'Responsive interfaces and modern rendering', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular (project exposure)', 'Tailwind CSS', 'HTML & CSS', 'Bootstrap'] },
    { title: 'Backend', description: 'APIs, business workflows, and real-time systems', items: ['Node.js', 'Express.js', 'C#', 'OOP', 'ASP.NET Core MVC', 'ASP.NET Core Web API', 'REST APIs', 'Socket.IO', 'Native ESM'] },
    { title: 'Data', description: 'Relational and document databases used in my projects', items: ['MongoDB', 'Mongoose', 'SQL Server', 'Entity Framework Core'] },
    { title: 'Quality & Delivery', description: 'Functional testing and delivery; automated checks in project workflows', items: ['Functional Testing', 'Debugging', 'Postman', 'Git', 'Vercel', 'Render', 'Playwright (project workflows)', 'GitHub Actions (project workflows)'] },
    { title: 'AI-assisted Workflow', description: 'Web applications used for coding assistance, explanations, debugging and code review', items: ['ChatGPT Plus (web)', 'Perplexity (web)', 'Gemini Pro (web)'] },
  ],
  projects: [
    {
      id: 'aoun', number: '01', title: 'Aoun', subtitle: 'Arabic in-kind donation coordination platform', status: 'Deployed MVP',
      problem: 'In-kind donations are often scattered across separate posts, messages, and handover arrangements. Aoun brings that journey into one role-based system.',
      summary: 'A full-stack platform for listing donated items, publishing needs, matching offers, managing bookings and waitlists, coordinating safe handovers, and handling communication and moderation.',
      contribution: 'Created and launched Aoun with a Next.js frontend and Node.js / Express backend. Defined donor, recipient and admin workflows, reviewed implementation, tested authentication, reservations, chat and support, investigated issues and guided fixes. Managed deployment and release checks on Vercel and Render, using AI assistance during development.',
      contributionSummary: 'Created and launched the platform, defined workflows, tested booking and chat journeys, guided fixes and managed deployment.',
      features: ['Item listings, search, filters, bookings, and waitlists','Need requests and donor offer workflows','Safe-hub and direct handover confirmation','Real-time chat, notifications, ratings, reports, and appeals','Role-based admin controls and configurable platform policies'],
      highlights: [
        { title: 'Authentication & access', detail: 'JWT access and refresh tokens with rotation and reuse detection, HMAC-hashed OTP verification, RBAC, secure cookies, and Redis-backed rate limiting.' },
        { title: 'Data consistency', detail: 'MongoDB transactions and per-user locks protect booking and quota operations; atomic queries prevent duplicate waitlist and offer states.' },
        { title: 'Realtime & operations', detail: 'Socket.IO powers chat and notifications, with Redis adapter support, a durable outbox worker, managed indexes, and liveness/readiness checks.' },
        { title: 'Architecture & quality', detail: 'Layered controllers, services, repositories, and DTOs with TypeScript checks, automated tests, Playwright E2E coverage, and GitHub Actions CI.' },
      ],
      technologies: ['Next.js 16','React 19','TypeScript','Node.js','Express.js','MongoDB','Redis','Socket.IO','Playwright'],
      links: [
        { label: 'Open live product', href: 'https://www.aoun.website/', primary: true },
        { label: 'Frontend repository', href: 'https://github.com/abuhager/Aoun-Project_FrontEnd' },
        { label: 'Backend repository', href: 'https://github.com/abuhager/Aoun-Project_BackEnd' },
      ],
      media: [
        { src: '/projects/aoun-home.jpg', alt: 'Aoun Arabic donation platform home page showing the main donation journey', width: 1348, height: 926, caption: 'Public home page' },
      ],
    },
    {
      id: 'unievents', number: '02', title: 'UniEvents', subtitle: 'University event management and booking system', status: 'Source on GitHub',
      problem: 'Manual university event registration makes capacity, cancellations, attendance, and waiting lists difficult to coordinate consistently.',
      summary: 'A server-rendered event platform that manages booking and waitlist states for students, with admin dashboards, attendance verification, reporting, and exports.',
      contribution: 'Implemented the student and admin workflows in ASP.NET Core MVC using C# controllers, Razor views, Entity Framework Core, and SQL Server—from capacity-aware booking through ticket verification and check-in.',
      contributionSummary: 'Implemented student and admin workflows, capacity-aware booking, FIFO waitlists, PDF tickets, and attendance check-in.',
      features: ['Session-based authentication and Student/Admin role separation','Capacity-aware booking with duplicate booking prevention','FIFO waitlist promotion after cancellation or capacity expansion','PDF ticket generation, verification, and attendance check-in','Admin analytics and Excel booking exports'],
      highlights: [
        { title: 'Booking lifecycle', detail: 'Bookings use active, waiting, cancelled, and checked-in states based on capacity and user actions.' },
        { title: 'Automatic waitlist', detail: 'The earliest waiting booking is promoted when a confirmed attendee cancels, and additional places are filled when capacity increases.' },
        { title: 'Operational tooling', detail: 'Administrators can verify tickets, record attendance, view booking summaries, and export event registrations to Excel.' },
      ],
      technologies: ['C#','ASP.NET Core MVC','.NET 8','Razor Views','Entity Framework Core','SQL Server','BCrypt','QuestPDF','ClosedXML'],
      links: [{ label: 'View main branch', href: 'https://github.com/abuhager/privateevent/tree/main', primary: true }],
      media: [
        { src: '/projects/unievents-events.png', alt: 'UniEvents Arabic student event browser showing event dates, locations, capacities, booking states, and detail actions', width: 1440, height: 1080, caption: 'Student event browser' },
      ],
    },
    {
      "id": "helpdesk",
      "number": "03",
      "title": "HelpDesk SaaS",
      "subtitle": "Multi-tenant support ticket management",
      "status": "Live demo · Private source",
      "problem": "Support teams need a shared ticket workflow while keeping each company’s data and permissions separate.",
      "summary": "A bilingual Arabic/English support platform with company workspaces, ticket assignment, team administration, reporting, attachments, and configurable SLA policies.",
      "contribution": "Defined requirements and tested company-scoped permissions, ticket assignment, audit history and SLA workflows. Reproduced defects, guided fixes and reviewed Arabic/English user journeys in this AI-assisted learning project.",
      "contributionSummary": "Defined requirements, tested ticket and permission workflows, reproduced issues and guided fixes in an AI-assisted project.",
      "accessNote": "Choose the demo account on the HelpDesk sign-in page, or explore the screenshot walkthrough without signing in.",
      "features": [
        "Company-scoped memberships and role-based access",
        "Ticket priorities, assignment, comments, and audit history",
        "Search, filters, reporting, and configurable SLA policies",
        "Attachments, email verification, and optional authenticator MFA",
        "Responsive Arabic/English interfaces with RTL/LTR support"
      ],
      "highlights": [
        {
          "title": "Tenant isolation",
          "detail": "API permissions follow the active company membership; a user can have different roles in different companies."
        },
        {
          "title": "Clean Architecture",
          "detail": "Domain, Application, Infrastructure, and API layers separate business rules from HTTP and persistence."
        },
        {
          "title": "Concurrent updates",
          "detail": "Version checks detect conflicting ticket edits and preserve user input when saving fails."
        }
      ],
      "technologies": [
        "Angular 21",
        "TypeScript",
        "ASP.NET Core 10",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "Playwright"
      ],
      "links": [
        {
          "label": "Try live demo",
          "href": "https://helpdesk-saas-v2he.onrender.com/login",
          "primary": true
        },
        {
          "label": "View walkthrough",
          "href": "/projects/helpdesk",
          "primary": false
        }
      ],
      "media": [
        {
          "src": "/projects/helpdesk-dashboard.webp",
          "alt": "HelpDesk Arabic dashboard showing ticket priorities, status indicators, and the support queue",
          "width": 1440,
          "height": 1000,
          "caption": "Dashboard · sample API data"
        }
      ]
    },
    {
      "id": "khutwa",
      "number": "04",
      "title": "Khutwa Quran",
      "subtitle": "Arabic learning journeys and spaced review",
      "status": "Learning prototype · Private source",
      "problem": "Learners need short, structured lessons that connect understanding, practice, and review while retaining progress across sessions.",
      "summary": "An Arabic learning prototype with daily lesson journeys, comprehension checks, progress tracking, scheduled review, and downloadable lessons for offline practice. The curriculum remains under preparation and review.",
      "contribution": "Defined learning requirements and tested quizzes, progression, content administration and downloaded lessons for offline practice. Reviewed user journeys and guided improvements in this AI-assisted learning prototype.",
      "contributionSummary": "Defined learning requirements, tested progression and offline practice, and guided improvements in an AI-assisted prototype.",
      "features": [
        "Account-free browser demo and guided lesson journeys",
        "Server-graded assessments and progressive level unlocking",
        "Review scheduling, progress history, and completion certificates",
        "Downloadable lessons and offline practice",
        "Content editing, version-aware review, and publishing controls"
      ],
      "highlights": [
        {
          "title": "Learning progression",
          "detail": "The server evaluates attempts and applies progression rules, with concurrency checks and duplicate-request protection."
        },
        {
          "title": "Offline practice",
          "detail": "IndexedDB and a service worker retain downloaded lessons; account attempts are validated by the server when reconnected."
        },
        {
          "title": "Content workflow",
          "detail": "Publishing uses version-aware review. Educational content is still being prepared and reviewed."
        }
      ],
      "technologies": [
        "Next.js 16",
        "TypeScript",
        "ASP.NET Core 10",
        "C#",
        "MongoDB",
        "IndexedDB",
        "Service Worker",
        "Playwright"
      ],
      "links": [
        {
          "label": "Try the learning demo",
          "href": "https://khutwa-nine.vercel.app/demo",
          "primary": true
        }
      ],
      "media": [
        {
          "src": "/projects/khutwa-desktop.webp",
          "alt": "Khutwa Arabic learning interface showing the daily lesson journey and learner progress",
          "width": 1440,
          "height": 1000,
          "caption": "Learning journey · prototype"
        }
      ]
    },
  ],
  background: [
    { id: 'quark', category: 'Experience', period: 'Practical C# / .NET training', title: 'Software Development Trainee (.NET)', organization: 'Quark Software', detail: 'Reviewed core .NET fundamentals, foundational C# syntax, and object-oriented programming through console exercises and problem-solving tasks.' },
    { id: 'dot-jordan', category: 'Training', period: '2026 · Six-month YGA program · 130 hours of MERN training', title: 'Full-Stack Development — MERN & Digital Employability', organization: 'DOT Jordan / Youth Grow Activity (YGA)', detail: 'Completed 130 hours of MERN technical training in React, Node.js, Express.js, MongoDB, REST APIs, Git, and responsive web development. Earned the YGA Certificate of Completion for the six-month Digital Employability Program covering technical training, mentoring, coaching, and employment-linkage activities.' },
    { id: 'programming-advices', category: 'Training', period: '12 structured courses', title: 'Software Engineering & Database Foundations', organization: 'Programming Advices Platform', detail: 'Structured courses covering programming foundations, problem solving, OOP, algorithms, databases, and software development practices.' },
    { id: 'university', category: 'Education', period: '2022 — 2026', title: 'Bachelor of Science in Computer Science', organization: 'Al-Zaytoonah University of Jordan · Amman, Jordan', detail: 'Bachelor’s degree in Computer Science.' },
  ],
  contact: {
    headline: 'Let’s talk about the role and the work.',
    description: 'For full-stack, backend, frontend, software, or web development opportunities, reach me by email or LinkedIn.',
    links: [
      { label: 'abuhager360@gmail.com', href: 'mailto:abuhager360@gmail.com', icon: 'mail' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adham-abuhager/', icon: 'linkedin', external: true },
      { label: 'GitHub', href: 'https://github.com/abuhager', icon: 'github', external: true },
      { label: '+962 7 9728 3384', href: 'tel:+962797283384', icon: 'phone' },
    ],
  },
};
