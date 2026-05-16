import { useParams } from "react-router-dom";
import { useState } from "react";
import { treks } from "../../../data/treks"

export function TrekDetails() {

  const { id } = useParams();

  const trek = treks.find((t) => t.id === id);

  const [currentImage, setCurrentImage] = useState(0);

  if (!trek) {
    return (
      <div className="min-h-screen bg-[#071018] flex items-center justify-center text-white text-3xl">
        Trek Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071018] text-white">

      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">

        <img
          src={trek.images[currentImage]}
          alt={trek.name}
          className="w-full h-full object-cover transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/40 to-transparent" />

        <div className="absolute bottom-10 left-0 w-full px-6">

          <div className="max-w-7xl mx-auto">

            <h1 className="text-4xl md:text-7xl font-black">
              {trek.name}
            </h1>

            <p className="text-xl text-white/70 mt-4">
              {trek.region}
            </p>
          </div>
        </div>
      </section>

      {/* THUMBNAILS */}
      <div className="max-w-7xl mx-auto px-4 mt-8">

        <div className="flex gap-4 overflow-x-auto">

          {trek.images.map((img, index) => (
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
                Trek Overview
              </h2>

              <p className="text-white/70 leading-relaxed text-lg">
                {trek.overview}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-24">

              <h3 className="text-2xl font-bold mb-6">
                Trek Details
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="text-white/50 text-sm">Price</p>
                  <h4 className="text-2xl font-bold text-[#7DD3FC]">
                    {trek.price}
                  </h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Duration</p>
                  <h4>{trek.duration}</h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Altitude</p>
                  <h4>{trek.altitude}</h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Group Size</p>
                  <h4>{trek.groupSize}</h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm">Difficulty</p>
                  <h4>{trek.difficulty}</h4>
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
      </section>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mt-8">

  <h2 className="text-3xl font-bold mb-8">
    Day Wise Itinerary
  </h2>

  <div className="space-y-6">

    {trek.itinerary.map((day, index) => (
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

<div className="grid md:grid-cols-2 gap-8 mt-8">

  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

    <h2 className="text-2xl font-bold mb-6 text-[#7DD3FC]">
      Includes
    </h2>

    <div className="space-y-4">

      {trek.includes.map((item, index) => (
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

      {trek.excludes.map((item, index) => (
        <div key={index} className="flex gap-3">
          <span>✕</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    What To Carry
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

    {trek.thingsToCarry.map((item, index) => (
      <div
        key={index}
        className="bg-white/5 rounded-2xl p-4"
      >
        {item}
      </div>
    ))}
  </div>
</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Safety Protocols
  </h2>

  <div className="space-y-4">

    {trek.safetyProtocols.map((item, index) => (
      <div
        key={index}
        className="flex gap-3 items-start"
      >
        <span className="text-[#7DD3FC]">🛡️</span>

        <p className="text-white/70">
          {item}
        </p>
      </div>
    ))}
  </div>
</div>
    </div>
    
  );
}