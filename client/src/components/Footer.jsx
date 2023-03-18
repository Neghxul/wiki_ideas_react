import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer id="footer">

        <div id="footer-flex">
            <div id="footer-about">

                <div id="contact-form">
                    <label htmlFor="contact-name">Your Name:</label>
                    <input type="text" id="contact-name" name="contact-name" placeholder="Enter your name" required />
                    <label htmlFor="contact-email">Your Email:</label>
                    <input type="email" id="contact-email" name="contact-email" placeholder="Enter your email" required />
                    <button id="contact-btn">Contact</button>
                </div>
            </div>
        </div>

        <div id="footer-media" className="footer-media">
            <FaFacebook className="react-icon" />
            <FaInstagram className="react-icon" />
            <FaTwitter className="react-icon" />
            <FaGithub className="react-icon" />
            <FaWhatsapp className="react-icon" />
        </div>

        <div id="footer-rights">
            <p>All rights reserved 2023</p>
        </div>

    </footer>
    );
}

export default Footer;