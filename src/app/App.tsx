import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Root } from "../app/components/Root";

import { Home } from "../app/components/pages/Home";
import { Treks } from "../app/components/pages/Treks";
import { TrekDetails } from "../app/components/pages/TrekDetails";
import { Travel } from "./components/pages/Travel";
import { Reviews } from "./components/pages/Reviews";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { DestinationDetails } from "./components/pages/DestinationDetails";
import { TripDetails } from "./components/pages/TripDetails";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Root />}>

          <Route index element={<Home />} />
          <Route path="travel" element={<Travel />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="treks" element={<Treks />} />

          <Route
            path="treks/:id"
            element={<TrekDetails />}
          />
          <Route
            path="travel/:destination"
            element={<DestinationDetails />}
          />

        </Route>
        <Route
          path="travel/:destination/:trip"
          element={<TripDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}
export default App;