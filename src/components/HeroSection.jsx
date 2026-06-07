"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

const taglines = [
  "Mahasiswa · Web Developer · Purworejo",
  "Backend-leaning full-stack developer",
  "Building things from scratch",
];

function useTypingAnimation() {
  const [displayed, setDisplayed] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((currentIndex) => currentIndex + 1);
      }, 70);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((currentIndex) => currentIndex - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTaglineIndex((currentIndex) => (currentIndex + 1) % taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, taglineIndex]);

  return displayed;
}

export default function HeroSection() {
  const [photoError, setPhotoError] = useState(false);
  const typedText = useTypingAnimation();

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="hero" className="px-4 py-5 sm:px-5 lg:px-4 lg:py-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-start lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#e5cda9] bg-[#efd09d] text-xl font-extrabold text-[#8b5b20] sm:h-16 sm:w-16 sm:text-2xl lg:h-20 lg:w-20">
                {!photoError ? (
                  <Image
                    src="/adyneee.jpeg"
                    alt="Foto Radiit"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    onError={() => setPhotoError(true)}
                    priority
                  />
                ) : (
                  <span aria-hidden="true">R</span>
                )}
              </div>

              <span
                aria-label="Tersedia"
                className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-[#fbf6ed] bg-[#6fbf73] lg:h-3.5 lg:w-3.5"
              />
            </div>

            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e6b65f] bg-[#fff3cf] px-2.5 py-1 text-[9px] font-bold text-[#b27600]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d4a017]" />
                Tersedia untuk kolaborasi
              </span>

              <h1 className="mt-2 font-display text-[23px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#2b2118] sm:text-[26px] lg:text-[32px]">
                Halo, saya Radiit.
              </h1>
            </div>
          </div>

          <p className="mt-3 min-h-[18px] max-w-full truncate text-[11px] font-medium text-[#7b644b] lg:text-[12px]">
            {typedText}
            <span
              aria-hidden="true"
              className="ml-0.5 inline-block h-[11px] w-[1.5px] animate-blink bg-[#b27600] align-middle"
            />
          </p>

          <div className="mt-4 rounded-xl border border-[#d8ad72] bg-[#fffaf1] p-3.5 sm:p-4">
            <p className="text-[11.5px] leading-[1.75] text-[#5f4b36] sm:text-[12px] lg:text-[13px]">
              Saya seorang mahasiswa yang senang membangun hal-hal dari nol.
              Saya percaya bahwa kode yang baik bisa menjadi solusi yang
              tertata — dan saya terus belajar untuk membuat itu terjadi.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="#projects"
              className="rounded-lg border border-[#2b2118] bg-[#2b2118] px-4 py-3 text-center text-[12px] font-bold text-white transition hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Lihat Projects
            </a>

            <a
              href="https://github.com/radiityy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#c59d68] bg-[#fffaf1] px-4 py-3 text-center text-[12px] font-bold text-[#2b2118] transition hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <FaGithub className="text-[14px]" />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="hidden flex-col gap-3 lg:flex"
        >
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#9a7b57]">
            Featured Project
          </p>

          <a
            href={
              featuredProject.repo !== "#"
                ? featuredProject.repo
                : featuredProject.live
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-[#d8ad72] bg-[#fff5df] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(93,65,32,0.1)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#c18425]">
                  {featuredProject.type}
                </p>

                <h3 className="mt-1.5 text-[18px] font-extrabold tracking-[-0.03em] text-[#2b2118]">
                  {featuredProject.title}
                </h3>
              </div>

              <span className="shrink-0 rounded-full border border-[#c9a372] bg-[#fffaf1] px-2.5 py-1 text-[9px] font-bold text-[#6e4b20]">
                {featuredProject.status}
              </span>
            </div>

            <p className="mt-3 text-[12px] leading-[1.7] text-[#6d563d]">
              {featuredProject.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#dfc39b] bg-[#fffaf1] px-2.5 py-1 text-[9px] font-semibold text-[#7a5b36]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-[#e5cda9] pt-3">
              {featuredProject.repo !== "#" && (
                <span className="text-[10px] font-bold text-[#9a7b57] transition group-hover:text-[#2b2118]">
                  GitHub →
                </span>
              )}

              {featuredProject.live !== "#" && (
                <span className="text-[10px] font-bold text-[#9a7b57] transition group-hover:text-[#2b2118]">
                  Live ↗
                </span>
              )}
            </div>
          </a>

          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 + index * 0.08 }}
              className="flex items-center justify-between rounded-xl border border-[#e0c49c] bg-[#fffaf1] px-4 py-3 transition hover:-translate-y-0.5 hover:bg-[#fff5df]"
            >
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#c18425]">
                  {project.type}
                </p>

                <p className="mt-0.5 text-[13px] font-extrabold tracking-[-0.03em] text-[#2b2118]">
                  {project.title}
                </p>
              </div>

              <div className="flex gap-1.5">
                {project.stack.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#dfc39b] bg-[#fff5df] px-2 py-0.5 text-[8px] font-semibold text-[#7a5b36]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}