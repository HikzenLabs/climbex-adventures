import { Link } from "react-router-dom";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Users, Mountain, Award, ChevronDown } from "lucide-react";
import { ShieldCheck, Compass } from "lucide-react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/kolahoi_home_pic.jpeg",
    "/durinar_2_home.jpeg",
    "/khemsar_home.jpeg",
    "/gulmarg_home.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {heroImages.map((img, index) => (
        <motion.div
          key={img}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentImageIndex ? 1 : 0,
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/70 via-[#0B1F33]/50 to-[#071018]" />

      <div className="relative z-10 text-center max-w-6xl mx-auto pt-24 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight px-2"
        >
          Explore Kashmir
          <br />
          <span className="text-[#7DD3FC]">Beyond Limits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto px-4"
        >
          Adventure Begins Where Roads End
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4"
        >
          <Link to="/treks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white font-semibold shadow-2xl"
            >
              Explore Treks
            </motion.button>
          </Link>

          <Link to="/travel">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/20 transition"
            >
              Explore Trips
            </motion.button>
          </Link>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-2"
        >
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
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl px-8 py-5 text-center transition-all duration-300 hover:bg-white/15 hover:border-[#7DD3FC]/40"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-[#7DD3FC]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <div className="w-12 h-1 bg-[#7DD3FC] rounded-full mx-auto mb-5" />

              <p className="text-white/50 text-sm leading-7">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SCROLL ICON */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white/60 w-8 h-8" />
      </motion.div>
    </section>
  );
}
