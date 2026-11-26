import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { reviews, ratingSources } from "../../../data/review";
import { RatingBadges, ReviewCard } from "../reviews/ReviewUI";

export function FeaturedReviewsSection() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-[#0B1F33] to-[#0F3D2E]/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            What Our <span className="text-[#7DD3FC]">Adventurers</span> Say
          </h2>
          <p className="text-white/60 mt-3">Real reviews from travellers who explored Kashmir with us</p>
        </div>

        <div className="px-4">
          <RatingBadges sources={ratingSources} />
        </div>

        {/* Mobile: swipeable row. Desktop: 3-column grid. */}
        <div className="mt-8 flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 no-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="snap-start shrink-0 w-[82%] sm:w-[48%] md:w-auto">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 px-4">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/20 rounded-full px-6 py-3"
          >
            See more reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
