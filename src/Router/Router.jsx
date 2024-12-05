import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/Notfound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRouter from "./PrivetRouter";
import Addvisa from "../Pages/Addvisa";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addvisa",
                element: <PrivetRouter><Addvisa></Addvisa></PrivetRouter>
            }
        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default Router;