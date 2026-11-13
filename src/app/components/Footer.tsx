import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-[#0B1F33] border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/khemsar_home.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LogoMark className="h-9 w-auto text-white" />
              <span className="text-lg font-semibold text-white">
                Climbex Adventures
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Explore Kashmir Beyond Limits. Adventure Begins Where Roads End.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/climbexadventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7DD3FC] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/climbexadventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7DD3FC] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:climbexadventures@gmail.com"
                className="text-white/60 hover:text-[#7DD3FC] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link to="/skiing" className="block text-white/60 hover:text-white text-sm transition-colors">
                Skiing in Gulmarg
              </Link>
              <Link to="/snowboarding" className="block text-white/60 hover:text-white text-sm transition-colors">
                Snowboarding
              </Link>
              <Link to="/ice-climbing" className="block text-white/60 hover:text-white text-sm transition-colors">
                Ice Climbing
              </Link>
              <Link to="/travel" className="block text-white/60 hover:text-white text-sm transition-colors">
                Travel Regions
              </Link>
              {/* <Link to="/treks" className="block text-white/60 hover:text-white text-sm transition-colors">
                All Treks
              </Link> */}
              <Link to="/reviews" className="block text-white/60 hover:text-white text-sm transition-colors">
                Reviews
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-white/60 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Srinagar, Kashmir, India</span>
              </div>
              <div className="flex items-start space-x-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+918493009936" className="hover:text-white">+91 84930 09936</a>
                  <a href="tel:+919797843568" className="hover:text-white">+91 97978 43568</a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>climbexadventures@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Climbex Adventures. All rights reserved. Adventure responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
