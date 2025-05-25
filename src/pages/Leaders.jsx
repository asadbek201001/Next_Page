import React from "react";

// images
import Asadbek from "../images/Asadbek.jpg";
import Anvarbek from "../images/Anvabek.jpg";





// style
import "../style.css";

export default function About() {
    const people = [
        {
            img: Asadbek,
            name: "Asadbek Gulomov",
            role: "Disigner and coder",
            quote:
                "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
        },
        {
            img: Anvarbek,
            name: "Avnarbek Ahadov",
            role: "FrontEnd developer",
            quote:
                "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
        },
        {
            img: Asadbek,
            name: "Asadbek Gulomov",
            role: "Disigner and coder",
            quote:
                "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
        },
    ];

    return (
        <div className="leader-container">
                <div className="leader-main">
                <div className="leader-title3">
                    About Us
                </div>
            


            <div className="leader-wrapper">
                {people.map((person, index) => (
                    <div key={index} className="card">
                        <img src={person.img} alt={person.name} className="profile-pic" />
                        <h2>{person.name}</h2>
                        <h3>{person.role}</h3>
                        <p>{person.quote}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
