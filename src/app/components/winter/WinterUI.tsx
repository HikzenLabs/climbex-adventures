import { useState, type ReactNode, type ImgHTMLAttributes } from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FALLBACK_IMAGE, type FAQ } from "../../../data/winter";

/** <img> that swaps to a fallback photo until the real winter image is uploaded. */
export function WinterImage({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? FALLBACK_IMAGE : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => !failed && setFailed(true)}
      {...rest}
    />
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  highlight,
  subtitle,
  children,
}: {
  image: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-16 px-4">
      <WinterImage
        src={image}
        alt={`${title} ${highlight}`}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/80 via-[#0B1F33]/60 to-[#071018]" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-[#7DD3FC] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
          {title} <span className="text-[#7DD3FC]">{highlight}</span>
        </h1>
        <p className="mt-4 text-white/75 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

export function FactGrid({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
      {facts.map((f) => (
        <div
          key={f.label}
          className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-3 text-left"
        >
          <p className="text-[11px] uppercase tracking-wider text-white/50">{f.label}</p>
          <p className="text-sm sm:text-base font-semibold text-white mt-1">{f.value}</p>
        </div>
      ))}
    </div>
  );
}

export function Section({
  id,
  title,
  highlight,
  intro,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  highlight?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 sm:px-6 lg:px-8 py-10 sm:py-14 scroll-mt-24 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          {title} {highlight && <span className="text-[#7DD3FC]">{highlight}</span>}
        </h2>
        {intro && <p className="text-white/65 mt-3 max-w-3xl leading-relaxed">{intro}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function CheckList({ items, variant = "include" }: { items: string[]; variant?: "include" | "exclude" | "plain" }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-white/80 leading-relaxed">
          {variant === "exclude" ? (
            <X className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
          ) : (
            <Check className={`w-5 h-5 shrink-0 mt-0.5 ${variant === "include" ? "text-[#4ADE80]" : "text-[#7DD3FC]"}`} />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function IncludesExcludes({ includes, excludes }: { includes: string[]; excludes: string[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
      <Card>
        <h3 className="text-xl font-bold text-[#4ADE80] mb-5">Inclusions</h3>
        <CheckList items={includes} />
      </Card>
      <Card>
        <h3 className="text-xl font-bold text-red-400 mb-5">Exclusions</h3>
        <CheckList items={excludes} variant="exclude" />
      </Card>
    </div>
  );
}

export function Timeline({ items }: { items: { title: string; text: string; tag?: string }[] }) {
  return (
    <div className="space-y-5">
      {items.map((it) => (
        <div key={it.title} className="border-l-2 border-[#7DD3FC] pl-5">
          {it.tag && <p className="text-[#7DD3FC] text-sm font-semibold">{it.tag}</p>}
          <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">{it.title}</h3>
          <p className="text-white/70 mt-1.5 leading-relaxed">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-white"
          >
            <span>{f.q}</span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 text-[#7DD3FC] transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && <p className="px-5 pb-5 text-white/70 leading-relaxed">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export function WhatsAppButton({
  href,
  label = "Book on WhatsApp",
  className = "",
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold px-6 py-3.5 shadow-lg ${className}`}
    >
      <FaWhatsapp className="w-5 h-5" />
      {label}
    </a>
  );
}

export function BottomCTA({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#0B1F33] to-[#12324f] border border-white/10 rounded-3xl px-6 py-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">{title}</h2>
        <p className="text-white/70 mt-3 max-w-xl mx-auto">{text}</p>
        <WhatsAppButton href={href} label="Chat with us on WhatsApp" className="mt-7 w-full sm:w-auto" />
      </div>
    </section>
  );
}

/** Small in-page jump links, horizontally scrollable on mobile. */
export function JumpLinks({ links }: { links: { id: string; label: string }[] }) {
  return (
    <nav className="sticky top-20 z-30 bg-[#071018]/90 backdrop-blur-xl border-y border-white/10">
      <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="shrink-0 text-sm px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-[#7DD3FC]/50"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
