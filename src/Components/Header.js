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
  }, []);

  const pageAnimation = () => {
    t1.fromTo(
      ".info",
      1.5,
      {
        opacity: 0,
        y: 50,
        ease: "power2.inOut",
      },
      {
        y: 0,
        opacity: 1,
      }
    );
    t1.from(".center-container", 1, {
      delay: -0.3,
      width: "0",
      x: -20,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="header-inner">
            {/* <div className="wrapper"></div>
              <div className="wrapper-blue"></div> */}
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
