import {
  Code2,
  Server,
  Database,
  Wrench,
  MapPin,
  GraduationCap,
  Briefcase,
  Clock3,
} from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiZod,
} from "react-icons/si";

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

export const COUNTS = [
  { value: 3, suffix: "+", label: "Years Coding" },
  { value: 8, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Commitment" },
];

export const QUICK_FACTS = [
  { label: "Location", value: "Lahore, Pakistan", icon: MapPin },
  {
    label: "Education",
    value: "BS Information Technology",
    icon: GraduationCap,
  },
  { label: "Experience", value: "3+ Years, Full-Stack", icon: Briefcase },
  { label: "Availability", value: "Open to Opportunities", icon: Clock3 },
];

export const TECH_ICONS = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Zod", icon: SiZod, color: "#3E67B1" },
];
