import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import '../assets/Style/footer.css';

function Footer(){
    return(
        <>
            <footer className="footer">

                {/* Footer top - 4 columns */}
                <div className="footer-top">

                    {/* Column 1 - Heading + about */}
                    <div className="footer-box" data-aos="fade-up">
                        <h2 className="footer-heading">
                            <span className="logo-green-light">Fruit</span>
                            <span className="logo-orange">zone</span>
                        </h2>
                        <p className="footer-text">
                            Fresh fruits, straight from the farm to your home.
                            Healthy, juicy and 100% natural every day.
                        </p>

                        {/* Social icons */}
                        <div className="footer-social">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                                <FaFacebookF />
                            </a>
                            <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="social-icon">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Quick links */}
                    <div className="footer-box" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-list">
                            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
                            <li><NavLink to="/about" className="footer-link">About</NavLink></li>
                            <li><NavLink to="/fruits" className="footer-link">Fruits</NavLink></li>
                            <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 3 - Juice varieties */}
                    <div className="footer-box" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="footer-title">Juice</h3>
                        <ul className="footer-list">
                            <li><NavLink to="/fruits" className="footer-link">Mango Juice</NavLink></li>
                            <li><NavLink to="/fruits" className="footer-link">Orange Juice</NavLink></li>
                            <li><NavLink to="/fruits" className="footer-link">Apple Juice</NavLink></li>
                            <li><NavLink to="/fruits" className="footer-link">Pomegranate Juice</NavLink></li>
                            <li><NavLink to="/fruits" className="footer-link">Watermelon Juice</NavLink></li>
                            <li><NavLink to="/fruits" className="footer-link">Grape Juice</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact details */}
                    <div className="footer-box" data-aos="fade-up" data-aos-delay="600">
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="footer-list">
                            <li className="footer-text">123, Fruit Street, Tamil Nadu</li>
                            <li className="footer-text">+91 98765 43210</li>
                            <li className="footer-text">hello@fruitzone.com</li>
                            <li className="footer-text">Open: 7 AM - 9 PM</li>
                        </ul>
                    </div>

                </div>

                {/* Footer bottom - copyright */}
                <div className="footer-bottom">
                    <p>© 2026 Fruitzone. All rights reserved.</p>
                </div>

            </footer>
        </>
    );
}
export default Footer;