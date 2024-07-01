import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import GetStarted from "./pages/GetStarted";
import Otp from "./pages/Otp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/chat",
      element: <Chat />
    },
    {
      path: "/getstarted",
      element: <GetStarted />
    },
    {
      path: "/otp",
      element: <Otp />
    },

  ]);
  export default router