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
            <p className="service-desc">Turn your freelance gigs into 
                <br />
                a legal income stream — 
                <br />
                we’ve got your taxes covered.
                </p>
          </div>
      
          <div className="service-box">
            <img src={Money} alt="Money icon" />
            <h2 className="service-title green">For Professionals</h2>
            <p className="service-desc">Stay focused on your career while
               <br />
               we take care of your tax filings
               <br />
               — smart, simple, secure.
                 
                 </p>
          </div>
      
          <div className="service-box">
            <img src={MoneyUp} alt="MoneyUp icon" />
            <h2 className="service-title beige">For Businesses</h2>
            <p className="service-desc">Simplify your finances and 
              <br />

              focus on growth — let us
              <br />
              handle your accounting needs.
                 </p>
          </div>
      
        </div>
      </div>
      </div>
      
    )
}