"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { career } from "@/data/career";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const collagePositions = [
  { pos: "left-0 top-4 z-10", rotate: -6 },
  { pos: "left-[26%] top-16 z-20", rotate: 4 },
  { pos: "left-[52%] top-0 z-10", rotate: -3 },
  { pos: "left-[74%] top-20 z-0", rotate: 5 },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-14"
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3672c]">
          About
        </p>

        <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-7xl">
          A bit about me.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#6d604f]">
          I&apos;m {profile.fullName}, a student at {profile.university}. I
          enjoy building fullstack web projects and lean toward backend
          development — REST APIs, authentication flows, and the logic that
          holds an app together, using Laravel, Go, Next.js, Vue.js, and
          MySQL.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-16"
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8b7658]">
          Career
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-[#262017]">
          My professional journey.
        </h2>

        <div className="mt-7 space-y-4">
          {career.map((item) => (
            <div
              key={item.role + item.place}
              className="flex flex-col gap-4 rounded-[1.8rem] border border-[#dfcfb5] bg-[#fffaf2] p-6 shadow-[0_18px_60px_rgba(79,58,32,0.06)] sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
                <p className="text-lg font-black tracking-[-0.03em] text-[#262017]">
                  {item.role}
                </p>
                <p className="mt-1 text-sm font-bold text-[#b3672c]">
                  {item.place}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#6d604f]">
                  {item.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                <span className="rounded-full border border-[#dfcfb5] bg-[#f8f3ea] px-3 py-1 text-[11px] font-bold text-[#7a674f]">
                  {item.period}
                </span>
                <span className="rounded-full border border-[#bcd8c9] bg-[#edf8f1] px-3 py-1 text-[11px] font-bold text-[#477062]">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-8"
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8b7658]">
          Things I&apos;ve built
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-[#262017]">
          A quick look at my projects.
        </h2>

        <div className="relative mt-10 h-[340px] sm:h-[300px]">
          {projects.map((project, index) => {
            const { pos, rotate } = collagePositions[index % collagePositions.length];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className={`absolute w-[46%] overflow-hidden rounded-[1.4rem] border border-[#dfcfb5] bg-[#fffaf2] shadow-[0_18px_40px_rgba(79,58,32,0.14)] sm:w-[240px] ${pos}`}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
                <p className="px-4 py-3 text-sm font-black tracking-[-0.03em] text-[#262017]">
                  {project.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </main>
  );
}
