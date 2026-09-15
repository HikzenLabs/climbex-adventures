import { useParams } from "react-router-dom";
import { useState } from "react";

import { treks } from "../../../data/treks";

export function TrekDetails() {

  const { slug } = useParams();

  const trek = treks.find(
    (t) => t.slug === slug
  );

  const [currentImage, setCurrentImage] =
    useState(0);

  if (!trek) {
    return (
      <div className="min-h-screen bg-[#071018] flex items-center justify-center text-white text-3xl">
        Trek Not Found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#071018] text-white overflow-hidden">

      {/* BACKGROUND BLURS */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#7DD3FC]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FB923C]/10 blur-[120px] rounded-full" />

      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">

        <img
          src={trek.images[currentImage]}
          alt={trek.name}
          className="w-full h-full object-cover transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/40 to-black/20" />

        <div className="absolute bottom-10 left-0 w-full px-6">

          <div className="max-w-7xl mx-auto">

            <p className="text-[#7DD3FC] uppercase tracking-[4px] text-sm mb-4">
              Climbex Adventures 
            </p>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              {trek.name}
            </h1>

            <p className="text-xl text-white/70 mt-4">
              {trek.region}
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">

                <p className="text-white/40 text-xs">
                  Duration
                </p>

                <h4 className="font-semibold">
                  {trek.duration}
                </h4>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">

                <p className="text-white/40 text-xs">
                  Altitude
                </p>

                <h4 className="font-semibold">
                  {trek.altitude}
                </h4>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">

                <p className="text-white/40 text-xs">
                  Difficulty
                </p>

                <h4 className="font-semibold">
                  {trek.difficulty}
                </h4>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">

                <p className="text-white/40 text-xs">
                  Group Size
                </p>

                <h4 className="font-semibold">
                  {trek.groupSize}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THUMBNAILS */}
      <div className="max-w-7xl mx-auto px-4 mt-8">

        <div className="flex gap-4 overflow-x-auto pb-2">

          {trek.images.map((img, index) => (
            <img
              key={index}

              src={img}

              onClick={() =>
                setCurrentImage(index)
              }

              className={`w-36 h-24 rounded-2xl object-cover cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                currentImage === index
                  ? "border-[#7DD3FC]"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* OVERVIEW */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 hover:-translate-y-1 transition-all duration-300">

              <h2 className="text-4xl font-black mb-8 tracking-tight">
                Trek Overview
              </h2>

              <p className="text-white/70 leading-relaxed text-lg">
                {trek.overview}
              </p>
            </div>

            {/* ITINERARY */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">

              <h2 className="text-4xl font-black mb-10 tracking-tight">
                Day Wise Itinerary
              </h2>

              <div className="space-y-8">

                {trek.itinerary.map(
                  (day, index) => (
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
                  )
                )}
              </div>
            </div>

            {/* INCLUDES / EXCLUDES */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* INCLUDES */}
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">

                <h2 className="text-3xl font-black mb-8 text-[#7DD3FC]">
                  Includes
                </h2>

                <div className="space-y-4">

                  {trek.includes.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex gap-3"
                      >

                        <span>✓</span>

                        <p className="text-white/70">
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* EXCLUDES */}
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">

                <h2 className="text-3xl font-black mb-8 text-red-400">
                  Excludes
                </h2>

                <div className="space-y-4">

                  {trek.excludes.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex gap-3"
                      >

                        <span>✕</span>

                        <p className="text-white/70">
                          {item}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* WHAT TO CARRY */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">

              <h2 className="text-4xl font-black mb-8 tracking-tight">
                What To Carry
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {trek.thingsToCarry.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-2xl p-4 border border-white/10"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* SAFETY */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8">

              <h2 className="text-4xl font-black mb-8 tracking-tight">
                Safety Protocols
              </h2>

              <div className="space-y-5">

                {trek.safetyProtocols.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >

                      <span className="text-[#7DD3FC]">
                        🛡️
                      </span>

                      <p className="text-white/70">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 sticky top-24 shadow-2xl shadow-black/30">

              <h3 className="text-3xl font-black mb-8">
                Trek Details
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="text-white/40 text-sm">
                    Price
                  </p>

                  <h4 className="text-4xl font-black text-[#7DD3FC] mt-1">
                    {trek.price}
                  </h4>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-white/40 text-sm">
                    Trek Distance
                  </p>

                  <h4 className="mt-1">
                    {trek.trekDistance}
                  </h4>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    Best Season
                  </p>

                  <h4 className="mt-1">
                    {trek.bestSeason}
                  </h4>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    Pickup Point
                  </p>

                  <h4 className="mt-1">
                    {trek.pickupPoint}
                  </h4>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    Temperature
                  </p>

                  <h4 className="mt-1">
                    {trek.temperature}
                  </h4>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    Fitness Required
                  </p>

                  <h4 className="mt-1">
                    {trek.fitnessRequired}
                  </h4>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    Stay Type
                  </p>

                  <h4 className="mt-1">
                    {trek.stayType}
                  </h4>
                </div>
              </div>

              {/* BUTTON */}
              <a
                href="https://wa.me/9797843568"
                target="_blank"
                rel="noopener noreferrer"

                className="block w-full mt-10 text-center bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                Book Now
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}