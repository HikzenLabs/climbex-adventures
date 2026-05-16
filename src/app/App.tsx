import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Root } from "../app/components/Root";

import { Home } from "../app/components/pages/Home";
import { Treks } from "../app/components/pages/Treks";
import { TrekDetails } from "../app/components/pages/TrekDetails";
import { Explore } from "./components/pages/Explore";
import { Reviews } from "./components/pages/Reviews";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Root />}>

          <Route index element={<Home />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="treks" element={<Treks />} />

          <Route
            path="treks/:id"
            element={<TrekDetails />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}
export default App;