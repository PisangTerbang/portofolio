import type { StaticImageData } from "next/image";
import kostDesktop from "@/public/kost/desktop.webp";
import kostMobile from "@/public/kost/mobile.webp";
import portoDesktop from "@/public/portofolio/desktop.webp";
import portoMobile from "@/public/portofolio/mobile.webp";
import rataBeranda from "@/public/ratatouille/beranda.webp";
import rataChatbot from "@/public/ratatouille/chatbot.webp";
import rataDenah from "@/public/ratatouille/denah-3d.webp";
import rataMenu from "@/public/ratatouille/menu.webp";
import rataReservasi from "@/public/ratatouille/reservasi.webp";
import rataStatistik from "@/public/ratatouille/statistik.webp";
import smartBeranda from "@/public/smartcycle/beranda.webp";
import smartEdukasi from "@/public/smartcycle/edukasi.webp";
import smartLokasi from "@/public/smartcycle/lokasi.webp";
import smartPenukaran from "@/public/smartcycle/penukaran.webp";
import smartScan from "@/public/smartcycle/scan.webp";
import taDosen from "@/public/tugas-akhir/dosen.webp";
import taKetuaLab from "@/public/tugas-akhir/ketua-lab.webp";
import taKoordinator from "@/public/tugas-akhir/koordinator.webp";
import taMahasiswa from "@/public/tugas-akhir/mahasiswa.webp";
import taProdi from "@/public/tugas-akhir/prodi.webp";

export const profile = {
  name: "Anugrah Prima Pratama",
  nameLines: ["Anugrah", "Prima", "Pratama"],
  initials: "AP",
  status: "Open to work",
  role: "AI-native web developer and Informatics graduate from Universitas Islam Indonesia.",
  intro:
    "I build web applications end to end with AI coding agents in my daily workflow, from the interface down to the database. My biggest project, a thesis title approval system for five user roles, was published as a journal article.",
  photoAlt: "Anugrah Prima Pratama in a black shirt with his arms crossed",
};

export const contact = {
  email: "primaamk99@gmail.com",
  linkedin: "https://www.linkedin.com/in/anugrahprimapratama",
  github: "https://github.com/PisangTerbang",
  cvUrl: "/Anugrah-Prima-Pratama-CV.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  lead: "I'm an AI-native developer. I build web applications end to end with AI coding agents in the loop, while I make the decisions, review every change, and own the result.",
  body: "In university I built a project for the Informatics Expo every year, then finished with a Laravel-based information system for my thesis, now published in Jurnal EDUSAINTEK. This portfolio was built the same way: me directing an AI coding agent from the first idea to a live site.",
  facts: [
    {
      label: "Education",
      value: "Bachelor of Informatics, Universitas Islam Indonesia (2022–2026)",
    },
    {
      label: "Honors",
      value: "Cum laude, GPA 3.64, with a Rector's Letter of Commendation",
    },
    {
      label: "Focus",
      value: "AI-native web development with Laravel and Next.js",
    },
    { label: "Based in", value: "Pekanbaru, Riau, Indonesia" },
    {
      label: "Certification",
      value: "Cisco Junior Cybersecurity Analyst Career Path",
    },
    {
      label: "Looking for",
      value: "Software engineer or data analyst roles",
    },
  ],
};

export const aiLoop = {
  title: "How I build with AI",
  lede: "AI is part of my everyday workflow, not an add-on. It writes fast. I make the decisions and own the result.",
  steps: [
    {
      title: "Direct",
      detail:
        "I define the goal, the constraints, and the design, then brief the AI coding agent in plain language.",
    },
    {
      title: "Build",
      detail:
        "The agent drafts the code, from database queries to interface components, while I steer every iteration.",
    },
    {
      title: "Review and ship",
      detail:
        "I read the changes, test them in the browser, fix what's off, and deploy.",
    },
  ],
  tools: ["Claude Code", "Vibe coding", "Prompts and specs", "Code review"],
};

export type ProjectId = "ta" | "reservasi" | "kost" | "portofolio";

export type ShowcaseScreen = {
  id: string;
  label: string;
  image: StaticImageData;
  scroll?: boolean;
};

type ProjectBase = {
  id: string;
  navLabel: string;
  kind: string;
  context: string;
  title: string;
  subtitle: string;
  summary: string;
  role?: string;
  highlights?: string[];
  stack: string[];
  link?: { label: string; href: string };
  note?: string;
  layout: "stack" | "split" | "split-reverse";
};

export type ShowcaseProject =
  | (ProjectBase & { visual: "browser"; screens: ShowcaseScreen[] })
  | (ProjectBase & {
      visual: "phones";
      screens: { image: StaticImageData; label: string }[];
    })
  | (ProjectBase & {
      visual: "devices";
      desktop: StaticImageData;
      mobile: StaticImageData;
    });

export const projects: ShowcaseProject[] = [
  {
    id: "project-thesis",
    navLabel: "Thesis",
    kind: "Web app",
    context: "Thesis, published in Jurnal EDUSAINTEK",
    title: "Tiered thesis title approval system",
    subtitle: "Five roles, one approval flow",
    summary:
      "A web application that brings thesis title submissions and approvals into one place. Every submission moves through several approval stages, and each party signs in with their own role.",
    highlights: [
      "Designed the flow and database with Rapid Application Development (RAD)",
      "Built sign-in and access control for five user roles",
      "Created dashboards with charts to track submissions",
      "Developed with AI coding tools in the loop",
      "Wrote up the results as a journal article with Sri Mulyati",
    ],
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "PostgreSQL (Supabase)",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "Chart.js",
    ],
    link: {
      label: "Read the journal article",
      href: "https://doi.org/10.47668/edusaintek.v13i1.2286",
    },
    note: "Real app screens with sample data. The app itself is in Indonesian. Pick a role to see its page.",
    layout: "stack",
    visual: "browser",
    screens: [
      { id: "student", label: "Student", image: taMahasiswa, scroll: true },
      { id: "lecturer", label: "Lecturer", image: taDosen, scroll: true },
      { id: "lab-head", label: "Lab head", image: taKetuaLab, scroll: true },
      { id: "program", label: "Study program", image: taProdi, scroll: true },
      {
        id: "coordinator",
        label: "Thesis coordinator",
        image: taKoordinator,
        scroll: true,
      },
    ],
  },
  {
    id: "project-ratatouille",
    navLabel: "Ratatouille",
    kind: "Web app",
    context: "Team capstone, Informatics Expo",
    title: "Ratatouille",
    subtitle: "Information system for a themed restaurant",
    summary:
      "Customers can book a table, order food, and ask questions through a chatbot, while staff manage the menu and follow sales statistics. Built by a team of five using Kanban.",
    role: "My part was the frontend: a responsive interface plus the sign-up, reservation, and ordering features.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Kanban"],
    note: "The home page comes from the team's Figma mockup. The other pages are from the finished app.",
    layout: "split",
    visual: "browser",
    screens: [
      { id: "home", label: "Home", image: rataBeranda, scroll: true },
      { id: "menu", label: "Menu", image: rataMenu },
      { id: "booking", label: "Booking", image: rataReservasi },
      { id: "floor-plan", label: "3D floor plan", image: rataDenah },
      { id: "chatbot", label: "Chatbot", image: rataChatbot },
      { id: "statistics", label: "Statistics", image: rataStatistik },
    ],
  },
  {
    id: "project-smartcycle",
    navLabel: "SmartCycle",
    kind: "UI/UX design",
    context: "Mobile app",
    title: "SmartCycle",
    subtitle: "A waste recycling app",
    summary:
      "Our recycling app is designed to make recycling easier, teach people why it matters, and help them find the nearest waste collection point. To measure how effective and usable the app is, we surveyed a group of users.",
    stack: ["Figma", "Prototyping", "User survey"],
    layout: "stack",
    visual: "phones",
    screens: [
      { image: smartBeranda, label: "Home" },
      { image: smartLokasi, label: "Recycling spots" },
      { image: smartScan, label: "Scan waste" },
      { image: smartEdukasi, label: "Learn" },
      { image: smartPenukaran, label: "Redeem points" },
    ],
  },
  {
    id: "project-kost",
    navLabel: "Kost Putra Pendekar",
    kind: "Landing page",
    context: "Personal project, live",
    title: "Kost Putra Pendekar",
    subtitle: "Promo site for a men's boarding house in Yogyakarta",
    summary:
      "Shows the facilities, a photo gallery of the rooms, the monthly rent, an FAQ, and the location on Google Maps. Future tenants can message the owner on WhatsApp in one tap.",
    stack: ["Next.js", "React", "Tailwind CSS", "Motion"],
    link: {
      label: "Visit the site",
      href: "https://kost-pendekar.vercel.app",
    },
    layout: "split-reverse",
    visual: "devices",
    desktop: kostDesktop,
    mobile: kostMobile,
  },
  {
    id: "project-portfolio",
    navLabel: "This portfolio",
    kind: "Personal site",
    context: "Personal project, live",
    title: "This portfolio",
    subtitle: "My projects and skills on one page",
    summary:
      "Built AI-native: I directed an AI coding agent through every iteration, from design to deployment, and reviewed each change. It redeploys automatically whenever a change lands on GitHub.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    link: {
      label: "View the code on GitHub",
      href: "https://github.com/PisangTerbang/portofolio",
    },
    layout: "split",
    visual: "devices",
    desktop: portoDesktop,
    mobile: portoMobile,
  },
];

export const otherProjects = [
  {
    icon: "design",
    tool: "Figma",
    title: "UI/UX design for a clean-environment app",
    detail: "Designed the interface and user flow for the Informatics Expo.",
  },
  {
    icon: "desktop",
    tool: "Java",
    title: "Surplus food app for charities",
    detail:
      "Routes leftover food from companies to NGOs so it doesn't go to waste.",
  },
  {
    icon: "mobile",
    tool: "Android Studio",
    title: "Cleanliness-themed Android app",
    detail:
      "A mobile app that encourages people to keep their surroundings clean.",
  },
] as const;

export const projectFilters: { id: ProjectId; label: string }[] = [
  { id: "ta", label: "Thesis" },
  { id: "reservasi", label: "Ratatouille" },
  { id: "kost", label: "Kost Putra Pendekar" },
  { id: "portofolio", label: "This portfolio" },
];

export type SkillLayer = {
  name: string;
  description: string;
  skills: { name: string; usedIn: ProjectId[] }[];
};

export const skillLayers: SkillLayer[] = [
  {
    name: "AI-native workflow",
    description: "How I build: AI agents in the loop, me in charge.",
    skills: [
      { name: "Claude Code", usedIn: ["ta", "portofolio"] },
      { name: "Vibe coding", usedIn: ["ta", "kost", "portofolio"] },
      { name: "Prompts and specs", usedIn: ["ta", "kost", "portofolio"] },
      {
        name: "Reviewing AI-written code",
        usedIn: ["ta", "kost", "portofolio"],
      },
    ],
  },
  {
    name: "Frontend",
    description: "The pages people see and use.",
    skills: [
      { name: "HTML", usedIn: ["ta", "reservasi", "kost", "portofolio"] },
      { name: "CSS", usedIn: ["ta", "reservasi", "kost", "portofolio"] },
      { name: "Tailwind CSS", usedIn: ["ta", "kost", "portofolio"] },
      { name: "JavaScript", usedIn: ["ta", "reservasi", "kost", "portofolio"] },
      { name: "Alpine.js", usedIn: ["ta"] },
      { name: "Blade", usedIn: ["ta"] },
      { name: "React", usedIn: ["kost", "portofolio"] },
      { name: "Next.js", usedIn: ["kost", "portofolio"] },
    ],
  },
  {
    name: "Backend and logic",
    description: "Business rules, sign-in, and user permissions.",
    skills: [
      { name: "PHP", usedIn: ["ta", "reservasi"] },
      { name: "Laravel", usedIn: ["ta"] },
      { name: "Laravel Breeze", usedIn: ["ta"] },
      { name: "Java", usedIn: [] },
    ],
  },
  {
    name: "Data",
    description: "Storing, processing, and presenting data.",
    skills: [
      { name: "PostgreSQL", usedIn: ["ta"] },
      { name: "SQL", usedIn: ["ta", "reservasi"] },
      { name: "Database design", usedIn: ["ta"] },
      { name: "Supabase", usedIn: ["ta"] },
      { name: "Chart.js", usedIn: ["ta"] },
      { name: "Excel", usedIn: [] },
      { name: "Google Sheets", usedIn: [] },
    ],
  },
  {
    name: "Design and tools",
    description: "From mockups to code running on my machine.",
    skills: [
      { name: "Figma", usedIn: [] },
      { name: "Git & GitHub", usedIn: ["portofolio"] },
      { name: "Vite", usedIn: ["ta"] },
      { name: "Laragon", usedIn: ["kost", "portofolio"] },
      { name: "Android Studio", usedIn: [] },
    ],
  },
];

export const ribbonTools = [
  "AI-native",
  "Claude Code",
  "Laravel",
  "Next.js",
  "React",
  "PHP",
  "PostgreSQL",
  "Tailwind CSS",
  "JavaScript",
  "Figma",
  "Chart.js",
  "Git & GitHub",
];

export const skillNote =
  "My hands-on level is beginner to intermediate, with Excel and Google Sheets at intermediate. Working AI-native lets me pick up new tools quickly and still ship working software.";

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Passive, CEPT 513 (CILACS UII)" },
];

export const workflow = [
  {
    title: "Requirements planning",
    detail:
      "Understand the problem and what each user needs before writing code.",
  },
  {
    title: "User design",
    detail:
      "Sketch the flows and screens, then get feedback from future users.",
  },
  {
    title: "Construction",
    detail: "Build features step by step and refine them as feedback comes in.",
  },
  {
    title: "Cutover",
    detail: "Test, prepare the data, and hand the system over to its users.",
  },
];
