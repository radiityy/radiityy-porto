import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaCode,
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
} from "react-icons/si";

export const techStack = [
  {
    category: "Frontend",
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
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Go", icon: SiGo },
      { name: "REST API", icon: FaServer },
      { name: "Sanctum", icon: FaCode },
      { name: "Swagger", icon: FaCode },
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
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: FaFigma },
    ],
  },
];