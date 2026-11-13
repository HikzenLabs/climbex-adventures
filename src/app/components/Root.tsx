import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ScrollToTop from "./Scroll/ScrollToTop";

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071018]" aria-busy="true">
      <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-[#7DD3FC] animate-spin" />
    </div>
  );
}

export function Root() {
  return (
    <div className="min-h-screen bg-[#071018] text-white">

      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>

      <Footer />

    </div>
  );
}
