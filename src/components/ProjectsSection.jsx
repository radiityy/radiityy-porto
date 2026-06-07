"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-[#ead8bd] px-4 py-5 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[13px] font-extrabold tracking-[-0.03em]">
          Selected Projects
        </h2>
        <span className="text-[9px] font-semibold text-[#9a7b57]">
          {projects.length} projects
        </span>
      </div>

      <div className="mt-4 grid gap-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.repo !== "#" ? project.repo : project.live}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group block rounded-xl border border-[#d8ad72] bg-[#fff5df] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(93,65,32,0.1)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#c18425]">
                  {project.type}
                </p>

                <h3 className="mt-1.5 text-[16px] font-extrabold tracking-[-0.03em] text-[#2b2118]">
                  {project.title}
                </h3>
              </div>

              <span className="shrink-0 rounded-full border border-[#c9a372] bg-[#fffaf1] px-2.5 py-1 text-[9px] font-bold text-[#6e4b20]">
                {project.status}
              </span>
            </div>

            <p className="mt-3 text-[12px] leading-[1.7] text-[#6d563d]">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#dfc39b] bg-[#fffaf1] px-2.5 py-1 text-[9px] font-semibold text-[#7a5b36]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-[#e5cda9] pt-3">
              {project.repo !== "#" && (
                <span className="text-[10px] font-bold text-[#9a7b57] transition group-hover:text-[#2b2118]">
                  GitHub →
                </span>
              )}

              {project.live !== "#" && (
                <span className="text-[10px] font-bold text-[#9a7b57] transition group-hover:text-[#2b2118]">
                  Live ↗
                </span>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}