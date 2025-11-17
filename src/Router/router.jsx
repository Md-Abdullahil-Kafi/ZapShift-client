import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

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
        path: "/coverage",
        element: <Coverage></Coverage>,
        loader: ()=>fetch('/warehouses.json').then(res => res.json())
      }
    ],
  },
]);

export default router;
