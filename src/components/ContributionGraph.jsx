"use client";

const LEVEL_COLORS = ["#f0e6d2", "#e7c892", "#d9a558", "#c07f2e", "#b3672c"];

function groupByWeek(contributions) {
  const weeks = [];
  let current = [];

  contributions.forEach((day, i) => {
    current.push(day);
    const date = new Date(day.date);
    if (date.getDay() === 6 || i === contributions.length - 1) {
      weeks.push(current);
      current = [];
    }
  });

  return weeks;
}

export default function ContributionGraph({ contributions }) {
  const weeks = groupByWeek(contributions);

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-[3px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.date} — ${day.count} contribution${
                  day.count === 1 ? "" : "s"
                }`}
                className="h-[11px] w-[11px] rounded-[3px]"
                style={{ backgroundColor: LEVEL_COLORS[day.level] }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-[#8b7658]">
        Less
        {LEVEL_COLORS.map((color) => (
          <span
            key={color}
            className="h-[11px] w-[11px] rounded-[3px]"
            style={{ backgroundColor: color }}
          />
        ))}
        More
      </div>
    </div>
  );
}
