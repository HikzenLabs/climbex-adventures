import { BrowserRouter, RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { WhatsappPopUp } from "./components/Home/WhatsappPopUp";


function App() {



  return (
    <>
      <RouterProvider router={router} />
      <WhatsappPopUp />
    </>
  );
}

export default App;