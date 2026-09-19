import { Link } from "react-router-dom";
import { treks } from "../../../data/treks";
import { destinations } from "../../../data/destinations";
import { motion } from "motion/react";

const ladakhTrips =
  destinations.find((d) => d.slug === "ladakh")?.trips ?? [];

const featuredTrek = treks.find(
  (t) => t.slug === "Suru-Valley-Adventure-Tour"
);

const featuredTrips = [
  "Autumn-Ladakh",
  "Kashmir-Ladakh-Autumn-Bliss",
]
  .map((slug) => ladakhTrips.find((t) => t.slug === slug))
  .filter((t) => t !== undefined);

const adventures = [
  ...(featuredTrek
    ? [
        {
          id: `trek-${featuredTrek.id}`,
          to: `/treks/${featuredTrek.slug}`,
          name: featuredTrek.name,
          region: featuredTrek.region,
          difficulty: featuredTrek.difficulty,
          duration: featuredTrek.duration,
          date: featuredTrek.date,
          price: featuredTrek.price,
          image: featuredTrek.images[0],
        },
      ]
    : []),
  ...featuredTrips.map((trip) => ({
    id: `trip-${trip.id}`,
    to: `/trip/ladakh/${trip.slug}`,
    name: trip.name,
    region: "Ladakh",
    difficulty: trip.difficulty,
    duration: trip.duration,
    date: trip.date,
    price: trip.price,
    image: trip.images[0],
  })),
];

export function FeaturedAdventuresSection () {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-[#7DD3FC]">Adventures</span>
            </h2>

            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Discover breathtaking trekking and travel experiences across Kashmir and Ladakh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {adventures.map((adventure) => (
              <Link
      key={adventure.id}
      to={adventure.to}
    >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300"
                >

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={adventure.image}
                      alt={adventure.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 bg-[#FB923C] px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {adventure.difficulty}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#7DD3FC] transition">
                      {adventure.name}
                    </h3>

                    <p className="text-white/60 mt-1">
                      {adventure.region}
                    </p>

                    <div className="flex justify-between text-sm text-white/60 mt-5">
                      <span>{adventure.duration}</span>
                      <span>{adventure.date}</span>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <span className="text-2xl font-bold text-[#7DD3FC]">
                        {adventure.price}
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
  )
}
