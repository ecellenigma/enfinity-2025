import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center sm:text-left space-y-2 mt-1.100">
            {/* Contact Information */}
            <div className="font-bold text-2xl text-white">CONTACT US</div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 text-white/60">
              <Phone className="w-6 h-6" />
              <span>+91 91401 50118</span>
              <br />
              <span>+91 97384 87835</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 text-white/60">
              <Mail className="w-6 h-6" />
              <a href="mailto:ecell@nmit.ac.in">ecell@nmit.ac.in</a>
            </div>
          </div>

          {/* Logos and Slogan - Centered */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-2 items-end">
                <img
                  src="/enigma.png"
                  alt="enigma-logo"
                  className="w-[30vw] md:w-24 lg:w-36 h-auto"
                />
                <img
                  src="/nitte-compact.png"
                  alt="nitte-compact-logo"
                  className="w-[28vw] md:w-20 lg:w-32 h-auto -mb-0.5"
                />
              </div>
              <img
                src="/blackbglogo.png"
                alt="Enfinity Logo"
                className="h-12 w-auto"
              />
              <div className="w-full text-center mt-2 text-xs text-white/60">
                © {new Date().getFullYear()} Enigma • ENFINITY. All rights
                reserved.
              </div>
            </div>
            <p className="text-white/60 text-center">
              Enigma – Entrepreneurship Cell NMIT
            </p>
          </div>

          {/* This column is now empty to maintain the 3-column layout */}
          <div></div>
        </div>

        {/* Separator Line */}
        <hr
          className="my-8 border-t-2"
          style={{ borderColor: "#EA3363", backgroundColor: "#EA3363" }}
        />
        {/* Copyright and Social Icons at the bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center pt-4 text-xs text-white/60">
          <div className="flex space-x-4">
            {/* Social Icons */}
            <Link
              href="https://www.instagram.com/ecellnmit/?hl=en"
              className="text-white/60 hover:text-white"
            >
              <img src="/insta.svg" alt="" />
            </Link>
            <Link href="https://www.linkedin.com/company/enigma-e-cell-nmit/" className="text-white/60 hover:text-white">
              <img src="/linkedin.svg" alt="" />
            </Link>
            
          </div>
        </div>

        <div
          className="absolute -bottom-16 right-10 size-40 rounded-full glow-orb"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
