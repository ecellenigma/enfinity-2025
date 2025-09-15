import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { OrbitScene } from "@/components/orbit-scene";
import { Sponsors } from "@/components/sponsors";
import { SiteFooter } from "@/components/site-footer";
import Timeline from "@/components/event-timeline";
import Counters from "@/components/counter";
import { EventStatusChip } from "@/components/event-status-chip";
import EventCarousel from "@/components/eventcarousel";

const EVENT_START_DATE = new Date("2025-10-09T00:00:00");
const EVENT_END_DATE = new Date("2025-10-11T10:00:00");

export default function Page() {
  return (
    <>
      <div className="fixed pointer-events-none w-screen h-screen inset-0 z-10">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="nebula nebula-3" />
      </div>
      <SiteHeader />
      <main className="min-h-screen text-white relative overflow-hidden">
        {/* Background nebula glows */}

        {/* Hero */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <EventStatusChip
                  startDate={EVENT_START_DATE}
                  endDate={EVENT_END_DATE}
                />
                <span className="text-sm tracking-widest uppercase text-white/70 font-medium">
                  Enigma presents
                </span>
              </div>
              <div className="flex justify-center md:justify-start">
                <img
                  src="/blackbacklogo.svg"
                  alt="Logo"
                  className="w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[500px] h-auto"
                  aria-hidden="true"
                />
              </div>
              <p className="text-pretty text-base md:text-lg text-white/80 leading-relaxed max-w-prose mt-8 md:mt-4">
                Explore the boundless possibilities of innovation. Join us for
                immersive sessions, stellar sponsors, and a celebration of
                creativity that goes beyond the horizon.
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

            <div className="relative mt-16 md:mt-0 w-full">
              <OrbitScene />
            </div>
          </div>
        </section>
        <section className="college-branding flex justify-center mb-4 px-4">
          <img
            src="/nmit-white.png"
            alt="NMIT Logo"
            className="w-full h-auto max-w-md lg:max-w-lg"
          />
        </section>
        {/* Counter */}
        <div className="counter flex flex-col items-center justify-center">
          <Counters startDate={EVENT_START_DATE} endDate={EVENT_END_DATE} />
        </div>

        {/* TODO: Timeline */}
        <section
          id="timeline"
          className="relative max-w-6xl mx-auto px-4 pt-8 sm:px-6 pb-20"
        >
          <h2 className="section-title">Timeline</h2>
          <Timeline />
        </section>
        {/* Previous Events */}
        <section
          id="events"
          className="relative max-w-6xl mx-auto px-4 pt-8 sm:px-6 pb-20"
        >
          <EventCarousel />
        </section>

        {/* Sponsors */}
        <section
          id="sponsors"
          className="relative max-w-6xl mx-auto pt-24 px-4 sm:px-6 pb-20"
        >
          <h2 className="section-title">Sponsors</h2>
          <Sponsors />
        </section>

        {/* FAQs */}
        <section
          id="faqs"
          className="relative max-w-3xl lg:max-w-5xl mx-auto pt-8 px-4 sm:px-6 pb-24"
        >
          <h2 className="section-title text-center">FAQs</h2>
          <div className="w-full rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg md:shadow-[0_0_40px_rgba(167,60,255,0.1)] relative overflow-hidden">
            <div
              className="absolute -bottom-24 -right-24 size-60 rounded-full glow-orb pointer-events-none"
              aria-hidden="true"
            />
            <Accordion type="single" collapsible className="w-full">
              {[
                "Question 1",
                "Question 2",
                "Question 3",
                "Question 4",
                "Question 5",
              ].map((q, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
