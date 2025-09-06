import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home/Home";
import AuthenticationLayOut from "../LayOuts/AuthenticationLayOut/AuthenticationLayOut";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoutes from "../routes/PrivateRoutes";
import SendAparcel from "../Pages/SendApercel/SendAparcel";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("./districData.json"),
      },
      {
        path:"sendAparcel",
        element:<PrivateRoutes><SendAparcel></SendAparcel></PrivateRoutes>,
        loader: () => fetch("./districData.json"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthenticationLayOut,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
