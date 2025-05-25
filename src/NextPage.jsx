import React from "react";



//components
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Leaders from "./pages/Leaders";
import Account from "./pages/Account";
import Footer from "./pages/Footer";

//style
import "./style.css"


export default function NextPage() {
    return (
        <>     
        <Home />
         <About />
     <Service />
        <Leaders />
        <Account />   
        <Footer />
        </>
    )
}