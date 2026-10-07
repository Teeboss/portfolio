// All copy comes from Pelumi's CV and the project repos. Nothing invented:
// no testimonials, no skill percentages, no made-up metrics.

export const profile = {
  name: 'Tobiloba Pelumi Habib',
  short: 'Pelumi',
  email: 'tobihabib25@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pelumi-habib-99964a16a/',
  github: 'https://github.com/Teeboss',
  years: '6+',
  about: [
    "I'm Pelumi, a full-stack engineer with over six years of building production software: payment platforms, public APIs, learning platforms and the dashboards that run them.",
    'Most of my work sits on Node.js and TypeScript, with React and Next.js on the front. I care about money moving correctly, APIs that are documented, and interfaces that hold up on a phone.',
  ],
}

export type Stack = { label: string; items: string }

export const stack: Stack[] = [
  { label: 'Backend', items: 'Node.js · Express · Bun · Hono · Laravel/PHP' },
  { label: 'Frontend', items: 'React · Next.js · TypeScript · Tailwind CSS' },
  { label: 'Data', items: 'PostgreSQL · MySQL · MongoDB · Redis · Prisma' },
  { label: 'Cloud', items: 'AWS (Bedrock, S3) · Docker · BullMQ · CI/CD' },
]

export type Project = {
  title: string
  subtitle: string
  summary: string
  stack?: string
  url: string
  image: string
  tone: 'mint' | 'sand' | 'lavender' | 'pink' | 'stone' | 'aqua' | 'cream' | 'butter'
  shape: string
}

export const projects: Project[] = [
  {
    title: 'CzettaPay',
    subtitle: 'Payments & VTU platform',
    summary:
      'Airtime, data, bills and SMS for businesses and consumers, running on a telco integration API I built for MTN, Airtel, Glo and 9mobile.',
    stack: 'Node.js · Next.js · Bun · Hono · PostgreSQL · AWS Bedrock',
    url: 'https://czettapay.com',
    image: '/projects/czettapay.jpg',
    tone: 'mint',
    shape: '/shapes/s03.png',
  },
  {
    title: 'The Mars Program',
    subtitle: 'Learning management system',
    summary:
      'A multi-role LMS for students, teachers, parents and schools, with Paystack subscriptions, a parent portal and the MARTIE AI tutor.',
    stack: 'Next.js · Prisma · PostgreSQL · AWS Bedrock',
    url: 'https://themarsprogram.com',
    image: '/projects/mars.jpg',
    tone: 'sand',
    shape: '/shapes/s13.png',
  },
  {
    title: 'Kaylabit',
    subtitle: 'Crypto, gift cards & bills',
    summary:
      'A fintech API and admin dashboard: switchable crypto custody, role-based access for every department, audit logging and real-time support chat.',
    stack: 'Node.js · Express · MySQL · React · Socket.IO',
    url: 'https://kaylabit.com',
    image: '/projects/kaylabit.jpg',
    tone: 'lavender',
    shape: '/shapes/s14.png',
  },
  {
    title: 'WorkSpaces',
    subtitle: 'Cloud desktop SaaS · Cumulus HQ',
    summary:
      'The full frontend for a multi-tenant portal that provisions and governs AWS WorkSpaces desktops, on a client generated from the OpenAPI contract.',
    stack: 'React · TypeScript · Vite · Tailwind · OpenAPI',
    url: 'https://staging.dspom8hir9xob.amplifyapp.com/',
    image: '/projects/cumulus.jpg',
    tone: 'pink',
    shape: '/shapes/s15.png',
  },
  {
    title: 'Be Happy',
    subtitle: 'Foundation website',
    summary:
      'The website for a foundation that runs seminars, food outreach and counselling workshops for young people.',
    url: 'https://behappyng.com',
    image: '/projects/behappy.jpg',
    tone: 'stone',
    shape: '/shapes/s16.png',
  },
  {
    title: 'KGS Analytics',
    subtitle: 'Sports predictions platform',
    summary:
      'Built with Laravel and JavaScript, serving over fifteen thousand customers, with daily fixture imports and an NBA prediction algorithm.',
    stack: 'Laravel · PHP · jQuery · Bootstrap',
    url: 'https://kgsanalytics.com',
    image: '/projects/kgs.jpg',
    tone: 'butter',
    shape: '/shapes/s19.png',
  },
  {
    title: 'Jobs Lounge',
    subtitle: 'Recruitment platform',
    summary:
      'A jobs board for MarkCalthers with curated vacancies, validated applications and a tracker for each candidate’s next move.',
    stack: 'Laravel · PHP · Axios · Bootstrap',
    url: 'https://jobslounge.markcalthers.com',
    image: '/projects/jobslounge.jpg',
    tone: 'cream',
    shape: '/shapes/s20.png',
  },
]

export const services = [
  {
    title: ['Backend', '& APIs'],
    tone: 'sage',
    shape: '/shapes/s19.png',
    items: ['REST APIs with OpenAPI docs', 'Payments & fintech integrations', 'Auth, RBAC & audit trails'],
  },
  {
    title: ['Web', 'Applications'],
    tone: 'periwinkle',
    shape: '/shapes/s18.png',
    items: ['React & Next.js frontends', 'Admin dashboards', 'Responsive, accessible UI'],
  },
  {
    title: ['Cloud', '& AI'],
    tone: 'butter',
    shape: '/shapes/s20.png',
    items: ['AWS Bedrock AI assistants', 'Queues, workers & webhooks', 'Docker & CI/CD'],
  },
] as const

export type Job = { company: string; role: string; dates: string; summary: string }

export const jobs: Job[] = [
  {
    company: 'BrookField West',
    role: 'Full-stack Engineer',
    dates: 'Aug 2025 – Present',
    summary:
      'Building the CzettaPay payments ecosystem (telco API, B2B wallet API, web platform and consumer backend) and The Mars Program LMS.',
  },
  {
    company: 'Cumulus HQ',
    role: 'Frontend Engineer (Contract)',
    dates: 'Aug 2026 – Present',
    summary:
      'Built the WorkSpaces On Demand frontend: typed OpenAPI client, MFA, five role-based surfaces and the SuperAdmin dashboards.',
  },
  {
    company: 'Kaylabit',
    role: 'Full-stack Engineer',
    dates: 'May 2026 – Present',
    summary:
      'Extended the fintech API with crypto custody switching, RBAC and audit logging, and built features across the React admin dashboard.',
  },
  {
    company: 'MAZE',
    role: 'Backend Engineer',
    dates: 'Nov 2023 – 2025',
    summary:
      'MVC services on Node.js and TypeScript with Jest tests, CI/CD on GitHub, JWT auth and EtherJs / Solana integrations.',
  },
  {
    company: 'MarkCalthers',
    role: 'Full-stack Developer / IT Executive',
    dates: 'Mar 2023 – Feb 2025',
    summary:
      'Built Jobs Lounge, MCM Studios, a digital voucher platform and an internal exam platform.',
  },
  {
    company: 'KGS BETs',
    role: 'Software Engineer',
    dates: 'Jan 2023 – Feb 2024',
    summary: 'Built KGS Analytics with Laravel and JavaScript, serving over fifteen thousand customers.',
  },
]

export const sections = [
  { id: 'hello', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work-1', label: 'Work 01' },
  { id: 'work-2', label: 'Work 02' },
  { id: 'work-3', label: 'Work 03' },
  { id: 'work-4', label: 'Work 04' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
