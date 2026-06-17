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

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <Link
        href="/projects"
        className="inline-flex rounded-full border border-[#cdb893] px-4 py-2 text-xs font-bold text-[#262017] transition hover:bg-[#fffaf2]"
      >
        ← Back to Projects
      </Link>

      <section className="mt-10 grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-start">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#53756c]">
            Project Detail
          </p>

          <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-4 text-lg font-bold text-[#53756c]">
            {project.type}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#6d604f]">
            {project.details}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#d8c6a8] bg-[#fffaf2] px-4 py-2 text-xs font-bold text-[#7a674f]"
              >
                {item}
              </span>
            ))}
          </div>

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
                className="rounded-full border border-[#cdb893] px-5 py-3 text-sm font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#fffaf2]"
              >
                Live Site
              </a>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#dac5a6] bg-[#fffaf2] p-4 shadow-[0_18px_60px_rgba(79,58,32,0.09)]">
          {project.image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-[#f3eadc]">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-[1.5rem] border border-[#e0ceb0] bg-[#f3eadc] p-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e96d5b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e7b85d]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6fbf73]" />
              </div>

              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8b7658]">
                  Project Preview
                </p>

                <h2 className="mt-2 text-4xl font-black tracking-[-0.07em] text-[#262017]">
                  {project.title}
                </h2>
              </div>

              <p className="text-xs font-bold text-[#7a674f]">
                Project Preview
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}