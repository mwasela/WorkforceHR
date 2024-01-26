import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Auth/login.jsx";
//import { Layout } from 'antd';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                Component: () => <Home />,
            },
            {
                path: "/about",
                Component: () => <p>About us</p>,
            },

        ],


    },
    {
        path: "/login",
        Component: () => <Login />,
    }
]);

export default router;
