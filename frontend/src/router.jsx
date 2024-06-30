import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import GetStarted from "./pages/GetStarted";


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

  ]);
  export default router