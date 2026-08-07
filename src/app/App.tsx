import { BrowserRouter, RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { WhatsAppPopup } from "./components/Home/WhatsappPopUp";

function App() {


  
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppPopup />
    </>
  );
}

export default App;