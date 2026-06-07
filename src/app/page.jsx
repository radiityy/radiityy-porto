"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

function BrowserFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#b9925d] bg-[#fbf6ed] shadow-[0_20px_60px_rgba(93,65,32,0.12)]">
      <div className="flex items-center gap-2 border-b border-[#e3d1b7] bg-[#f7ead8] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e96d5b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e7b85d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6fbf73]" />

        <div className="ml-3 flex-1 rounded-md border border-[#e2c9a5] bg-[#fffaf2] px-3 py-1 text-[10px] text-[#9a7b57]">
          radiityy.vercel.app
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-[#ead8bd] px-4 py-3">
      <a href="#" className="text-[15px] font-extrabold tracking-[-0.04em]">
        radiityy.
      </a>

      <nav className="flex items-center gap-3 text-[10px] font-semibold text-[#7b644b]">
        <a className="transition hover:text-[#2b2118]" href="#home">
          Home
        </a>
        <a className="transition hover:text-[#2b2118]" href="#projects">
          Projects
        </a>
        <a className="transition hover:text-[#2b2118]" href="#stack">
          Stack
        </a>
        <a className="transition hover:text-[#2b2118]" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1e8] px-4 py-8 text-[#2b2118]">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto w-full max-w-[430px] sm:max-w-[640px] lg:max-w-[860px]"
      >
        <BrowserFrame>
          <Navbar />
          <HeroSection />
          <ProjectsSection />
          <TechStackSection />
        </BrowserFrame>
        <ContactSection />
      </motion.section>
    </main>
  );
}