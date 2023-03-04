import React from "react";

function Footer() {
    return (
        <footer id="footer">

        <div id="footer-flex">
            <div id="footer-about">

                <div id="contact-form">
                    <label for="contact-name">Your Name:</label>
                    <input type="text" id="contact-name" name="contact-name" placeholder="Enter your name" required />
                    <label for="contact-email">Your Email:</label>
                    <input type="email" id="contact-email" name="contact-email" placeholder="Enter your email" required />
                    <button id="contact-btn">Contact</button>
                </div>
            </div>
        </div>

        <div id="footer-media">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-whatsapp"></i>
        </div>

        <div id="footer-rights">
            <p>All rights reserved 2023</p>
        </div>

    </footer>
    );
}

export default Footer;