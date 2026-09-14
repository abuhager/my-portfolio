import type { SiteData } from '@/types';

export const siteData: SiteData = {
  name: 'Adham Abu Hager',
  initials: 'AH',
  role: 'Full-Stack Developer',
  location: 'Amman, Jordan',
  headline:
    'I build complete web products—from clear interfaces to reliable backend systems.',
  introduction:
    'Computer Science graduate with a backend-leaning full-stack focus. I build with TypeScript, Next.js, Node.js, and ASP.NET Core—turning business rules into usable, production-minded web products.',
  about:
    'I work across the full product path: understanding the workflow, shaping the data model, building the API, connecting the interface, and validating the result. My strongest area is backend engineering, while my full-stack range helps me make practical decisions across the whole system.',
  principles: [
    {
      title: 'Model the workflow',
      detail:
        'I turn real multi-step journeys—booking, handover, reporting, and moderation—into explicit states and rules.',
    },
    {
      title: 'Protect the boundaries',
      detail:
        'I pay attention to authentication, authorization, validation, data exposure, and consistency between operations.',
    },
    {
      title: 'Verify what ships',
      detail:
        'Type checks, automated tests, end-to-end coverage, CI, and production diagnostics are part of the build.',
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      description: 'Responsive interfaces and modern rendering',
      items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML & CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      description: 'APIs, business workflows, and real-time systems',
      items: ['Node.js', 'Express.js', 'C#', 'ASP.NET Core MVC', 'REST APIs', 'Socket.IO', 'Native ESM'],
    },
    {
      title: 'Data',
      description: 'Document, relational, and caching layers',
      items: ['MongoDB', 'Mongoose', 'SQL Server', 'Entity Framework Core', 'Redis'],
    },
    {
      title: 'Quality & Delivery',
      description: 'Testing, source control, CI, and deployment',
      items: ['Playwright', 'Node.js Test Runner', 'API Testing', 'Postman', 'Git', 'GitHub Actions', 'Vercel', 'Render'],
    },
  ],
  projects: [
    {
      id: 'aoun',
      number: '01',
      title: 'Aoun',
      subtitle: 'Arabic in-kind donation coordination platform',
      status: 'Deployed MVP',
      problem:
        'In-kind donations are often scattered across separate posts, messages, and handover arrangements. Aoun brings that journey into one role-based system.',
      summary:
        'A full-stack platform for listing donated items, publishing needs, matching offers, managing bookings and waitlists, coordinating safe handovers, and handling communication and moderation.',
      contribution:
        'Built the product end to end across a Next.js frontend and a TypeScript Native ESM backend. I designed the workflows, API boundaries, authorization, real-time communication, transaction-sensitive booking logic, and operational safeguards.',
      features: [
        'Item listings, search, filters, bookings, and waitlists',
        'Need requests and donor offer workflows',
        'Safe-hub and direct handover confirmation',
        'Real-time chat, notifications, ratings, reports, and appeals',
        'Role-based admin controls and configurable platform policies',
      ],
      highlights: [
        {
          title: 'Authentication & access',
          detail:
            'JWT access and refresh tokens with rotation and reuse detection, HMAC-hashed OTP verification, RBAC, secure cookies, and Redis-backed rate limiting.',
        },
        {
          title: 'Data consistency',
          detail:
            'MongoDB transactions and per-user locks protect booking and quota operations; atomic queries prevent duplicate waitlist and offer states.',
        },
        {
          title: 'Realtime & operations',
          detail:
            'Socket.IO powers chat and notifications, with Redis adapter support, a durable outbox worker, managed indexes, and liveness/readiness checks.',
        },
        {
          title: 'Architecture & quality',
          detail:
            'Layered controllers, services, repositories, and DTOs with TypeScript checks, automated tests, Playwright E2E coverage, and GitHub Actions CI.',
        },
      ],
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Redis',
        'Socket.IO',
        'Playwright',
      ],
      links: [
        { label: 'Open live product', href: 'https://aoun-project-theta.vercel.app/', primary: true },
        { label: 'Frontend repository', href: 'https://github.com/abuhager/Aoun-Project_FrontEnd' },
        { label: 'Backend repository', href: 'https://github.com/abuhager/Aoun-Project_BackEnd' },
      ],
      media: [
        {
          src: '/projects/aoun-home.jpg',
          alt: 'Aoun Arabic donation platform home page showing the main donation journey',
          width: 1348,
          height: 926,
          caption: 'Public home page',
        },
        {
          src: '/projects/aoun-chat.webp',
          alt: 'Aoun real-time conversation interface for coordinating a donation handover',
          width: 900,
          height: 869,
          caption: 'Transaction chat',
        },
        {
          src: '/projects/aoun-requests.webp',
          alt: 'Aoun donation needs request listing interface in Arabic',
          width: 900,
          height: 493,
          caption: 'Need requests',
        },
      ],
    },
    {
      id: 'unievents',
      number: '02',
      title: 'UniEvents',
      subtitle: 'University event management and booking system',
      status: 'Source on GitHub',
      problem:
        'Manual university event registration makes capacity, cancellations, attendance, and waiting lists difficult to coordinate consistently.',
      summary:
        'A server-rendered event platform that manages the booking lifecycle for students and gives administrators tools for events, attendance, reporting, and exports.',
      contribution:
        'Built the ASP.NET Core MVC application using C# controllers, Razor views, Entity Framework Core, and SQL Server, including the student and admin workflows from booking through check-in.',
      features: [
        'Session-based authentication and Student/Admin role separation',
        'Capacity-aware booking with duplicate booking prevention',
        'FIFO waitlist promotion after cancellation or capacity expansion',
        'PDF ticket generation, verification, and attendance check-in',
        'Admin analytics and Excel booking exports',
      ],
      highlights: [
        {
          title: 'Booking state machine',
          detail:
            'Bookings move between active, waiting, cancelled, and checked-in states based on capacity and user actions.',
        },
        {
          title: 'Automatic waitlist',
          detail:
            'The earliest waiting booking is promoted when a confirmed attendee cancels, and additional places are filled when capacity increases.',
        },
        {
          title: 'Operational tooling',
          detail:
            'Administrators can verify tickets, record attendance, view booking summaries, and export event registrations to Excel.',
        },
      ],
      technologies: [
        'C#',
        'ASP.NET Core MVC',
        '.NET 8',
        'Razor Views',
        'Entity Framework Core',
        'SQL Server',
        'BCrypt',
        'QuestPDF',
        'ClosedXML',
      ],
      links: [
        {
          label: 'View main branch',
          href: 'https://github.com/abuhager/privateevent/tree/main',
          primary: true,
        },
      ],
      flow: ['Browse events', 'Capacity check', 'Confirmed or waitlisted', 'Ticket & check-in'],
    },
  ],
  background: [
    {
      id: 'quark',
      category: 'Experience',
      period: 'Oct 2025 — Jan 2026',
      title: 'Software Development Trainee (.NET)',
      organization: 'Quark Software',
      detail:
        'Reviewed core .NET fundamentals, foundational C# syntax, and object-oriented programming through console exercises and problem-solving tasks.',
    },
    {
      id: 'dot-jordan',
      category: 'Training',
      period: 'Jan 2026 — Apr 2026 · 130 hours',
      title: 'Full-Stack Web Development — MERN Stack',
      organization: 'DOT Jordan',
      detail:
        'Hands-on training in React, Node.js, Express.js, MongoDB, REST APIs, Git, and responsive web development.',
    },
    {
      id: 'programming-advices',
      category: 'Training',
      period: '12 completed courses',
      title: 'Software Engineering & Database Foundations',
      organization: 'Programming Advices Platform',
      detail:
        'Structured courses covering programming foundations, problem solving, OOP, algorithms, databases, and software development practices.',
    },
    {
      id: 'university',
      category: 'Education',
      period: '2022 — 2026',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Al-Zaytoonah University of Jordan · Amman, Jordan',
      detail: 'Bachelor’s degree in Computer Science.',
    },
  ],
  contact: {
    headline: 'Let’s talk about the role and the work.',
    description:
      'For full-stack, backend, frontend, software, or web development opportunities, reach me by email or LinkedIn.',
    links: [
      {
        label: 'abuhager360@gmail.com',
        href: 'mailto:abuhager360@gmail.com',
        icon: 'mail',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/adham-abuhager/',
        icon: 'linkedin',
        external: true,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/abuhager',
        icon: 'github',
        external: true,
      },
      {
        label: '+962 7 9728 3384',
        href: 'tel:+962797283384',
        icon: 'phone',
      },
    ],
  },
};
