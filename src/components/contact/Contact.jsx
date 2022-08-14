import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

import "./contact.css";

const Contact = () => {
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_q03m7ci",
            "template_1y00xqi",
            formRef.current,
            "RTN09En_YE5Q0dy7o"
        );

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>vietcong1508@gmail.com</h5>
                        <a
                            href="mailto:vietcong1508@gmail.com"
                            target="__blank"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Nguyen The Anh</h5>
                        <a href="https://m.me/corny1508" target="__blank">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <SiDiscord className="contact__option-icon" />
                        <h4>Discord</h4>
                        <h5>Corny#4031</h5>
                        <a
                            href="https://discord.gg/GtxGZ2FWZe"
                            target="__blank"
                        >
                            Join my sever
                        </a>
                    </article>
                </div>
                <form ref={formRef} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
