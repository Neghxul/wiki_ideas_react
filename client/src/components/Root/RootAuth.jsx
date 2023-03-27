import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AuthPage from "../../pages/AuthPage";


function RootAuth () {
    
    return (
        <>
            <AuthPage />
        </>
    )
}

export default RootAuth;