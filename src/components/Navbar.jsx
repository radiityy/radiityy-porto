"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e7dac6] bg-[#f8f3ea]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link
            href="/"
            className="text-lg font-black tracking-[-0.05em] text-[#262017]"
          >
            radiityy<span className="text-[#53756c]">.</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[#e1d1b8] bg-[#fffaf2] p-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? "bg-[#262017] text-white"
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
          const active = pathname === link.href;

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