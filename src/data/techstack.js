import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaServer,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiJavascript,
  SiVuedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostman,
  SiGo,
  SiSwagger,
} from "react-icons/si";

// Note: Some tech (Inertia.js, Gin, GORM, JWT, Sanctum, Filament) don't have
// icons in react-icons. We use icon: null and render a text fallback instead.

export const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "HTML",         icon: FaHtml5 },
      { name: "CSS",          icon: FaCss3Alt },
      { name: "JavaScript",   icon: SiJavascript },
      { name: "React",        icon: FaReact },
      { name: "Next.js",      icon: SiNextdotjs },
      { name: "Vue.js",       icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Inertia.js",   icon: null },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP",        icon: SiPhp },
      { name: "Laravel",    icon: SiLaravel },
      { name: "Node.js",    icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Go",         icon: SiGo },
      { name: "Gin",        icon: null },
      { name: "GORM",       icon: null },
      { name: "REST API",   icon: FaServer },
      { name: "JWT",        icon: null },
      { name: "Sanctum",    icon: null },
      { name: "Filament",   icon: null },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools & Deploy",
    items: [
      { name: "Git",     icon: FaGitAlt },
      { name: "GitHub",  icon: FaGithub },
      { name: "Vercel",  icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
      { name: "Figma",   icon: FaFigma },
    ],
  },
];