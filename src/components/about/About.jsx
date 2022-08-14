import React from "react";
import { FaAward, FaUsers } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";

import "./about.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Learning</small>
                        </article>
                        <article className="about__card">
                            <FaUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>0+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <IoFolderOpen className="about__icon" />
                            <h5>Project</h5>
                            <small>1+ Completed</small>
                        </article>
                    </div>

                    <p>
                        2022 while still a sophomore at East Asia University of
                        Technology. At that time I was not everyone's ideal man
                        nor a genius like Nikola Tesla but still trying every
                        day to be a better version of me than I was yesterday. I
                        once heard a sage once said: "A mature man is not the
                        man that the girls all love, but the one who understands
                        he has two lives, the second begins when he realizes he
                        only has one".
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
