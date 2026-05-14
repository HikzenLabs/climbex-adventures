import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Masonry from "react-responsive-masonry";

export function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      trek: "Great Lakes Trek",
      rating: 5,
      date: "May 2026",
      review:
        "Absolutely breathtaking! The team was professional and the experience was beyond my expectations. Every lake was more beautiful than the last. The guides were knowledgeable and ensured our safety throughout. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      trek: "Tarsar Marsar Trek",
      rating: 5,
      date: "April 2026",
      review:
        "An adventure of a lifetime. The landscapes were stunning and the guides were knowledgeable. The twin lakes are absolutely mesmerizing. Can't wait to come back!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
    },
    {
      id: 3,
      name: "Ananya Patel",
      trek: "Kashmir Alpine Trek",
      rating: 5,
      date: "March 2026",
      review:
        "Perfect for beginners! Well organized and the scenery was incredible. The team took great care of us and made sure we were comfortable throughout the trek.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=600",
    },
    {
      id: 4,
      name: "Arjun Mehta",
      trek: "Gangabal Lake Trek",
      rating: 5,
      date: "May 2026",
      review:
        "The sacred Gangabal Lake at the foot of Mount Harmukh was a spiritual experience. The entire trek was well-organized with excellent support staff. The camping under the stars was magical!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
    },
    {
      id: 5,
      name: "Sneha Reddy",
      trek: "Great Lakes Trek",
      rating: 5,
      date: "April 2026",
      review:
        "Words cannot describe the beauty of this trek. Seven pristine alpine lakes, endless meadows, and snow-capped peaks. The team ensured we had everything we needed. This trek exceeded all expectations!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
    },
    {
      id: 6,
      name: "Vikram Singh",
      trek: "Kolahoi Glacier Trek",
      rating: 5,
      date: "May 2026",
      review:
        "Challenging but absolutely worth it! Reaching Kashmir's highest glacier was a dream come true. The guides were experienced and handled everything professionally. Best trekking experience!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=600",
    },
    {
      id: 7,
      name: "Meera Joshi",
      trek: "Tarsar Marsar Trek",
      rating: 5,
      date: "April 2026",
      review:
        "The twin lakes were absolutely stunning! Camping by Tarsar Lake under the milky way was unforgettable. The food was great and the team was wonderful. Definitely doing another trek with them!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600",
    },
    {
      id: 8,
      name: "Karan Kapoor",
      trek: "Kashmir Alpine Trek",
      rating: 5,
      date: "March 2026",
      review:
        "Great introduction to high-altitude trekking! The gradual ascent helped with acclimatization. Guides were patient and encouraging. Loved every moment!",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
      trekImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      title: "Great Lakes Trek Experience",
      name: "Rahul & Friends",
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      title: "Journey to Tarsar Marsar",
      name: "Solo Traveler",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1F33] to-[#0F3D2E]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Adventurer <span className="text-[#7DD3FC]">Experiences</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real stories from real adventurers who explored Kashmir's mountains with us
            </p>
          </motion.div>

          <div className="mb-16">
            <Masonry columnsCount={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3} gutter="2rem">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20"
                >
                  {review.trekImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={review.trekImage}
                        alt={review.trek}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                    <Quote className="w-8 h-8 text-[#7DD3FC] mb-4 opacity-50" />

                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FB923C] text-[#FB923C]" />
                      ))}
                    </div>

                    <p className="text-white/80 leading-relaxed mb-6">"{review.review}"</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#7DD3FC]"
                        />
                        <div className="ml-3">
                          <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                          <p className="text-white/60 text-xs">{review.trek}</p>
                        </div>
                      </div>
                      <span className="text-white/40 text-xs">{review.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Video <span className="text-[#7DD3FC]">Testimonials</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20 cursor-pointer"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0B1F33]/40 group-hover:bg-[#0B1F33]/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-white font-semibold mb-2">{video.title}</h3>
                    <p className="text-white/60 text-sm">{video.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Share Your Experience</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Been on a trek with us? We'd love to hear about your adventure! Share your story and
              inspire future adventurers.
            </p>
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white rounded-full font-semibold shadow-lg hover:shadow-[#FB923C]/50 transition-all duration-300"
            >
              Submit Your Review
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
