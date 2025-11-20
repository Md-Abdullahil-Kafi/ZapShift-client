import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/rider/Rider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/rider",
        element: <PrivetRoute><Rider></Rider></PrivetRoute>
      },
      {
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: ()=>fetch('/warehouses.json').then(res => res.json())
      }
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
    ]
  }
]);

export default router;
