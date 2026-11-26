import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skiing", path: "/skiing" },
    { name: "Snowboarding", path: "/snowboarding" },
    { name: "Ice Climbing", path: "/ice-climbing" },
    { name: "Travel", path: "/travel" },
    // { name: "Treks", path: "/treks" }, // hidden for winter
    { name: "Reviews", path: "/reviews" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B1F33]/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Climbex Adventures – home">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <LogoMark className="h-9 sm:h-10 w-auto text-white" />
            </motion.div>
            <span className="text-xl font-semibold text-white">
              Climbex <span className="text-[#7DD3FC]">Adventures</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#7DD3FC]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7DD3FC]"
                  />
                )}
              </Link>
            ))}
            <motion.a
              href="https://wa.me/918493009936"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white rounded-full font-medium shadow-lg hover:shadow-[#FB923C]/50 transition-all duration-300"
            >
              ENQUIRE NOW
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0B1F33]/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-base transition-colors ${
                  isActive(link.path)
                    ? "text-[#7DD3FC]"
                    : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/918493009936"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-3 px-6 py-3 bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white text-center rounded-full font-medium"
            >
              ENQUIRE NOW
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
