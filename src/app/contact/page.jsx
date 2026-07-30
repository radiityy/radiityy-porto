import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description: "Contact Raditya Adin Nugroho.",
};

export default function ContactPage() {
  const links = [
    {
      label: "GitHub",
      value: `@${profile.handle}`,
      href: profile.github,
      icon: FaGithub,
      bg: "#262017",
      fg: "#ffffff",
    },
    {
      label: "Instagram",
      value: "Say hi there",
      href: profile.instagram,
      icon: FaInstagram,
      bg: "#fde3ef",
      fg: "#c2277a",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.linkedin,
      icon: FaLinkedinIn,
      bg: "#dbeafe",
      fg: "#0a66c2",
    },
  ].filter((item) => item.href && item.href !== "#");

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <section className="mb-12">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3672c]">
          Contact
        </p>

        <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-7xl">
          Let&apos;s talk.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d604f]">
          Got something to ask, share, or build? Send a message here.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-5 shadow-[0_18px_60px_rgba(79,58,32,0.06)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8b7658]">
              Find me on
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: link.bg, color: link.fg }}
                    className="group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"
                  >
                    <span
                      style={{ color: link.fg }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/25 text-xl transition group-hover:rotate-[-5deg] group-hover:scale-105"
                    >
                      <Icon />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-black">
                        {link.label}
                      </span>
                      <span className="mt-1 block truncate text-sm opacity-80">
                        {link.value}
                      </span>
                    </span>

                    <FaArrowRight className="text-sm opacity-70 transition group-hover:translate-x-1" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#bcd8c9] bg-[#edf8f1] p-5">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#bcd8c9]/70 blur-xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#bcd8c9] bg-[#fffaf2] text-[#b3672c]">
                <FaMapMarkerAlt />
              </div>

              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#477062]">
                Location
              </p>

              <p className="mt-2 text-sm font-bold leading-7 text-[#2f5549]">
                {profile.location}
              </p>
            </div>
          </div>
        </aside>

        <ContactForm />
      </section>
    </main>
  );
}