import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { featuredWinter } from "../../../data/winter";
import { WinterImage } from "../winter/WinterUI";

// SUMMER featured adventures (Suru Valley trek + autumn Ladakh trips) — commented out for winter.
// import { treks } from "../../../data/treks";
// import { destinations } from "../../../data/destinations";
//
// const ladakhTrips =
//   destinations.find((d) => d.slug === "ladakh")?.trips ?? [];
//
// const featuredTrek = treks.find(
//   (t) => t.slug === "Suru-Valley-Adventure-Tour"
// );
//
// const featuredTrips = [
//   "Autumn-Ladakh",
//   "Kashmir-Ladakh-Autumn-Bliss",
// ]
//   .map((slug) => ladakhTrips.find((t) => t.slug === slug))
//   .filter((t) => t !== undefined);
//
// const adventures = [
//   ...(featuredTrek
//     ? [
//         {
//           id: `trek-${featuredTrek.id}`,
//           to: `/treks/${featuredTrek.slug}`,
//           name: featuredTrek.name,
//           region: featuredTrek.region,
//           difficulty: featuredTrek.difficulty,
//           duration: featuredTrek.duration,
//           date: featuredTrek.date,
//           price: featuredTrek.price,
//           image: featuredTrek.images[0],
//         },
//       ]
//     : []),
//   ...featuredTrips.map((trip) => ({
//     id: `trip-${trip.id}`,
//     to: `/trip/ladakh/${trip.slug}`,
//     name: trip.name,
//     region: "Ladakh",
//     difficulty: trip.difficulty,
//     duration: trip.duration,
//     date: trip.date,
//     price: trip.price,
//     image: trip.images[0],
//   })),
// ];

export function FeaturedAdventuresSection() {
  return (
    <section id="winter-adventures" className="pt-4 pb-14 md:py-20 bg-[#071018] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 px-4 sm:px-6 lg:px-8 mb-5 md:mb-10">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Winter <span className="text-[#7DD3FC]">Adventures</span>
            </h2>
            <p className="text-white/60 mt-1.5 text-sm sm:text-base">
              Skiing, snowboarding and ice climbing in Kashmir
            </p>
          </div>
          <p className="text-xs text-white/40 shrink-0 md:hidden">Swipe →</p>
        </div>

        {/* Mobile: swipeable row. Desktop: 3-column grid. */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 no-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
          {featuredWinter.map((a) => (
            <Link
              key={a.id}
              to={a.to}
              className="group snap-start shrink-0 w-[78%] sm:w-[45%] md:w-auto"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-[#7DD3FC]/50 transition-all duration-300"
              >
                <div className="relative h-44 md:h-60 overflow-hidden">
                  <WinterImage
                    src={a.image}
                    alt={a.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#FB923C] px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {a.activity}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-[#7DD3FC] transition">
                    {a.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{a.meta}</p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl md:text-2xl font-bold text-[#7DD3FC]">{a.price}</span>
                    <span className="flex items-center gap-1 text-sm text-white/70">
                      View <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
