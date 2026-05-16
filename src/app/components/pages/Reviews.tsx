import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Masonry, {
  ResponsiveMasonry,
} from "react-responsive-masonry";

import {
  reviews,
  videoTestimonials,
} from "../../../data/review";

export function Reviews() {
  return (
    <div className="min-h-screen pt-20 bg-[#071018] overflow-hidden">

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1F33] to-[#0F3D2E]/50">

        <div className="max-w-7xl mx-auto">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}

            className="text-center mb-14 sm:mb-16"
          >

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">

              Adventurer{" "}

              <span className="text-[#7DD3FC]">
                Experiences
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">

              Real stories from real adventurers who explored Kashmir's mountains with us
            </p>
          </motion.div>

          {/* REVIEWS */}
          <div className="mb-16">

            <ResponsiveMasonry
              columnsCountBreakPoints={{
                350: 1,
                768: 2,
                1024: 3,
              }}
            >

              <Masonry gutter="1.5rem">

                {reviews.map((review, index) => (

                  <motion.div
                    key={review.id}

                    initial={{
                      opacity: 0,
                      y: 50,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{ once: true }}

                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}

                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20"
                  >

                    {/* IMAGE */}
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

                    {/* CONTENT */}
                    <div className="p-5 sm:p-6">

                      <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#7DD3FC] mb-4 opacity-50" />

                      {/* STARS */}
                      <div className="flex mb-3">

                        {[...Array(review.rating)].map(
                          (_, i) => (
                            <Star
                              key={i}

                              className="w-4 h-4 fill-[#FB923C] text-[#FB923C]"
                            />
                          )
                        )}
                      </div>

                      {/* REVIEW */}
                      <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">

                        "{review.review}"
                      </p>

                      {/* FOOTER */}
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">

                        <div className="flex items-center min-w-0">

                          <img
                            src={review.image}

                            alt={review.name}

                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#7DD3FC] shrink-0"
                          />

                          <div className="ml-3 min-w-0">

                            <h4 className="text-white font-semibold text-sm truncate">

                              {review.name}
                            </h4>

                            <p className="text-white/60 text-xs truncate">

                              {review.trek}
                            </p>
                          </div>
                        </div>

                        <span className="text-white/40 text-xs whitespace-nowrap">

                          {review.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>

          {/* VIDEO TESTIMONIALS */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="mb-16"
          >

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 text-center">

              Video{" "}

              <span className="text-[#7DD3FC]">
                Testimonials
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

              {videoTestimonials.map(
                (video, index) => (

                  <motion.a
                    key={video.id}

                    href={video.videoUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}

                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}

                    viewport={{ once: true }}

                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}

                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20"
                  >

                    {/* IMAGE */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">

                      <img
                        src={video.thumbnail}

                        alt={video.title}

                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-[#0B1F33]/40 group-hover:bg-[#0B1F33]/20 transition-colors duration-300 flex items-center justify-center">

                        {/* PLAY BUTTON */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">

                          <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1"

                            fill="currentColor"

                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* BADGE */}
                      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-wide">

                        {video.platform}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 sm:p-6">

                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#7DD3FC] transition line-clamp-1">

                        {video.title}
                      </h3>

                      <p className="text-white/60 text-sm">

                        {video.name}
                      </p>
                    </div>
                  </motion.a>
                )
              )}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-5 py-10 sm:px-8 md:p-12 text-center"
          >

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">

              Share Your Experience
            </h2>

            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">

              Been on an adventure with Climbex Adventures? Share your experience on Google and inspire fellow trekkers.
            </p>

            <motion.a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"

              target="_blank"

              rel="noopener noreferrer"

              whileHover={{ scale: 1.03 }}

              whileTap={{ scale: 0.96 }}

              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-2xl sm:rounded-full font-semibold shadow-lg hover:shadow-[#4285F4]/40 transition-all duration-300 text-sm sm:text-base"
            >

              Review Us On Google
            </motion.a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}