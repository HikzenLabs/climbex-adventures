import { snowboardingCourses, snowboardingInfo, winterImages } from "../../../data/winter";
import { buildBookingLink, buildEnquiryLink } from "../../utils/whatsapp";
import {
  PageHero,
  FactGrid,
  Section,
  Card,
  CheckList,
  IncludesExcludes,
  Timeline,
  FAQList,
  WhatsAppButton,
  BottomCTA,
  JumpLinks,
} from "../winter/WinterUI";

import { useSeo } from "../../utils/seo";
export function Snowboarding() {
  useSeo({ title: "Gulmarg Snowboarding Courses & Prices", description: "Snowboarding courses in Gulmarg, Kashmir: 1-day experience, 3-day and 5-day courses with stay, meals and gear. Certified instructors. From ₹7,000.", image: "/images/winter/snowboarding/cover.jpg" });

  const enquiry = buildEnquiryLink("Snowboarding in Gulmarg");
  const info = snowboardingInfo;

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <PageHero
        image={winterImages.snowboarding}
        eyebrow="Gulmarg · Kashmir"
        title="Gulmarg"
        highlight="Snowboarding"
        subtitle="Snowboarding courses for first-timers and progressing riders — with stay, meals, board gear and JIM&WS / IISM certified instructors."
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
          <a
            href="#courses"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] font-semibold shadow-lg"
          >
            Courses & Pricing
          </a>
          <WhatsAppButton href={enquiry} label="Ask on WhatsApp" />
        </div>
        <FactGrid facts={info.facts} />
      </PageHero>

      <JumpLinks
        links={[
          { id: "courses", label: "Courses & pricing" },
          { id: "included", label: "Inclusions" },
          { id: "terrain", label: "Terrain" },
          { id: "gondola", label: "Gondola" },
          { id: "best-time", label: "Best time" },
          { id: "packing", label: "Packing" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      {/* COURSES & PRICING */}
      <Section
        id="courses"
        title="Snowboarding Courses &"
        highlight="Pricing"
        intro="Prices are per person. All courses run with certified instructors in small groups."
      >
        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left">
            <thead className="bg-white/10 text-sm uppercase tracking-wider text-white/60">
              <tr>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Includes</th>
                <th className="px-6 py-4">Best for</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {snowboardingCourses.map((c) => (
                <tr key={c.name} className="bg-white/[0.03]">
                  <td className="px-6 py-5 font-semibold">{c.name}</td>
                  <td className="px-6 py-5 text-xl font-bold text-[#7DD3FC]">{c.price}</td>
                  <td className="px-6 py-5 text-white/75">{c.includes}</td>
                  <td className="px-6 py-5 text-white/75">{c.bestFor}</td>
                  <td className="px-6 py-5 text-right">
                    <WhatsAppButton
                      href={buildBookingLink({ name: `Snowboarding – ${c.name}`, price: c.price, location: "Gulmarg" })}
                      label="Book"
                      className="px-5 py-2.5 text-sm"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards (tables don't fit on phones) */}
        <div className="md:hidden space-y-4">
          {snowboardingCourses.map((c) => (
            <Card key={c.name}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold leading-snug">{c.name}</h3>
                <p className="text-2xl font-bold text-[#7DD3FC] shrink-0">{c.price}</p>
              </div>
              <dl className="mt-3 space-y-2 text-sm">
                <div>
                  <dt className="text-white/50">Includes</dt>
                  <dd className="text-white/85">{c.includes}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Best for</dt>
                  <dd className="text-white/85">{c.bestFor}</dd>
                </div>
              </dl>
              <WhatsAppButton
                href={buildBookingLink({ name: `Snowboarding – ${c.name}`, price: c.price, location: "Gulmarg" })}
                label="Book this course"
                className="w-full mt-5"
              />
            </Card>
          ))}
        </div>
      </Section>

      {/* INTRO */}
      <Section title="Why snowboard in" highlight="Gulmarg?">
        <Card>
          <p className="text-white/75 leading-relaxed">{info.intro}</p>
        </Card>
      </Section>

      {/* INCLUSIONS */}
      <Section id="included" title="Inclusions &" highlight="Exclusions">
        <IncludesExcludes includes={info.includes} excludes={info.excludes} />
      </Section>

      {/* TERRAIN */}
      <Section id="terrain" title="Terrain for every" highlight="Level">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {info.terrain.map((t) => (
            <Card key={t.level}>
              <h3 className="text-lg font-bold text-[#7DD3FC]">{t.level}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{t.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* RENTAL + ADVANCED */}
      <Section title="Rental &" highlight="Advanced Options">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-bold mb-2">Equipment rental</h3>
            <p className="text-white/60 text-sm mb-4">Board gear is already included in our courses. Daily rental rates in Gulmarg:</p>
            <div className="divide-y divide-white/10">
              {info.rental.map((r) => (
                <div key={r.item} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-white/80">{r.item}</span>
                  <span className="font-semibold text-[#7DD3FC] shrink-0">{r.price}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">Already riding? Go further</h3>
            <CheckList items={info.advanced} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* SAFETY */}
      <Section title="Safety on the" highlight="Mountain">
        <Card>
          <CheckList items={info.safety} />
        </Card>
      </Section>

      {/* GONDOLA */}
      <Section
        id="gondola"
        title="Gulmarg Gondola"
        highlight="Guide"
        intro={`Operating hours: ${info.gondola.hours}.`}
      >
        <div className="grid md:grid-cols-3 gap-4">
          {info.gondola.phases.map((p) => (
            <Card key={p.name}>
              <h3 className="text-lg font-bold text-[#7DD3FC]">{p.name}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{p.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-white/10 text-xs uppercase tracking-wider text-white/60">
              <tr>
                <th className="px-4 py-3">Pass</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Indian</th>
                <th className="px-4 py-3">Foreign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {info.gondola.tickets.map((t) => (
                <tr key={t.pass + t.route} className="bg-white/[0.03]">
                  <td className="px-4 py-3 font-medium">{t.pass}</td>
                  <td className="px-4 py-3 text-white/75">{t.route}</td>
                  <td className="px-4 py-3 text-[#7DD3FC] font-semibold">{t.indian}</td>
                  <td className="px-4 py-3 text-white/75">{t.foreign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/40 mt-3">
          2025–26 fares, set by the Gulmarg Gondola and subject to change. Paid at the counter.
        </p>
      </Section>

      {/* BEST TIME */}
      <Section id="best-time" title="Best Time to" highlight="Snowboard">
        <Card>
          <Timeline items={info.bestTime.map((m) => ({ title: m.month, text: m.text }))} />
        </Card>
      </Section>

      {/* MISTAKES + TIPS */}
      <Section title="Beginner" highlight="Tips">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-bold mb-5">Common beginner mistakes</h3>
            <CheckList items={info.mistakes} variant="exclude" />
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">Tips for your first trip</h3>
            <CheckList items={info.tips} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* PACKING + PRICE FACTORS */}
      <Section id="packing" title="Packing" highlight="Checklist">
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="md:col-span-2">
            <div className="grid sm:grid-cols-2 gap-x-6">
              <CheckList items={info.packing.slice(0, 6)} variant="plain" />
              <div className="mt-3 sm:mt-0">
                <CheckList items={info.packing.slice(6)} variant="plain" />
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">What affects the price</h3>
            <CheckList items={info.priceFactors} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faqs" title="Snowboarding" highlight="FAQs">
        <FAQList faqs={info.faqs} />
      </Section>

      <BottomCTA
        title="Ready to ride Gulmarg?"
        text="Tell us your dates and which course you're interested in — we'll confirm availability on WhatsApp."
        href={enquiry}
      />
    </div>
  );
}
