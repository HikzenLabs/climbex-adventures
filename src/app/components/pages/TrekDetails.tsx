import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { Calendar, MapPin, Mountain, Users, Backpack, Heart, Check, X } from "lucide-react";
import { useState } from "react";

export function TrekDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const trek = {
    id: "1",
    name: "Great Lakes Trek",
    region: "Sonamarg, Kashmir",
    duration: "7 Days / 6 Nights",
    difficulty: "Moderate",
    price: "₹12,999",
    dates: ["June 15, 2026", "June 22, 2026", "July 1, 2026", "July 8, 2026"],
    altitude: "4,200m",
    groupSize: "12-15 people",
    rating: 4.9,
    totalReviews: 127,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2000",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000",
    ],
    overview:
      "The Kashmir Great Lakes Trek is one of the most stunning high-altitude treks in India. This journey takes you through seven pristine alpine lakes, each more beautiful than the last. Experience lush meadows, snow-capped peaks, and the warm hospitality of Gujjar shepherds. This trek offers unparalleled views of Kashmir's diverse landscape - from dense pine forests to vast meadows carpeted with wildflowers.",
    itinerary: [
      {
        day: 1,
        title: "Srinagar to Sonamarg, Trek to Nichnai",
        description:
          "Drive from Srinagar to Sonamarg (80km, 3 hours). Begin trek to Nichnai camp through pine forests and meadows.",
        distance: "11 km",
        duration: "6-7 hours",
      },
      {
        day: 2,
        title: "Nichnai to Vishansar Lake",
        description:
          "Trek through beautiful meadows to reach the first alpine lake. Camp by the pristine Vishansar Lake.",
        distance: "12 km",
        duration: "7-8 hours",
      },
      {
        day: 3,
        title: "Vishansar to Gadsar via Kishansar and Gadsar Pass",
        description:
          "Cross the challenging Gadsar Pass at 4,200m. Witness stunning views of Kishansar Lake before descending to Gadsar.",
        distance: "14 km",
        duration: "8-9 hours",
      },
      {
        day: 4,
        title: "Gadsar to Satsar",
        description:
          "Trek through the valley of seven lakes. Camp amidst the most scenic landscape of the trek.",
        distance: "10 km",
        duration: "6-7 hours",
      },
      {
        day: 5,
        title: "Satsar to Gangabal Twin Lakes",
        description:
          "Reach the sacred Gangabal and Nundkol lakes at the foot of Mount Harmukh.",
        distance: "9 km",
        duration: "5-6 hours",
      },
      {
        day: 6,
        title: "Gangabal to Naranag",
        description: "Descend through forests to Naranag village. Trek ends.",
        distance: "13 km",
        duration: "7-8 hours",
      },
      {
        day: 7,
        title: "Naranag to Srinagar",
        description: "Drive back to Srinagar. Trek concludes.",
        distance: "50 km drive",
        duration: "2 hours",
      },
    ],
    includes: [
      "Accommodation in tents (twin sharing)",
      "All meals during trek",
      "Experienced trek leader and support staff",
      "First aid medical kits and oxygen cylinder",
      "All necessary permits and entry fees",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Transportation from Srinagar to trek start and back",
      "Kitchen and dining tents",
    ],
    excludes: [
      "Personal trekking gear (shoes, backpack, jacket)",
      "Travel insurance",
      "Personal expenses",
      "Meals during road journey",
      "Anything not mentioned in inclusions",
    ],
    whatToCarry: [
      "Trekking shoes with good grip",
      "Warm clothes (3 layers)",
      "Rain jacket and pants",
      "Sunglasses and sunscreen",
      "Personal toiletries",
      "Water bottle (2L capacity)",
      "Personal medication",
      "Headlamp/torch",
      "Power bank",
      "Valid ID proof",
    ],
    faqs: [
      {
        question: "What is the best time for this trek?",
        answer:
          "The best time is June to September when the weather is pleasant and all lakes are accessible. July-August offers the most wildflowers.",
      },
      {
        question: "Do I need prior trekking experience?",
        answer:
          "Basic fitness and some trekking experience is recommended. The trek involves long walking hours at high altitude.",
      },
      {
        question: "What about mobile connectivity?",
        answer:
          "Mobile connectivity is available only till Sonamarg. During the trek, there will be no network coverage.",
      },
      {
        question: "How do I prepare for high altitude?",
        answer:
          "Start cardiovascular exercises 4-6 weeks before. Stay hydrated during the trek and ascend gradually.",
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            <div>
              <div className="relative h-[500px] rounded-3xl overflow-hidden mb-4">
                <img
                  src={trek.images[selectedImage]}
                  alt={trek.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/50 to-transparent" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {trek.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-[#7DD3FC] scale-105"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center text-[#7DD3FC] mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{trek.region}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{trek.name}</h1>
                <div className="flex items-center gap-4 text-white/60 mb-6">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 fill-[#FB923C] text-[#FB923C] mr-1" />
                    <span className="text-sm">
                      {trek.rating} ({trek.totalReviews} reviews)
                    </span>
                  </div>
                  <div className="px-3 py-1 bg-[#FB923C] text-white text-xs font-semibold rounded-full">
                    {trek.difficulty}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <Calendar className="w-5 h-5 text-[#7DD3FC] mb-2" />
                  <div className="text-white/60 text-xs mb-1">Duration</div>
                  <div className="text-white font-semibold">{trek.duration}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <Mountain className="w-5 h-5 text-[#7DD3FC] mb-2" />
                  <div className="text-white/60 text-xs mb-1">Max Altitude</div>
                  <div className="text-white font-semibold">{trek.altitude}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <Users className="w-5 h-5 text-[#7DD3FC] mb-2" />
                  <div className="text-white/60 text-xs mb-1">Group Size</div>
                  <div className="text-white font-semibold">{trek.groupSize}</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <Backpack className="w-5 h-5 text-[#7DD3FC] mb-2" />
                  <div className="text-white/60 text-xs mb-1">Difficulty</div>
                  <div className="text-white font-semibold">{trek.difficulty}</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-[#7DD3FC]">{trek.price}</span>
                  <span className="text-white/60 text-sm ml-2">per person</span>
                </div>

                <div className="mb-4">
                  <label className="block text-white text-sm mb-2">Select Date</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#7DD3FC] transition-colors">
                    {trek.dates.map((date) => (
                      <option key={date} value={date} className="bg-[#0B1F33]">
                        {date}
                      </option>
                    ))}
                  </select>
                </div>

                <motion.a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-center rounded-full font-semibold shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300"
                >
                  Book Now on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-white/70 leading-relaxed">{trek.overview}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {trek.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#7DD3FC] text-[#0B1F33] rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-2">{day.title}</h3>
                        <p className="text-white/60 text-sm mb-3">{day.description}</p>
                        <div className="flex gap-4 text-xs text-white/40">
                          <span>📍 {day.distance}</span>
                          <span>⏱️ {day.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
                <ul className="space-y-3">
                  {trek.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70">
                      <Check className="w-5 h-5 text-[#7DD3FC] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">What's Not Included</h2>
                <ul className="space-y-3">
                  {trek.excludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70">
                      <X className="w-5 h-5 text-[#FB923C] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">What to Carry</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trek.whatToCarry.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <Backpack className="w-5 h-5 text-[#7DD3FC] flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {trek.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <summary className="text-white font-semibold cursor-pointer list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-[#7DD3FC] group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="text-white/60 text-sm mt-4 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 md:hidden bg-[#0B1F33]/95 backdrop-blur-xl border-t border-white/10 p-4 z-40"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-[#7DD3FC]">{trek.price}</div>
            <div className="text-white/60 text-xs">per person</div>
          </div>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold shadow-lg"
          >
            Book Now
          </a>
        </div>
      </motion.div>
    </div>
  );
}
