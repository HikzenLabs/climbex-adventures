import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Star,
  Users,
  Mountain,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2000",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featuredTreks = [
    {
      id: "1",
      name: "Great Lakes Trek",
      region: "Sonamarg",
      duration: "7 Days",
      difficulty: "Moderate",
      price: "₹12,999",
      date: "June 15, 2026",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    },
    {
      id: "2",
      name: "Tarsar Marsar Trek",
      region: "Aru Valley",
      duration: "6 Days",
      difficulty: "Moderate",
      price: "₹11,499",
      date: "July 1, 2026",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    },
    {
      id: "3",
      name: "Kashmir Alpine Trek",
      region: "Gulmarg",
      duration: "5 Days",
      difficulty: "Easy",
      price: "₹9,999",
      date: "June 20, 2026",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
    },
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      trek: "Great Lakes Trek",
      rating: 5,
      review:
        "Absolutely breathtaking! The team was professional and the experience was beyond my expectations.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    },
    {
      name: "Rajesh Kumar",
      trek: "Tarsar Marsar Trek",
      rating: 5,
      review:
        "An adventure of a lifetime. The landscapes were stunning and the guides were knowledgeable.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
    {
      name: "Ananya Patel",
      trek: "Kashmir Alpine Trek",
      rating: 5,
      review:
        "Perfect for beginners! Well organized and the scenery was incredible.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#071018] overflow-hidden">

      {/* HERO SECTION */}
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
            <span className="text-[#7DD3FC]">
              Beyond Limits
            </span>
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

            <Link to="/reviews">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/20 transition"
              >
                Watch Experiences
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 px-2"
          >
            {[
              {
                icon: Users,
                value: "500+",
                label: "Adventurers",
              },
              {
                icon: Mountain,
                value: "50+",
                label: "Treks",
              },
              {
                icon: Award,
                value: "4.9",
                label: "Rating",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-[#7DD3FC] mx-auto mb-4" />

                <h3 className="text-3xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="text-white/60 mt-1">
                  {stat.label}
                </p>
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

      {/* FEATURED TREKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-[#7DD3FC]">Treks</span>
            </h2>

            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Discover breathtaking trekking experiences across Kashmir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {featuredTreks.map((trek) => (
              <Link key={trek.id} to={`/treks/${trek.id}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300"
                >

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 bg-[#FB923C] px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {trek.difficulty}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#7DD3FC] transition">
                      {trek.name}
                    </h3>

                    <p className="text-white/60 mt-1">
                      {trek.region}
                    </p>

                    <div className="flex justify-between text-sm text-white/60 mt-5">
                      <span>{trek.duration}</span>
                      <span>{trek.date}</span>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <span className="text-2xl font-bold text-[#7DD3FC]">
                        {trek.price}
                      </span>

                      <span className="text-white/70">
                        See More →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1F33] to-[#0F3D2E]/40">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Our <span className="text-[#7DD3FC]">Adventurers</span> Say
            </h2>

            <p className="text-white/60 mt-4">
              Real stories from real adventurers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition"
              >

                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#7DD3FC]"
                  />

                  <div>
                    <h3 className="text-white font-semibold">
                      {review.name}
                    </h3>

                    <p className="text-white/60 text-sm">
                      {review.trek}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FB923C] text-[#FB923C]"
                    />
                  ))}
                </div>

                <p className="text-white/70 leading-relaxed">
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-[#071018]/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready For Your
            <span className="text-[#7DD3FC]">
              {" "}Next Adventure?
            </span>
          </h2>

          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Join hundreds of adventurers discovering Kashmir’s untouched beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold"
            >
              WhatsApp Us
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white font-semibold"
            >
              Follow Instagram
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}