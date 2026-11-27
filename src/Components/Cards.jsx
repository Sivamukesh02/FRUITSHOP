import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/Style/card.css';

import frt1 from '../assets/Image/apple.jpg';
import frt2 from '../assets/Image/banana1.jpg';
import frt3 from '../assets/Image/cherry.jpg';
import frt4 from '../assets/Image/dragonfruit.jpg';
import frt5 from '../assets/Image/goa.jpg';
import frt6 from '../assets/Image/graps1.jpg';
import frt7 from '../assets/Image/kiwi1.jpg';
import frt8 from '../assets/Image/mango.jpg';
import frt9 from '../assets/Image/muskmelon.jpg';
import frt10 from '../assets/Image/orange.jpg';
import frt11 from '../assets/Image/papaya.jpg';
import frt12 from '../assets/Image/pineapple.jpg';
import frt13 from '../assets/Image/pomagrante.jpg';
import frt14 from '../assets/Image/strawberry1.jpg';
import frt15 from '../assets/Image/watermelon.jpg';

// All fruits list - image, name, rate
const fruits = [
    { img: frt1, name: "Apple", rate: 180 },
    { img: frt2, name: "Banana", rate: 60 },
    { img: frt3, name: "Cherry", rate: 600 },
    { img: frt4, name: "Dragon Fruit", rate: 250 },
    { img: frt5, name: "Guava", rate: 80 },
    { img: frt6, name: "Grapes", rate: 120 },
    { img: frt7, name: "Kiwi", rate: 300 },
    { img: frt8, name: "Mango", rate: 150 },
    { img: frt9, name: "Muskmelon", rate: 50 },
    { img: frt10, name: "Orange", rate: 100 },
    { img: frt11, name: "Papaya", rate: 60 },
    { img: frt12, name: "Pineapple", rate: 70 },
    { img: frt13, name: "Pomegranate", rate: 200 },
    { img: frt14, name: "Strawberry", rate: 250 },
    { img: frt15, name: "Watermelon", rate: 40 }
];

function Cards(){
    return(
        <>
            <section className="fruits">

                {/* Heading */}
                <div className="fruits-head" data-aos="fade-up">
                    <p className="fruits-tag">Fresh Collection</p>
                    <h2 className="fruits-title">
                        Our <span className="fruits-highlight">Fruits</span>
                    </h2>
                </div>

                {/* Cards - 3 in one row */}
                <div className="fruits-cards">

                    {fruits.map((item, index) => (
                        <div className="fruit-card" key={index} data-aos="fade-up">

                            {/* Fruit image */}
                            <img src={item.img} alt={item.name} className="fruit-img" />

                            {/* Name, rate, button */}
                            <div className="fruit-info">
                                <h3 className="fruit-name">{item.name}</h3>
                                <p className="fruit-rate">₹{item.rate} / kg</p>
                                <NavLink to="/contact" className="fruit-btn">Buy Now</NavLink>
                            </div>

                        </div>
                    ))}

                </div>

            </section>
        </>
    );
}
export default Cards;