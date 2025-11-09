"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

interface Judge {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
}

const judges: Judge[] = [
    {
    name: "Mythri Kumar",
    role: "Founder & CEO, TimbuckDo",
    image: "/people/mythri.jpg",
    linkedin: "https://www.linkedin.com/in/mythri-kumar-hk/",
  },
  {
    name: "Ujwal Surampalli",
    role: "Founder, InterviewBuddy",
    image: "/people/ujwal.jpg",
    linkedin: "https://www.linkedin.com/in/haiujwal",
  },
  {
    name: "Himanshu Upreti",
    role: "Co-Founder, AI Palette",
    image: "/people/himanshu.jpg",
    linkedin: "https://www.linkedin.com/in/hupreti/",
  },
  {
    name: "Shreshth Mishra",
    role: "Co-Founder, Simple Energy",
    image: "/people/shreshth.jpg",
    linkedin: "https://www.linkedin.com/in/shreshth03/",
  },
  {
    name: "Sayanee Bhowmik",
    role: "Venture Capitalist",
    image: "/people/sayanee.jpg",
    linkedin: "https://www.linkedin.com/in/sayaneebhowmik",
  },
  {
    name: "Ashish Elias",
    role: "Venture Capitalist, PedalStart",
    image: "/people/ashish.jpg",
    linkedin: "https://www.linkedin.com/in/ashish-elias-b80536122",
  },
  {
    name: "Manish Dsouza",
    role: "Venture Capitalist",
    image: "/people/manish.jpg",
    linkedin: "https://www.linkedin.com/in/imanishdsouza",
  },

  {
    name: "Gaurav Srivastava",
    role: "Social Media Marketing Influencer",
    image: "/people/gaurav.jpg",
    instagram: "https://www.instagram.com/gaurav_speaks_",
  },
  {
    name: "Sharada Balaji",
    role: "Founder, NovoJuris Legal",
    image: "/people/sharda.jpg",
    linkedin: "https://www.linkedin.com/in/shardabalaji",
  },
  {
    name: "Naseer Sathyala",
    role: "Co-Founder, SundayGrids",
    image: "/people/naseer.jpg",
    linkedin: "https://www.linkedin.com/in/naseer-sathyala",
  },
  {
    name: "Achuth Raj",
    role: "Co-Founder, ChiefFin Advisors",
    image: "/people/achuth.jpg",
    linkedin: "https://www.linkedin.com/in/achuthraj",
  },
  {
    name: "Avijit Dutta",
    role: "Founder & Chief Designer, Nonlinear",
    image: "/people/avijit.jpg",
    linkedin: "https://www.linkedin.com/in/avijitdutta1/",
  },
  {
    name: "Ganesh Kumar L.",
    role: "CEO, iFocus Systec (India) Private Limited",
    image: "/people/ganesh.jpg",
    linkedin: "https://in.linkedin.com/in/ganeshkumarlaxminarayan",
  },
];

export function JudgesSection() {
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
          Our Esteemed Judges
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Meet the industry experts and leaders who will guide and evaluate our participants
        </motion.p>
      </div>

      {/* Judges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {judges.map((judge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group"
          >
            {judge.linkedin ? (
              <Link
                href={judge.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                    <Image
                      src={judge.image}
                      alt={judge.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    {/* Social Media Icon Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                      <div className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      {judge.instagram && (
                        <Link
                          href={judge.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          <Instagram className="w-5 h-5 text-white" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {judge.name}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {judge.role}
                    </p>
                  </div>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10" />
                </div>
              </Link>
            ) : (
              <div className="relative h-full bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <Image
                    src={judge.image}
                    alt={judge.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  {/* Social Media Icon Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    {judge.instagram && (
                      <Link
                        href={judge.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <Instagram className="w-5 h-5 text-white" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {judge.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {judge.role}
                  </p>
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
