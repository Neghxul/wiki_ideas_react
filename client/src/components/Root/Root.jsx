import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import NewTopic from '../../pages/NewTopic';
import Registration from "../../pages/Registration";

function Root () {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;