"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/techstack";

export default function TechStackSection() {
  return (
    <section id="stack" className="border-t border-[#ead8bd] px-4 py-5 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[13px] font-extrabold tracking-[-0.03em]">
          Tech Stack
        </h2>

        <span className="text-[9px] font-semibold text-[#9a7b57]">
          tools saya
        </span>
      </div>

      <div className="mt-4 space-y-4">
        {techStack.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
          >
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b27a22]">
              {group.category}
            </p>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="rounded-xl border border-[#e0c49c] bg-[#fffaf1] p-3 transition hover:-translate-y-0.5 hover:bg-[#fff4d9]"
                  >
                    <Icon className="text-[20px] text-[#80551c]" />
                    <p className="mt-2 text-[10px] font-bold tracking-[-0.02em]">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}