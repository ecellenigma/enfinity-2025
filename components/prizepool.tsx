"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { IndianRupee } from "lucide-react";

export function Prizepool() {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, 100000, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `₹${Math.round(value).toLocaleString("en-IN")}+`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <p
      ref={ref}
      className="text-6xl md:text-8xl font-bold  mt-4"
    >
      ₹0+
    </p>
  );
}
