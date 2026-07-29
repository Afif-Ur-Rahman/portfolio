// components/sections/constants.ts
import { Code2, Server, Database, Wrench } from "lucide-react";

export const COUNTS = [
  { value: 2, suffix: "+", label: "Years Coding" },
  { value: 5, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "State & Forms",
    icon: Wrench,
    items: ["Zustand", "React Hook Form", "Zod"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Database & Tools",
    icon: Database,
    items: ["MongoDB", "Git", "Render", "Vercel"],
  },
];

export const PROJECTS = [
  {
    title: "The Conqueror Developers",
    description:
      "A full-stack real estate management platform with a super-admin dashboard covering leads, payments, receipts, and customer management — built with Next.js, TypeScript, Node.js, Express, and MongoDB.",
    image: "/images/projects/conqueror-developers.png",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Zustand"],
    liveUrl: "https://your-live-link.com",
    githubUrl: "https://github.com/your-username/your-repo",
  },
  {
    title: "Project Two",
    description:
      "Short description of what this project does and the problem it solves.",
    image: "/images/projects/project-two.png",
    tags: ["Tech", "Stack", "Here"],
    liveUrl: "",
    githubUrl: "",
  },
];
