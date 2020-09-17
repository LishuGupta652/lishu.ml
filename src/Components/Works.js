import React, { useRef } from "react";
import Bounce from "react-reveal/Bounce";
import HeadShake from "react-reveal/HeadShake";
import { useIntersection } from "react-use";
import gsap from "gsap";

// Images
import dwarf from "../image/dwarf.jpg";
import azaelindia from "../image/azaelindia.jpg";
import payingguest from "../image/payingguest.jpg";
import dwarfinc from "../image/DwarfINC.jpg";
import awningApp from "../image/awningApp.jpg";
import trex from "../image/trex.gif";

const Works = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  const fadeIn = (element) => {
    gsap.to(element, 0.3, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 0.3, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.7
    ? // Not reached
      fadeOut(".fadeIn")
    : fadeIn(".fadeIn"); // reached so animate

  return (
    <div id="works" className="work">
      <section className="wrapper wrapper-1">
        <div className="heading container">
          <Bounce left>
            <h1>Works</h1>
          </Bounce>
        </div>
        <div className="container">
          <div className="details">
            <HeadShake>
              <h3>Azael India</h3>
            </HeadShake>
            <p>PHP</p>
            <p>
              Organization Operating In The Field of manufacturing, fabrication
              and trading of mobile health service vans, special concept
              vehicles, security surveillance vans, health centers and medical
              equipment.
            </p>
          </div>
          <div className="img">
            <a
              href="https://www.azaelindia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={azaelindia} alt="Azael India" />
            </a>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="wrapper wrapper-2">
        <div className="container">
          <div className="img">
            <a
              href="https://www.dwarf.ga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dwarf} alt="The Dwarf Company" />
            </a>
          </div>
          <div className="details fadeIn">
            <HeadShake>
              <h3>The Dwarf Company</h3>
            </HeadShake>
            <p>Startup's are love.</p>
            <p>React</p>
            <p>Netlify</p>
            <p>Contentfull</p>
            <p>Firebase</p>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-3">
        <div className="container">
          <div className="details">
            <HeadShake>
              <h3>Paying Guest</h3>
            </HeadShake>
            <p>Firebase Backend</p>
            <p>React Frontend</p>
          </div>
          <div className="img">
            <a
              href="http://www.payingguest.ml"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={payingguest} alt="Paying Guest" />
            </a>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-4">
        <div className="container">
          <div className="img">
            <a
              href="http://www.dwarf.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dwarfinc} alt="Dwarf INC" />
            </a>
          </div>
          <div className="details">
            <HeadShake>
              <h3>DWARF INC</h3>
            </HeadShake>
            <p>Smart India Project</p>
            <p>Building a Smart Future</p>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-5">
        <div className="heading container heading-android">
          <Bounce left>
            <h1 style={{ color: "#e77f67" }}>Android</h1>
          </Bounce>
        </div>
        <div className="container">
          <div className="details">
            <HeadShake>
              <h3>Awning Manufacture</h3>
            </HeadShake>
            <p>Android Studio</p>
            <p></p>
          </div>
          <div className="img">
            <a
              href="http://awningmanufacturer.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="android-img-container">
                <img
                  className="android-image"
                  src={awningApp}
                  alt="Paying Guest"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-6">
        <div className="heading container heading-python">
          <Bounce left>
            <h1 style={{ color: "#3c6382" }}>Python</h1>
          </Bounce>
        </div>
        <div className="container">
          <div className="details">
            <HeadShake>
              <h3>Automated Gaming</h3>
            </HeadShake>
            <p>Python</p>
            <p>PyAutoGUI</p>
            <p>PIL</p>
          </div>
          <div className="img">
            <img src={trex} alt="Dwarf INC" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
