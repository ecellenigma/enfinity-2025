"use client";

interface EventStatusChipProps {
  startDate: Date;
  endDate: Date;
}

export function EventStatusChip({ startDate, endDate }: EventStatusChipProps) {
  const now = new Date();

  let status, text, styles;

  if (now < startDate) {
    status = "upcoming";
    text = "Upcoming";
    styles =
      "bg-gradient-to-r from-purple-500/40 to-pink-500/40 border-pink-400/60 shadow-pink-400/25";
  } else if (now <= endDate) {
    status = "live";
    text = "Live Now";
    styles =
      "bg-gradient-to-r from-green-500/40 to-emerald-500/40 border-green-400/60 shadow-green-400/25";
  } else {
    status = "ended";
    text = "Ended";
    styles =
      "bg-gradient-to-r from-gray-500/40 to-slate-500/40 border-gray-400/60 shadow-gray-400/25";
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-md shadow-lg ${styles}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status === "upcoming"
            ? "bg-white animate-pulse"
            : status === "live"
            ? "bg-green-400 animate-pulse"
            : "bg-gray-400"
        }`}
      ></span>
      <span className="text-white font-bold">{text}</span>
    </span>
  );
}
