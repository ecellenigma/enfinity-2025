import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center sm:text-left space-y-2 mt-1.100">
            {/* Contact Information */}
            <div className="font-bold text-2xl text-white">CONTACT US</div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-white/60">
              <span className="text-xl">📞</span>
              <span>1-514-456-2753</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-white/60">
              <span className="text-xl">📧</span>
              <a href="mailto:ecell@nmit.ac.in">ecell@nmit.ac.in</a>
            </div>
          </div>
          
          {/* Logos and Slogan - Centered */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center">
              <img src="/enigma.svg" alt="enigma-logo" className="w-[30vw] md:w-24 lg:w-36 h-auto" />
              <img src="/blackbacklogo.svg" alt="Enfinity Logo" className="w-[70vw] md:w-56 lg:w-84 h-auto my-2" />
              <div className="w-full text-center mt-2 text-xs text-white/60">
                © {new Date().getFullYear()} Enigma • ENFINITY. All rights reserved.
              </div>
            </div>
            <p className="text-white/60 text-center">Enigma – Entrepreneurship Cell NMIT</p>
          </div>
          
          {/* This column is now empty to maintain the 3-column layout */}
          <div></div>
        </div>
        
        {/* Separator Line */}
          <hr className="my-8 border-t-2" style={{ borderColor: "#EA3363", backgroundColor: "#EA3363" }} />
        {/* Copyright and Social Icons at the bottom */}
  <div className="flex flex-col md:flex-row items-center justify-center pt-4 text-xs text-white/60">
          <div className="flex space-x-4">
            {/* Social Icons */}
            <Link href="https://www.instagram.com/ecellnmit/?hl=en" className="text-white/60 hover:text-white">
              <img src="/insta.svg" alt="" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <img src="/twitter.svg" alt="" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <img src="/linkedin.svg" alt="" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <img src="/facebook.svg" alt="" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white">
              <img src="/youtube.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="absolute -bottom-16 right-10 size-40 rounded-full glow-orb" aria-hidden="true" />
      </div>
    </footer>
  );
}