import { techStack } from "@/data/techstack";

export const metadata = {
  title: "Stack",
  description: "Tech stack used by Raditya Adin Nugroho.",
};

const coreStackNames = ["Laravel", "Next.js", "Vue.js", "Go", "MySQL"];

function getStackItem(name) {
  return techStack
    .flatMap((group) => group.items)
    .find((item) => item.name === name);
}

export default function StackPage() {
  const coreStack = coreStackNames
    .map((name) => getStackItem(name))
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <section className="mb-12">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3672c]">
          Tech Stack
        </p>

        <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-7xl">
          Tools I use.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d604f]">
          A collection of technologies I&apos;ve used while learning and
          building web projects.
        </p>
      </section>

      <section className="mb-14 rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-5 shadow-[0_18px_60px_rgba(79,58,32,0.06)] md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8b7658]">
              Core Stack
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-[#262017]">
              My current main tools.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#6d604f]">
            The stack I use most often for building backend APIs and fullstack
            web applications.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {coreStack.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className={`group relative overflow-hidden rounded-[1.5rem] border p-5 transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(79,58,32,0.1)] ${
                  index % 2 === 0
                    ? "border-[#bcd8c9] bg-[#edf8f1]"
                    : "border-[#dfcfb5] bg-[#f8f3ea]"
                }`}
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/50 blur-xl" />

                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8c6a8] bg-[#fffaf2] text-2xl text-[#b3672c] transition group-hover:rotate-[-6deg] group-hover:scale-105">
                    <Icon />
                  </span>

                  <p className="mt-5 text-lg font-black tracking-[-0.04em] text-[#262017]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs font-bold text-[#7a674f]">
                    frequently used
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-12">
        {techStack.map((group, index) => (
          <div
            key={group.category}
            className="grid gap-6 border-t border-[#e3d3bb] pt-8 md:grid-cols-[220px_1fr]"
          >
            <div>
              <span className="text-xs font-black text-[#b3672c]">
                0{index + 1}
              </span>

              <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#262017]">
                {group.category}
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-7 text-[#6d604f]">
                {group.note}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-2xl border border-[#dfcfb5] bg-[#fffaf2] px-4 py-4 text-[#262017] transition hover:-translate-y-1 hover:border-[#b3672c] hover:bg-[#f8efe1] hover:shadow-[0_14px_35px_rgba(79,58,32,0.08)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e3d3bb] bg-[#f8f3ea] text-xl text-[#b3672c] transition group-hover:rotate-[-4deg] group-hover:scale-105 group-hover:bg-[#edf8f1]">
                      <Icon />
                    </span>

                    <span className="text-sm font-black leading-tight text-[#4f4232]">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}