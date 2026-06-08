"use client";

import { motion } from "framer-motion";
import BrowserFrame from "@/components/BrowserFrame";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

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