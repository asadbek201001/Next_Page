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

                "Before writing the codes, the person who designs them through the Canva app or website is considered.",
        },
        {
            img: Anvarbek,
            name: "Avnarbek Ahadov",
            role: "FrontEnd developer",
            quote:

                "The person who writes the code based on the design and uses it is considered responsible for its operation.",
        },
        {
            img: Asadbek,
            name: "Asadbek Gulomov",
            role: "Disigner and coder",
            quote:
                "Before writing the codes, the person who designs them through the Canva app or website is considered.",
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
