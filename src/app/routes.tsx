import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { NotFound, RouteError } from "./components/pages/NotFound";

// Every page except Home loads on demand, so phones download much less JavaScript up front.
const page = <T extends string>(load: () => Promise<Record<T, React.ComponentType>>, name: T) =>
  lazy(() => load().then((m) => ({ default: m[name] })));

const About = page(() => import("./components/pages/About"), "About");
const Contact = page(() => import("./components/pages/Contact"), "Contact");
const Treks = page(() => import("./components/pages/Treks"), "Treks");
const TrekDetails = page(() => import("./components/pages/TrekDetails"), "TrekDetails");
const Reviews = page(() => import("./components/pages/Reviews"), "Reviews");
const TeamMemberDetails = page(() => import("./components/pages/TeamMemberDetails"), "TeamMemberDetails");
const TripDetails = page(() => import("./components/pages/TripDetails"), "TripDetails");
const DestinationDetails = page(() => import("./components/pages/DestinationDetails"), "DestinationDetails");
const Travel = page(() => import("./components/pages/Travel"), "Travel");
const Skiing = page(() => import("./components/pages/Skiing"), "Skiing");
const SkiPackageDetails = page(() => import("./components/pages/SkiPackageDetails"), "SkiPackageDetails");
const Snowboarding = page(() => import("./components/pages/Snowboarding"), "Snowboarding");
const IceClimbing = page(() => import("./components/pages/IceClimbing"), "IceClimbing");


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },

      // WINTER ADVENTURES
      { path: "skiing", element: <Skiing /> },
      { path: "skiing/:slug", element: <SkiPackageDetails /> },
      { path: "snowboarding", element: <Snowboarding /> },
      { path: "ice-climbing", element: <IceClimbing /> },

      // TRAVEL
      { path: "travel", element: <Travel /> },
      { path: "travel/:slug", element: <DestinationDetails /> },
      { path: "trip/:destination/:trip", element: <TripDetails /> },

      // TREKS (hidden from the menu in winter, still reachable by link)
      { path: "treks", element: <Treks /> },
      { path: "treks/:slug", element: <TrekDetails /> },

      // COMPANY
      { path: "reviews", element: <Reviews /> },
      { path: "about", element: <About /> },
      { path: "team/:slug", element: <TeamMemberDetails /> },
      { path: "contact", element: <Contact /> },

      // 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);
