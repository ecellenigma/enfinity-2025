"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  name: string;
  description: string;
  link: string;
  image: string;
}

const events: Event[] = [
  {
    name: "Ideathon 2024",
    description:
      "A 24-hour hackathon focused on innovative solutions to real-world problems. Teams collaborate intensively to design, prototype, and present their solutions.",
    link: "https://www.ideathon.com",
    image: "/image 1.png",
  },
  {
    name: "4X Marathon",
    description:
      "Explore, Expand, Exploit, and Exterminate in this thrilling strategic coding competition. Participants dive into multiple problem-solving domains that test skill and endurance.",
    link: "https://www.4xmarathon.com",
    image: "/mar.png",
  },
  {
    name: "Enfinity 2022",
    description:
      "Our flagship annual tech conference featuring renowned speakers, interactive workshops, and networking sessions that highlight the future of technology.",
    link: "https://www.enfinity.com",
    image: "/image 2.png",
  },
];

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % events.length);

  // auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full py-16 flex flex-col items-center relative overflow-visible">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
        PREVIOUS EVENTS
      </h2>

      {/* Carousel */}
      <div className="relative w-full flex items-center justify-center mt-48 sm:mt-60 lg:mt-64 px-4 sm:px-8">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 z-30 bg-background/20 backdrop-blur-md p-3 rounded-full hover:bg-background/30 transition-all duration-200 border border-white/10 hover:border-white/20"
          aria-label="Previous event"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Cards */}
        <div className="relative w-full flex justify-center items-center overflow-visible">
          {events.map((event, index) => {
            let offset = index - currentIndex;
            if (offset < -1) offset += events.length;
            if (offset > 1) offset -= events.length;

            const isActive = offset === 0;

            return (
              <motion.a
                key={index}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-1/2 left-1/2 cursor-pointer rounded-xl overflow-hidden bg-background/10 backdrop-blur-lg border border-white/10 w-64 sm:w-80 lg:w-96 h-72 sm:h-80 flex flex-col transition-shadow duration-300 ${
                  isActive ? "" : "shadow-lg shadow-black/20"
                }`}
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  zIndex: isActive ? 20 : 10,
                }}
                animate={{
                  x: offset * (window.innerWidth < 640 ? 220 : 320),
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                  duration: 0.6,
                }}
              >
                {/* Image band */}
                <div className="w-full h-24 sm:h-28 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center p-4 overflow-hidden">
                  <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl mb-3 gradient-text">
                    {event.name}
                  </h3>
                  <motion.p
                    className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }
                    }
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {event.description}
                  </motion.p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 z-30 bg-background/20 backdrop-blur-md p-3 rounded-full hover:bg-background/30 transition-all duration-200 border border-white/10 hover:border-white/20"
          aria-label="Next event"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
}
