import React from "react";
import { useState } from "react";

import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine, RiContactsBookLine } from "react-icons/ri";

const Nav = () => {
    const [active, setActive] = useState('#home');
    return (
        <nav>
            <a
                href="#home"
                onClick={() => setActive("#home")}
                className={active === "#home" ? "active" : ""}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActive("#about")}
                className={active === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActive("#experience")}
                className={active === "#experience" ? "active" : ""}
            >
                <BiBookBookmark />
            </a>
            <a
                href="#services"
                onClick={() => setActive("#services")}
                className={active === "#services" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                onClick={() => setActive("#contact")}
                className={active === "#contact" ? "active" : ""}
            >
                <RiContactsBookLine />
            </a>
        </nav>
    );
};

export default Nav;
