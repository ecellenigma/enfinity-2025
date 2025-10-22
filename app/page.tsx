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
import EnfinityTimeline from "@/components/enfinity-timeline";
import CompetitionsSection from "@/components/competitions-section";
import Counters from "@/components/counter";
import { EventStatusChip } from "@/components/event-status-chip";
import EventCarousel from "@/components/eventcarousel";
import { Prizepool } from "@/components/prizepool";

const EVENT_START_DATE = new Date('2025-11-10T09:00:00+05:30'); // Oct 10, 2025, 09:00 AM IST
const EVENT_END_DATE = new Date('2025-11-12T17:00:00+05:30'); // Oct 11, 2025, 05:00 PM IST

const faqs = [
  {
    question: "What is Enfinity?",
    answer:
      "Enfinity is the Flagship Event organised by E-Cell NMIT. It's a premier event that brings together students, aspiring entrepreneurs, and industry experts for a series of competitions, insightful speaker sessions, and networking opportunities.",
  },
  {
    question: "Who is eligible to participate in the events?",
    answer:
      "Participation is typically open to all college students, regardless of their year or field of study. We welcome anyone with a passion for innovation and entrepreneurship to join our events.",
  },
  {
    question: "Is there a registration fee to attend Enfinity?",
    answer:
      "This can vary by event. While some speaker sessions or workshops may be free to attend, competitive events might have a nominal registration fee. Please refer to the specific event page for details on pricing.",
  },
  {
    question: "What are the main highlights or competitions in Enfinity?",
    answer:
      'Enfinity features a diverse range of events, including our flagship business idea competition "Business Triathlon" a strategic investment challenge called "Reverse Shark Tank," and a Startup Expo. The summit is designed to test your business acumen, strategic thinking, and innovative spirit.',
  },
  {
    question: "How can I register for a specific event?",
    answer:
      "You can register for all our events directly through the links provided on our website. Simply navigate to the event you're interested in and follow the registration instructions. Make sure to sign up before the deadline!",
  },
];

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
              <div className="flex justify-center md:justify-start mb-4">
                <img
                  src="/nmit-white.png"
                  alt="NMIT Logo"
                  className="w-full h-auto max-w-xs lg:max-w-sm"
                />
              </div>
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
                  src="/blackbglogo.png"
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
                  href="https://unstop.com/college-fests/enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-407327"
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
        {/* Counter */}
        <div className="counter flex flex-col items-center justify-center">
          <Counters startDate={EVENT_START_DATE} endDate={EVENT_END_DATE} />
        </div>

        {/* Timeline */}
        <section
          id="timeline"
          className="relative max-w-6xl mx-auto px-4 pt-8 sm:px-6 pb-6"
        >
          <EnfinityTimeline />
        </section>

        {/* Prizepool */}
        <section
          id="prizepool"
          className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center"
        >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
          Prizepool
        </h2>
          <Prizepool />
        </section>

        {/* Competitions */}
        <section
          id="events"
          className="relative max-w-6xl mx-auto px-4 pt-8 sm:px-6 pb-20"
        >
          <CompetitionsSection />
        </section>

        {/* Previous Events */}
        <section
          id="previous-events"
          className="relative max-w-6xl mx-auto px-4 pt-8 sm:px-6 pb-20"
        >
          <EventCarousel />
        </section>

        {/* Sponsors */}
        {/* <section
          id="sponsors"
          className="relative max-w-6xl mx-auto pt-24 px-4 sm:px-6 pb-20"
        >
          <h2 className="section-title">Sponsors</h2>
          <Sponsors />
        </section> */}

        {/* FAQs */}
        <section
          id="faqs"
          className="relative max-w-3xl lg:max-w-5xl mx-auto pt-32 md:pt-40 px-4 sm:px-6 pb-24"
        >
          <h2 className="section-title text-center">FAQs</h2>
          <div className="w-full rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg md:shadow-[0_0_40px_rgba(167,60,255,0.1)] relative overflow-hidden">
            <div
              className="absolute -bottom-24 -right-24 size-60 rounded-full glow-orb pointer-events-none"
              aria-hidden="true"
            />
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
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
