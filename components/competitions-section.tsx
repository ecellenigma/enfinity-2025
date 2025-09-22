"use client"

import * as React from 'react'
import { Users } from 'lucide-react'
import Image from 'next/image'

interface Competition {
  title: string
  description: string
  teamSize: string
  keySkills: string[]
  image: string
  isSignature?: boolean
}

const competitions: Competition[] = [
  {
    title: "Business Triathlon",
    description: "Build a business from scratch in 24 hours. Race against the clock to develop a solution, business model, and winning pitch.",
    teamSize: "3-5 Members",
    keySkills: ["Resilience", "Teamwork", "Rapid Prototyping"],
    image: "/business-triathlon.jpg",
    isSignature: true
  },
  {
    title: "Ten Minute Millionaire",
    description: "Convince millionaire investors to back your venture. Three minutes to pitch, seven minutes of Q&A.",
    teamSize: "1-2 Members",
    keySkills: ["Pitching", "Persuasion", "Grace Under Pressure"],
    image: "/ten-minute-millionaire.jpg"
  },
  {
    title: "Reverse Shark Tank",
    description: "Industry experts pitch their challenges to you. Brainstorm innovative solutions and pitch them back.",
    teamSize: "3-5 Members",
    keySkills: ["Creative Problem-Solving", "Innovation"],
    image: "/reverse-shark-tank .jpg"
  },
  {
    title: "Boardroom",
    description: "Act as board of directors navigating a major corporate crisis. Strategic thinking under pressure.",
    teamSize: "4-6 Members",
    keySkills: ["Strategic Thinking", "Crisis Management"],
    image: "/board-room.jpg"
  },
  {
    title: "Startup Scavenger Hunt",
    description: "Solve business-themed riddles across campus. Adventure meets entrepreneurship.",
    teamSize: "3-4 Members",
    keySkills: ["Problem-Solving", "Teamwork"],
    image: "/startup-scavenger-hunt .jpg"
  }
]

const CompetitionCard: React.FC<{ 
  competition: Competition; 
  index: number; 
  isActive: boolean; 
  onToggle: () => void; 
}> = ({ competition, index, isActive, onToggle }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleClick = () => {
    onToggle()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const showDetails = isHovered || isActive

  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-expanded={showDetails}
      aria-label={`${competition.title} competition details`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Main Card - Image + Title */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden border border-white/10">
        <Image
          src={competition.image}
          alt={competition.title}
          fill
          className="object-cover object-center transition-all duration-300 group-hover:scale-110"
          style={{ objectPosition: 'center' }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{competition.title}</h3>
          {competition.isSignature && (
            <div className="inline-block px-2 py-1 mt-2 rounded text-xs font-medium bg-white/20 text-white/90">
              FLAGSHIP
            </div>
          )}
        </div>

        {/* Mobile tap indicator */}
        <div className="absolute top-4 right-4 md:hidden">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">ⓘ</span>
          </div>
        </div>
      </div>

      {/* Detailed Card - Shown on Hover/Click */}
      <div 
        className={`absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4 transition-all duration-300 z-10 ${
          showDetails ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white">{competition.title}</h3>
              <button
                className="md:hidden text-white/60 hover:text-white text-xl leading-none"
                onClick={(e) => {
                  e.stopPropagation()
                  onToggle()
                }}
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">{competition.description}</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/60" />
              <span className="text-white/80 text-sm">{competition.teamSize}</span>
            </div>
            
            <div>
              <span className="text-white/60 text-xs uppercase tracking-wide block mb-2">Key Skills</span>
              <div className="flex flex-wrap gap-1">
                {competition.keySkills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 rounded text-xs bg-white/20 text-white/80 border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CompetitionsSection() {
  const [activeCardIndex, setActiveCardIndex] = React.useState<number | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveCardIndex(null)
      }
    }

    if (activeCardIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeCardIndex])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Competitions
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Welcome, innovators and future leaders! Get ready for two days of intense competition, 
          creativity, and entrepreneurship. Find the event that sparks your passion and prepare to make your mark.
        </p>
      </div>
      
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {competitions.map((competition, index) => (
          <CompetitionCard 
            key={index} 
            competition={competition} 
            index={index}
            isActive={activeCardIndex === index}
            onToggle={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}