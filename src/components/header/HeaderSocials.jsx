import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/th%E1%BA%BF-anh-nguy%E1%BB%85n-a1799b229"
                target="__blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/Corny-YM" target="__blank">
                <FaGithub />
            </a>
            <a href="https://dribbble.com" target="__blank">
                <FiDribbble />
            </a>
        </div>
    );
};

export default HeaderSocials;
