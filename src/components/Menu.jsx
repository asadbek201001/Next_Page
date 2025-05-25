import React from "react";


//style
import "../style.css"

//images 
import Logo from "../images/Logo.png"






export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-wrapper">
                <div className="menu-logo">
                    <img src={Logo} alt="" />
                    <h1>Next Page</h1>
                </div>
                <div className="menu-text">
                    <div className="menu-text1">
                    <h1>Our Services</h1>
                    </div>
                    <div className="menu-text2">
                    <h1>Our Socials</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}