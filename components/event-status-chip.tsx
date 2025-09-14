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
    styles = "bg-white/5 border-white/20 text-white/90 shadow-sm";
  } else if (now <= endDate) {
    status = "live";
    text = "Live Now";
    styles = "bg-green-500/10 border-green-400/30 text-green-100 shadow-sm";
  } else {
    status = "ended";
    text = "Ended";
    styles = "bg-gray-500/10 border-gray-400/25 text-gray-300 shadow-sm";
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border backdrop-blur-sm ${styles}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "upcoming"
            ? "bg-white/80"
            : status === "live"
            ? "bg-green-400 animate-pulse"
            : "bg-gray-400/70"
        }`}
      ></span>
      <span className="font-medium tracking-wide">{text}</span>
    </span>
  );
}
