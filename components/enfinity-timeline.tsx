"use client"

import * as React from 'react'
import { ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react'
import scheduleData from '@/schedule.json'

interface TimelineEvent {
  time: string
  title: string
  description: string
  location?: string
  type?: 'event' | 'ted' | 'marathon'
}

interface TimelineDay {
  date: string
  title: string
  events: TimelineEvent[]
}

// Transform schedule.json data to timeline format
const transformScheduleData = (): TimelineDay[] => {
  const days = scheduleData.days.map((day) => {
    const allEvents: TimelineEvent[] = [];
    
    // Add main events and TED talks
    day.tracks.forEach((track) => {
      track.events.forEach((event) => {
        allEvents.push({
          time: event.time,
          title: event.activity,
          description: event.description || '',
          location: event.location,
          type: track.trackName === 'TED Talks' ? 'ted' : 'event'
        });
      });
    });

    // Add special overnight events for Day 2
    if (day.day === 2) {
      scheduleData.overnightEvent.timeline.forEach((marathonEvent: any) => {
        if (marathonEvent.day === 2) {
          allEvents.push({
            time: marathonEvent.timing,
            title: marathonEvent.activity,
            description: marathonEvent.description,
            location: marathonEvent.location,
            type: 'marathon'
          });
        }
      });
    }

    // Sort events by time (handling midnight/AM/PM properly)
    allEvents.sort((a, b) => {
      const parseTime = (timeStr: string) => {
        const time = timeStr.split(' - ')[0].trim();
        
        // Handle midnight times
        if (time.includes('12:00 AM') || time === '12:00 AM') {
          return 0;
        }
        
        const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (!match) return 999;
        
        let hours = parseInt(match[1]);
        const minutes = parseInt(match[2]);
        const period = match[3].toUpperCase();
        
        if (period === 'AM' && hours === 12) hours = 0;
        if (period === 'PM' && hours !== 12) hours += 12;
        
        return hours * 60 + minutes;
      };
      
      return parseTime(a.time) - parseTime(b.time);
    });

    return {
      date: day.date,
      title: `Day ${day.day}`,
      events: allEvents
    };
  });

  return days;
};

const timelineData = transformScheduleData();

const EventCard: React.FC<{ event: TimelineEvent; index: number; isLeft: boolean }> = ({ event, index, isLeft }) => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center w-full min-h-[120px]">
        {/* Horizontal connector line that just touches the card */}
        <div 
          className={`absolute top-1/2 transform -translate-y-1/2 h-[2px] z-10 ${isLeft ? 'right-1/2 mr-12' : 'left-1/2 ml-12'}`}
          style={{
            width: 'calc(50% - 6rem)',
            background: isLeft 
              ? 'linear-gradient(90deg, transparent, rgba(167, 60, 255, 0.8))' 
              : 'linear-gradient(90deg, rgba(167, 60, 255, 0.8), transparent)',
            borderRadius: '1px'
          }}
        />
        
        {/* Solid dot with single level ripple effect */}
        <div 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
          style={{
            width: '16px',
            height: '16px',
            background: 'var(--c-grad-1-start)',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 0 4px rgba(167, 60, 255, 0.15)'
          }}
        />
        
        {/* Event card */}
        <div className={`w-[45%] ${isLeft ? 'pr-12' : 'pl-12 ml-auto'}`}>
          <div className="glass rounded-xl p-6 border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 z-20 relative">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[var(--c-grad-1-start)] font-mono font-bold">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white leading-snug">{event.title}</h3>
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

      {/* Mobile Layout */}
      <div className="md:hidden relative flex items-start gap-4 pb-8">
        {/* Solid dot for mobile with single level ripple effect */}
        <div className="flex-shrink-0 mt-4 relative z-40">
          <div 
            className="relative z-40"
            style={{
              width: '14px',
              height: '14px',
              background: 'var(--c-grad-1-start)',
              borderRadius: '50%',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 0 0 3px rgba(167, 60, 255, 0.15)'
            }}
          />
        </div>
        
        {/* Event card */}
        <div className="flex-1">
          <div className="glass rounded-lg p-4 border border-white/20 hover:shadow-xl transition-all duration-300">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[var(--c-grad-1-start)] font-mono font-bold">
                <Clock className="w-3 h-3" />
                <span>{event.time}</span>
              </div>
              
              <h3 className="text-base font-bold text-white leading-snug">{event.title}</h3>
              <p className="text-white/80 leading-relaxed text-xs">{event.description}</p>
              
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

const TimelineDay: React.FC<{ day: TimelineDay; isExpanded: boolean; onToggle: () => void }> = ({ 
  day, 
  isExpanded, 
  onToggle 
}) => {
  const eventsContainerRef = React.useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = React.useState(0)

  React.useEffect(() => {
    if (isExpanded && eventsContainerRef.current) {
      // Check if ResizeObserver is supported
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            setContainerHeight(entry.contentRect.height)
          }
        })
        
        resizeObserver.observe(eventsContainerRef.current)
        
        return () => {
          resizeObserver.disconnect()
        }
      } else {
        // Fallback for browsers without ResizeObserver support
        const updateHeight = () => {
          if (eventsContainerRef.current) {
            setContainerHeight(eventsContainerRef.current.offsetHeight)
          }
        }
        
        // Initial measurement after expansion
        const timer = setTimeout(() => {
          updateHeight()
        }, 100) // Small delay to ensure DOM is updated
        
        // Listen for window resize
        window.addEventListener('resize', updateHeight)
        
        return () => {
          clearTimeout(timer)
          window.removeEventListener('resize', updateHeight)
        }
      }
    }
  }, [isExpanded, day.events.length])

  return (
    <div className="relative">
      {/* Day Header */}
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={onToggle}
          className="group flex items-center gap-4 px-16 lg:px-24 xl:px-32 py-6 rounded-2xl backdrop-blur-md border border-white/30 transition-all duration-300 hover:border-white/50 glass"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-1">
              <h2 className="text-2xl font-bold text-white">{day.title}</h2>
              <div className="text-white/60 group-hover:text-white transition-colors">
                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </div>
            <p className="text-[var(--c-grad-1-start)] font-mono text-sm font-bold">{day.date}</p>
          </div>
        </button>
      </div>

      {/* Timeline Events */}
      {isExpanded && (
        <div className="relative">
          {/* Enhanced Main vertical line for desktop with consistent bluish color */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10"
            style={{
              width: '4px',
              height: containerHeight > 0 ? `${containerHeight + 32}px` : `calc(${day.events.length * 140}px + 2rem)`,
              background: 'var(--c-grad-1-start)',
              borderRadius: '2px',
              boxShadow: 'none',
              top: '-1rem',
              transition: 'height 0.3s ease-out'
            }}
          />
          
          {/* Enhanced Main vertical line for mobile with consistent bluish color */}
          <div 
            className="md:hidden absolute left-1.5 z-10"
            style={{
              width: '3px',
              height: containerHeight > 0 ? `${containerHeight + 16}px` : `calc(${day.events.length * 120}px)`,
              background: 'var(--c-grad-1-start)',
              borderRadius: '1.5px',
              boxShadow: 'none',
              top: '0.5rem',
              transition: 'height 0.3s ease-out'
            }}
          />
          
          {/* Events */}
          <div ref={eventsContainerRef} className="space-y-8 md:space-y-0">
            {day.events.map((event, index) => (
              <EventCard 
                key={index} 
                event={event} 
                index={index} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function EnfinityTimeline() {
  const [expandedDays, setExpandedDays] = React.useState<Record<number, boolean>>({
    0: true,
    1: false
  })

  const toggleDay = (dayIndex: number) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayIndex]: !prev[dayIndex]
    }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
          Timeline
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          A comprehensive schedule of our 2-day entrepreneurship summit
        </p>
      </div>
      
      <div className="space-y-16">
        {timelineData.map((day, index) => (
          <TimelineDay
            key={index}
            day={day}
            isExpanded={expandedDays[index]}
            onToggle={() => toggleDay(index)}
          />
        ))}
      </div>
    </div>
  )
}
