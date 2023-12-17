import React from "react";
import "./portfolio.css";
import CornyMusic from "../../assets/CornyMusic.png";
import YowaiMou from "../../assets/YowaiMou.png";
import SnakeGame from "../../assets/SnakeGame.png";
import ConvertBinary from "../../assets/ConvertBinary.png";
import Lyrik from "../../assets/Lyrik.png";
import CornyChat from "../../assets/CornyChat.png";
import CornTube from "../../assets/CornTube.png";

const dataPortfolio = [
    {
        id: 7,
        img: CornTube,
        title: "CornTube - Like Youtube 🐧",
        github: "https://github.com/Corny-YM/corntube",
        demo: "https://corntube.netlify.app/",
    },
    {
        id: 6,
        img: CornyChat,
        title: "CornyChat - Realtime Chat App",
        github: "https://github.com/Corny-YM/corny-chat-app",
        demo: "https://corny-chat-app.netlify.app",
    },
    {
        id: 5,
        img: Lyrik,
        title: "Lyriks - App Music With ReactJS",
        github: "https://github.com/Corny-YM/Corny-lyriks",
        demo: "https://corny-lyriks.netlify.app/",
    },
    {
        id: 4,
        img: CornyMusic,
        title: "Corny MP3 - Shilling Music When Gettin' Stress",
        github: "https://github.com/Corny-YM/Corny_MP3",
        demo: "https://corny-ym.github.io/Corny_MP3/",
    },
    {
        id: 3,
        img: YowaiMou,
        title: "YowaiMou - Introduce About Corny's team",
        github: "https://corny-ym.github.io/Yowaimou/",
        demo: "https://github.com/Corny-YM/Yowaimou/",
    },
    {
        id: 2,
        img: SnakeGame,
        title: "Snake Game 🐍 - Copy On Youtube >.<",
        github: "https://github.com/Corny-YM/Snake-game",
        demo: "https://corny-ym.github.io/Snake-game/",
    },
    {
        id: 1,
        img: ConvertBinary,
        title: "Basic Factor Conversion - Convert Binary",
        github: "https://github.com/Corny-YM/hugexercise",
        demo: "https://corny-ym.github.io/hugexercise/",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {dataPortfolio.map((data) => {
                    return (
                        <article key={data.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={data.img} alt="" />
                            </div>
                            <h3>{data.title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={data.github}
                                    target="__blank"
                                    className="btn"
                                >
                                    Github
                                </a>
                                <a
                                    href={data.demo}
                                    target="__blank"
                                    className="btn btn-primary"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
