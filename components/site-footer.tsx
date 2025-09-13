import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="logo-mark -mt-1" aria-hidden="true">
                ∞
              </span>
              <span className="gradient-text font-extrabold tracking-wide">ENFINITY</span>
            </div>
            <p className="text-sm text-white/70 max-w-xs">Enigma • Where possibilities expand beyond limits.</p>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold text-white/90 mb-2">Contact</h4>
            <ul className="space-y-1 text-white/70">
              <li>Email: contact@enfinity.example</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="font-semibold text-white/90 mb-2">Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="#events" className="nav-link">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="nav-link">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="nav-link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-xs text-white/60">
          © {new Date().getFullYear()} Enigma • ENFINITY. All rights reserved.
        </div>

        <div className="absolute -bottom-16 right-10 size-40 rounded-full glow-orb" aria-hidden="true" />
      </div>
    </footer>
  )
}
