import React from "react";
import { NavLink } from "react-router-dom";
import { FaLeaf, FaTruck, FaAppleAlt, FaTags } from "react-icons/fa";
import '../assets/Style/sec1.css';

import frt3 from '../assets/Image/cherry.jpg';
import frt4 from '../assets/Image/dragonfruit.jpg';
import frt5 from '../assets/Image/goa.jpg';
import frt6 from '../assets/Image/graps1.jpg';

function Section1(){
    return(
        <>
            <section className="sec1">

                {/* Section heading */}
                <div className="sec1-head" data-aos="fade-up">
                    <p className="sec1-tag">Why Fruitzone?</p>
                    <h2 className="sec1-title">
                        Freshness You Can <span className="sec1-highlight">Taste</span>
                    </h2>
                    <p className="sec1-sub">
                        Fruitzone is your own neighbourhood fruit shop. We pick the best fruits
                        from trusted farms and bring them to you fresh, every single day.
                    </p>
                </div>

                {/* 4 cards */}
                <div className="sec1-cards">

                    {/* Card 1 */}
                    <div className="sec1-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="sec1-icon">
                            <FaLeaf />
                        </div>
                        <h3 className="sec1-card-title">Farm Fresh</h3>
                        <p className="sec1-card-text">
                            Fruits directly from local farms, picked fresh every morning
                            and delivered to our shop the same day.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="sec1-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="sec1-icon">
                            <FaTruck />
                        </div>
                        <h3 className="sec1-card-title">Fast Delivery</h3>
                        <p className="sec1-card-text">
                            Order from home and get your fruits at your doorstep
                            within 60 minutes, fresh and safely packed.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="sec1-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="sec1-icon">
                            <FaAppleAlt />
                        </div>
                        <h3 className="sec1-card-title">100% Natural</h3>
                        <p className="sec1-card-text">
                            No chemicals, no artificial ripening. Only pure, healthy
                            and naturally ripened fruits for your family.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="sec1-card" data-aos="fade-up" data-aos-delay="700">
                        <div className="sec1-icon">
                            <FaTags />
                        </div>
                        <h3 className="sec1-card-title">Best Price</h3>
                        <p className="sec1-card-text">
                            Top quality fruits at the fairest price. Special offers
                            and discounts on fruit boxes every week.
                        </p>
                    </div>

                </div>


                {/* This week most ordered - flip cards */}
                <div className="weekly">

                    <div className="sec1-head" data-aos="fade-up">
                        <p className="sec1-tag">Top Picks</p>
                        <h2 className="sec1-title">
                            This Week's <span className="sec1-highlight">Most Ordered</span>
                        </h2>
                    </div>

                    <div className="weekly-cards">

                        {/* Flip card 1 - Cherry */}
                        <div className="flip-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="flip-inner">

                                {/* Front side */}
                                <div className="flip-front">
                                    <img src={frt3} alt="Cherry" className="flip-img" />
                                    <div className="flip-info">
                                        <h3 className="flip-name">Cherry</h3>
                                        <p className="flip-price">₹600 / kg</p>
                                    </div>
                                </div>

                                {/* Back side */}
                                <div className="flip-back">
                                    <h3 className="flip-back-name">Cherry</h3>
                                    <p className="flip-back-price">₹600 / kg</p>
                                    <ul className="flip-benefits">
                                        <li>Rich in antioxidants</li>
                                        <li>Helps you sleep better</li>
                                        <li>Good for heart health</li>
                                    </ul>
                                    <NavLink to="/fruits" className="flip-btn">Buy Now</NavLink>
                                </div>

                            </div>
                        </div>

                        {/* Flip card 2 - Dragon Fruit */}
                        <div className="flip-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="flip-inner">

                                <div className="flip-front">
                                    <img src={frt4} alt="Dragon Fruit" className="flip-img" />
                                    <div className="flip-info">
                                        <h3 className="flip-name">Dragon Fruit</h3>
                                        <p className="flip-price">₹250 / kg</p>
                                    </div>
                                </div>

                                <div className="flip-back">
                                    <h3 className="flip-back-name">Dragon Fruit</h3>
                                    <p className="flip-back-price">₹250 / kg</p>
                                    <ul className="flip-benefits">
                                        <li>Boosts immunity</li>
                                        <li>Good for digestion</li>
                                        <li>Low in calories</li>
                                    </ul>
                                    <NavLink to="/fruits" className="flip-btn">Buy Now</NavLink>
                                </div>

                            </div>
                        </div>

                        {/* Flip card 3 - Guava */}
                        <div className="flip-card" data-aos="fade-up" data-aos-delay="500">
                            <div className="flip-inner">

                                <div className="flip-front">
                                    <img src={frt5} alt="Guava" className="flip-img" />
                                    <div className="flip-info">
                                        <h3 className="flip-name">Guava</h3>
                                        <p className="flip-price">₹80 / kg</p>
                                    </div>
                                </div>

                                <div className="flip-back">
                                    <h3 className="flip-back-name">Guava</h3>
                                    <p className="flip-back-price">₹80 / kg</p>
                                    <ul className="flip-benefits">
                                        <li>Full of Vitamin C</li>
                                        <li>Improves digestion</li>
                                        <li>Keeps skin healthy</li>
                                    </ul>
                                    <NavLink to="/fruits" className="flip-btn">Buy Now</NavLink>
                                </div>

                            </div>
                        </div>

                        {/* Flip card 4 - Grapes */}
                        <div className="flip-card" data-aos="fade-up" data-aos-delay="700">
                            <div className="flip-inner">

                                <div className="flip-front">
                                    <img src={frt6} alt="Grapes" className="flip-img" />
                                    <div className="flip-info">
                                        <h3 className="flip-name">Grapes</h3>
                                        <p className="flip-price">₹120 / kg</p>
                                    </div>
                                </div>

                                <div className="flip-back">
                                    <h3 className="flip-back-name">Grapes</h3>
                                    <p className="flip-back-price">₹120 / kg</p>
                                    <ul className="flip-benefits">
                                        <li>Gives instant energy</li>
                                        <li>Good for eyes</li>
                                        <li>Keeps the body hydrated</li>
                                    </ul>
                                    <NavLink to="/fruits" className="flip-btn">Buy Now</NavLink>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}
export default Section1;