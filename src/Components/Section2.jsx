import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/Style/sec2.css';

import frt1 from '../assets/Image/apple.jpg';
import frt6 from '../assets/Image/graps1.jpg';
import frt8 from '../assets/Image/mango.jpg';
import frt10 from '../assets/Image/orange.jpg';

import frt12 from '../assets/Image/pineapple.jpg';
import frt13 from '../assets/Image/pomagrante.jpg';
import frt14 from '../assets/Image/strawberry1.jpg';
import frt15 from '../assets/Image/watermelon.jpg';

function Section2(){
    return(
        <>
            <section className="sec2">

                {/* ---------- Part 1 : Juice Varieties ---------- */}
                <div className="juice">

                    <div className="sec2-head" data-aos="fade-up">
                        <p className="sec2-tag">Fresh & Cool</p>
                        <h2 className="sec2-title">
                            Juice <span className="sec2-highlight">Varieties</span>
                        </h2>
                    </div>

                    <div className="juice-cards">

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="100">
                            <img src={frt8} alt="Mango Juice" className="juice-img" />
                            <h3 className="juice-name">Mango Juice</h3>
                            <p className="juice-text">Gives instant energy and keeps you cool in summer.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="200">
                            <img src={frt10} alt="Orange Juice" className="juice-img" />
                            <h3 className="juice-name">Orange Juice</h3>
                            <p className="juice-text">Full of Vitamin C, boosts your immunity.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="300">
                            <img src={frt1} alt="Apple Juice" className="juice-img" />
                            <h3 className="juice-name">Apple Juice</h3>
                            <p className="juice-text">Good for heart health and keeps you active.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="400">
                            <img src={frt13} alt="Pomegranate Juice" className="juice-img" />
                            <h3 className="juice-name">Pomegranate Juice</h3>
                            <p className="juice-text">Increases blood level and improves skin glow.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="100">
                            <img src={frt15} alt="Watermelon Juice" className="juice-img" />
                            <h3 className="juice-name">Watermelon Juice</h3>
                            <p className="juice-text">Keeps the body hydrated and fresh all day.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="200">
                            <img src={frt6} alt="Grape Juice" className="juice-img" />
                            <h3 className="juice-name">Grape Juice</h3>
                            <p className="juice-text">Rich in antioxidants and good for your eyes.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="300">
                            <img src={frt12} alt="Pineapple Juice" className="juice-img" />
                            <h3 className="juice-name">Pineapple Juice</h3>
                            <p className="juice-text">Helps digestion and reduces body heat.</p>
                        </div>

                        <div className="juice-card" data-aos="zoom-in" data-aos-delay="400">
                            <img src={frt14} alt="Strawberry Juice" className="juice-img" />
                            <h3 className="juice-name">Strawberry Juice</h3>
                            <p className="juice-text">Makes your skin healthy and lowers stress.</p>
                        </div>

                    </div>
                </div>

                {/* ---------- Part 2 : Eat Fruits ---------- */}
                <div className="eat">

                    <div className="sec2-head" data-aos="fade-up">
                        <p className="sec2-tag">Healthy Life</p>
                        <h2 className="sec2-title">
                            Eat <span className="sec2-highlight">Fruits</span>
                        </h2>
                    </div>

                    {/* Row 1 - Pineapple */}
                    <div className="eat-row" data-aos="fade-up">
                        <img src={frt12} alt="Pineapple" className="eat-img" />
                        <div className="eat-content">
                            <h3 className="eat-name">Pineapple</h3>
                            <ul className="eat-list">
                                <li>Helps digestion and stomach health</li>
                                <li>Rich in Vitamin C for strong immunity</li>
                                <li>Reduces swelling and body pain</li>
                                <li>Keeps your bones strong</li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 2 - Pomegranate */}
                    <div className="eat-row" data-aos="fade-up">
                        <img src={frt13} alt="Pomegranate" className="eat-img" />
                        <div className="eat-content">
                            <h3 className="eat-name">Pomegranate</h3>
                            <ul className="eat-list">
                                <li>Increases blood level in the body</li>
                                <li>Good for heart and blood pressure</li>
                                <li>Gives natural glow to your skin</li>
                                <li>Full of antioxidants</li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 3 - Strawberry */}
                    <div className="eat-row" data-aos="fade-up">
                        <img src={frt14} alt="Strawberry" className="eat-img" />
                        <div className="eat-content">
                            <h3 className="eat-name">Strawberry</h3>
                            <ul className="eat-list">
                                <li>Keeps your heart healthy</li>
                                <li>Good for skin and hair</li>
                                <li>Low in calories, good for weight control</li>
                                <li>Helps to control sugar level</li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 4 - Watermelon */}
                    <div className="eat-row" data-aos="fade-up">
                        <img src={frt15} alt="Watermelon" className="eat-img" />
                        <div className="eat-content">
                            <h3 className="eat-name">Watermelon</h3>
                            <ul className="eat-list">
                                <li>Keeps the body hydrated in summer</li>
                                <li>Reduces body heat and tiredness</li>
                                <li>Good for kidney health</li>
                                <li>Helps muscle pain after workout</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* ---------- Part 3 : Order banner ---------- */}
                <div className="order" data-aos="zoom-in">
                    <h2 className="order-title">
                        Fresh Fruits, <span className="order-highlight">Right At Your Door!</span>
                    </h2>
                    <p className="order-text">
                        Eat fresh, stay healthy. Place your order now and
                        get farm fresh fruits delivered to your home.
                    </p>
                    <NavLink to="/fruits" className="order-btn">Order Now</NavLink>
                </div>

            </section>
        </>
    );
}
export default Section2;