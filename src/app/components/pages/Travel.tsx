import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export function Travel() {
  const [searchQuery, setSearchQuery] = useState("");

  const destinations = [
    {
      id: "kashmir-valley",
      name: "Kashmir Valley",
      slug: "kashmir-valley",
      description: "Golden meadow with pristine glaciers and alpine lakes",
      tripsCount: 3,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      highlight: "Dal Lake, Shankaracharya Temple",
    },
    {
      id: "ladakh",
      name: "Ladakh",
      slug: "ladakh",
      description: "High-altitude desert with dramatic landscapes",
      tripsCount: 3,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      highlight: "Pangong Lake, Nubra Valley",
    },
    // {
    //   id: "indonesia",
    //   name: "Indonesia",
    //   slug: "indonesia",
    //   description: "Tropical paradise with lush jungles and volcanic peaks",
    //   tripsCount: 15,
    //   image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
    //   highlight: "Mount Rinjani, Bali",
    // },
  ];

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/90 via-[#0B1F33]/80 to-[#0B1F33]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explore <span className="text-[#7DD3FC]">Destinations</span> by Region
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Discover breathtaking trips across various stunning destinations
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search regions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#7DD3FC] transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/travel/${destination.slug}`}>
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20 h-full">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/50 to-transparent" />

                      <div className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                        {destination.tripsCount} Trips
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center text-[#7DD3FC] mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{destination.highlight}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7DD3FC] transition-colors">
                          {destination.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {destination.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Explore Destination</span>
                        <span className="text-[#7DD3FC] group-hover:translate-x-2 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-lg">No destinations found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
