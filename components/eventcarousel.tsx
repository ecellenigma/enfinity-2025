"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

  return (
    <section className="w-full py-16 flex flex-col items-center relative overflow-visible">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">
        PREVIOUS EVENTS
      </h2>

      {/* Carousel */}
      <div className="relative w-full flex items-center justify-center mt-60 sm:mt-64">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute -left-2 sm:-left-10 z-20 bg-black/30 backdrop-blur-md p-3 sm:p-4 rounded-full hover:bg-black/40 transition text-xl sm:text-2xl text-white"
        >
          &lt;
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
                className="absolute top-1/2 left-1/2 cursor-pointer rounded-xl overflow-hidden bg-black/30 backdrop-blur-lg shadow-[0_0_40px_rgba(167,60,255,0.35),0_0_60px_rgba(232,51,102,0.25)] w-72 sm:w-[28rem] md:w-[32rem] h-[380px] flex flex-col"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                  zIndex: isActive ? 20 : 10,
                }}
                animate={{
                  x: offset * 420,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.8,
                }}
              >
                {/* Image band */}
                <div className="w-full h-28 sm:h-32 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center p-4 sm:p-6 overflow-hidden">
                  <h3 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl mb-3 gradient-text">
                    {event.name}
                  </h3>
                  <motion.p
                    className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
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
          className="absolute -right-2 sm:-right-10 z-20 bg-black/30 backdrop-blur-md p-3 sm:p-4 rounded-full hover:bg-black/40 transition text-xl sm:text-2xl text-white"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}