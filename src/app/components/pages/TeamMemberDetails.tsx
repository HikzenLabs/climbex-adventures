import { useParams } from "react-router-dom";

import {
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Award,
  Briefcase,
} from "lucide-react";

import { team } from "../../../data/about";

export function TeamMemberDetails() {

  const { slug } = useParams();

  const member = team.find(
    (m) => m.slug === slug
  );

  if (!member) {
    return (
      <div className="min-h-screen bg-[#071018] flex items-center justify-center text-white text-3xl">
        Team Member Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#071018] text-white overflow-hidden">

      {/* BACKGROUND BLURS */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#7DD3FC]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#FB923C]/10 blur-[120px] rounded-full" />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-br from-[#7DD3FC]/20 to-[#FB923C]/10 blur-3xl rounded-[40px]" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden">

              <img
                src={member.image}

                alt={member.name}

                className="w-full h-[450px] sm:h-[550px] object-cover object-top"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#7DD3FC] uppercase tracking-[4px] text-xs sm:text-sm mb-4">

              Climbex Adventures Team
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">

              {member.name}
            </h1>

            <p className="text-xl sm:text-2xl text-[#7DD3FC] mt-5">

              {member.role}
            </p>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mt-8">

              {member.bio}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center gap-3 text-[#7DD3FC]">

                  <Briefcase className="w-5 h-5" />

                  <p className="text-sm text-white/50">
                    Experience
                  </p>
                </div>

                <h4 className="text-xl font-bold mt-3">

                  {member.experience}
                </h4>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

                <div className="flex items-center gap-3 text-[#7DD3FC]">

                  <MapPin className="w-5 h-5" />

                  <p className="text-sm text-white/50">
                    Location
                  </p>
                </div>

                <h4 className="text-xl font-bold mt-3">

                  {member.location}
                </h4>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href={member.social.instagram}

                target="_blank"

                rel="noopener noreferrer"

                className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40 transition-all duration-300"
              >

                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={member.social.youtube}

                target="_blank"

                rel="noopener noreferrer"

                className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >

                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* ABOUT */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 sm:p-8">

              <h2 className="text-3xl sm:text-4xl font-black mb-8">

                About
              </h2>

              <p className="text-white/70 leading-relaxed text-base sm:text-lg">

                {member.bio}
              </p>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 sm:p-8">

              <h2 className="text-3xl sm:text-4xl font-black mb-8">

                Achievements
              </h2>

              <div className="space-y-5">

                {member.achievements.map(
                  (achievement, index) => (

                    <div
                      key={index}

                      className="flex gap-4 items-start"
                    >

                      <div className="w-10 h-10 rounded-2xl bg-[#7DD3FC]/10 border border-[#7DD3FC]/20 flex items-center justify-center shrink-0">

                        <Award className="w-5 h-5 text-[#7DD3FC]" />
                      </div>

                      <p className="text-white/70 leading-relaxed pt-2">

                        {achievement}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 sm:p-8 sticky top-24">

              <h3 className="text-2xl sm:text-3xl font-black mb-8">

                Professional Details
              </h3>

              <div className="space-y-8">

                <div>

                  <p className="text-white/40 text-sm">
                    Experience
                  </p>

                  <h4 className="text-lg font-semibold mt-2">

                    {member.experience}
                  </h4>
                </div>

                <div className="h-px bg-white/10" />

                <div>

                  <p className="text-white/40 text-sm">
                    Location
                  </p>

                  <h4 className="text-lg font-semibold mt-2">

                    {member.location}
                  </h4>
                </div>

                <div className="h-px bg-white/10" />

                <div>

                  <p className="text-white/40 text-sm">
                    Specialization
                  </p>

                  <h4 className="text-lg font-semibold mt-2 leading-relaxed">

                    {member.specialization}
                  </h4>
                </div>
              </div>

              {/* CONTACT BUTTON */}
              <a
                href="https://wa.me/9797843568"

                target="_blank"

                rel="noopener noreferrer"

                className="block w-full mt-10 text-center bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-green-500/20"
              >

                Connect Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}