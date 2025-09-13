"use client"

import { useEffect, useRef, useState } from "react"

const items = [
  { title: "TechFest 2022" },
  { title: "NovaCon 2023" },
  { title: "Cosmos Summit" },
  { title: "Quantum Jam" },
  { title: "Orbit Expo" },
]

export function PreviousEvents() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % items.length
        el.scrollTo({
          left: next * (el.clientWidth * 0.7 + 24),
          behavior: "smooth",
        })
        return next
      })
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="space-y-5">
      <div ref={scrollerRef} className="relative w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-1">
          {items.map((item, i) => (
            <article key={i} className="carousel-card" aria-roledescription="slide" aria-label={`${item.title}`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--c-grad-1-start)]/15 to-[var(--c-grad-1-end)]/15" />
              <div className="absolute inset-px rounded-2xl glass" />
              <div className="relative p-6 h-full flex flex-col justify-end">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">A look back at the highlights.</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`size-2.5 rounded-full transition-all ${i === index ? "bg-[var(--c-grad-1-end)] scale-110" : "bg-white/30 hover:bg-white/60"}`}
            onClick={() => {
              const el = scrollerRef.current
              if (!el) return
              setIndex(i)
              el.scrollTo({
                left: i * (el.clientWidth * 0.7 + 24),
                behavior: "smooth",
              })
            }}
          />
        ))}
      </div>
    </div>
  )
}
