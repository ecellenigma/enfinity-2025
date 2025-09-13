"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-black/30 border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="logo-mark -mt-1" aria-hidden="true">
            ∞
          </span>
          <span className="gradient-text font-extrabold tracking-wide">ENFINITY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#events" className="nav-link">
            Events
          </Link>
          <Link href="#sponsors" className="nav-link">
            Sponsors
          </Link>
          <Link href="#faqs" className="nav-link">
            Contact
          </Link>
          <Link href="#register" className="btn-chip">
            Register
          </Link>
        </nav>
      </div>
    </header>
  )
}
