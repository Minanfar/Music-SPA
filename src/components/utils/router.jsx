import Bass from "../pages/Bass";
import Drums from "../pages/Drums";
import Guitar from "../pages/Guitar";
import Vocal from "../pages/Vocal";
import NotFoundPage from "../pages/NotFoundPage";
import RootElement from "../pages/RootElement";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <RootElement />,
    children: [
      {
        path: "/vocal",
        element: <Vocal />,
      },
      {
        path: "/drum",
        element: <Drums />,
      },
      {
        path: "/bass",
        element: <Bass />,
      },
      {
        path: "/guitar",
        element: <Guitar />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
