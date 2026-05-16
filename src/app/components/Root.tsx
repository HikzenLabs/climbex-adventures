import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div className="min-h-screen bg-[#071018] text-white">

      <Navbar />

      <Outlet />

      <Footer />

    </div>
  );
}
