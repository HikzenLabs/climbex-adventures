import { Star } from "lucide-react";
import {reviews } from "../../../data/review"

export function FeaturedReviewsSection (){
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1F33] to-[#0F3D2E]/40">

  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">

      <h2 className="text-4xl md:text-5xl font-bold text-white">

        What Our{" "}

        <span className="text-[#7DD3FC]">
          Adventurers
        </span>{" "}

        Say
      </h2>

      <p className="text-white/60 mt-4">

        Real stories from real adventurers
      </p>
    </div>

    {/* REVIEWS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

      {reviews.slice(0, 3).map((review) => (

        <div
          key={review.id}

          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#7DD3FC]/30 transition-all duration-300"
        >

          {/* USER */}
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

          {/* STARS */}
          <div className="flex gap-1 mb-4">

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
          <p className="text-white/70 leading-relaxed">

            "{review.review}"
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}