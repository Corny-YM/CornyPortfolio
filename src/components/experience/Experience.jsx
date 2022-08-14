import React from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";

import "./experience.css";

const dataExp = [
    // Frontend
    {name: 'C#', side: 'front-end'},
    {name: 'HTML', side: 'front-end'},
    {name: 'CSS', side: 'front-end'},
    {name: 'JavaScript', side: 'front-end'},
    {name: 'Bootstrap', side: 'front-end'},
    {name: 'ReactJS', side: 'front-end'},
    // Backend
    {name: 'NodeJS', side: 'back-end'},
    {name: 'MongoDB', side: 'back-end'},
    {name: 'PHP', side: 'back-end'},
    {name: 'SQL Sever', side: 'back-end'},
    {name: 'MySQL', side: 'back-end'},
]

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Experience</h3>
                    <div className="experience__content">
                        {dataExp.map((data, index) => {
                            return data.side === 'front-end' && (
                                <article key={index} className="experience__details">
                                    <BsBookmarkCheckFill className="experience__details-icons" />
                                    <div>
                                        <h4>{data.name}</h4>
                                        <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Experience</h3>
                    <div className="experience__content">
                        {dataExp.map((data, index) => {
                            return data.side === 'back-end' && (
                                <article key={index} className="experience__details">
                                    <BsBookmarkCheckFill className="experience__details-icons" />
                                    <div>
                                        <h4>{data.name}</h4>
                                        <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
