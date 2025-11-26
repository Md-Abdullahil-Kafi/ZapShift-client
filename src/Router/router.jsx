import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/rider/Rider";
import ResetPassword from "../Pages/Authentication/ResetPassword";
import VerifyCode from "../Pages/Authentication/VerifyCode";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import PricingCalculator from "../Pages/rider/PricingCalculator";
import AboutUs from "../about/AboutUs";
import SendParcel from "../Pages/Send A Parcel/SendParcel";
import TrackConsignment from "../../tarack your parcel/TrackConsignment";
import NotFound from "../Pages/NotFound";
import DashboardLayout from "../Layouts/DashBoardLayout";
import MyParcels from "../Pages/Dashboard/My-parcels/MyParcels";
import Payment from "../Pages/Dashboard/My-parcels/Payment/Payment";

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
        path:"/sendParcel",
        element: <PrivetRoute><SendParcel></SendParcel></PrivetRoute>,
        loader: ()=>fetch('/warehouses.json').then(res => res.json())
      },
      {
        path:"/trackConsignment",
        element: <PrivetRoute><TrackConsignment></TrackConsignment></PrivetRoute>
      },
      {
        path:"/pricing",
        element: <PricingCalculator></PricingCalculator>
      },
      {
        path:"/about",
        element: <AboutUs></AboutUs>
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
      {
        path:"/resetPassword",
        element: <ResetPassword></ResetPassword>
      },
      {
        path:"/verifyCode",
        element: <VerifyCode></VerifyCode>
      },
      {
        path:"/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
        
      },
    ]
  },
  {
    path:'/dashboard',
    element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children:[
          {
            path: 'my-parcels',
            Component: MyParcels,
          },
          {
            path: 'payment/:parcelId',
            Component: Payment
          }
        ]
  },
  { path: "*", element: <NotFound /> }
]);

export default router;
