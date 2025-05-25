import React from "react";




//images 
import Coin from "../images/coin.jpg";
import Money from "../images/money.jpg";
import MoneyUp from "../images/moneyUp.jpg";


//style
import "../style.css"






export default function Service() {
    return (
        <div className="service-container">
           <div className="service-main">
                <div className="service-title3">
                    Our Services
                </div>


        <div className="service-wrapper">
      
          <div className="service-box">
            <img src={Coin} alt="Coin icon" />
            <h2 className="service-title yellow">For Freelancers</h2>
            <p className="service-desc">Have a tax-paying freelance 
                <br />
                career with our help</p>
          </div>
      
          <div className="service-box">
            <img src={Money} alt="Money icon" />
            <h2 className="service-title green">For Professionals</h2>
            <p className="service-desc">Be a law-abiding individual by <br />
                 filing your taxes properly with us</p>
          </div>
      
          <div className="service-box">
            <img src={MoneyUp} alt="MoneyUp icon" />
            <h2 className="service-title beige">For Businesses</h2>
            <p className="service-desc">Get rid of your business'<br />
                 accounting headaches with us</p>
          </div>
      
        </div>
      </div>
      </div>
      
    )
}