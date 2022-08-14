import React from "react";
import { SiInstagram } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer__logo">
                CORNY
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/corny1508/">
                    <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/vplus1508/">
                    <SiInstagram />
                </a>
                <a href="https://discord.gg/GtxGZ2FWZe">
                    <SiDiscord />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
