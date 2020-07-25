import React, { useEffect } from "react";
import LogRocket from "logrocket";
// gsap
import { gsap, TimelineMax, TweenMax as T, Expo, Ease } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build

gsap.registerPlugin(CSSPlugin);
LogRocket.init("o47tqc/pakkabaniya");

LogRocket.identify("001", {
  name: "tarun Gupta",
  email: "001@pakkabaniya.ml",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
});

const Header = () => {
  const t1 = new TimelineMax();

  useEffect(() => {
    pageAnimation();
  }, []);

  const pageAnimation = () => {
    T.from(".wrapper", 1, {
      width: "0%",
    });
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="header-inner">
            <div className="wrapper"></div>
            <div className="wrapper-blue"></div>
            <div class="center-container"></div>

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
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github icon-m" aria-hidden="true"></i>
                  Github
                </a>
              </button>
              <button className="b-resume">
                <a
                  href="https://docs.google.com/document/d/1UiG9E1EZsSIehbzVPrvFfXyfyQhO7GC_E66tvmv1vjc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
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
      </header>
    </>
  );
};

export default Header;
