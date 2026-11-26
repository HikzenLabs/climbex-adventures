import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { skiPackages, skiingInfo, winterImages } from "../../../data/winter";
import { buildEnquiryLink } from "../../utils/whatsapp";
import {
  PageHero,
  FactGrid,
  Section,
  Card,
  CheckList,
  Timeline,
  FAQList,
  WhatsAppButton,
  BottomCTA,
  JumpLinks,
  WinterImage,
} from "../winter/WinterUI";

import { useSeo } from "../../utils/seo";
export function Skiing() {
  useSeo({ title: "Skiing in Gulmarg – Courses & Packages", description: "Learn to ski in Gulmarg, Kashmir with JIM&WS and IISM certified instructors. 1-day, 5-day and 7-day ski courses and backcountry skiing. From ₹4,500.", image: "/images/winter/skiing/cover.jpg" });

  const enquiry = buildEnquiryLink("Skiing in Gulmarg");

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <PageHero
        image={winterImages.skiing}
        eyebrow="Gulmarg · Kashmir"
        title="Skiing in"
        highlight="Gulmarg"
        subtitle="Learn to ski or chase Himalayan powder with JIM&WS and IISM certified instructors — courses for complete beginners through to backcountry."
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
          <a
            href="#packages"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] font-semibold shadow-lg"
          >
            View Ski Packages
          </a>
          <WhatsAppButton href={enquiry} label="Ask on WhatsApp" />
        </div>
        <FactGrid facts={skiingInfo.facts} />
      </PageHero>

      <JumpLinks
        links={[
          { id: "packages", label: "Packages" },
          { id: "best-time", label: "Best time" },
          { id: "slopes", label: "Slopes" },
          { id: "rental", label: "Rental" },
          { id: "reach", label: "How to reach" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* PACKAGES */}
      <Section
        id="packages"
        title="Gulmarg Ski"
        highlight="Packages"
        intro="Tap a package to see the day-by-day plan, inclusions and booking details."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skiPackages.map((p) => (
            <Link key={p.id} to={`/skiing/${p.slug}`} className="group">
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden group-hover:border-[#7DD3FC]/50 transition"
              >
                <div className="relative h-44 overflow-hidden">
                  <WinterImage
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#FB923C] px-3 py-1 rounded-full text-xs font-semibold">
                    {p.level}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold leading-snug group-hover:text-[#7DD3FC] transition">
                    {p.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-1.5">{p.tagline}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/55 mt-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {p.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {p.location}
                    </span>
                  </div>
                  <div className="flex items-end justify-between mt-auto pt-5">
                    <div>
                      {p.originalPrice && (
                        <p className="text-xs text-white/40 line-through">{p.originalPrice}</p>
                      )}
                      <p className="text-2xl font-bold text-[#7DD3FC]">
                        {p.price}
                        <span className="text-xs text-white/50 font-normal"> /person</span>
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm text-white/70">
                      Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>

      {/* INTRO + WHY */}
      <Section title="Why ski in" highlight="Gulmarg?">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <p className="text-white/75 leading-relaxed">{skiingInfo.intro}</p>
            <p className="text-white/75 leading-relaxed mt-4">{skiingInfo.iism}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">Why ski with Climbex</h3>
            <CheckList items={skiingInfo.whyClimbex} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* BEST TIME */}
      <Section id="best-time" title="Best Time to" highlight="Ski">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skiingInfo.bestTime.map((m) => (
            <Card key={m.month}>
              <h3 className="text-lg font-bold text-[#7DD3FC]">{m.month}</h3>
              <p className="text-white/70 mt-2 leading-relaxed text-sm">{m.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SLOPES */}
      <Section
        id="slopes"
        title="Gulmarg Ski"
        highlight="Slopes"
        intro="From the nursery slopes by the village to the top of the gondola at around 13,000 ft."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skiingInfo.slopes.map((s) => (
            <Card key={s.name}>
              <span className="inline-block text-xs font-semibold text-[#071018] bg-[#7DD3FC] rounded-full px-3 py-1">
                {s.level}
              </span>
              <h3 className="text-lg font-bold mt-3">{s.name}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{s.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* RENTAL + HELI */}
      <Section id="rental" title="Rental &" highlight="Heli-skiing">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-bold mb-2">Ski clothing rental</h3>
            <p className="text-white/60 text-sm mb-4">
              Skis, boots and poles are included in all our packages. Clothing can be rented in Gulmarg:
            </p>
            <div className="divide-y divide-white/10">
              {skiingInfo.rental.map((r) => (
                <div key={r.item} className="flex justify-between py-3 text-sm">
                  <span className="text-white/80">{r.item}</span>
                  <span className="font-semibold text-[#7DD3FC]">{r.price}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-3">Heli-skiing</h3>
            <p className="text-white/70 leading-relaxed">{skiingInfo.heliSkiing}</p>
          </Card>
        </div>
      </Section>

      {/* TIPS + CARRY */}
      <Section title="Tips &" highlight="What to Carry">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-bold mb-5">Skiing tips</h3>
            <CheckList items={skiingInfo.tips} variant="plain" />
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">What to carry</h3>
            <CheckList items={skiingInfo.whatToCarry} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* HOW TO REACH */}
      <Section id="reach" title="How to Reach" highlight="Gulmarg">
        <Card>
          <Timeline items={skiingInfo.howToReach.map((r) => ({ title: r.mode, text: r.text }))} />
        </Card>
      </Section>

      {/* FAQ */}
      <Section id="faqs" title="Skiing" highlight="FAQs">
        <FAQList faqs={skiingInfo.faqs} />
      </Section>

      <BottomCTA
        title="Ready to hit the slopes?"
        text="Tell us your dates and experience level — we'll suggest the right course and confirm availability."
        href={enquiry}
      />
    </div>
  );
}
