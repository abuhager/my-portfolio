// lib/data.ts
import { SiteData } from '@/types';

export const siteData: SiteData = {
  // === Hero / Navbar ===
  name: 'Adham Abu Hager',
  initials: 'AA',
  eyebrow: 'Full-Stack Developer',
  heroValue:
    'Detail-oriented Full-Stack Developer and Computer Science senior, building production-grade web apps with ASP.NET Core and the MERN stack.',

  // === Tech Stack ===
  techStack: {
    backend: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'ASP.NET Core MVC',
      'C#',
      'SQL Server',
      'Entity Framework Core',
      'REST APIs',
      'JWT Auth',
      'Socket.io',
    ],
    frontend: [
      'Next.js',
      'React.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
      'HTML5/CSS3',
    ],
    devops: [
      'Git/GitHub',
      'Vite',
      'Vercel',
      'Render',
      'Postman',
      'Prisma',
      'Cloudinary',
    ],
  },

  // === Projects (يطابق Project interface) ===
  projects: [
    {
      id:        'aoun',
      title:     'Aoun — Charitable Platform',
      tag:       'Capstone Project · Full-Stack',
      problem:   'A platform connecting donors with verified charitable causes in Jordan, with tiered access for students, admins, and the public.',
      role:      'Led full-stack development — designed the database schema, built all REST API endpoints with Express + Mongoose, implemented JWT-based role authorization, and built the Next.js frontend with real-time donation tracking.',
      badges:    ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'Next.js', 'JWT', 'Cloudinary'],
      githubUrl: 'https://github.com/abuhager/Aoun-Project_BackEnd',   // ← رابط الباك
      githubFrontendUrl: 'https://github.com/abuhager/Aoun-Project_FrontEnd', // ← رابط الفرونت
      demoUrl:   'https://aoun-project-theta.vercel.app/',            // ← رابط الديمو الحقيقي
      archNodes: [
        [{ label: 'Next.js Frontend', accent: true }],
        [{ label: 'Node.js + Express API', accent: true }],
        [{ label: 'JWT Auth' }, { label: 'Mongoose' }, ],
        [{ label: 'MongoDB' }],
      ],
    },
    {
      id:        'uniEvents',
      title:     'UniEvents — University Event Management System',
      tag:       'Training Project · Full-Stack',
      problem:   'A comprehensive university event management system designed with role-based access control (RBAC) for students, organizers, and administrators — enabling streamlined event creation, booking, and notifications.',
      role:      'Developed a complete full-stack web application utilizing the MVC architecture. Designed and implemented server-side rendered views for a responsive user interface, integrated secure authentication for user roles, and built a robust database infrastructure featuring pagination, filtering, and search functionalities.',
      badges:    ['ASP.NET Core MVC', 'SQL Server', 'Entity Framework', 'Razor Views'],
      githubUrl: 'https://github.com/abuhager/privateevent/tree/main',      // ← repo واحد
      githubFrontendUrl: null,                                               // ← ما في فرونت repo منفصل
      demoUrl:   null,                                                       // ← ما في ديمو
      archNodes: [
        [{ label: 'Razor Views (UI)', accent: true }],
        [{ label: 'ASP.NET Core MVC', accent: true }],
        [{ label: 'Cookie Auth / Identity' }, { label: 'RBAC' }, { label: 'EF Core' }],
        [{ label: 'SQL Server' }],
      ],
}

  ],
  // === Experience Timeline (يطابق TimelineItem) ===
  timeline: [
    {
      id: 'dot-jordan',
      year: '12/2025 – 02/2026',
      title: 'Full-Stack Web Development Trainee (MERN Stack)',
      detail:
        'Built and deployed full-stack web applications using the MERN stack. Integrated RESTful APIs, optimized MongoDB queries, and shipped responsive mobile-first UIs with Tailwind CSS, increasing user engagement by ~25%.',
    },
    {
      id: 'programming-advice',
      year: '2024 – 2026',
      title: 'Programming Advice by Abu Hadhoud',
      detail:
        'Completed 12 professional courses focused on computer science fundamentals, problem-solving patterns, and clean software design.',
    },
    {
      id: 'university',
      year: '2022 – 2026',
      title: 'B.Sc. Computer Science — Al-Zaytouna University',
      detail:
        'Graduating senior with hands-on experience in software engineering, database modeling, and scalable web architectures.',
    },
  ],

  // === Contact (يطابق SocialLink) ===
  contact: {
    tagline: 'Let’s build fast, reliable web applications together.',
    links: [
      {
        label: 'Email',
        href: 'mailto:abuhager360@gmail.com',
        icon: 'mail',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/abuhager',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/adham-abuhager/',
        icon: 'linkedin',
      },
    ],
  },
};
