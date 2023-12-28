import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/Main/App";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/OrderNow/Order";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Additem from "../Pages/DashBoard/AddItem/Additem";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import Payment from "../Pages/DashBoard/Payment/Payment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",

    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // user routes
      {
        path:"userHome",
        element:<UserHome></UserHome>
      },
      {
        path: "myCart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      // admin pages
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path: "allUsers",
        element: <useIsAdmin><AllUsers></AllUsers></useIsAdmin>,
      },
      {
        path:'addItem',
        element:<useAdmin><Additem></Additem></useAdmin>
      },
      {
        path:"manageItem",
        element:<useAdmin><ManageItem></ManageItem></useAdmin>

      }
    ],
  },
]);
export default routes;
