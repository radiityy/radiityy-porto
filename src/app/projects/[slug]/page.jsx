import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

function getProjectTheme(slug) {
  const themes = {
    neverending: {
      accent: "bg-[#262017]",
      soft: "bg-[#f3eadc]",
      border: "border-[#d8c6a8]",
      text: "text-[#262017]",
      muted: "text-[#7a674f]",
      glow: "bg-[#d8c6a8]",
    },
    memoir: {
      accent: "bg-[#c77d67]",
      soft: "bg-[#f8ece8]",
      border: "border-[#e2c3b8]",
      text: "text-[#3b2822]",
      muted: "text-[#8a6254]",
      glow: "bg-[#e2c3b8]",
    },
    "7kaih-journal": {
      accent: "bg-[#53756c]",
      soft: "bg-[#edf8f1]",
      border: "border-[#bcd8c9]",
      text: "text-[#263b34]",
      muted: "text-[#477062]",
      glow: "bg-[#bcd8c9]",
    },
    lynk: {
      accent: "bg-[#4f6f8f]",
      soft: "bg-[#eef3f8]",
      border: "border-[#c8d6e2]",
      text: "text-[#243342]",
      muted: "text-[#5e7488]",
      glow: "bg-[#c8d6e2]",
    },
  };

  return themes[slug] || themes.neverending;
}

function getProjectStatus(project) {
  if (project.live) return "Live Project";
  if (project.type.toLowerCase().includes("api")) return "Backend API";
  return "Source Available";
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const theme = getProjectTheme(project.slug);
  const features = project.features || [];

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <Link
        href="/projects"
        className="inline-flex rounded-full border border-[#cdb893] bg-[#fffaf2] px-4 py-2 text-xs font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#f8f3ea]"
      >
        ← Back to Projects
      </Link>

      <section className="relative mt-10 overflow-hidden rounded-[2.4rem] border border-[#dfcfb5] bg-[#fffaf2] shadow-[0_24px_80px_rgba(79,58,32,0.08)]">
        <div
          className={`absolute -right-28 -top-28 h-80 w-80 rounded-full ${theme.glow} opacity-45 blur-3xl`}
        />
        <div
          className={`absolute -bottom-32 -left-32 h-96 w-96 rounded-full ${theme.soft} opacity-90 blur-3xl`}
        />

        <div className="relative grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6 md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full border ${theme.border} ${theme.soft} px-4 py-2 text-xs font-black ${theme.muted}`}
              >
                {getProjectStatus(project)}
              </span>

              <span className="rounded-full border border-[#d7c3a3] bg-[#f8f3ea] px-4 py-2 text-xs font-bold text-[#7a674f]">
                {project.type}
              </span>
            </div>

            <h1
              className={`mt-7 text-[clamp(3rem,13vw,6.8rem)] font-black leading-[0.86] tracking-[-0.09em] ${theme.text} [overflow-wrap:anywhere]`}
            >
              {project.title}
            </h1>

            <p className={`mt-5 max-w-2xl text-lg font-black ${theme.muted}`}>
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6d604f]">
              {project.details}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#262017] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#cdb893] bg-[#fffaf2] px-5 py-3 text-sm font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#f8f3ea]"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>

          <div className={`relative border-t ${theme.border} p-4 lg:border-l lg:border-t-0`}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-[#dfcfb5] bg-[#f3eadc] shadow-[0_18px_60px_rgba(79,58,32,0.1)]">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-8 text-center">
                  <p className="text-4xl font-black tracking-[-0.08em] text-[#262017]">
                    {project.title}
                  </p>
                </div>
              )}

              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/50 bg-white/80 px-3 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#e96d5b]" />
                <span className="h-2 w-2 rounded-full bg-[#e7b85d]" />
                <span className="h-2 w-2 rounded-full bg-[#6fbf73]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className={`rounded-[1.8rem] border ${theme.border} ${theme.soft} p-5`}>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#53756c]">
            Category
          </p>
          <p className="mt-3 text-xl font-black tracking-[-0.05em] text-[#262017]">
            {project.type}
          </p>
        </div>

        <div className={`rounded-[1.8rem] border ${theme.border} bg-[#fffaf2] p-5`}>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#53756c]">
            Stack
          </p>
          <p className="mt-3 text-xl font-black tracking-[-0.05em] text-[#262017]">
            {project.stack.length} tools
          </p>
        </div>

        <div className={`rounded-[1.8rem] border ${theme.border} ${theme.soft} p-5`}>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#53756c]">
            Status
          </p>
          <p className="mt-3 text-xl font-black tracking-[-0.05em] text-[#262017]">
            {getProjectStatus(project)}
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#53756c]">
            Overview
          </p>

          <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-5xl">
            What this project does.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6d604f]">
            {project.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature}
              className={`group rounded-[1.7rem] border ${theme.border} bg-[#fffaf2] p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(79,58,32,0.08)]`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-2xl ${theme.accent} text-xs font-black text-white transition group-hover:rotate-[-5deg]`}
              >
                0{index + 1}
              </span>

              <p className="mt-5 text-sm font-black leading-6 text-[#262017]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 overflow-hidden rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#53756c]">
              Tech Stack
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.07em] text-[#262017]">
              Built with these tools.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#6d604f]">
            Technologies used to build the main features, structure, and flow of
            this project.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className={`rounded-full border ${theme.border} ${theme.soft} px-4 py-2 text-xs font-bold ${theme.muted}`}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}