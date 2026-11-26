import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://www.climbexadventures.com";
export const SITE_NAME = "Climbex Adventures";
export const DEFAULT_IMAGE = "/images/og-image.jpg";
export const DEFAULT_DESCRIPTION =
  "Skiing and snowboarding in Gulmarg, ice climbing in Pahalgam, Kashmir and Ladakh trips — with JIM&WS and IISM certified instructors. Rated 5.0 on Tripadvisor.";

interface SeoOptions {
  /** Page title without the brand; " | Climbex Adventures" is appended. */
  title?: string;
  description?: string;
  /** Path or absolute URL of the share image. */
  image?: string;
  noindex?: boolean;
  /** Extra JSON-LD for this page (e.g. a Product/Trip). */
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const abs = (u: string) => (u.startsWith("http") ? u : SITE_URL + u);

/**
 * Per-page title, description, canonical URL and social-share tags.
 * Google renders JavaScript, so it picks these up; index.html holds the
 * defaults that WhatsApp/Facebook previews read.
 */
export function useSeo({ title, description, image, noindex, jsonLd }: SeoOptions) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Skiing, Ice Climbing & Treks in Kashmir`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    const img = abs(image || DEFAULT_IMAGE);

    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setLink("canonical", url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", img);

    const id = "page-jsonld";
    document.getElementById(id)?.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.textContent = JSON.stringify({ "@context": "https://schema.org", ...jsonLd });
      document.head.appendChild(script);
    }
  }, [title, description, image, noindex, pathname, jsonLd ? JSON.stringify(jsonLd) : ""]);
}

/** schema.org TouristTrip with a price offer, for package/trip detail pages. */
export function tripJsonLd(name: string, description: string | undefined, price: string | undefined) {
  const amount = price ? Number(price.replace(/[^\d.]/g, "")) : NaN;
  return {
    "@type": "TouristTrip",
    name,
    description: description?.slice(0, 500),
    provider: { "@type": "TravelAgency", name: SITE_NAME, url: SITE_URL },
    ...(Number.isFinite(amount) && amount > 0
      ? { offers: { "@type": "Offer", price: amount, priceCurrency: "INR", availability: "https://schema.org/InStock" } }
      : {}),
  };
}
