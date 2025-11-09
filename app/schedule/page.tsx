"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Clock, MapPin, Users, Calendar, Sparkles, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import scheduleData from "@/schedule.json";

export default function SchedulePage() {
  // Extract special events highlights
  const specialHighlights = [
    {
      title: scheduleData.days[0].tracks[1].events[0].activity,
      time: scheduleData.days[0].tracks[1].events[0].time,
      date: scheduleData.days[0].date,
      location: scheduleData.days[0].tracks[1].events[0].location,
      speaker: scheduleData.days[0].tracks[1].events[0].judgesGuests[0] || "Speaker TBA",
      description: scheduleData.days[0].tracks[1].events[0].description,
      icon: Star,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: scheduleData.days[1].tracks[1].events[0].activity,
      time: scheduleData.days[1].tracks[1].events[0].time,
      date: scheduleData.days[1].date,
      location: scheduleData.days[1].tracks[1].events[0].location,
      speaker: scheduleData.days[1].tracks[1].events[0].judgesGuests[0] || "Speaker TBA",
      description: scheduleData.days[1].tracks[1].events[0].description,
      icon: Star,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: scheduleData.overnightEvent.name,
      time: "12:00 AM - 7:00 AM",
      date: scheduleData.days[1].date,
      location: "Idea Lab / MV Auditorium",
      speaker: "Overnight Challenge",
      description: "An intensive overnight business marathon where teams work through the night to solve real-world business cases.",
      icon: Zap,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <div className="fixed pointer-events-none w-screen h-screen inset-0 z-10">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="nebula nebula-3" />
      </div>
      <SiteHeader />
      <main className="min-h-screen text-white relative overflow-hidden pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white/90">
                November 10-11, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Event Schedule
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to <span className="text-purple-400 font-semibold">{scheduleData.eventName}</span>
            </p>
          </motion.div>

          {/* Day-wise Full Timeline */}
          <div className="space-y-20 mb-24">
            {scheduleData.days.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              >
                {/* Day Header */}
                <div className="relative mb-12">
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl opacity-50" />
                      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-2xl shadow-2xl border border-white/20">
                        <div className="text-sm font-medium text-white/80 mb-1">Day {day.day}</div>
                        <div className="text-2xl font-bold text-white">{day.date}</div>
                      </div>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
                  </div>
                </div>

                {/* Special Event Section for Day 2 - At the beginning */}
                {day.day === 2 && (
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="w-6 h-6 text-orange-400" />
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Special Event - {scheduleData.overnightEvent.name}
                      </h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-orange-400/30 to-transparent" />
                    </div>

                    <div className="relative space-y-6 pl-8 md:pl-12 mb-12">
                      <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500" />

                      {scheduleData.overnightEvent.timeline.map((event: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="relative"
                        >
                          <div className="absolute -left-8 md:-left-12 top-6">
                            <div className="relative">
                              <div className="absolute inset-0 bg-orange-500 rounded-full blur-md animate-pulse" />
                              <div className="relative w-4 h-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white" />
                            </div>
                          </div>

                          <div className="group relative bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-md border border-orange-400/30 rounded-2xl p-6 md:p-8 hover:border-orange-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative">
                              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm rounded-full mb-4 shadow-lg">
                                <Clock className="w-4 h-4 text-white" />
                                <span className="text-sm font-semibold text-white">
                                  {event.timing}
                                </span>
                              </div>

                              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                                {event.activity}
                              </h4>

                              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                                {event.description}
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                                <div className="flex items-start gap-3 flex-1">
                                  <div className="p-2 bg-orange-500/20 rounded-lg">
                                    <MapPin className="w-5 h-5 text-orange-400" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-medium text-white/50 mb-1">
                                      Location
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                      {event.location}
                                    </div>
                                  </div>
                                </div>

                                {event.judgesGuests && event.judgesGuests.length > 0 && (
                                  <div className="flex items-start gap-3 flex-1">
                                    <div className="p-2 bg-red-500/20 rounded-lg">
                                      <Users className="w-5 h-5 text-red-400" />
                                    </div>
                                    <div>
                                      <div className="text-xs font-medium text-white/50 mb-1">
                                        Speakers/Judges
                                      </div>
                                      <div className="text-sm font-medium text-white">
                                        {event.judgesGuests.join(", ")}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Events Timeline */}
                <div className="relative space-y-6 pl-8 md:pl-12">
                  {/* Timeline Line */}
                  <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

                  {/* Combine all tracks */}
                  {day.tracks.map((track) => 
                    track.events.map((event, eventIdx) => (
                      <motion.div
                        key={`${track.trackName}-${eventIdx}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: eventIdx * 0.05 }}
                        className="relative"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute -left-8 md:-left-12 top-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 rounded-full blur-md animate-pulse" />
                            <div className="relative w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white" />
                          </div>
                        </div>

                        {/* Event Card */}
                        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                          {/* Gradient Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative">
                            {/* Badge for TED Talks */}
                            {track.trackName === "TED Talks" && (
                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/40 rounded-full mb-3 text-xs font-semibold text-blue-300">
                                <Star className="w-3 h-3" />
                                TED Talk
                              </div>
                            )}

                            {/* Time Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm rounded-full mb-4 shadow-lg">
                              <Clock className="w-4 h-4 text-white" />
                              <span className="text-sm font-semibold text-white">
                                {event.time}
                              </span>
                            </div>

                            {/* Event Title */}
                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                              {event.activity}
                            </h4>

                            {/* Description */}
                            {event.description && (
                              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                                {event.description}
                              </p>
                            )}

                            {/* Event Meta */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                              {/* Location */}
                              <div className="flex items-start gap-3 flex-1">
                                <div className="p-2 bg-pink-500/20 rounded-lg">
                                  <MapPin className="w-5 h-5 text-pink-400" />
                                </div>
                                <div>
                                  <div className="text-xs font-medium text-white/50 mb-1">
                                    Location
                                  </div>
                                  <div className="text-sm font-medium text-white">
                                    {event.location}
                                  </div>
                                </div>
                              </div>

                              {/* Judges/Guests */}
                              {event.judgesGuests && event.judgesGuests.length > 0 && (
                                <div className="flex items-start gap-3 flex-1">
                                  <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <Users className="w-5 h-5 text-purple-400" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-medium text-white/50 mb-1">
                                      Speakers/Judges
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                      {event.judgesGuests.join(", ")}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Events Highlights Section - After Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Special Events Highlights
                </h2>
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-white/70 text-lg">
                Don't miss these exclusive sessions!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative h-full bg-gradient-to-br ${highlight.gradient}/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300 hover:shadow-2xl`}>
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-xl mb-4 shadow-lg`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {highlight.description}
                    </p>

                    {/* Meta */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar className="w-4 h-4" />
                        <span>{highlight.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="w-4 h-4" />
                        <span>{highlight.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4" />
                        <span>{highlight.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Users className="w-4 h-4" />
                        <span>{highlight.speaker}</span>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10 blur-xl`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join Us?
              </h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                Register now to secure your spot at Enfinity 2025 and be part of this amazing experience!
              </p>
              <a
                href="https://unstop.com/college-fests/enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-407327"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-gradient px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
