import { coreStack } from "@/data/techstack";

export default function TechMarquee() {
  const track = [...coreStack, ...coreStack];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 will-change-transform">
        {track.map((item, i) => {
          const Icon = item.icon;

          return (
            <span
              key={`${item.name}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-[#dfcfb5] bg-[#fffaf2] px-4 py-2 text-sm font-bold text-[#4f4232] shadow-[0_4px_14px_rgba(79,58,32,0.05)]"
            >
              <Icon style={{ color: item.color }} className="text-base" />
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
