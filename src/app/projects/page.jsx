import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Selected projects by Raditya Adin Nugroho.",
};

function getProjectStatus(project) {
  if (project.live) return "Live";
  if (project.type.toLowerCase().includes("api")) return "API";
  return "Source";
}

function getProjectTheme(slug) {
  const themes = {
    neverending: {
      accent: "bg-[#262017]",
      soft: "bg-[#f3eadc]",
      border: "border-[#d8c6a8]",
      text: "text-[#262017]",
      muted: "text-[#7a674f]",
    },
    memoir: {
      accent: "bg-[#c77d67]",
      soft: "bg-[#f8ece8]",
      border: "border-[#e2c3b8]",
      text: "text-[#3b2822]",
      muted: "text-[#8a6254]",
    },
    "7kaih-journal": {
      accent: "bg-[#53756c]",
      soft: "bg-[#edf8f1]",
      border: "border-[#bcd8c9]",
      text: "text-[#263b34]",
      muted: "text-[#477062]",
    },
    lynk: {
      accent: "bg-[#4f6f8f]",
      soft: "bg-[#eef3f8]",
      border: "border-[#c8d6e2]",
      text: "text-[#243342]",
      muted: "text-[#5e7488]",
    },
  };

  return themes[slug] || themes.neverending;
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <section className="mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#53756c]">
            Selected Projects
          </p>

          <span className="rounded-full border border-[#dfcfb5] bg-[#fffaf2] px-4 py-2 text-xs font-black text-[#7a674f]">
            {projects.length} projects
          </span>
        </div>

        <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-7xl">
          Projects.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d604f]">
          A few things I&apos;ve built while learning backend, frontend, and
          fullstack web development.
        </p>
      </section>

      <section className="grid gap-6">
        {projects.map((project, index) => {
          const theme = getProjectTheme(project.slug);

          return (
            <article
              key={project.slug}
              className={`group relative overflow-hidden rounded-[2.3rem] border ${theme.border} bg-[#fffaf2] shadow-[0_18px_60px_rgba(79,58,32,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(79,58,32,0.12)]`}
            >
              <div
                className={`absolute -right-20 -top-20 h-56 w-56 rounded-full ${theme.soft} blur-3xl`}
              />
              <div
                className={`absolute -bottom-24 -left-24 h-64 w-64 rounded-full ${theme.soft} blur-3xl`}
              />

              <div className="relative grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <Link
                  href={`/projects/${project.slug}`}
                  className={`relative block overflow-hidden border-b ${theme.border} bg-[#f8f3ea] p-3 md:border-b-0 md:border-r`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.7rem] bg-[#f3eadc]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 48vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-6 text-center">
                        <p className="text-3xl font-black tracking-[-0.07em] text-[#262017]">
                          {project.title}
                        </p>
                      </div>
                    )}

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-white/80 px-3 py-2 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-[#e96d5b]" />
                      <span className="h-2 w-2 rounded-full bg-[#e7b85d]" />
                      <span className="h-2 w-2 rounded-full bg-[#6fbf73]" />
                    </div>

                    <span
                      className={`absolute bottom-4 right-4 rounded-full ${theme.accent} px-4 py-2 text-xs font-black text-white shadow-sm`}
                    >
                      {getProjectStatus(project)}
                    </span>
                  </div>
                </Link>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`text-xs font-black ${theme.muted}`}>
                      0{index + 1}
                    </span>

                    <span className="rounded-full border border-[#d7c3a3] bg-[#f8f3ea] px-3 py-1 text-[11px] font-bold text-[#7a674f]">
                      {project.type}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h2
                      className={`mt-5 text-[clamp(2.3rem,8vw,4.6rem)] font-black leading-[0.9] tracking-[-0.08em] ${theme.text} [overflow-wrap:anywhere] transition group-hover:text-[#53756c]`}
                    >
                      {project.title}
                    </h2>
                  </Link>

                  <p className={`mt-4 text-sm font-black ${theme.muted}`}>
                    {project.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#6d604f]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d8c6a8] bg-[#f8f3ea] px-3 py-1 text-[11px] font-bold text-[#7a674f]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="rounded-full bg-[#262017] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5"
                    >
                      View Detail
                    </Link>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#cdb893] px-5 py-3 text-xs font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#f8f3ea]"
                    >
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#cdb893] px-5 py-3 text-xs font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#f8f3ea]"
                      >
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}