import React from "react";
import { BsCheckLg } from "react-icons/bs";

import "./services.css";

const dataDesign = [
    {content: "Maximize user experience"},
    {content: "Eye-catching interface"},
    {content: "Easy to operate"},
    {content: "Easy to use"},
    {content: "Color harmony"},
    {content: "Does not cause eye fatigue"},
]
const dataDevelopment = [
    {content: "System Optimization"},
    {content: "Easy to store"},
    {content: "High security"},
    {content: "High reusability"},
    {content: "Store lots of data"},
    {content: "Avoid getting DDOS"},
    {content: "No loss of user data"},
    {content: "Fully franchisable"},
]
const dataCreation = [
    {content: "Unlimited creative content"},
    {content: "Rich content for all ages"},
    {content: "No copyright infringement"},
    {content: "Does not contain sensitive content"},
    {content: "Special content attracts customers"},
    {content: "Quick ideation time"},
]

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        {dataDesign.map((data, index) => {
                            return (
                                <li key={index}>
                                    <BsCheckLg className="service__list-icon" />
                                    <p>{data.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        {dataDevelopment.map((data, index) => {
                            return (
                                <li key={index}>
                                    <BsCheckLg className="service__list-icon" />
                                    <p>{data.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        {dataCreation.map((data, index) => {
                            return (
                                <li key={index}>
                                    <BsCheckLg className="service__list-icon" />
                                    <p>{data.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;
