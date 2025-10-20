import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";

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
                Component:CategoryNews,
                loader: () => fetch('/news.json'),
                errorElement: <h1>❌ Failed to load news</h1>,
            },
        ]
    },
     {
        path:'/auth',
        Component: AuthLayouts,
        children:[
            {
                path:'/auth/login',
                Component:Login,
            },
            {
                path:'/auth/register',
                Component:Register,
            },
        ]
    },
     {
        path:'/news',
        element:<h1>News layout</h1>
    },
     {
        path:'/*',
        element: <h1>404 - Page Not Found</h1>,
    },
],

    {
    
    HydrateFallback: <p className="text-center text-gray-400 mt-10">Loading app...</p>,
  }


)

export default router;
