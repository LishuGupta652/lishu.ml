import React from "react";
import { Link } from "react-scroll";
import Image_icon from "../image/hero-img.jpg";

// react-reveal
import HeadShake from "react-reveal/HeadShake";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="header-inner">
              <div className="logo">
                <img src={require("../image/logo.png")} alt="logo" />
              </div>

              <h1>Web Developer Android Developer and Programmer.</h1>
              <div className="buttons">
                <button className="b-github">
                  <i class="fa fa-github icon-m" aria-hidden="true"></i>
                  Github
                </button>
                <button className="b-resume">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
