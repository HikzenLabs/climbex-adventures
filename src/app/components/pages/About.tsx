import { motion } from "motion/react";
import { Shield, Heart, Award, Users, Mountain, Compass } from "lucide-react";
import {
  stats,
  team,
  values,
  story,
} from "../../../data/about";
import { Link } from "react-router-dom";
import { useSeo } from "../../utils/seo";
export function About() {
  useSeo({ title: "About Us", description: "Meet Climbex Adventures — a Srinagar-based team of mountaineers guiding treks, winter sports and trips across Kashmir and Ladakh since 2015." });

  

  


  return (
    <div className="min-h-screen">
      <section className="relative pt-52 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/kolahoi_home_pic.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/90 via-[#0B1F33]/80 to-[#0B1F33]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-[#7DD3FC]">Climbex Adventures</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Born in the mountains, we've been sharing the magic of Kashmir's wilderness with
              adventurers from around the world since 2015.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1F33]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
            {stats.map((stat, index) => {
              const card = (
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-[#7DD3FC] mx-auto mb-3 md:mb-4" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
                  {stat.sub && <div className="text-white/40 text-xs mt-1">{stat.sub}</div>}
                </div>
              );
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  {stat.url ? (
                    <a href={stat.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Story</h2>
            {story[0].paragraphs.map(
  (paragraph, index) => (
    <p
      key={index}
         className="space-y-6 text-white/70 leading-relaxed max-w-4xl mx-auto">
      {paragraph}
    </p>
  )
)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Why Choose <span className="text-[#7DD3FC]">Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#7DD3FC]/50 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-[#7DD3FC] mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Meet Our <span className="text-[#7DD3FC]">Team</span>
            </h2>
            <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">

  {team.map((member, index) => (

    <Link
      key={member.name}

      to={`/team/${member.slug}`}

      className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[340px] max-w-sm"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}

        className="group h-full"
      >

        <div className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#7DD3FC]/50 transition-all duration-300 hover:scale-105 flex flex-col">

          {/* IMAGE */}
          <div className="relative aspect-[4/5] overflow-hidden">

            <img
              src={member.image}

              alt={member.name}

              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="p-6 flex flex-col flex-1">

            <h3 className="text-xl font-semibold text-white mb-1 text-center">

              {member.name}
            </h3>

            <p className="text-[#7DD3FC] text-sm mb-4 text-center">

              {member.role}
            </p>

            <p className="text-white/60 text-sm text-center leading-relaxed flex-1">

              {member.bio}
            </p>

            {/* BUTTON */}
            <div className="mt-6 flex justify-center">

              <span className="px-5 py-2 rounded-full bg-[#7DD3FC]/10 border border-[#7DD3FC]/20 text-[#7DD3FC] text-sm font-medium">

                View Profile
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  ))}
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Our Mission & <span className="text-[#7DD3FC]">Vision</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#7DD3FC] mb-4">Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To provide safe, authentic, and sustainable trekking experiences that connect
                  people with the pristine beauty of Kashmir while supporting local communities and
                  preserving the environment for future generations.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#7DD3FC] mb-4">Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be Kashmir's most trusted adventure company, known for exceptional experiences,
                  environmental stewardship, and creating lasting positive impacts on both
                  adventurers and local communities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
