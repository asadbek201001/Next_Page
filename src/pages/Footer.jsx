import React from "react";


//images 
import FooterImg from "../images/footerImg.jpeg"



//style
import "../style.css";



export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-img">
                <img src={FooterImg} alt="" />

            </div>
            <div className="footer-title-container">
                <div className="footer-title">
                    <div className="footer-title2">
                Contact Us
                </div>
                </div>
            </div>

            <div className="footer-wrapper">
                <div className="footer-wrapper-cards">
                    
                    <div className="footer-wrapper-card">
                        <div className="footer-wrapper-title">
                            Telegram Channel
                        </div>
                        <div className="footer-wrapper-text">
                        @NextPageDev 
                        </div>

                    </div>



                    <div className="footer-wrapper-card">
                    <div className="footer-wrapper-title">
                            Instagram Channel
                        </div>
                        <div className="footer-wrapper-text">
                        @_next_page_devs_
                        </div>
                        
                        </div>



                        <div className="footer-wrapper-card">
                        <div className="footer-wrapper-title">
                            Phone Number
                        </div>
                        <div className="footer-wrapper-text">
                        +998 90 050 07 67
                        </div>
                        
                        </div>


                </div>
            </div>
        </footer>
    )
}