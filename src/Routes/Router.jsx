import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/catagory/:id',
                Component:CategoryNews
            },
        ]
    },
     {
        path:'/auth',
        element:<h1>atuhintacation </h1>
    },
     {
        path:'/news',
        element:<h1>News layout</h1>
    },
     {
        path:'/*',
        element:<h1>error</h1>
    },
])

export default router;