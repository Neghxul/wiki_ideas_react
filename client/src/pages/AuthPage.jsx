import React from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./login";
import Registration from "./Registration";
import logo from "../img/logo_empty.png";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaWhatsapp }  from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

function AuthPage () {
    const location = useLocation();
    let authComponent;

    if (location.pathname === "/auth/login" || location.pathname === "/auth") {
        authComponent = <Login />;
        
    } else if (location.pathname === "/auth/signup") {
        authComponent = <Registration />;
    } 

    return (
        <div className="main-auth">
            <div className="left-auth">
                
            </div>
            <div className="right-auth">
                <div className="right-buttons">
                    <span><Link to="/auth/login">Login</Link></span>
                    <span><Link to="/auth/signup">Signup</Link></span>
                </div>
                <div className="right-middle">
                    <div className="middle-text">
                        <img src={logo} />
                        <h2></h2>
                    </div>
                    <div className="middle-auth_container">
                        {authComponent}
                    </div>
                </div>
                <div className="right-media">
                    <span>Visit us at <BsArrowRight /></span>
                    <span>
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaGithub className="icon" />
                        <FaWhatsapp className="icon" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;