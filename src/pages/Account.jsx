import React from "react";



//images 
import AccountIcon from "../images/account.png";

//style 
import "../style.css"



export default function Account() {
    return (
        <div className="account-container">
            <div className="account-wrapper">
                <div className="account-icon">
                    <img src={AccountIcon} alt="" />

                </div>
                <div className="account-card">
                Focus on one thing,<br />
                 develop with us,<br />
                  and the future will <br />
                  be in our hands. <br />

                </div>

            </div>
        </div>
    )
}