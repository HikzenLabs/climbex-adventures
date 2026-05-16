import { useParams } from "react-router-dom";
import { useState } from "react";
import { destinations } from "../../../data/destinations";

export function TripDetails() {

  const { destination, trip } = useParams();

  const currentDestination = destinations.find(
    (d) => d.slug === destination
  );

  const currentTrip = currentDestination?.trips.find(
    (t) => t.slug === trip
  );

  const [currentImage, setCurrentImage] = useState(0);

  if (!currentTrip) {
    return (
      <div className="min-h-screen bg-[#071018] flex items-center justify-center text-white text-3xl">
        Trip Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071018] text-white">

      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">

        <img
          src={currentTrip.images[currentImage]}
          alt={currentTrip.name}
          className="w-full h-full object-cover transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/40 to-transparent" />

        <div className="absolute bottom-10 left-0 w-full px-6">

          <div className="max-w-7xl mx-auto">

            <h1 className="text-4xl md:text-7xl font-black">
              {currentTrip.name}
            </h1>

            <p className="text-xl text-white/70 mt-4">
              {currentDestination?.name}
            </p>

          </div>
        </div>
      </section>

      {/* THUMBNAILS */}
      <div className="max-w-7xl mx-auto px-4 mt-8">

        <div className="flex gap-4 overflow-x-auto">

          {currentTrip.images.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              onClick={() => setCurrentImage(index)}
              className={`w-32 h-24 rounded-2xl object-cover cursor-pointer border-2 transition ${
                currentImage === index
                  ? "border-[#7DD3FC]"
                  : "border-transparent"
              }`}
            />
          ))}

        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Trip Overview
              </h2>

              <p className="text-white/70 leading-relaxed text-lg">
                {currentTrip.overview}
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-24">

              <h3 className="text-2xl font-bold mb-6">
                Trip Details
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="text-white/50 text-sm">Price</p>

                  <h4 className="text-2xl font-bold text-[#7DD3FC]">
                    {currentTrip.price}
                  </h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Duration</p>

                  <h4>{currentTrip.duration}</h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Difficulty</p>

                  <h4>{currentTrip.difficulty}</h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Best Season</p>

                  <h4>{currentDestination?.bestSeason}</h4>
                </div>

              </div>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-8 text-center bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 rounded-2xl font-semibold text-lg"
              >
                Book Now
              </a>

            </div>

          </div>

        </div>

        {/* ITINERARY */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mt-8">

          <h2 className="text-3xl font-bold mb-8">
            Day Wise Itinerary
          </h2>

          <div className="space-y-6">

            {currentTrip.itinerary.map((day: any, index: number) => (
              <div
                key={index}
                className="border-l-2 border-[#7DD3FC] pl-6"
              >
                <p className="text-[#7DD3FC] font-semibold">
                  {day.day}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {day.title}
                </h3>

                <p className="text-white/70 mt-3 leading-relaxed">
                  {day.description}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* INCLUDES / EXCLUDES */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-[#7DD3FC]">
              Includes
            </h2>

            <div className="space-y-4">

              {currentTrip.includes.map((item: string, index: number) => (
                <div key={index} className="flex gap-3">
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-red-400">
              Excludes
            </h2>

            <div className="space-y-4">

              {currentTrip.excludes.map((item: string, index: number) => (
                <div key={index} className="flex gap-3">
                  <span>✕</span>
                  <p>{item}</p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}