import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/Main/App";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/OrderNow/Order";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'menu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]

    }
])
export default routes;