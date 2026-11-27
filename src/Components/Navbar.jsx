import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../assets/Style/navbar.css';

import frt1 from '../assets/Image/apple.jpg';

function Navbar(){

    // AOS start pannrom (page load aanapo animation work aagum)
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return(
        <>
            <nav className="navbar" data-aos="fade-down">

                {/* Logo - image + Fruitzone name */}
                <div className="nav-logo" data-aos="fade-right" data-aos-delay="200">
                    <img src={frt1} alt="Fruitzone logo" className="nav-logo-img" />
                    <h2 className="nav-logo-text">
                        <span className="logo-green">Fruit</span>
                        <span className="logo-orange">zone</span>
                    </h2>
                </div>

                {/* Menu links */}
                <ul className="nav-links">
                    <li data-aos="fade-down" data-aos-delay="300">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li data-aos="fade-down" data-aos-delay="400">
                        <NavLink
                            to="/about"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            About
                        </NavLink>
                    </li>

                    <li data-aos="fade-down" data-aos-delay="500">
                        <NavLink
                            to="/fruits"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Fruits
                        </NavLink>
                    </li>

                    <li data-aos="fade-down" data-aos-delay="600">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </>
    );
}
export default Navbar;