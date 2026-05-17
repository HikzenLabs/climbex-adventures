import {
  createBrowserRouter,
} from "react-router-dom";

import { Root } from "./components/Root";

import { Home } from "./components/pages/Home";

import { About } from "./components/pages/About";

import { Contact } from "./components/pages/Contact";

import { Treks } from "./components/pages/Treks";

import { TrekDetails } from "./components/pages/TrekDetails";

import { Reviews } from "./components/pages/Reviews";

import { TeamMemberDetails } from "./components/pages/TeamMemberDetails";

import { TripDetails } from "./components/pages/TripDetails";

import { DestinationDetails } from "./components/pages/DestinationDetails";

import { Travel } from "./components/pages/Travel"

export const router =
  createBrowserRouter([
    {
      path: "/",

      element: <Root />,

      children: [

        {
          index: true,

          element: <Home />,
        },

        {
          path: "about",

          element: <About />,
        },

        {
          path: "contact",

          element: <Contact />,
        },

        {
          path: "treks",

          element: <Treks />,
        },

        {
          path: "treks/:slug",

          element: <TrekDetails />,
        },

        {
          path: "reviews",

          element: <Reviews />,
        },

        {
          path: "team/:slug",

          element:
            <TeamMemberDetails />,
        },
        {
          path: "trip/:destination/:trip",

          element:
            <TripDetails />,
        },
        {
          path: "travel",

          element:
            <Travel />,
        },
        {
          path: "travel/:slug",

          element:
            <DestinationDetails />,
        },
      ],
    },
  ]);