"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Ideathon",
    description: "A platform for innovative ideas and creative solutions.",
    link: "https://example.com/ideathon",
  },
  {
    title: "Marathon",
    description: "Endurance and innovation combined in one thrilling event.",
    link: "https://example.com/marathon",
  },
  {
    title: "Enfinity",
    description: "The flagship conclave celebrating infinite innovation.",
    link: "https://example.com/enfinity",
  },
];

export default function EventCarousel() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="w-full relative flex flex-col items-center py-16 min-h-[38rem] overflow-visible">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 gradient-text">
        Previous Events
      </h2>

      <div className="relative w-full max-w-6xl flex justify-center items-center overflow-visible min-h-[30rem]">
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 border border-white/20 p-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(232,51,102,0.3)] transition"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 border border-white/20 p-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(232,51,102,0.3)] transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <Swiper
          modules={[Pagination]}
          centeredSlides
          loop
          slidesPerView="auto"
          spaceBetween={-60} 
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center w-[20rem] sm:w-[22rem] md:w-[28rem] overflow-visible"
            >
              {({ isActive }) => (
                <motion.div
                  className="relative w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 flex flex-col items-center justify-center text-center shadow-[0_0_25px_rgba(232,51,102,0.15)] overflow-visible"
                  animate={{
                    scale: isActive ? 1.08 : 0.85,
                    zIndex: isActive ? 20 : 10,
                    opacity: isActive ? 1 : 0.6,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-white">{event.title}</h3>

                  {/*only when active */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
                    className="mt-4 flex flex-col items-center"
                  >
                    <div className="h-0.5 w-16 my-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full" />
                    <p className="text-white/70 text-base">{event.description}</p>
                    <Link
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 shadow-md hover:shadow-lg transition"
                    >
                      View Website
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}