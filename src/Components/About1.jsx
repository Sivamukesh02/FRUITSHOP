import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/Style/style.css';

import about2 from '../assets/Image/frhero1.jpg';
import about3 from '../assets/Image/frhero2.jpg';

function About1(){
    return(
        <>
            <section className="about1">

                {/* Heading */}
                <div className="about1-head" data-aos="fade-up">
                    <p className="about1-tag">Our Story</p>
                    <h2 className="about1-title">
                        About <span className="about1-highlight">Fruitzone</span>
                    </h2>
                </div>

                {/* Row 1 - image left, content right */}
                <div className="about1-row">

                    <div className="about1-img-box" data-aos="fade-right">
                        <img src={about2} alt="Fresh fruits" className="about1-img" />
                    </div>

                    <div className="about1-content" data-aos="fade-left">
                        <h3 className="about1-sub-title">Fresh From The Farm</h3>
                        <p className="about1-text">
                            Fruitzone started with a simple dream, to bring fresh and
                            healthy fruits to every home. We work directly with local
                            farmers and pick the best fruits every morning, so what
                            you eat is always fresh, juicy and full of taste.
                        </p>
                        <p className="about1-text">
                            No chemicals, no artificial ripening. Just pure and
                            natural fruits, the way nature made them.
                        </p>
                    </div>

                </div>

                {/* Row 2 - content left, image right */}
                <div className="about1-row">

                    <div className="about1-content" data-aos="fade-right">
                        <h3 className="about1-sub-title">Quality You Can Trust</h3>
                        <p className="about1-text">
                            Every fruit in our shop is checked by hand before it
                            reaches you. We believe good health starts with good
                            food, and that is why quality is always our first promise.
                        </p>
                        <p className="about1-text">
                            From fresh fruits to cool juices and special fruit boxes,
                            we are here to make your everyday life healthier and happier.
                        </p>
                    </div>

                    <div className="about1-img-box" data-aos="fade-left">
                        <img src={about3} alt="Fruit shop" className="about1-img" />
                    </div>

                </div>

            </section>
        </>
    );
}
export default About1;