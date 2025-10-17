import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayouts></HomeLayouts>
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