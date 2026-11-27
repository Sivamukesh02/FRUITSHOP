import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import '../assets/Style/cont.css';

function Cont(){

    // Form values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // Success message show / hide
    const [sent, setSent] = useState(false);

    // When Send button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success message
        setSent(true);

        // Clear the form
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        // Hide success message after 4 seconds
        setTimeout(() => {
            setSent(false);
        }, 4000);
    };

    return(
        <>
            <section className="cont">

                {/* Heading */}
                <div className="cont-head" data-aos="fade-up">
                    <p className="cont-tag">Contact Us</p>
                    <h2 className="cont-title">
                        Get In <span className="cont-highlight">Touch</span>
                    </h2>
                    <p className="cont-sub">
                        Have a question or want to place a bulk order?
                        Send us a message and we will reply as soon as possible.
                    </p>
                </div>

                <div className="cont-box">

                    {/* Left side - shop details */}
                    <div className="cont-info" data-aos="fade-right">
                        <h3 className="cont-info-title">Fruitzone</h3>
                        <p className="cont-info-text">
                            Fresh fruits and juices every day. Visit our shop
                            or contact us anytime.
                        </p>

                        <div className="cont-item">
                            <div className="cont-icon"><FaMapMarkerAlt /></div>
                            <div>
                                <h4 className="cont-item-title">Address</h4>
                                <p className="cont-item-text">123, Fruit Street, Tamil Nadu</p>
                            </div>
                        </div>

                        <div className="cont-item">
                            <div className="cont-icon"><FaPhoneAlt /></div>
                            <div>
                                <h4 className="cont-item-title">Phone</h4>
                                <p className="cont-item-text">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="cont-item">
                            <div className="cont-icon"><FaEnvelope /></div>
                            <div>
                                <h4 className="cont-item-title">Email</h4>
                                <p className="cont-item-text">hello@fruitzone.com</p>
                            </div>
                        </div>

                        <div className="cont-item">
                            <div className="cont-icon"><FaClock /></div>
                            <div>
                                <h4 className="cont-item-title">Open Hours</h4>
                                <p className="cont-item-text">Every day, 7 AM - 9 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - form */}
                    <form className="cont-form" onSubmit={handleSubmit} data-aos="fade-left">
                        <h3 className="cont-form-title">Send Us A Message</h3>

                        <label className="cont-label">Your Name</label>
                        <input
                            type="text"
                            className="cont-input"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label className="cont-label">Email Address</label>
                        <input
                            type="email"
                            className="cont-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label className="cont-label">Phone Number</label>
                        <input
                            type="tel"
                            className="cont-input"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />

                        <label className="cont-label">Message</label>
                        <textarea
                            className="cont-input cont-textarea"
                            placeholder="Write your message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <button type="submit" className="cont-btn">Send Message</button>

                        {/* Success message */}
                        {sent && (
                            <p className="cont-success">
                                Thank you! Your message has been sent.
                            </p>
                        )}
                    </form>

                </div>

            </section>
        </>
    );
}
export default Cont;