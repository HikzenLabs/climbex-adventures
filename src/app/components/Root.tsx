import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ScrollToTop from "./Scroll/ScrollToTop";

export function Root() {
  return (
    <div className="min-h-screen bg-[#071018] text-white">

      <ScrollToTop /> 
      <Navbar />

      <Outlet />

      <Footer />

    </div>
  );
}
