import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects[0];

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-20">
      <section className="grid min-h-[70vh] gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 rotate-[-3deg] overflow-hidden rounded-[1.8rem] border border-[#dac5a6] bg-[#fffaf2] shadow-[0_12px_35px_rgba(79,58,32,0.12)] sm:h-28 sm:w-28">
              <Image
                src="/adyneee.jpeg"
                alt="Radit"
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bcd8c9] bg-[#edf8f1] px-4 py-2 text-xs font-bold text-[#477062]">
                <span className="h-2 w-2 rounded-full bg-[#5ea77c]" />
                Open to Opportunities
              </div>

              <p className="mt-3 text-sm font-black text-[#262017]">
                @{profile.handle}
              </p>

              <p className="mt-1 text-sm font-medium text-[#6d604f]">
                Web Developer
              </p>
            </div>
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.07em] text-[#262017] sm:text-6xl md:text-7xl">
            Hi, I&apos;m {profile.name}.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#6d604f]">
            A student at {profile.university} who enjoys building web projects.
            Currently learning backend development, REST APIs, and fullstack apps
            using Laravel, Next.js, Vue.js, Go, and MySQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-[#262017] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-[#cdb893] px-5 py-3 text-sm font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#fffaf2]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative pt-7">
          <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#bcd8c9]/45 blur-2xl" />
          <div className="absolute bottom-4 right-2 h-40 w-40 rounded-full bg-[#e7c892]/45 blur-2xl" />

          <div className="absolute right-8 top-0 z-10 rotate-[3deg] rounded-full border border-[#bcd8c9] bg-[#edf8f1] px-5 py-3 text-sm font-black text-[#477062] shadow-sm">
            Project Highlight
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#dac5a6] bg-[#fffaf2] shadow-[0_18px_60px_rgba(79,58,32,0.09)]">
            <div className="flex items-center gap-2 border-b border-[#e5d5bd] bg-[#f8efe1] px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e96d5b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e7b85d]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#6fbf73]" />

              <span className="ml-3 rounded-full border border-[#d8c6a8] bg-[#fffaf2] px-3 py-1 text-[11px] font-bold text-[#7a674f]">
                featured-project
              </span>
            </div>

            <div className="p-5">
              <Link
                href={`/projects/${featured.slug}`}
                className="group relative block min-h-[230px] overflow-hidden rounded-[1.5rem] border border-[#e0ceb0] bg-[#f3eadc] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#53756c] hover:shadow-[0_18px_45px_rgba(79,58,32,0.14)]"
              >
                <div className="absolute right-5 top-5 rounded-full bg-[#262017] px-4 py-2 text-xs font-black text-white transition group-hover:rotate-[-2deg]">
                  {featured.type}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8b7658]">
                    Featured Work
                  </p>

                  <h2 className="mt-2 text-4xl font-black tracking-[-0.07em] text-[#262017] transition group-hover:text-[#53756c]">
                    {featured.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.stack.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d8c6a8] bg-[#fffaf2] px-3 py-1 text-[11px] font-bold text-[#7a674f]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 translate-y-2 text-xs font-black text-[#53756c] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View project detail →
                  </p>
                </div>
              </Link>

              <p className="mt-5 text-sm leading-7 text-[#6d604f]">
                {featured.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#262017] px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5"
                >
                  GitHub
                </a>

                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#cdb893] px-4 py-2 text-xs font-bold text-[#262017] transition hover:-translate-y-0.5 hover:bg-[#fffaf2]"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}