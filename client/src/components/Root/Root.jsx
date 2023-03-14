import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NewTopic from '../NewTopic/NewTopic';

function Root () {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <NewTopic />
        </>
    )
}

export default Root;