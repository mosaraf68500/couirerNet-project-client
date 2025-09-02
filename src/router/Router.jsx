import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut/RootLayOut";
import Home from "../Pages/Home/Home/Home";
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
]);