import { iceClimbingInfo, winterImages } from "../../../data/winter";
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
  WinterImage,
} from "../winter/WinterUI";

import { useSeo } from "../../utils/seo";
export function IceClimbing() {
  useSeo({ title: "Ice Climbing in Pahalgam, Kashmir", description: "3-day beginner ice climbing course on the frozen waterfalls of Pahalgam, Kashmir. Certified instructors, all technical gear provided. Season: late Dec – mid Feb." });

  const info = iceClimbingInfo;
  const enquiry = buildEnquiryLink("Ice Climbing in Pahalgam");
  const booking = buildBookingLink({
    name: info.course.name,
    duration: info.course.duration,
    location: info.course.location,
  });

  const courseFacts = [
    { label: "Duration", value: info.course.duration },
    { label: "Level", value: info.course.level },
    { label: "Age", value: info.course.age },
    { label: "Price", value: info.course.price },
  ];

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <PageHero
        image={winterImages.iceClimbing}
        eyebrow="Pahalgam · Kashmir"
        title="Ice Climbing in"
        highlight="Kashmir"
        subtitle="Climb the frozen waterfalls of the Lidder Valley — a 3-day beginner course with JIM&WS / IISM certified instructors. No experience needed."
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
          <a
            href="#course"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] font-semibold shadow-lg"
          >
            See the 3-Day Course
          </a>
          <WhatsAppButton href={enquiry} label="Ask on WhatsApp" />
        </div>
        <FactGrid facts={info.facts} />
      </PageHero>

      <JumpLinks
        links={[
          { id: "course", label: "Course" },
          { id: "included", label: "Inclusions" },
          { id: "where", label: "Where" },
          { id: "gear", label: "What to wear" },
          { id: "best-time", label: "Best time" },
          { id: "who", label: "Who can do it" },
          { id: "faqs", label: "FAQs" },
        ]}
      />

      <Section title="What is" highlight="Ice Climbing?">
        <Card>
          <p className="text-white/75 leading-relaxed">{info.intro}</p>
        </Card>
      </Section>

      {/* COURSE */}
      <Section id="course" title="Beginner Ice Climbing" highlight="Course">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <Card>
              <Timeline items={info.course.days.map((d) => ({ tag: d.day, title: d.title, text: d.description }))} />
            </Card>
          </div>
          <Card className="h-fit">
            <h3 className="text-xl font-bold">{info.course.name}</h3>
            <p className="text-white/60 text-sm mt-1">{info.course.location}</p>
            <div className="grid grid-cols-2 gap-3 mt-5">
              {courseFacts.map((f) => (
                <div key={f.label} className="bg-white/5 border border-white/10 rounded-2xl px-3 py-2.5">
                  <p className="text-[11px] uppercase tracking-wider text-white/50">{f.label}</p>
                  <p className="text-sm font-semibold mt-0.5">{f.value}</p>
                </div>
              ))}
            </div>
            <WhatsAppButton href={booking} label="Enquire & Book" className="w-full mt-6" />
          </Card>
        </div>
      </Section>

      {/* LEARN */}
      <Section title="What you'll" highlight="Learn">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
          {winterImages.iceClimbingGallery.map((src, i) => (
            <WinterImage
              key={src}
              src={src}
              alt={`Ice climbing a frozen waterfall near Pahalgam, photo ${i + 1}`}
              className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/10"
            />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {info.learn.map((l) => (
            <Card key={l.title}>
              <h3 className="text-lg font-bold text-[#7DD3FC]">{l.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{l.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* INCLUDES */}
      <Section id="included" title="Inclusions &" highlight="Exclusions">
        <IncludesExcludes includes={info.includes} excludes={info.excludes} />
      </Section>

      {/* WHERE */}
      <Section id="where" title="Where we" highlight="Climb">
        <div className="grid sm:grid-cols-2 gap-4">
          {info.locations.map((l) => (
            <Card key={l.name}>
              <span className="inline-block text-xs font-semibold text-[#071018] bg-[#7DD3FC] rounded-full px-3 py-1">
                {l.tag}
              </span>
              <h3 className="text-lg font-bold mt-3">{l.name}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{l.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* GEAR */}
      <Section
        id="gear"
        title="What to Wear &"
        highlight="Pack"
        intro="We supply all technical gear — ice axes, crampons, harness, helmet and ropes. You bring warm clothing."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <h3 className="text-xl font-bold mb-4">Layering</h3>
            <div className="divide-y divide-white/10">
              {info.wear.map((w) => (
                <div key={w.item} className="py-3">
                  <p className="font-semibold text-[#7DD3FC] text-sm">{w.item}</p>
                  <p className="text-white/75 text-sm mt-0.5">{w.text}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">Also carry</h3>
            <CheckList items={info.carry} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* BEST TIME */}
      <Section id="best-time" title="Best Time for" highlight="Ice Climbing" intro="January is the best month. Book 3–4 weeks ahead.">
        <Card>
          <Timeline items={info.bestTime.map((m) => ({ title: m.month, text: m.text }))} />
        </Card>
      </Section>

      {/* WHO */}
      <Section id="who" title="Who can" highlight="do it?">
        <div className="grid sm:grid-cols-2 gap-4">
          {info.whoCanDo.map((w) => (
            <Card key={w.title}>
              <h3 className="text-lg font-bold text-[#7DD3FC]">{w.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{w.text}</p>
            </Card>
          ))}
        </div>
        <p className="text-sm text-yellow-300/90 mt-4 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl px-4 py-3">
          {info.notSuitable}
        </p>
      </Section>

      {/* REACH + WHY */}
      <Section title="Getting to" highlight="Pahalgam">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <Timeline items={info.howToReach.map((r) => ({ title: r.mode, text: r.text }))} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-5">Why Kashmir for ice climbing</h3>
            <CheckList items={info.whyKashmir} variant="plain" />
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faqs" title="Ice Climbing" highlight="FAQs">
        <FAQList faqs={info.faqs} />
      </Section>

      <BottomCTA
        title="Climb a frozen waterfall this winter"
        text="Send us your dates and group size — we'll share availability and pricing on WhatsApp."
        href={enquiry}
      />
    </div>
  );
}
