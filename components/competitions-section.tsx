"use client"

import * as React from 'react'
import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Competition {
  title: string
  description: string
  teamSize: string
  keySkills: string[]
  image: string
  price: string
  prize: string
  isSignature?: boolean
  registrationLink?: string
}

const competitions: Competition[] = [
  {
    title: "Business Triathlon",
    description: "Build a business from scratch in 24 hours. Race against the clock to develop a solution, business model, and winning pitch.",
    teamSize: "3-5 Members",
    keySkills: ["Resilience", "Teamwork", "Rapid Prototyping"],
    image: "/efv.png",
    price: "₹750",
    prize: "₹50,000",
    isSignature: true,
    registrationLink: "https://unstop.com/competitions/the-business-triathlon-enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1577353" 
  },
  {
    title: "Boardroom",
    description: "Act as board of directors navigating a major corporate crisis. Strategic thinking under pressure.",
    teamSize: "4-6 Members",
    keySkills: ["Strategic Thinking", "Crisis Management"],
    image: "/3.png",
    price: "₹750",
    prize: "₹25,000",
    registrationLink: "https://unstop.com/p/the-boardroom-enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1577394" 
  },
  {
    title: "Ten Minute Millionaire",
    description: "Convince millionaire investors to back your venture. Three minutes to pitch, seven minutes of Q&A.",
    teamSize: "1-2 Members",
    keySkills: ["Pitching", "Persuasion", "Grace Under Pressure"],
    image: "/4.png",
    price: "₹300",
    prize: "VC's Funding",
    registrationLink: "https://unstop.com/p/ten-minute-million-enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1577366" 
  },
  {
    title: "Reverse Shark Tank",
    description: "Industry experts pitch their challenges to you. Brainstorm innovative solutions and pitch them back.",
    teamSize: "3-5 Members",
    keySkills: ["Creative Problem-Solving", "Innovation"],
    image: "/mmxz.png",
    price: "₹300",
    prize: "₹15,000",
    registrationLink: "https://unstop.com/p/reverse-shark-tank-enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1577377" 
  },
  {
    title: "Business Treasure Hunt",
    description: "Solve business-themed riddles across campus. Adventure meets entrepreneurship.",
    teamSize: "3-4 Members",
    keySkills: ["Problem-Solving", "Teamwork"],
    image: "/bth.png",
    price: "₹300",
    prize: "₹5,000",
    registrationLink: "https://unstop.com/p/business-treasure-hunt-enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1577401" 
  }
]

const CompetitionCard: React.FC<{ 
  competition: Competition; 
  index: number; 
  isActive: boolean; 
  onToggle: () => void; 
  className?: string;
}> = ({ competition, index, isActive, onToggle, className }) => {
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
      className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
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
      {/* Glowing Shadow on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

      {/* Main Card - Image + Title */}
      <div className="relative w-full h-80 rounded-lg overflow-hidden border border-white/10">
        <Image
          src={competition.image}
          alt={competition.title}
          fill
          className="object-contain object-center transition-all duration-300 group-hover:scale-110 p-8"
          style={{ objectPosition: "center" }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          
          {competition.isSignature && (
            <div className="inline-block px-2 py-1 mt-2 rounded text-xs font-medium bg-white/20 text-white/90">
              FLAGSHIP
            </div>
          )}
          <h3 className="text-lg font-bold  text-white gradient-text ">{competition.title}</h3>
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
        <div className="h-full flex flex-col">
          <div className="flex-grow overflow-y-auto pr-2">
            <h3 className="text-lg font-bold text-white mb-3 gradient-text">{competition.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">{competition.description}</p>
          </div>
          
          <div className="flex-shrink-0 pt-4 border-t border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">{competition.teamSize}</span>
              </div>
              <div className="flex justify-between items-end">
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

                <div className="text-right space-y-2">
                  <div>
                    <span className="text-white/60 text-xs uppercase tracking-wide block">Entry Fee</span>
                    <span className="text-lg font-bold text-white">{competition.price}</span>
                  </div>
                  <div>
                    <span className="text-white/60 text-xs uppercase tracking-wide block">Prize Pool</span>
                    <span className="text-lg font-bold text-white gradient-text">{competition.prize}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href={competition.registrationLink || "https://forms.fillout.com/t/jsZauYu41tus"}
                className="btn-gradient block w-full text-center px-4 py-2 rounded-full text-sm font-semibold shadow-xl"
                onClick={(e) => e.stopPropagation()} // Prevent card click from toggling
              >
                Register
              </Link>
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
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
          Events
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto">
          Welcome, innovators and future leaders! Get ready for two days of intense competition, 
          creativity, and entrepreneurship. Find the event that sparks your passion and prepare to make your mark.
        </p>
      </div>
      
      {/* All Access Pass Banner */}
      <div className="mb-6">
        <div className="relative w-full">
          {/* Glowing Shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur-lg opacity-60" />
          {/* Card */}
          <div
            className="relative w-full bg-black/30 rounded-xl p-6 md:p-8 border border-white/20"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">ALL ACCESS PASS (Team)</h3>
                <p className="text-sm md:text-base text-white/80 mt-1">Access all competitions with a single pass and save big!</p>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-medium line-through text-white/60">₹2400</span>
                  <span className="text-3xl md:text-4xl font-bold text-white gradient-text">₹1499</span>
                </div>
                <Link
                  href="https://unstop.com/p/enfinity-all-access-enfinity-2025-nitte-meenakshi-institute-of-technology-nmit-yelahanka-1577414"
                  className="btn-gradient px-6 py-3 rounded-full text-sm font-semibold shadow-xl"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {competitions.map((competition, index) => {
          const isLgFeatured = index < 2;
          const isMdFeatured = index === 0;

          const classNames = [
            isLgFeatured ? "lg:col-span-3" : "lg:col-span-2",
            isMdFeatured ? "md:col-span-2" : "",
          ].join(" ");

          return (
            <CompetitionCard
              key={index}
              competition={competition}
              index={index}
              isActive={activeCardIndex === index}
              onToggle={() =>
                setActiveCardIndex(activeCardIndex === index ? null : index)
              }
              className={classNames}
            />
          );
        })}
      </div>
    </div>
  )
}