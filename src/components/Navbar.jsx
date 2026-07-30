"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-transparent bg-[#f8f3ea]/70 backdrop-blur-xl"
            : "border-b border-[#e7dac6] bg-[#f8f3ea]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          <Link
            href="/"
            className={`font-black tracking-[-0.06em] text-[#262017] transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl"
            }`}
          >
            radiityy<span className="text-[#b3672c]">.</span>
          </Link>

          <nav
            className={`hidden items-center gap-1 rounded-full border bg-[#fffaf2]/90 p-1 backdrop-blur-xl transition-all duration-300 md:flex ${
              isScrolled
                ? "border-[#d8c6a8] shadow-[0_10px_35px_rgba(79,58,32,0.12)]"
                : "border-[#e1d1b8]"
            }`}
          >
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-sm font-black transition ${
                    active
                      ? "bg-[#262017] text-white shadow-sm"
                      : "text-[#7d6b55] hover:bg-[#f0e3cf] hover:text-[#262017]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 rounded-full border border-[#e1d1b8] bg-[#fffaf2]/95 p-1 shadow-[0_12px_40px_rgba(79,58,32,0.16)] backdrop-blur-xl md:hidden">
        {links.map((link) => {
          const active = isActive(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[11px] font-bold transition ${
                active
                  ? "bg-[#262017] text-white"
                  : "text-[#7d6b55] hover:bg-[#f0e3cf]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}