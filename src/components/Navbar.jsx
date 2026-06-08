export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-[#ead8bd] px-4 py-3">
      <a
        href="#"
        className="text-[15px] font-extrabold tracking-[-0.04em] transition hover:opacity-70"
      >
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