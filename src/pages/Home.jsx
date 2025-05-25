import React from "react";



//components
import Menu from "../components/Menu";

//style
import '../style.css';



export default function Home() {
    return (
        <>
                    <Menu />
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-text">
                    <div className="home-text1">
                    Programing <br />
                    Developer <br />
                    </div>
                </div>
                <div className="home-button">
                    <button>Go To Our Socials</button>
                </div>
            </div>


        </div>
        
        
        
        </>
    )
}