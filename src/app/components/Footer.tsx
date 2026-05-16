import { Link } from "react-router-dom";
import { Mountain, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#0B1F33] border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="w-8 h-8 text-[#7DD3FC]" />
              <span className="text-lg font-semibold text-white">
                Climbex Adventures
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Explore Kashmir Beyond Limits. Adventure Begins Where Roads End.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7DD3FC] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#7DD3FC] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@climbexAdv.com"
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
              <Link to="/explore" className="block text-white/60 hover:text-white text-sm transition-colors">
                Explore Regions
              </Link>
              <Link to="/treks" className="block text-white/60 hover:text-white text-sm transition-colors">
                All Treks
              </Link>
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
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Safety Standards
              </a>
              <a href="#" className="block text-white/60 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Srinagar, Kashmir, India</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@kashmirtrek.com</span>
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
