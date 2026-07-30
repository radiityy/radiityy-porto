import { profile } from "@/data/profile";
import ContributionGraph from "@/components/ContributionGraph";

export const metadata = {
  title: "Dashboard",
  description: "GitHub contribution activity of Raditya Adin Nugroho.",
};

export const revalidate = 21600; // refresh every 6 hours

async function getContributions(username) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate } }
    );

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

function getUsernameFromUrl(url) {
  return url.replace(/\/$/, "").split("/").pop();
}

export default async function DashboardPage() {
  const username = getUsernameFromUrl(profile.github);
  const data = await getContributions(username);
  const contributions = data?.contributions ?? [];

  const total = contributions.reduce((sum, day) => sum + day.count, 0);
  const best = contributions.reduce((max, day) => Math.max(max, day.count), 0);
  const last7 = contributions.slice(-7).reduce((sum, day) => sum + day.count, 0);
  const avg = contributions.length
    ? (total / contributions.length).toFixed(1)
    : "0";

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 pb-28 md:py-16">
      <section className="mb-10">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3672c]">
          Dashboard
        </p>
        <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.07em] text-[#262017] md:text-7xl">
          GitHub activity.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d604f]">
          My contribution activity from the last year on GitHub, pulled
          straight from @{username}.
        </p>
      </section>

      <section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total", value: total },
          { label: "This week", value: last7 },
          { label: "Best day", value: best },
          { label: "Average / day", value: avg },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-[#dfcfb5] bg-[#fffaf2] p-5 shadow-[0_14px_35px_rgba(79,58,32,0.06)]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8b7658]">
              {stat.label}
            </p>
            <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#262017]">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-5 shadow-[0_18px_60px_rgba(79,58,32,0.06)] md:p-7">
        {contributions.length ? (
          <ContributionGraph contributions={contributions} />
        ) : (
          <p className="text-sm text-[#6d604f]">
            Couldn&apos;t load contribution data right now — try refreshing
            in a bit.
          </p>
        )}
      </section>
    </main>
  );
}
