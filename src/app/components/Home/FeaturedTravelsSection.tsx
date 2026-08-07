import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { destinations } from "../../../data/destinations";

export function FeaturedTravelsSection() {
  const featuredTrips = destinations
    .filter((d) => d.trips?.length > 0)
    .map((d) => ({
      ...d.trips[0],
      region: d.name,
    }));

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-[#7DD3FC]">Travels</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Discover breathtaking places to travel across Kashmir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTrips.slice(0, 3).map((trip) => (
            <Link key={trip.id} to={`/treks/${trip.slug}`}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.images[0]}
                    alt={trip.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

                  {"difficulty" in trip && trip.difficulty && (
                    <div className="absolute top-4 right-4 bg-[#FB923C] px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {trip.difficulty}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#7DD3FC] transition">
                    {trip.name}
                  </h3>
                  <p className="text-white/60 mt-1">{trip.region}</p>

                  <div className="flex justify-between text-sm text-white/60 mt-5">
                    <span>{trip.duration}</span>
                    <span>{trip.date}</span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-2xl font-bold text-[#7DD3FC]">
                      {trip.price}
                    </span>
                    <span className="text-white/70">See More →</span>
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