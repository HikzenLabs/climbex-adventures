import { Link } from "react-router-dom";
import { treks } from "../../../data/treks"
import { useState } from "react";

export function Treks() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);  
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");


  const filteredTreks = treks.filter((trek) => {

  const matchesSearch =
    trek.name.toLowerCase().includes(search.toLowerCase());

  const matchesDifficulty =
    difficultyFilter === "all"
      ? true
      : trek.difficulty.toLowerCase() ===
        difficultyFilter.toLowerCase();

  const matchesMonth =
    monthFilter === "all"
      ? true
      : trek.date.toLowerCase().includes(monthFilter);

  return (
    matchesSearch &&
    matchesDifficulty &&
    matchesMonth
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
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mb-12">

  <div className="grid md:grid-cols-3 gap-4">

    {/* SEARCH */}
    <input
      type="text"
      placeholder="Search trek by name..."

      value={search}

      onChange={(e) => setSearch(e.target.value)}

      className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
    />

    {/* MONTH FILTER */}
    <select
      value={monthFilter}

      onChange={(e) =>
        setMonthFilter(e.target.value)
      }

      className="bg-[#071018] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
    >
      <option value="all">All Months</option>

      <option value="june">June</option>

      <option value="july">July</option>

      <option value="august">August</option>

      <option value="september">
        September
      </option>
    </select>

    {/* DIFFICULTY FILTER */}
    <select
      value={difficultyFilter}

      onChange={(e) =>
        setDifficultyFilter(e.target.value)
      }

      className="bg-[#071018] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
    >
      <option value="all">
        All Difficulty
      </option>

      <option value="easy">Easy</option>

      <option value="moderate">
        Moderate
      </option>

      <option value="hard">Hard</option>
    </select>
  </div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {filteredTreks.map((trek) => (
            <Link
              key={trek.id}
              to={`/treks/${trek.id}`}
            >
              <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7DD3FC]/50 transition duration-300">

                <div
  className="relative h-72 overflow-hidden"
  onMouseEnter={() => setHoveredCard(trek.id)}
  onMouseLeave={() => setHoveredCard(null)}
>

  <img
    src={
      hoveredCard === trek.id
        ? trek.images[1]
        : trek.images[0]
    }

    alt={trek.name}

    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />

  <div className="absolute top-4 right-4 bg-[#FB923C] text-white px-3 py-1 rounded-full text-xs font-semibold">
    {trek.difficulty}
  </div>
</div>

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-white group-hover:text-[#7DD3FC] transition">
                    {trek.name}
                  </h2>

                  <p className="text-white/60 mt-2">
                    {trek.region}
                  </p>

                  <div className="flex justify-between mt-5 text-sm text-white/60">
                    <span>{trek.duration}</span>
                    <span>{trek.date}</span>
                  </div>

                  <div className="flex justify-between items-center mt-6">

                    <span className="text-2xl font-bold text-[#7DD3FC]">
                      {trek.price}
                    </span>

                    <span className="text-white/70">
                      See More →
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