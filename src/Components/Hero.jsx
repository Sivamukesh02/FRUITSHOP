import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/Style/style.css';

import about1 from '../assets/Image/frhero.jpg';

function Hero(){
    return(
        <>
            <section className="hero">

                {/* Left side - content */}
                <div className="hero-left">

                    {/* Small tag */}
                    <p className="hero-tag" data-aos="fade-down">
                        100% Fresh & Natural
                    </p>

                    {/* Heading */}
                    <h1 className="hero-title" data-aos="fade-right" data-aos-delay="200">
                        Fresh Fruits, <br />
                        <span className="hero-highlight">Fresh Life</span>
                    </h1>

                    {/* Slogan content */}
                    <p className="hero-text" data-aos="fade-right" data-aos-delay="400">
                        Taste the goodness of nature. We bring juicy, farm fresh
                        fruits straight to your doorstep every single day.
                        Eat healthy, stay happy!
                    </p>

                    {/* Button */}
                    <NavLink to="/fruits" className="hero-btn" data-aos="fade-up" data-aos-delay="600">
                        Shop Now
                    </NavLink>

                </div>

                {/* Right side - image */}
                <div className="hero-right" data-aos="fade-left" data-aos-delay="300">
                    <img src={about1} alt="Fresh fruits" className="hero-img" />
                </div>

            </section>
        </>
    );
}
export default Hero;