import { Star, ExternalLink } from "lucide-react";
import type { RatingSource, Review } from "../../../data/review";

const platformColor: Record<RatingSource["platform"], string> = {
  Tripadvisor: "#34E0A1",
  Justdial: "#FF7A00",
  Google: "#4285F4",
};

export function Stars({ rating, className = "w-4 h-4" }: { rating: number; className?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={`${className} ${i < Math.round(rating) ? "fill-[#FB923C] text-[#FB923C]" : "text-white/20"}`}
        />
      ))}
    </div>
  );
}

/** "Rated 5.0 on Tripadvisor" style badges. */
export function RatingBadges({ sources }: { sources: RatingSource[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
      {sources.map((s) => (
        <a
          key={s.platform}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:border-[#7DD3FC]/50 transition"
        >
          <span className="text-4xl font-black text-white leading-none">{s.rating.toFixed(1)}</span>
          <div className="min-w-0">
            <Stars rating={s.rating} />
            <p className="text-sm text-white/80 mt-1">
              Rated on{" "}
              <span className="font-semibold" style={{ color: platformColor[s.platform] }}>
                {s.platform}
              </span>
            </p>
            <p className="text-xs text-white/50 truncate">
              {s.count} {s.countLabel}
              {s.note ? ` · ${s.note}` : ""}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-full h-full flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-6 hover:border-[#7DD3FC]/40 transition">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <span className="text-[11px] font-semibold" style={{ color: platformColor[review.source] }}>
          {review.source}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mt-4 leading-snug">“{review.title}”</h3>
      {review.text && <p className="text-white/75 leading-relaxed mt-3">{review.text}</p>}

      <a
        href={review.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-[#7DD3FC] mt-3 hover:underline"
      >
        Read full review <ExternalLink className="w-3.5 h-3.5" />
      </a>

      <div className="flex items-center gap-3 pt-4 mt-auto border-t border-white/10">
        <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[#7DD3FC] to-[#0B1F33] flex items-center justify-center text-sm font-bold text-white">
          {initials(review.name)}
        </div>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm truncate">
            {review.name}
            {review.from && <span className="text-white/50 font-normal"> · {review.from}</span>}
          </p>
          <p className="text-white/50 text-xs truncate">
            {review.trip} · {review.date}
          </p>
        </div>
      </div>
    </article>
  );
}
