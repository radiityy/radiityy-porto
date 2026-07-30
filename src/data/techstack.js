import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostman,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiGo,
} from "react-icons/si";

export const techStack = [
  {
    category: "Frontend",
    note: "Things I use to build interfaces and client-side experiences.",
    items: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#262017" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Inertia.js", icon: FaCode, color: "#9553E9" },
    ],
  },
  {
    category: "Backend",
    note: "Tools I use for APIs, authentication, business logic, and server-side work.",
    items: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express.js", icon: FaServer, color: "#6d604f" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Gin", icon: FaServer, color: "#00ADD8" },
      { name: "GORM", icon: FaDatabase, color: "#00ADD8" },
      { name: "REST API", icon: FaCode, color: "#b3672c" },
      { name: "JWT", icon: FaShieldAlt, color: "#d63aa8" },
      { name: "Sanctum", icon: FaShieldAlt, color: "#FF2D20" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Filament", icon: FaCode, color: "#FDAE41" },
    ],
  },
  {
    category: "Database",
    note: "Where the application data lives.",
    items: [{ name: "MySQL", icon: SiMysql, color: "#4479A1" }],
  },
  {
    category: "Tools",
    note: "Daily tools for development, testing, design, and deployment.",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#262017" },
      { name: "Vercel", icon: SiVercel, color: "#262017" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: FaFigma, color: "#A259FF" },
    ],
  },
];

export const coreStack = [
  "Laravel",
  "Vue.js",
  "Next.js",
  "Go",
  "TypeScript",
  "MySQL",
  "Tailwind CSS",
  "GitHub",
]
  .map((name) => techStack.flatMap((g) => g.items).find((i) => i.name === name))
  .filter(Boolean);