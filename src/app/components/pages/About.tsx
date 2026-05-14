import { motion } from "motion/react";
import { Shield, Heart, Award, Users, Mountain, Compass } from "lucide-react";

export function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Trekkers" },
    { icon: Mountain, value: "50+", label: "Treks Completed" },
    { icon: Award, value: "4.9", label: "Average Rating" },
    { icon: Shield, value: "100%", label: "Safety Record" },
  ];

  const team = [
    {
      name: "Aamir Khan",
      role: "Founder & Lead Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      bio: "15+ years of trekking experience in Kashmir",
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      bio: "Expert in trek logistics and planning",
    },
    {
      name: "Rahul Verma",
      role: "Senior Trek Leader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      bio: "Certified mountaineer and wilderness first responder",
    },
    {
      name: "Sarah Ali",
      role: "Guest Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      bio: "Ensuring every adventure is memorable",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our top priority. All our guides are trained in wilderness first aid and carry emergency equipment.",
    },
    {
      icon: Heart,
      title: "Sustainable Tourism",
      description:
        "We practice leave-no-trace principles and work with local communities to ensure responsible tourism.",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description:
        "Our experienced guides are locals who know every trail, ensuring you get the most authentic experience.",
    },
    {
      icon: Compass,
      title: "Authentic Experiences",
      description:
        "We create genuine connections with the mountains and local culture, not just tourist experiences.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000')",
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
              About <span className="text-[#7DD3FC]">Kashmir Adventures</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-[#7DD3FC] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-white/70 leading-relaxed max-w-4xl mx-auto">
              <p>
                Kashmir Adventures was founded in 2015 by Aamir Khan, a passionate mountaineer who
                grew up in the valleys of Kashmir. Having spent his childhood exploring the
                mountains and learning from local shepherds, Aamir realized that the world needed to
                experience the magic of Kashmir's wilderness in a safe, sustainable, and authentic
                way.
              </p>
              <p>
                What started as small group treks with friends has now grown into Kashmir's most
                trusted adventure company. We've helped over 500 adventurers discover the pristine
                alpine lakes, towering peaks, and warm hospitality that make Kashmir truly special.
              </p>
              <p>
                Our team consists of local guides who know every trail like the back of their hand,
                experienced mountaineers certified in wilderness first aid, and passionate
                individuals who believe in responsible tourism and giving back to the communities
                that host us.
              </p>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#7DD3FC]/50 transition-all duration-300 hover:scale-105">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-[#7DD3FC] text-sm mb-3">{member.role}</p>
                      <p className="text-white/60 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
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
