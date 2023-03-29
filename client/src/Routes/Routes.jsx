import React, { useContext } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
import Registration from "../pages/Registration";
import Login from "../pages/login";
import Single from "../pages/Single"
import NewTopic from "../pages/NewTopic";
import Root from "../components/Root/Root";
import Categories from "../components/Categories";
import RootAuth from "../components/Root/RootAuth";
import Write from "../pages/Write";

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
                path: '/post/:id',
                element: <Single />
            },

            {       
                path: '/write',
                element: <Write />,
            }
            ,

            {       
                path: '/categories',
                element: <Categories />
            },

            {       
                path: '/about',
                element: <Write />
            }

            
        ]
    }, 
    {
        path: "/auth",
        element: <RootAuth />,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: "/auth/",
                element: <Login />
            },
            {
                path: '/auth/signup',
                element: <Registration />
            },

            {
                path: '/auth/login',
                element: <Login />
            },
        ]
    }

]);

function Routers () {

    return (
        <RouterProvider router={router} />
    );
}

export default Routers;