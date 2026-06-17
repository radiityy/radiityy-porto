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
  SiVercel,
  SiVuedotjs,
  SiGo,
} from "react-icons/si";

export const techStack = [
  {
    category: "Frontend",
    note: "Things I use to build interfaces and client-side experiences.",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Inertia.js", icon: FaCode },
    ],
  },
  {
    category: "Backend",
    note: "Tools I use for APIs, authentication, business logic, and server-side work.",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaServer },
      { name: "Go", icon: SiGo },
      { name: "Gin", icon: FaServer },
      { name: "GORM", icon: FaDatabase },
      { name: "REST API", icon: FaCode },
      { name: "JWT", icon: FaShieldAlt },
      { name: "Sanctum", icon: FaShieldAlt },
      { name: "Swagger", icon: SiSwagger },
      { name: "Filament", icon: FaCode },
    ],
  },
  {
    category: "Database",
    note: "Where the application data lives.",
    items: [{ name: "MySQL", icon: SiMysql }],
  },
  {
    category: "Tools",
    note: "Daily tools for development, testing, design, and deployment.",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ],
  },
];