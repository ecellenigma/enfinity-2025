"use client";

import { useEffect, useState } from "react";

export function OrbitScene() {
  const [scrollRotation, setScrollRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Convert scroll position to rotation degrees (adjust multiplier for speed)
      const rotation = scrollY * 0.2;
      setScrollRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative aspect-[4/3] max-w-[520px] mx-auto">
      {/* Orbital paths */}
      <div
        className="absolute inset-0 rounded-full ring-1 ring-white/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-[6%] rounded-full ring-1 ring-white/8"
        aria-hidden="true"
      />
      <div
        className="absolute inset-[12%] rounded-full ring-1 ring-white/6"
        aria-hidden="true"
      />
      <div
        className="absolute inset-[18%] rounded-full ring-1 ring-white/4"
        aria-hidden="true"
      />

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-24 md:size-28 rounded-full glow-orb animate-pulse" />
      </div>

      {/* Orbiting orbs - each with different rotation speeds */}
      <div
        className="absolute inset-0"
        style={{ transform: `rotate(${scrollRotation}deg)` }}
      >
        <Orb className="absolute -top-3 left-10" size={80} />
      </div>

      <div
        className="absolute inset-0"
        style={{ transform: `rotate(${scrollRotation * 1.5}deg)` }}
      >
        <Orb className="absolute top-[18%] right-[8%]" size={110} />
      </div>

      <div
        className="absolute inset-0"
        style={{ transform: `rotate(${scrollRotation * 0.7}deg)` }}
      >
        <Orb className="absolute bottom-[14%] left-[14%]" size={95} />
      </div>
    </div>
  );
}

function Orb({
  size = 100,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`orb ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
