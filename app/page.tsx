import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { OrbitScene } from "@/components/orbit-scene"
import { PreviousEvents } from "@/components/previous-events"
import { Sponsors } from "@/components/sponsors"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-space text-white relative overflow-hidden">
      {/* Background nebula glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="nebula nebula-3" />
      </div>

      <SiteHeader />

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="inline-block h-6 w-10 rounded-full bg-[var(--c-grad-1-start)]/40 ring-2 ring-[var(--c-grad-1-end)]/60 shadow-[0_0_30px_rgba(232,51,102,0.45)]" />
              <span className="text-sm tracking-widest uppercase text-white/70">Enigma presents</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="logo-mark" aria-hidden="true">
                ∞
              </span>
              <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight gradient-text">
                ENFINITY
              </h1>
            </div>
            <p className="text-pretty text-base md:text-lg text-white/80 leading-relaxed max-w-prose">
              Explore the boundless possibilities of innovation. Join us for immersive sessions, stellar sponsors, and a
              celebration of creativity that goes beyond the horizon.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#register"
                className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Register
              </Link>
              <Link
                href="#events"
                className="px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm border border-white/10"
              >
                View Events
              </Link>
            </div>
          </div>

          <div className="relative">
            <OrbitScene />
          </div>
        </div>
      </section>

      {/* Previous Events */}
      <section id="events" className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="section-title">Previous Events</h2>
        <PreviousEvents />
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="section-title">Sponsors</h2>
        <Sponsors />
      </section>

      {/* FAQs */}
      <section id="faqs" className="relative max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <h2 className="section-title text-center">FAQs</h2>
        <div className="rounded-2xl p-4 md:p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(167,60,255,0.15)] relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 size-60 rounded-full glow-orb" aria-hidden="true" />
          <Accordion type="single" collapsible className="w-full">
            {["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"].map((q, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
