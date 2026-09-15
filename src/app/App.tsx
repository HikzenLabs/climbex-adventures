import { BrowserRouter, RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { WhatsAppPopup } from "./components/Home/WhatsAppPopup";


function App() {



  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppPopup />
    </>
  );
}

export default App;