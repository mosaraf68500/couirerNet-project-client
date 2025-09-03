import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home/Home";
import AuthenticationLayOut from "../LayOuts/AuthenticationLayOut/AuthenticationLayOut";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    children:[
        {
            index:true,
            Component:Home
        },

    ]
  },
  {
    path:"/",
    Component:AuthenticationLayOut,
    children:[
        {
            path:"login",
            Component:Login
        },
        {
          path:"register",
          Component:Register
        }
    ]
  }
]);