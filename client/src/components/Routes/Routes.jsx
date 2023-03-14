import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root/Root";
import Main from "../Main/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h2>Eror 404</h2>,
        children: [
            {
                path: '/',
                element: <Main />
            },

            {
                path: '/inicio',
                element: <Main />
            }
        ]
    }

]);

function Routers () {
    return (
        <RouterProvider router={router} />
    );
}

export default Routers;