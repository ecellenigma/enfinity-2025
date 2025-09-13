export function OrbitScene() {
  return (
    <div className="relative aspect-[4/3] max-w-[520px] mx-auto">
      {/* Orbital paths */}
      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" aria-hidden="true" />
      <div className="absolute inset-[6%] rounded-full ring-1 ring-white/8" aria-hidden="true" />
      <div className="absolute inset-[12%] rounded-full ring-1 ring-white/6" aria-hidden="true" />
      <div className="absolute inset-[18%] rounded-full ring-1 ring-white/4" aria-hidden="true" />

      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-24 md:size-28 rounded-full glow-orb animate-pulse" />
      </div>

      {/* Floating orbs */}
      <Orb className="absolute -top-3 left-10 animate-float-slow" size={80} />
      <Orb className="absolute top-[18%] right-[8%] animate-float" size={110} />
      <Orb className="absolute bottom-[14%] left-[14%] animate-float-medium" size={95} />
    </div>
  )
}

function Orb({ size = 100, className = "" }: { size?: number; className?: string }) {
  return <div className={`orb ${className}`} style={{ width: size, height: size }} aria-hidden="true" />
}
