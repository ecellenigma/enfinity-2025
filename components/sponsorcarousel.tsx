"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  image: string;
  link?: string;
}


const sponsors: Sponsor[] = [
  {
    name: "Apollo",
    image: "/enigma_sponsors/apollo.jpg",
    link: "",
  },
  {
    name: "BigBoyToyz",
    image: "/enigma_sponsors/BBT Signature_Upgraded copy.jpg",
    link: "",
  },
  {
    name: "Pedal Start",
    image: "/enigma_sponsors/pedal_start.png",
    link: "",
  },
  {
    name: "Mycaptain",
    image: "/enigma_sponsors/Photoroom_20250305_145126.png",
    link: "",
  },
  {
    name: "Predator Energy",
    image: "/enigma_sponsors/predator-energy-logo.png",
    link: "",
  },
  {
    name: "TimBuckDo",
    image: "/enigma_sponsors/tim.png",
    link: "",
  },
  {
    name: "Unstop",
    image: "/enigma_sponsors/Unstop-Logo-Blue-Medium.png",
    link: "",
  },
  {
    name: "Vision",
    image: "/enigma_sponsors/vision.png",
    link: "",
  },
];
export default function Sponsorcarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollerInner = scroller.querySelector(".scroller-inner");
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section className="w-full py-16 flex flex-col items-center relative overflow-hidden" id="sponsorCarousel">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-12">
        SPONSORS
      </h2>

      <div
        ref={scrollerRef}
        className="scroller w-full max-w-7xl overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.div
          className="scroller-inner flex gap-8 items-center"
          animate={{
            x: [0, -(192 + 32) * sponsors.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-48 flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-background/10 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-background/20 transition-all duration-300 group"
            >
              <div className="w-full h-32 flex items-center justify-center">
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-white/80 text-sm font-bold text-center group-hover:text-white transition-colors">
                {sponsor.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}