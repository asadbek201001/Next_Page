import React from "react";




//image 
import Logo2 from "../images/Logo2.png"





//style 
import "../style.css"





export default function About() {
    return (
        <div className="about-container">
            <div className="about-main">
                <div className="about-title">
                    About Us
                </div>

            <div className="about-wrapper">
                <div className="about-text">
                    <div className="about-text-title">
                        About Our <br />
                        Company <br />
                    </div>
                    <div className="about-text2">
                        <div className="about-p">
                    A team comprised of board certified  <br />
                    accountants, Manreka Accounting helps <br />
                    you handle accounting problems in the  <br />
                    most accessible and convenient way. <br />
                    </div>
                    </div>
                </div>
                <div className="about-logo">
                    <img src={Logo2} alt="" />

                </div>
            </div>
            </div>
        </div>
    )
}