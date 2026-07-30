import { MapPin, GraduationCap, Briefcase, Clock3, Layers } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiZod,
  SiRadixui,
  SiReacthookform,
  SiJsonwebtokens,
  SiMongoose,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiEslint,
  SiPostman,
} from "react-icons/si";

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
  { name: "Radix UI", icon: SiRadixui, color: "#161618" },
  { name: "Zustand", icon: Layers, color: "#603A20" },
  { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
  { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
  { name: "Mongoose", icon: SiMongoose, color: "#880000" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Render", icon: SiRender, color: "#46E3B7" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export type SkillItem = {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
};

export const SKILL_GROUPS: { title: string; items: SkillItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Radix UI", icon: SiRadixui, color: "#161618" },
    ],
  },
  {
    title: "State & Forms",
    items: [
      { name: "Zustand", icon: Layers, color: "#603A20" },
      { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
      { name: "Zod", icon: SiZod, color: "#3E67B1" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    title: "Tooling & Workflow",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];
