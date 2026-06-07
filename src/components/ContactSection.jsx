"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-[#ead8bd] px-4 py-5 sm:px-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[13px] font-extrabold tracking-[-0.03em]">
          Let&apos;s Connect
        </h2>

        <span className="text-[9px] font-semibold text-[#9a7b57]">
          kontak
        </span>
      </div>

      <div className="mt-4 rounded-xl border border-[#d8ad72] bg-[#fffaf1] p-4">
        <p className="text-[12px] leading-[1.75] text-[#5f4b36]">
          Terbuka untuk diskusi project, kolaborasi, atau sekadar ngobrol soal
          web development dan proses belajar membangun produk digital.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-xl border border-[#e0c49c] bg-[#fffaf1] p-3 transition hover:-translate-y-0.5 hover:bg-[#fff4d9]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#dec399] bg-[#f7ead8]">
                <Icon className="text-[15px] text-[#80551c]" />
              </div>

              <p className="mt-3 text-[11px] font-extrabold">
                {social.label}
              </p>

              <p className="mt-1 truncate text-[9px] font-medium text-[#7b644b]">
                {social.value}
              </p>
            </motion.a>
          );
        })}
      </div>

      <p className="mt-5 border-t border-[#ead8bd] pt-4 text-center text-[10px] font-medium text-[#8a7358]">
        © 2026 radiityy. Built with Next.js, Tailwind CSS, and Vercel.
      </p>
    </section>
  );
}