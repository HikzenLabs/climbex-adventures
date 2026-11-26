import { Link } from "react-router-dom";
import { MountainSnow, ArrowLeft } from "lucide-react";
import { useSeo } from "../../utils/seo";

export function NotFound({ message = "This trail doesn't exist." }: { message?: string }) {
  useSeo({
    title: "Page not found",
    description: "The page you're looking for doesn't exist.",
    noindex: true,
  });

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 pt-28 pb-16 bg-[#071018] text-white">
      <div className="max-w-lg text-center">
        <MountainSnow className="w-14 h-14 text-[#7DD3FC] mx-auto" />
        <p className="mt-6 text-[#7DD3FC] font-semibold tracking-[0.2em] uppercase text-sm">404</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-black">Lost in the snow</h1>
        <p className="mt-4 text-white/70">
          {message} It may have moved, or the link might be mistyped.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FB923C] to-[#F97316] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <Link
            to="/skiing"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 border border-white/20 font-semibold"
          >
            Winter adventures
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Used as the router's errorElement so even a crash shows the site chrome-free but friendly page. */
export function RouteError() {
  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <NotFound message="Something went wrong loading this page." />
    </div>
  );
}
