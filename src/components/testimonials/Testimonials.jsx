import React from "react";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const dataTestmonials = [
    {
        avatar: AVTR1,
        name: "Six",
        review: `He works very professionally. 
        Very dedicated to customers. 
        Pay attention to every small detail of the product. 
        Well worth our money`,
    },
    {
        avatar: AVTR2,
        name: "Vu Storm",
        review: `I must say that I am a very demanding customer. 
        But this guy, he can do anything to make his customers happy. 
        It's a whole new experience compared to previous times`,
    },
    {
        avatar: AVTR3,
        name: "JD_longnhat",
        review: `He treats his products like his own. 
        Absolutely unbelievable. 
        The interface immerses people in every click`,
    },
    {
        avatar: AVTR4,
        name: "Phuong Addict",
        review: `The interface isn't too eye-catching for me but 
        I totally understand why people rave about this guy. 
        The user experience must be called too great`,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper 
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="container testimonials__container">
                {dataTestmonials.map((data, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={data.avatar} alt="Client Avatar" />
                            </div>
                            <h5 className="client__name">{data.name}</h5>
                            <small className="client__review">
                                {data.review}
                            </small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
