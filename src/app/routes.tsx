import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Travel } from "./components/pages/Travel";
import { Treks } from "./components/pages/Treks";
import { TrekDetails } from "./components/pages/TrekDetails";
import { Reviews } from "./components/pages/Reviews";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { DestinationDetails } from "./components/pages/DestinationDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "travel", Component: Travel },
      { path: "travel/:region", Component: DestinationDetails },
      { path: "treks", Component: Treks },
      { path: "treks/:id", Component: TrekDetails },
      { path: "reviews", Component: Reviews },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
