import { motion } from "motion/react";
import { Link } from "react-router";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export function Treks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [hoveredTrekId, setHoveredTrekId] = useState<string | null>(null);

  const allTreks = [
    {
      id: "1",
      name: "Great Lakes Trek",
      region: "Sonamarg",
      duration: "7 Days",
      difficulty: "Moderate",
      price: "₹12,999",
      date: "June 15, 2026",
      altitude: "4,200m",
      groupSize: "12-15",
      description: "Experience seven pristine alpine lakes in one epic adventure",
      status: "upcoming",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
      ],
    },
    {
      id: "2",
      name: "Tarsar Marsar Trek",
      region: "Aru Valley",
      duration: "6 Days",
      difficulty: "Moderate",
      price: "₹11,499",
      date: "July 1, 2026",
      altitude: "3,800m",
      groupSize: "10-12",
      description: "Twin alpine lakes surrounded by meadows and mountains",
      status: "upcoming",
      images: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
      ],
    },
    {
      id: "3",
      name: "Kashmir Alpine Trek",
      region: "Gulmarg",
      duration: "5 Days",
      difficulty: "Easy",
      price: "₹9,999",
      date: "June 20, 2026",
      altitude: "3,200m",
      groupSize: "15-18",
      description: "Perfect introduction to Kashmir's mountain landscapes",
      status: "upcoming",
      images: [
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      ],
    },
    {
      id: "4",
      name: "Kolahoi Glacier Trek",
      region: "Pahalgam",
      duration: "8 Days",
      difficulty: "Challenging",
      price: "₹14,999",
      date: "August 5, 2026",
      altitude: "4,600m",
      groupSize: "8-10",
      description: "Reach Kashmir's highest glacier with stunning views",
      status: "upcoming",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      ],
    },
    {
      id: "5",
      name: "Gangabal Lake Trek",
      region: "Sonamarg",
      duration: "6 Days",
      difficulty: "Moderate",
      price: "₹11,999",
      date: "June 25, 2026",
      altitude: "3,600m",
      groupSize: "12-14",
      description: "Sacred lake at the foot of Mount Harmukh",
      status: "upcoming",
      images: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      ],
    },
    {
      id: "6",
      name: "Naranag Gangabal Trek",
      region: "Naranag",
      duration: "5 Days",
      difficulty: "Easy",
      price: "₹9,499",
      date: "July 10, 2026",
      altitude: "3,400m",
      groupSize: "15-18",
      description: "Ancient temple ruins and pristine alpine scenery",
      status: "upcoming",
      images: [
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      ],
    },
  ];

  const filteredTreks = allTreks.filter((trek) => {
    const matchesSearch =
      trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trek.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "all" || trek.difficulty.toLowerCase() === selectedDifficulty;
    const matchesStatus = selectedStatus === "all" || trek.status === selectedStatus;

    return matchesSearch && matchesDifficulty && matchesStatus;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1F33] to-[#0F3D2E]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              All <span className="text-[#7DD3FC]">Treks</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose your next adventure from our curated collection of Kashmir's most beautiful treks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search treks by name or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-[#7DD3FC] transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-white/60" />
                <span className="text-white/60 text-sm">Filters:</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedStatus("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedStatus === "all"
                      ? "bg-[#7DD3FC] text-[#0B1F33]"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedStatus("upcoming")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedStatus === "upcoming"
                      ? "bg-[#7DD3FC] text-[#0B1F33]"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  Upcoming
                </button>
              </div>

              <div className="h-4 w-px bg-white/20" />

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedDifficulty("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDifficulty === "all"
                      ? "bg-[#FB923C] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  All Levels
                </button>
                <button
                  onClick={() => setSelectedDifficulty("easy")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDifficulty === "easy"
                      ? "bg-[#FB923C] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  Easy
                </button>
                <button
                  onClick={() => setSelectedDifficulty("moderate")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDifficulty === "moderate"
                      ? "bg-[#FB923C] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  Moderate
                </button>
                <button
                  onClick={() => setSelectedDifficulty("challenging")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDifficulty === "challenging"
                      ? "bg-[#FB923C] text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  Challenging
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks.map((trek, index) => (
              <motion.div
                key={trek.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredTrekId(trek.id)}
                onHoverEnd={() => setHoveredTrekId(null)}
              >
                <Link to={`/treks/${trek.id}`}>
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20">
                    <div className="relative h-64 overflow-hidden">
                      {trek.images.map((img, imgIndex) => (
                        <motion.img
                          key={imgIndex}
                          src={img}
                          alt={trek.name}
                          initial={{ opacity: imgIndex === 0 ? 1 : 0 }}
                          animate={{
                            opacity:
                              hoveredTrekId === trek.id
                                ? imgIndex === (Date.now() % trek.images.length)
                                  ? 1
                                  : 0
                                : imgIndex === 0
                                ? 1
                                : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#FB923C] text-white text-xs font-semibold rounded-full">
                        {trek.difficulty}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#7DD3FC] transition-colors">
                        {trek.name}
                      </h3>
                      <p className="text-white/60 text-sm mb-3">{trek.region}</p>
                      <p className="text-white/50 text-xs mb-4 line-clamp-2">{trek.description}</p>

                      <div className="grid grid-cols-2 gap-2 text-xs text-white/60 mb-4">
                        <div>Duration: {trek.duration}</div>
                        <div>Altitude: {trek.altitude}</div>
                        <div>Group: {trek.groupSize}</div>
                        <div>{trek.date}</div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-2xl font-bold text-[#7DD3FC]">{trek.price}</span>
                        <span className="text-white/60 text-sm hover:text-white transition-colors">
                          See More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredTreks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-lg">No treks found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("all");
                  setSelectedStatus("all");
                }}
                className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
