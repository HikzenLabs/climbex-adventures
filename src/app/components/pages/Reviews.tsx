import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import Masonry, {
  ResponsiveMasonry,
} from "react-responsive-masonry";

import {
  reviews,
  ratingSources,
  TRIPADVISOR_URL,
  TRIPADVISOR_WRITE_REVIEW_URL,
} from "../../../data/review";
import { RatingBadges, ReviewCard } from "../reviews/ReviewUI";

import { useSeo } from "../../utils/seo";
export function Reviews() {
  useSeo({ title: "Reviews", description: "Read reviews of Climbex Adventures — rated 5.0 on Tripadvisor (39 reviews) and 4.9 on Justdial." });

  return (
    <div className="min-h-screen pt-20 bg-[#0B1F33] overflow-hidden">

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

              Reviews from travellers who explored Kashmir with us
            </p>
          </motion.div>

          {/* RATINGS */}
          <div className="mb-12">
            <RatingBadges sources={ratingSources} />
          </div>

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

                    className="w-full"
                  >
                    <ReviewCard review={review} />
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>

            <div className="text-center mt-10">
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/85 hover:text-white hover:border-[#34E0A1]"
              >
                Read all 39 reviews on Tripadvisor <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

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

              Been on an adventure with Climbex Adventures? Share your experience on Tripadvisor and help fellow travellers plan their trip.
            </p>

            <motion.a
              href={TRIPADVISOR_WRITE_REVIEW_URL}

              target="_blank"

              rel="noopener noreferrer"

              whileHover={{ scale: 1.03 }}

              whileTap={{ scale: 0.96 }}

              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#34E0A1] text-[#0B1F33] rounded-2xl sm:rounded-full font-semibold shadow-lg hover:shadow-[#34E0A1]/40 transition-all duration-300 text-sm sm:text-base"
            >

              Review Us On Tripadvisor
            </motion.a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}