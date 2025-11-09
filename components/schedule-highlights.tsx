"use client";

import Link from "next/link";
import { Clock, MapPin, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import scheduleData from "@/schedule.json";

export function ScheduleHighlights() {
  // Extract key events from the schedule
  const keyEvents = [
    {
      title: "Inauguration Ceremony",
      time: "9:45 AM - 10:30 AM",
      date: "November 10th",
      location: "MV Auditorium",
      description: "Official start of the summit with lamp lighting and welcome address.",
      gradient: "from-purple-500/20 to-blue-500/20",
      borderGradient: "from-purple-500/50 to-blue-500/50",
    },
    {
      title: "Keynote Address",
      time: "10:30 AM - 11:30 AM",
      date: "November 10th",
      location: "MV Auditorium",
      description: "An inspiring talk by our esteemed keynote speaker.",
      gradient: "from-pink-500/20 to-purple-500/20",
      borderGradient: "from-pink-500/50 to-purple-500/50",
    },
    {
      title: "Reverse Shark Tank",
      time: "12:30 PM - 2:30 PM",
      date: "November 10th",
      location: "ARJ Seminar Hall",
      description: "Budding entrepreneurs grill a panel of investors.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500/50 to-cyan-500/50",
    },
    {
      title: "Biz Marathon",
      time: "12:00 AM - 7:00 AM",
      date: "November 10th - 11th",
      location: "Idea Lab/Archi Seminar Lab",
      description: "Overnight business challenge and case study competition.",
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500/50 to-red-500/50",
    },
    {
      title: "Boardroom",
      time: "2:30 PM - 5:00 PM",
      date: "November 11th",
      location: "ARCHI Seminar Hall",
      description: "A simulated high-stakes corporate meeting with crisis scenarios.",
      gradient: "from-cyan-500/20 to-teal-500/20",
      borderGradient: "from-cyan-500/50 to-teal-500/50",
    },
    {
      title: "Panel Discussion",
      time: "5:00 PM - 7:00 PM",
      date: "November 11th",
      location: "BBC",
      description: "Panel Discussion with industry experts and leaders.",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderGradient: "from-violet-500/50 to-purple-500/50",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold gradient-text mb-4"
        >
          Event Schedule
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Mark your calendars for these amazing events
        </motion.p>
      </div>

      {/* Key Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {keyEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div
              className={`h-full bg-gradient-to-br ${event.gradient} border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-white/30 transition-all duration-300 hover:scale-[1.02]`}
            >
              {/* Event Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Clock className="w-4 h-4 text-pink-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${event.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* View Full Schedule Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group"
        >
          View Full Schedule
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm text-center"
        >
          <div className="text-4xl font-bold gradient-text mb-2">2</div>
          <p className="text-white/70">Days of Innovation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm text-center"
        >
          <div className="text-4xl font-bold gradient-text mb-2">15+</div>
          <p className="text-white/70">Events & Sessions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm text-center"
        >
          <div className="text-4xl font-bold gradient-text mb-2">10+</div>
          <p className="text-white/70">Industry Experts</p>
        </motion.div>
      </div>
    </section>
  );
}

