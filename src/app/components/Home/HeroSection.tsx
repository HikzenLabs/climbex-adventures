import { Link } from "react-router-dom";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDown, MountainSnow, Snowflake } from "lucide-react";
// import { Users, Mountain, Award } from "lucide-react";
// import { ShieldCheck, Compass } from "lucide-react";
import { winterImages } from "../../../data/winter";
import { WinterImage } from "../winter/WinterUI";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // WINTER: Gulmarg ski / snowboard photos go in public/images/winter/hero/1.jpg … 4.jpg.
  // Until they're uploaded, WinterImage shows the Gulmarg fallback photo.
  const heroImages = winterImages.hero;

  // SUMMER hero images (kept for when treks come back)
  // const heroImages = [
  //   "/kolahoi_home_pic.jpeg",
  //   "/durinar_2_home.jpeg",
  //   "/khemsar_home.jpeg",
  //   "/gulmarg_home.jpeg",
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 pt-28 pb-8 sm:pt-32 md:min-h-[85vh] md:pb-16">
      {heroImages.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <WinterImage
            src={img}
            alt="Skiing and snowboarding in Gulmarg, Kashmir"
            loading={index === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/70 via-[#0B1F33]/50 to-[#071018]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#7DD3FC] bg-white/10 backdrop-blur-xl border border-white/15 rounded-full px-4 py-1.5"
        >
          <Snowflake className="w-4 h-4" /> Winter 2026–27
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-5 text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight"
        >
          Kashmir in Winter
          <br />
          <span className="text-[#7DD3FC]">Ski · Ride · Climb</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-4 text-base sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Skiing and snowboarding in Gulmarg, ice climbing in Pahalgam — with JIM&amp;WS and IISM certified instructors.
        </motion.p>

        {/* WINTER BOOKING BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto"
        >
          <Link
            to="/skiing"
            className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white font-semibold shadow-2xl active:scale-95 transition"
          >
            <MountainSnow className="w-5 h-5" />
            Book Ski Trip / Course
          </Link>

          <Link
            to="/snowboarding"
            className="flex items-center justify-center px-4 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm sm:text-base font-semibold hover:bg-white/20 active:scale-95 transition"
          >
            Snowboarding
          </Link>

          <Link
            to="/ice-climbing"
            className="flex items-center justify-center px-4 py-3.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm sm:text-base font-semibold hover:bg-white/20 active:scale-95 transition"
          >
            Ice Climbing
          </Link>
        </motion.div>

        {/* SUMMER BUTTONS – no treks in winter, kept for later
        <Link to="/treks">
          <motion.button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white font-semibold shadow-2xl">
            Explore Treks
          </motion.button>
        </Link>
        <Link to="/travel">
          <motion.button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/20 transition">
            Explore Trips
          </motion.button>
        </Link>
        */}


        {/* FEATURE CARDS (Safe Adventures / Himalayan Expertise / Tailored Experiences)
            Hidden at the client's request. Uncomment (and the lucide imports above) to restore.

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-2">
          {[
            {
              icon: ShieldCheck,
              title: "Safe Adventures",
              description:
                "Certified guides, premium equipment and a safety-first approach on every journey.",
            },
            {
              icon: Mountain,
              title: "Himalayan Expertise",
              description:
                "Discover hidden valleys, alpine lakes and iconic Himalayan treks with local expertise.",
            },
            {
              icon: Compass,
              title: "Tailored Experiences",
              description:
                "Personalized itineraries for solo travelers, families and groups designed just for you.",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl px-8 py-5 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-[#7DD3FC]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <div className="w-12 h-1 bg-[#7DD3FC] rounded-full mx-auto mb-5" />
              <p className="text-white/50 text-sm leading-7">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        */}
      </div>

      {/* SCROLL ICON (desktop only) */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ChevronDown className="text-white/60 w-8 h-8" />
      </motion.div>
    </section>
  );
}
