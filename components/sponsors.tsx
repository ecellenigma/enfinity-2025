const sponsors = Array.from({ length: 6 })

export function Sponsors() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 place-items-center">
      {sponsors.map((_, i) => (
        <div key={i} className="relative">
          <div className="size-28 md:size-32 rounded-full sponsor-disc animate-pulse-soft" />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 beacon" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}
