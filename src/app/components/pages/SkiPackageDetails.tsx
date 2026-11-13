import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSeo, tripJsonLd } from "../../utils/seo";
import { NotFound } from "./NotFound";
import { ArrowLeft } from "lucide-react";
import { skiPackages, winterImages } from "../../../data/winter";
import { buildBookingLink } from "../../utils/whatsapp";
import {
  Section,
  Card,
  CheckList,
  IncludesExcludes,
  Timeline,
  FAQList,
  WhatsAppButton,
  WinterImage,
} from "../winter/WinterUI";

export function SkiPackageDetails() {
  const { slug } = useParams();
  const pkg = skiPackages.find((p) => p.slug === slug);

  useSeo(
    pkg
      ? {
          title: `${pkg.name} – Gulmarg`,
          description: `${pkg.tagline}. ${pkg.duration} in Gulmarg, Kashmir with JIM&WS / IISM certified instructors. ${pkg.price} per person.`,
          image: pkg.image,
          jsonLd: tripJsonLd(pkg.name, pkg.overview, pkg.price),
        }
      : { title: "Page not found", noindex: true }
  );

  // Leave room under the footer for the sticky mobile "Book Now" bar.
  useEffect(() => {
    document.body.classList.add("pb-20", "md:pb-0");
    return () => document.body.classList.remove("pb-20", "md:pb-0");
  }, []);

  if (!pkg) {
    return <NotFound message="We couldn't find that ski package." />;
  }

  const bookingLink = buildBookingLink({
    name: pkg.name,
    duration: pkg.duration,
    price: pkg.price,
    location: pkg.location,
  });

  const details = [
    { label: "Duration", value: pkg.duration },
    { label: "Training", value: pkg.training },
    { label: "Level", value: pkg.level },
    { label: "Location", value: pkg.location },
  ];

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <WinterImage
          src={pkg.image}
          alt={pkg.name}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/40 to-[#071018]/30" />
        <div className="absolute bottom-6 left-0 w-full px-4">
          <div className="max-w-6xl mx-auto">
            <Link to="/skiing" className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white">
              <ArrowLeft className="w-4 h-4" /> All ski packages
            </Link>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mt-3 leading-tight">{pkg.name}</h1>
            <p className="text-white/70 mt-2 sm:text-lg">{pkg.tagline}</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-3">
              {details.map((d) => (
                <div key={d.label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <p className="text-[11px] uppercase tracking-wider text-white/50">{d.label}</p>
                  <p className="text-sm sm:text-base font-semibold mt-1">{d.value}</p>
                </div>
              ))}
            </div>
            <Card>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-white/75 leading-relaxed">{pkg.overview}</p>
            </Card>
          </div>

          {/* RIGHT – price card (desktop) */}
          <div className="hidden md:block">
            <Card className="sticky top-24">
              {pkg.originalPrice && <p className="text-sm text-white/40 line-through">{pkg.originalPrice}</p>}
              <p className="text-4xl font-bold text-[#7DD3FC]">{pkg.price}</p>
              <p className="text-white/50 text-sm">per person</p>
              <WhatsAppButton href={bookingLink} label="Book Now" className="w-full mt-6" />
              <p className="text-xs text-white/40 mt-4">
                We'll confirm dates and availability on WhatsApp. No payment needed to enquire.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {pkg.itinerary && (
        <Section title="Day-wise" highlight="Itinerary">
          <Card>
            <Timeline items={pkg.itinerary.map((d) => ({ tag: d.day, title: d.title, text: d.description }))} />
          </Card>
        </Section>
      )}

      {pkg.zones && (
        <Section title="Where we" highlight="Ski">
          <Card>
            <Timeline items={pkg.zones.map((z) => ({ title: z.title, text: z.description }))} />
          </Card>
        </Section>
      )}

      <Section title="What's" highlight="Included">
        <IncludesExcludes includes={pkg.includes} excludes={pkg.excludes} />
      </Section>

      {pkg.notes && (
        <Section title="Good to" highlight="Know">
          <Card>
            <CheckList items={pkg.notes} variant="plain" />
          </Card>
        </Section>
      )}

      {pkg.faqs && (
        <Section title="Package" highlight="FAQs">
          <FAQList faqs={pkg.faqs} />
        </Section>
      )}

      {/* OTHER PACKAGES */}
      <Section title="Other ski" highlight="packages">
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-4 -mx-4 px-4 pb-2">
          {skiPackages
            .filter((p) => p.slug !== pkg.slug)
            .map((p) => (
              <Link
                key={p.id}
                to={`/skiing/${p.slug}`}
                className="snap-start shrink-0 w-[70%] sm:w-72 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <WinterImage src={p.image || winterImages.skiing} alt={p.name} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <p className="font-semibold leading-snug">{p.name}</p>
                  <p className="text-[#7DD3FC] font-bold mt-1">{p.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </Section>

      {/* STICKY MOBILE BOOK BAR */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0B1F33]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          {pkg.originalPrice && <p className="text-[11px] text-white/40 line-through leading-none">{pkg.originalPrice}</p>}
          <p className="text-xl font-bold text-[#7DD3FC] leading-tight">{pkg.price}</p>
          <p className="text-[11px] text-white/50 leading-none">per person</p>
        </div>
        <WhatsAppButton href={bookingLink} label="Book Now" className="px-6 py-3" />
      </div>
    </div>
  );
}
