"use client"

import * as React from 'react'
import { ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react'

interface TimelineEvent {
  time: string
  title: string
  description: string
  location?: string
  requirements?: string
  type?: 'event' | 'ted' | 'marathon'
}

interface TimelineDay {
  date: string
  title: string
  events: TimelineEvent[]
}

const timelineData: TimelineDay[] = [
  {
    date: "November 10th",
    title: "Day 1",
    events: [
      {
        time: "9:00 AM - 9:45 AM",
        title: "Guest Arrival & Registration",
        description: "Welcoming guests, speakers, and participants. Handing out event kits.",
        location: "Gate",
        requirements: "Registration counter, Lanyards, Event kits, Welcome drinks"
      },
      {
        time: "9:45 AM - 10:30 AM",
        title: "Inauguration Ceremony",
        description: "Official start of the summit with lamp lighting and a welcome address.",
        team: "Core Committee",
        location: "MV Auditorium",
        requirements: "Podium, Microphones, Stage lighting"
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Keynote Address",
        description: "An inspiring talk by our esteemed keynote speaker to set the tone for the summit.",
        team: "Speaker Hospitality",
        location: "MV Auditorium",
        requirements: "Projector, Mic for speaker, Water"
      },
      {
        time: "11:30 AM - 1:30 PM",
        title: "Reverse Shark Tank",
        description: "Budding entrepreneurs grill a panel of investors to understand their investment philosophies.",
        team: "Entrepreneurship Cell",
        location: "APJ Seminar Hall",
        requirements: "Panel seating, Microphones, Audio System, Projector for audience"
      },
      {
        time: "11:45 AM - 1:45 PM",
        title: "TED Talk: The Future of Sustainable Startups",
        description: "Inspiring talk about sustainable business practices and environmental entrepreneurship.",
        location: "MV Auditorium",
        type: "ted"
      },
      {
        time: "1:30 PM - 2:30 PM",
        title: "Lunch Break",
        description: "Networking lunch for all attendees.",
        team: "Catering Team",
        location: "Dining Hall",
        requirements: "Buffet setup, Seating arrangements"
      },
      {
        time: "3:00 PM - 5:00 PM",
        title: "Stock Grow",
        description: "Sponsored event by StockGroww",
        team: "Enigma",
        location: "APJ Seminar Hall"
      },
      {
        time: "3:30 PM - 5:30 PM",
        title: "TED Talk: AI and the Next Wave of Entrepreneurship",
        description: "Exploring how artificial intelligence is reshaping the entrepreneurial landscape.",
        location: "MV Auditorium",
        type: "ted"
      },
      {
        time: "5:00 PM - 5:30 PM",
        title: "High Tea",
        description: "A short break for tea, coffee, and snacks.",
        team: "Catering Team",
        location: "Main Lobby",
        requirements: "Tea/Coffee stations, Snacks"
      },
      {
        time: "5:00 PM - 7:00 PM",
        title: "10 Min Million",
        description: "An elevator pitch competition where contestants have 10 minutes to convince investors.",
        team: "Incubation Center",
        location: "BBC",
        requirements: "Stage setup, Timer, Mics, Projector for pitch decks, Jury seating"
      },
      {
        time: "8:00 PM - 9:00 PM",
        title: "Music Night",
        description: "Music club performance",
        team: "Music Club / Nayanika",
        location: "BBC",
        requirements: "Music prep"
      },
      {
        time: "12:00 AM",
        title: "Biz Marathon - Case Study Release",
        description: "Teams gather to receive the case problem and rules for the overnight challenge.",
        team: "Tech / Startup-eco",
        location: "Idea Lab/Archi Seminar Lab",
        requirements: "Printed case studies, Projector for briefing",
        type: "marathon"
      }
    ]
  },
  {
    date: "November 11th",
    title: "Day 2",
    events: [
      {
        time: "12:00 AM - 5:00 AM",
        title: "Biz Marathon - Work Session",
        description: "Teams work through the night to analyze the problem and prepare their solution and presentation.",
        team: "Tech / Startup-eco",
        location: "Idea Lab/Archi Seminar Lab",
        requirements: "Wi-Fi, Power outlets, Refreshments, Whiteboards",
        type: "marathon"
      },
      {
        time: "7:00 AM",
        title: "Biz Marathon - Submission Deadline",
        description: "Final deadline for teams to submit their presentation decks.",
        team: "Tech / Startup-eco",
        location: "Idea Lab/Archi Seminar Lab",
        requirements: "Submission portal/USB drive collection",
        type: "marathon"
      },
      {
        time: "11:30 AM - 1:30 PM",
        title: "Treasure Hunt",
        description: "Fun event for participants",
        location: "Campus Wide"
      },
      {
        time: "11:45 AM - 1:45 PM",
        title: "TED Talk: The Psychology of a Successful Pitch",
        description: "Understanding the mental frameworks behind compelling presentations.",
        location: "MV Auditorium",
        type: "ted"
      },
      {
        time: "1:30 PM - 2:30 PM",
        title: "Lunch Break",
        description: "Networking lunch for all attendees.",
        team: "Catering Team",
        location: "Dining Hall",
        requirements: "Buffet setup, Seating arrangements"
      },
      {
        time: "2:30 PM - 5:00 PM",
        title: "Boardroom",
        description: "A simulated high-stakes corporate meeting where participants tackle a crisis scenario.",
        team: "Corporate Relations Cell",
        location: "ARCHI Seminar Hall",
        requirements: "Round table setup, Notepads, Pens, Projector, Refreshments"
      },
      {
        time: "3:00 PM - 5:30 PM",
        title: "Biz Marathon - Final Presentations",
        description: "Shortlisted teams present their solutions to a panel of judges.",
        team: "Tech / Startup-eco",
        location: "MV Auditorium",
        type: "marathon"
      },
      {
        time: "3:30 PM - 5:30 PM",
        title: "TED Talk: From Idea to Impact - A Founder's Journey",
        description: "Real stories from successful entrepreneurs about their journey from concept to company.",
        location: "APJ Seminar Hall",
        type: "ted"
      },
      {
        time: "5:00 PM - 7:00 PM",
        title: "Panel Discussion",
        description: "Industry experts discuss current trends and future opportunities in entrepreneurship.",
        team: "Incubation Center",
        location: "BBC",
        requirements: "Stage setup, Timer, Mics, Projector for pitch decks, Jury seating"
      },
      {
        time: "7:00 PM - 7:30 PM",
        title: "Valedictory & Prize Distribution",
        description: "Concluding ceremony, guest of honor speech, and prize distribution for all competitions.",
        team: "Core Committee",
        location: "BBC",
        requirements: "Stage setup, Mics, Awards/Trophies"
      },
      {
        time: "7:45 PM - 9:30 PM",
        title: "DJ Night",
        description: "Closing celebration with DJ performance",
        team: "Music Team",
        location: "BBC"
      }
    ]
  }
]

function EventCard({ event, isLeft = false }: { event: TimelineEvent; isLeft?: boolean }) {
  const getEventTypeStyles = () => {
    switch (event.type) {
      case 'ted':
        return 'border-[var(--c-accent)]/30 bg-gradient-to-br from-[var(--c-accent)]/10 to-[var(--c-accent)]/5'
      case 'marathon':
        return 'border-[var(--c-mid)]/30 bg-gradient-to-br from-[var(--c-mid)]/10 to-[var(--c-mid)]/5'
      default:
        return 'border-[var(--c-grad-1-start)]/30 bg-gradient-to-br from-[var(--c-grad-1-start)]/10 to-[var(--c-grad-1-start)]/5'
    }
  }

  const getEventTypeIcon = () => {
    switch (event.type) {
      case 'ted':
        return '🎤'
      case 'marathon':
        return '🏃‍♂️'
      default:
        return '🎯'
    }
  }

  const getEventTypeDot = () => {
    switch (event.type) {
      case 'ted':
        return 'bg-[var(--c-accent)]'
      case 'marathon':
        return 'bg-[var(--c-mid)]'
      default:
        return 'bg-[var(--c-grad-1-start)]'
    }
  }

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex timeline-item-wrapper relative w-full items-start py-8">
        {/* Timeline dot - at center */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 top-8 w-5 h-5 rounded-full ${getEventTypeDot()} border-2 border-white z-30`} />
        
        {/* Branch line from center to card */}
        <div className={`absolute top-[2.375rem] h-0.5 z-10 ${
          isLeft 
            ? 'left-1/2 w-20 md:w-28 lg:w-32 bg-gradient-to-r from-white/80 to-white/40' 
            : 'right-1/2 w-20 md:w-28 lg:w-32 bg-gradient-to-l from-white/80 to-white/40'
        }`} />
        
        {/* Event card */}
        <div className={`w-full ${isLeft ? 'pr-4 md:pr-8 lg:pr-12' : 'pl-4 md:pl-8 lg:pl-12'} z-20 relative`}>
          <div className={`max-w-sm ${isLeft ? 'ml-auto' : 'mr-auto'}`}>
            <div className={`glass rounded-xl p-4 md:p-6 border ${getEventTypeStyles()} hover:scale-105 hover:shadow-2xl transition-all duration-300 z-20 relative`}>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--c-grad-1-start)] font-mono font-bold">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-xl">{getEventTypeIcon()}</span>
                  <h3 className="font-bold text-lg text-white leading-tight">{event.title}</h3>
                </div>
                
                <p className="text-white/80 leading-relaxed text-sm">{event.description}</p>
                
                {event.location && (
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden timeline-item-mobile relative flex items-start py-4">
        {/* Timeline dot - on the left */}
        <div className={`w-4 h-4 rounded-full ${getEventTypeDot()} border-2 border-white mt-6 mr-4 flex-shrink-0 z-30 relative`} />
        
        {/* Event card */}
        <div className="flex-1 z-20 relative">
          <div className={`glass rounded-lg p-4 border ${getEventTypeStyles()} hover:shadow-xl transition-all duration-300`}>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-[var(--c-grad-1-start)] font-mono font-bold">
                <Clock className="w-3 h-3" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <span className="text-lg">{getEventTypeIcon()}</span>
                <h3 className="font-bold text-base text-white leading-tight">{event.title}</h3>
              </div>
              
              <p className="text-white/80 leading-relaxed text-sm">{event.description}</p>
              
              {event.location && (
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function TimelineDay({ day }: { day: TimelineDay }) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="timeline-day relative">
      {/* Day Header */}
      <div className="relative z-10 mb-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left group"
        >
          <div className="flex items-center justify-between p-6 glass rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/20 mx-auto max-w-2xl">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {day.title}
              </h2>
              <p className="text-white/70 text-lg">{day.date}</p>
              <p className="text-white/50 text-sm mt-1">
                {day.events.length} events scheduled
              </p>
            </div>
            <ChevronDown 
              className={`w-6 h-6 text-white/70 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>
      </div>
      
      {/* Timeline Events */}
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
        isExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {/* Desktop Timeline */}
        <div className="hidden md:block timeline-events-desktop relative px-4 md:px-8">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[var(--c-grad-1-start)] via-[var(--c-accent)] to-[var(--c-mid)] rounded-full" 
               style={{height: `${day.events.length * 200 + 50}px`, top: '2rem'}} />
          
          {/* Events */}
          <div>
            {day.events.map((event, index) => (
              <EventCard key={index} event={event} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden timeline-events-mobile relative px-4">
          {/* Left timeline line for mobile */}
          <div className="absolute left-[1.375rem] w-1 bg-gradient-to-b from-[var(--c-grad-1-start)] via-[var(--c-accent)] to-[var(--c-mid)] rounded-full" 
               style={{height: `${day.events.length * 200 + 40}px`, top: '1.5rem'}} />
          
          {/* Events */}
          <div>
            {day.events.map((event, index) => (
              <EventCard key={index} event={event} isLeft={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EnfinityTimeline() {
  return (
    <div className="timeline-container space-y-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-4">
          <span className="w-2 h-2 bg-[var(--c-grad-1-start)] rounded-full animate-pulse"></span>
          <span className="text-white/80 text-sm font-medium">EVENT SCHEDULE</span>
        </div>
        <p className="text-white/60 max-w-2xl mx-auto">
          Explore our comprehensive two-day program featuring keynotes, competitions, 
          TED talks, and networking opportunities. Click on each day to see detailed schedules.
        </p>
      </div>
      
      <div className="space-y-16">
        {timelineData.map((day, index) => (
          <TimelineDay key={index} day={day} />
        ))}
      </div>
      
      <div className="mt-12 p-6 glass rounded-xl border border-white/20 max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-4">Event Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[var(--c-grad-1-start)] rounded-full border-2 border-white"></div>
            <span className="text-white/80">🎯 Main Events</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[var(--c-accent)] rounded-full border-2 border-white"></div>
            <span className="text-white/80">🎤 TED Talks</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[var(--c-mid)] rounded-full border-2 border-white"></div>
            <span className="text-white/80">🏃‍♂️ Biz Marathon</span>
          </div>
        </div>
      </div>
    </div>
  )
}