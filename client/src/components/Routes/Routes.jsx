import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root/Root";
import Main from "../../pages/Main";
import Registration from "../Registration/Registration";
import Login from "../Login/login";
import Single from "../../pages/Single"
import Write from "../../pages/Write";
import NewTopic from "../NewTopic/NewTopic";


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
            },

            {
                path: '/auth/register',
                element: <Registration />
            },

            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/post/:id',
                element: <Single />
            },

            {
                path: '/write',
                element: <NewTopic />
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