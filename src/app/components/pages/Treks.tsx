import { Link } from "react-router-dom";
import { treks } from "../../../data/treks"
import { useState } from "react";

export function Treks() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);  
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");

const filteredTreks = treks.filter((trek) => {

  const matchesSearch =
    trek.name
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesDifficulty =
    difficultyFilter === "all"
      ? true
      : trek.difficulty.toLowerCase() ===
        difficultyFilter.toLowerCase();

  const matchesMonth =
    monthFilter === "all"
      ? true
      : trek.date
          .toLowerCase()
          .includes(monthFilter.toLowerCase());

  const matchesRegion =
    regionFilter === "all"
      ? true
      : trek.region.toLowerCase() ===
        regionFilter.toLowerCase();

  return (
    matchesSearch &&
    matchesDifficulty &&
    matchesMonth &&
    matchesRegion
  );
});



  return (

    
    <div className="min-h-screen bg-[#071018] py-24 px-4">


      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            Explore <span className="text-[#7DD3FC]">Treks</span>
          </h1>

          <p className="text-white/60 mt-4">
            Discover breathtaking adventures in Kashmir
          </p>
        </div>
     <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 mb-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

    {/* SEARCH */}
    <input
      id="trek-search"
      name="trek-search"

      type="text"

      placeholder="Search trek..."

      value={search}

      onChange={(e) => setSearch(e.target.value)}

      className="h-12 bg-white/10 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#7DD3FC]/50 transition"
    />

    {/* REGION FILTER */}
    <select
      id="region-filter"
      name="region-filter"

      value={regionFilter}

      onChange={(e) =>
        setRegionFilter(e.target.value)
      }

      className="h-12 bg-[#071018]/80 border border-white/10 rounded-xl px-4 text-sm text-white outline-none focus:border-[#7DD3FC]/50 transition"
    >
      <option value="all">
        All Regions
      </option>

      <option value="Kashmir">
        Kashmir
      </option>

      <option value="Ladakh">
        Ladakh 
      </option>

      <option value="Baderwah">
        Baderwah
      </option>
    </select>

    {/* MONTH FILTER */}
    <select
      id="month-filter"
      name="month-filter"

      value={monthFilter}

      onChange={(e) =>
        setMonthFilter(e.target.value)
      }

      className="h-12 bg-[#071018]/80 border border-white/10 rounded-xl px-4 text-sm text-white outline-none focus:border-[#7DD3FC]/50 transition"
    >
      <option value="all">
        All Months
      </option>

      <option value="june">
        June
      </option>

      <option value="july">
        July
      </option>

      <option value="august">
        August
      </option>

      <option value="september">
        September
      </option>
    </select>

    {/* DIFFICULTY FILTER */}
    <select
      id="difficulty-filter"
      name="difficulty-filter"

      value={difficultyFilter}

      onChange={(e) =>
        setDifficultyFilter(e.target.value)
      }

      className="h-12 bg-[#071018]/80 border border-white/10 rounded-xl px-4 text-sm text-white outline-none focus:border-[#7DD3FC]/50 transition"
    >
      <option value="all">
        All Difficulty
      </option>

      <option value="easy">
        Easy
      </option>

      <option value="moderate">
        Moderate
      </option>

      <option value="hard">
        Hard
      </option>
    </select>

  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {filteredTreks.map((trek) => (
    <Link
      key={trek.id}
      to={`/treks/${trek.slug}`}
    >

      <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition-all duration-300 hover:-translate-y-2">

        {/* IMAGE */}
        <div
          className="relative h-72 overflow-hidden"
          onMouseEnter={() =>
            setHoveredCard(trek.slug)
          }
          onMouseLeave={() =>
            setHoveredCard(null)
          }
        >

          <img
            src={
              hoveredCard === trek.slug
                ? trek.images[1]
                : trek.images[0]
            }

            alt={trek.name}

            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

          {/* DIFFICULTY */}
          <div className="absolute top-4 right-4 bg-[#FB923C] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">

            {trek.difficulty}
          </div>

          {/* PRICE */}
          <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">

            <span className="text-[#7DD3FC] font-bold text-lg">
              {trek.price}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-white group-hover:text-[#7DD3FC] transition">

            {trek.name}
          </h2>

          {/* REGION */}
          <p className="text-white/60 mt-2">

            {trek.region}
          </p>

          {/* INFO */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-white/5 rounded-2xl p-3">

              <p className="text-white/40 text-xs">
                Duration
              </p>

              <h4 className="text-white font-semibold mt-1">
                {trek.duration}
              </h4>
            </div>

            <div className="bg-white/5 rounded-2xl p-3">

              <p className="text-white/40 text-xs">
                Altitude
              </p>

              <h4 className="text-white font-semibold mt-1">
                {trek.altitude}
              </h4>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between mt-6">

            <span className="text-white/50 text-sm">
              {trek.date}
            </span>

            <span className="text-[#7DD3FC] font-medium group-hover:translate-x-1 transition">
              Explore →
            </span>
          </div>

        </div>
      </div>

    </Link>
  ))}

</div>
      </div>
    </div>
  );
}