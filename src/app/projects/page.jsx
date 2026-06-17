import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Selected projects by Raditya Adin Nugroho.",
};

function getProjectStatus(project) {
  if (project.live) {
    return {
      label: "Live",
      className: "border-[#bcd8c9] bg-[#edf8f1] text-[#477062]",
    };
  }

  if (project.type.toLowerCase().includes("api")) {
    return {
      label: "Backend API",
      className: "border-[#d8c6a8] bg-[#fffaf2] text-[#7a674f]",
    };
  }

  return {
    label: "Source",
    className: "border-[#dac5a6] bg-[#f3eadc] text-[#62533f]",
  };
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
          A few web projects I&apos;ve worked on, from backend APIs to fullstack
          applications.
        </p>
      </section>

      <section className="divide-y divide-[#e3d3bb] border-y border-[#e3d3bb]">
        {projects.map((project, index) => {
          const status = getProjectStatus(project);

          return (
            <article
              key={project.slug}
              className="group grid gap-6 py-8 transition md:grid-cols-[240px_1fr] md:items-center"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block overflow-hidden rounded-[1.6rem] border border-[#dac5a6] bg-[#fffaf2] p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#53756c] group-hover:shadow-[0_14px_35px_rgba(79,58,32,0.08)]"
              >
                {project.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem] bg-[#f3eadc]">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 240px"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[1.2rem] border border-[#e0ceb0] bg-[#f3eadc] p-4">
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#bcd8c9]/45 blur-xl" />
                    <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#e7c892]/45 blur-xl" />

                    <div className="relative flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#e96d5b]" />
                      <span className="h-2 w-2 rounded-full bg-[#e7b85d]" />
                      <span className="h-2 w-2 rounded-full bg-[#6fbf73]" />
                    </div>

                    <div className="relative">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8b7658]">
                        Preview
                      </p>
                      <h2 className="mt-1 text-2xl font-black tracking-[-0.06em] text-[#262017]">
                        {project.title}
                      </h2>
                    </div>

                    <p className="relative text-[11px] font-bold text-[#7a674f]">
                      Project Preview
                    </p>
                  </div>
                )}
              </Link>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-black text-[#53756c]">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-[#d7c3a3] bg-[#fffaf2] px-3 py-1 text-[11px] font-bold text-[#7a674f]">
                    {project.type}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-black ${status.className}`}
                  >
                    {status.label}
                  </span>
                </div>

                <Link href={`/projects/${project.slug}`} className="group/title">
                  <h2 className="mt-3 inline-flex items-center gap-2 text-3xl font-black tracking-[-0.05em] text-[#262017] transition group-hover/title:text-[#53756c]">
                    {project.title}
                    <span className="translate-y-1 text-xl opacity-0 transition group-hover/title:translate-y-0 group-hover/title:opacity-100">
                    </span>
                  </h2>
                </Link>

                <p className="mt-2 text-sm font-bold text-[#53756c]">
                  {project.subtitle}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6d604f]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d8c6a8] bg-[#fffaf2] px-3 py-1 text-[11px] font-bold text-[#7a674f]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-full bg-[#262017] px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5"
                  >
                    View Detail
                  </Link>

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#cdb893] px-4 py-2 text-xs font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#fffaf2]"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#cdb893] px-4 py-2 text-xs font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#fffaf2]"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}