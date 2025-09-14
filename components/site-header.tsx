"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact Us", href: "#contact" },
    { name: "Register", href: "#register", special: true },
  ];

  const containerVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 backdrop-blur-xl bg-black/40 shadow-lg">
        {/* Logo */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg neon-glow">
          LOGO
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex ml-4 space-x-6 items-center">
          {navLinks.map((link) =>
            link.special ? (
              <Link
                key={link.name}
                href={link.href}
                className="btn-gradient px-4 py-2 rounded-full text-white text-sm md:text-base neon-glow"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link text-white/80 hover:text-white text-sm md:text-base"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden ml-auto text-white neon-glow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden w-full glass backdrop-blur-xl bg-black/40 flex flex-col items-center py-6 space-y-4 border-t border-white/20 shadow-neon"
          >
            {navLinks.map((link) =>
              link.special ? (
                <motion.div key={link.name} variants={itemVariants} className="w-full flex justify-center">
                  <Link
                    href={link.href}
                    className="btn-gradient px-6 py-3 rounded-full text-white text-lg neon-glow"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.div key={link.name} variants={itemVariants} className="w-full flex justify-center">
                  <Link
                    href={link.href}
                    className="nav-link text-white/80 hover:text-white text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .neon-glow {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 20px #a73cff,
            0 0 30px #e83366,
            0 0 40px #a73cff;
        }

        .shadow-neon {
          box-shadow:
            0 0 10px #a73cff,
            0 0 20px #e83366,
            0 0 30px #a73cff;
        }

        .glass {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
        }
      `}</style>
    </header>
  );
}