import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

export function WhatsAppPopup() {
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!open || !visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[78%] max-w-[17rem] sm:w-[90%] sm:max-w-sm animate-in fade-in slide-in-from-bottom-5 duration-500">

      <div className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-2xl backdrop-blur-xl overflow-hidden">

        {/* Header */}
        <div className="bg-green-500 px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3">

          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
            <FaWhatsapp className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
          </div>

          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-semibold text-white">
              ClimbexAdventures
            </h3>

            <p className="text-xs sm:text-sm text-white/80">
              Typically replies within minutes
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-white transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5">
          <p className="text-xs sm:text-base text-foreground/70 mb-3 sm:mb-5 leading-relaxed">
            Need Support to plan your trip?
            Chat with us directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/918493009936?text=Hi%20Climbex%20Adventures,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 w-full rounded-xl bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            <FaWhatsapp className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}