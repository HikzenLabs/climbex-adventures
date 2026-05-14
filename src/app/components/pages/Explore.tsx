import { motion } from "motion/react";
import { Link } from "react-router";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

export function Explore() {
  const [searchQuery, setSearchQuery] = useState("");

  const regions = [
    {
      id: "sonamarg",
      name: "Sonamarg",
      slug: "sonamarg",
      description: "Golden meadow with pristine glaciers and alpine lakes",
      trekCount: 12,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      highlight: "Great Lakes, Gangabal",
    },
    {
      id: "gulmarg",
      name: "Gulmarg",
      slug: "gulmarg",
      description: "Meadow of flowers with stunning mountain vistas",
      trekCount: 8,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      highlight: "Alpine peaks, Apharwat",
    },
    {
      id: "pahalgam",
      name: "Pahalgam",
      slug: "pahalgam",
      description: "Valley of shepherds surrounded by pine forests",
      trekCount: 15,
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
      highlight: "Tarsar, Kolahoi Glacier",
    },
    {
      id: "aru-valley",
      name: "Aru Valley",
      slug: "aru-valley",
      description: "Scenic valley base for high-altitude treks",
      trekCount: 10,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      highlight: "Tarsar Marsar, Lidderwat",
    },
    {
      id: "doodhpathri",
      name: "Doodhpathri",
      slug: "doodhpathri",
      description: "Valley of milk with lush green meadows",
      trekCount: 6,
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
      highlight: "Hidden gems, easy treks",
    },
    {
      id: "yusmarg",
      name: "Yusmarg",
      slug: "yusmarg",
      description: "Meadow of Jesus with panoramic mountain views",
      trekCount: 7,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      highlight: "Sunset Point, Nilnag Lake",
    },
  ];

  const filteredRegions = regions.filter((region) =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    region.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              Explore <span className="text-[#7DD3FC]">Kashmir</span> by Region
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
              Discover breathtaking trekking routes across Kashmir's most stunning regions
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
            {filteredRegions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/explore/${region.slug}`}>
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20 h-full">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={region.image}
                        alt={region.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/50 to-transparent" />

                      <div className="absolute top-4 right-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                        {region.trekCount} Treks
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center text-[#7DD3FC] mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{region.highlight}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7DD3FC] transition-colors">
                          {region.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {region.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Explore Region</span>
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

          {filteredRegions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-lg">No regions found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
