import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { MapPin, Mountain, Calendar } from "lucide-react";

export function RegionDetails() {
  const { region } = useParams();

  const regionData: Record<string, any> = {
    sonamarg: {
      name: "Sonamarg",
      description: "Known as the 'Meadow of Gold', Sonamarg is a pristine valley that serves as the gateway to some of Kashmir's most spectacular high-altitude treks. The region is famous for its alpine lakes, glaciers, and stunning mountain vistas.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000",
      bestSeason: "June to September",
      altitude: "2,800m - 4,200m",
      difficulty: "Moderate to Challenging",
      treks: [
        {
          id: "1",
          name: "Great Lakes Trek",
          duration: "7 Days",
          difficulty: "Moderate",
          price: "₹12,999",
          date: "June 15, 2026",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
        },
        {
          id: "2",
          name: "Gangabal Lake Trek",
          duration: "6 Days",
          difficulty: "Moderate",
          price: "₹11,499",
          date: "July 1, 2026",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
        },
        {
          id: "3",
          name: "Vishansar Lake Trek",
          duration: "5 Days",
          difficulty: "Easy",
          price: "₹9,999",
          date: "June 20, 2026",
          image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
        },
      ],
    },
  };

  const currentRegion = regionData[region || "sonamarg"] || regionData.sonamarg;

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${currentRegion.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/70 via-[#0B1F33]/60 to-[#0B1F33]" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center text-[#7DD3FC] mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm uppercase tracking-wide">Kashmir Valley</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {currentRegion.name}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {currentRegion.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <Calendar className="w-8 h-8 text-[#7DD3FC] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Best Season</h3>
              <p className="text-white/60 text-sm">{currentRegion.bestSeason}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <Mountain className="w-8 h-8 text-[#7DD3FC] mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Altitude Range</h3>
              <p className="text-white/60 text-sm">{currentRegion.altitude}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-8 h-8 text-[#7DD3FC] mx-auto mb-3 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Difficulty</h3>
              <p className="text-white/60 text-sm">{currentRegion.difficulty}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Available <span className="text-[#7DD3FC]">Treks</span>
            </h2>
            <p className="text-white/60 text-lg">
              Discover the best trekking routes in {currentRegion.name}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentRegion.treks.map((trek: any, index: number) => (
              <motion.div
                key={trek.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/treks/${trek.id}`}>
                  <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7DD3FC]/20">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={trek.image}
                        alt={trek.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#FB923C] text-white text-xs font-semibold rounded-full">
                        {trek.difficulty}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#7DD3FC] transition-colors">
                        {trek.name}
                      </h3>

                      <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                        <span>{trek.duration}</span>
                        <span>{trek.date}</span>
                      </div>

                      <div className="flex items-center justify-between">
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
        </div>
      </section>
    </div>
  );
}
