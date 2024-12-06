import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/Notfound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRouter from "./PrivetRouter";
import Addvisa from "../Pages/Addvisa";
import Allvisa from "../Pages/Allvisa";
import Ditails from "../Pages/Ditails";
import MyaddedApplication from "../Pages/MyaddedApplication";


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
            },
            {
                path: '/allvisa',
                element: <Allvisa></Allvisa>,
                loader: ()=> fetch("http://localhost:5000/visas")
            },
            {
                path: '/deteils/:id',
                element: <PrivetRouter><Ditails></Ditails></PrivetRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/visas/${params.id}`)
            },
            {
                path: '/visaapplications/:email',
                element: <PrivetRouter><MyaddedApplication></MyaddedApplication></PrivetRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/addedvisa/${params.email}`)
            }
        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default Router;