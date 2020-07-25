import React, { useEffect } from "react";
// gsap
import { gsap, TimelineMax, Expo, Ease } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);

const Header = () => {
  const t1 = new TimelineMax();
  useEffect(() => {
    pageAnimation();
  });

  const pageAnimation = () => {
    console.log("hello");
    t1.from(".wrapper-blue", 1.5, {
      width: "0%",
      ease: Expo.easeInOut,
    });
    t1.from(".info", 0.8, {
      y: 50,
      opacity: 0,
      scale: 2.5,
      ease: Expo.easeIn,
    });
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="header-inner">
              <div className="wrapper"></div>
              <div className="wrapper-blue"></div>

              <div className="logo">
                <img src={require("../image/logo.png")} alt="logo" />
              </div>

              <div className="nav">
                <ul>
                  <li>
                    <a href="#">Works</a>
                  </li>
                  <li>
                    <a href="#">Certifications</a>
                  </li>
                </ul>
              </div>

              <h1 className="info">
                Web Developer, Android Developer and Programmer.
              </h1>

              <div className="buttons">
                <button className="b-github">
                  <a
                    href="https://www.github.com/lishugupta652"
                    target="_blank"
                  >
                    <i className="fa fa-github icon-m" aria-hidden="true"></i>
                    Github
                  </a>
                </button>
                <button className="b-resume">
                  <a
                    href="https://docs.google.com/document/d/1UiG9E1EZsSIehbzVPrvFfXyfyQhO7GC_E66tvmv1vjc/edit?usp=sharing"
                    target="_blank"
                  >
                    <i
                      className="fa fa-file-text-o icon-m"
                      aria-hidden="true"
                    ></i>
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
