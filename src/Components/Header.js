import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Image_icon from "../image/hero-img.jpg"
const Header = () => {
    return (
        <>
        <header>
            <div className="app">

            </div>
                
                <div className="banner">

                <div style={{height: "90vh", overflow: "", position: "relative"}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                        <path d="M0.00,130.27 C216.00,182.92 300.30,60.39 500.00,139.03 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#333652"}}></path>
                    </svg>

                <div className="hero">
                    <div className="hero-content">
                        <img src={Image_icon} alt="lishu Gupta"/>
                        <h2 className="name">Dimitri Marco</h2>
                        <p className="info">Lorem lorem lorem ipsu is the greatets ihis kand thisk akjldf he lkajd iognakdjf oiejkaf dljka.</p>
                        <Link 
                              to="portfolio"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-80}
                              duration={500}
                              delay={300} >
                                    <i class="fa fa-angle-down down-icon" aria-hidden="true"></i>
                        </Link>                        
                    </div>
                </div>
                </div>
                
                
            </div>
        </header>
        </>
    )
}

export default Header
