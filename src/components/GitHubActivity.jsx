import React, { useState, useEffect, useMemo } from "react";

const API_URL =
  "https://github-contributions-api.jogruber.de/v4/KaushikKC?y=last";

// GitHub contribution green theme (level 0 = none, 1–4 = light to dark green)
const levelColors = [
  "#ebedf0", // 0 - no contributions
  "#9be9a8", // 1
  "#40c463", // 2
  "#30a14e", // 3
  "#216e39", // 4
];

function GitHubActivity() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const { grid, startDate, weeks } = useMemo(() => {
    if (!data?.contributions?.length)
      return { grid: null, startDate: null, weeks: 53 };
    const list = data.contributions;
    const start = new Date(list[0].date);
    const weeksCount = 53;
    const rows = 7;
    const g = Array(rows)
      .fill(null)
      .map(() => Array(weeksCount).fill(0));
    list.forEach(({ date, level }) => {
      const d = new Date(date);
      const daysSinceStart = Math.round((d - start) / (24 * 60 * 60 * 1000));
      const weekIndex = Math.floor(daysSinceStart / 7);
      const dayOfWeek = d.getDay();
      if (weekIndex >= 0 && weekIndex < weeksCount) {
        g[dayOfWeek][weekIndex] = Math.max(g[dayOfWeek][weekIndex], level);
      }
    });
    return { grid: g, startDate: start, weeks: weeksCount };
  }, [data]);

  // Month labels for the first week of each month (above the chart)
  const monthLabels = useMemo(() => {
    if (!startDate || weeks !== 53) return [];
    const labels = [];
    let lastMonth = -1;
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    for (let w = 0; w < weeks; w++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + w * 7);
      const m = d.getMonth();
      if (m !== lastMonth) {
        lastMonth = m;
        labels[w] = monthNames[m];
      } else {
        labels[w] = "";
      }
    }
    return labels;
  }, [startDate, weeks]);

  if (loading) {
    return (
      <div
        id="github"
        className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
      >
        <h2 className="text-2xl font-bold mb-5">GitHub activity</h2>
        <p className="text-black/70">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        id="github"
        className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
      >
        <h2 className="text-2xl font-bold mb-5">GitHub activity</h2>
        <p className="text-black/70">Could not load contribution data.</p>
        <a
          href="https://github.com/KaushikKC"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mt-2 inline-block"
        >
          View GitHub profile
        </a>
      </div>
    );
  }

  const total = data?.total?.lastYear ?? 0;

  return (
    <div
      id="github"
      className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
    >
      <h2 className="text-2xl font-bold mb-2">GitHub activity</h2>
      <p className="text-base text-black/70 mb-5">
        <a
          href="https://github.com/KaushikKC"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          KaushikKC
        </a>
        {" — "}
        {total.toLocaleString()} contributions in the last year
      </p>
      {grid && (
        <div className="w-full">
          {/* Month labels row — same 53 columns so labels align with weeks */}
          <div
            className="grid gap-[2px] mb-1 text-xs text-black/60"
            style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
          >
            {monthLabels.map((label, i) => (
              <div key={i} className="truncate text-left pt-0.5">
                {label}
              </div>
            ))}
          </div>
          {/* Contribution grid — fits container width, no horizontal scroll */}
          <div
            className="grid gap-[2px] w-full"
            style={{
              gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
              gridAutoRows: "1fr",
              aspectRatio: "53 / 7",
            }}
            role="img"
            aria-label="GitHub contribution graph: last year"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) =>
              Array(weeks)
                .fill(0)
                .map((_, weekIndex) => {
                  const level = grid[dayOfWeek][weekIndex] ?? 0;
                  const color = levelColors[Math.min(level, 4)];
                  return (
                    <div
                      key={`${dayOfWeek}-${weekIndex}`}
                      className="rounded-sm min-w-0 min-h-0"
                      style={{ backgroundColor: color }}
                      title={`Level ${level}`}
                    />
                  );
                }),
            )}
          </div>
          <div className="flex gap-4 mt-3 text-xs text-black/60 items-center">
            <span>Less</span>
            <div className="flex gap-0.5 items-center">
              {levelColors.map((color, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default GitHubActivity;
