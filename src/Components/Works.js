import React, { useRef, useState, useEffect } from "react";
// import Bounce from "react-reveal/Bounce";
// import HeadShake from "react-reveal/HeadShake";
// import { useIntersection } from "react-use";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Images
import dwarf from "../image/dwarf.jpg";
import azaelindia from "../image/azaelindia.jpg";
import payingguest from "../image/payingguest.jpg";
import dwarfinc from "../image/DwarfINC.jpg";
import whatsappclone from "../image/whatsappclone.jpg";
import instagramclone from "../image/instagramclone.jpg";
import awningApp from "../image/awningApp.jpg";
import trex from "../image/trex.gif";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  //   const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { autoAlpha: 0, y: 20, scale: 0.95 },
      {
        duration: 0.15,
        autoAlpha: 1,
        scale: 1,
        y: 0,
        ease: "power3",
        scrollTrigger: {
          id: "sectionref",
          trigger: wrapperRef.current,
          toggleActions: "play none none none",
          start: "top center",
          //   end: "bottom center",
          //   toggleClass: "active",
        },
      }
    );

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
      clamp = gsap.utils.clamp(-15, 15); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  }, []);

  //   const intersection = useIntersection(sectionRef, {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.7,
  //   });

  //   const fadeIn = (element) => {
  //     gsap.to(element, 0.3, {
  //       opacity: 1,
  //       y: -60,
  //       ease: "power4.out",
  //       stagger: 0.1,
  //     });
  //   };

  //   const fadeOut = (element) => {
  //     gsap.to(element, 0.3, {
  //       opacity: 0,
  //       y: -20,
  //       ease: "power4.out",
  //     });
  //   };

  //   intersection && intersection.intersectionRatio < 0.7
  //     ? // Not reached
  //       fadeOut(".fadeIn")
  //     : fadeIn(".fadeIn"); // reached so animate

  return (
    <div id="works" className="work">
      <section className="wrapper wrapper-azael">
        <div className="heading">
          <h1>Works</h1>
        </div>
        <div className="container" ref={wrapperRef}>
          <div className="details">
            <h3>Azael India</h3>
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
              <motion.img
                class="skewElem"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                  //   transitionEnd: {
                  //     display: "none",
                  //   },
                }}
                transition={{ duration: 0.1 }}
                src={azaelindia}
                alt="Azael India"
              />
            </a>
          </div>
        </div>
      </section>

      {/* DWARF */}
      <section className="wrapper wrapper-dwarf">
        <div className="container">
          <div className="img">
            <a
              href="http://www.dwarf.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                class="skewElem"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                  //   transitionEnd: {
                  //     display: "none",
                  //   },
                }}
                transition={{ duration: 0.1 }}
                src={dwarfinc}
                alt="Dwarf INC"
              />
            </a>
          </div>
          <div className="details">
            <h3>DWARF INC</h3>
            <p>Smart India Project</p>
            <p>
              Organisation Operating in the field of Construction, Fabrication,
              Smart Gardens, Smart Library, Smart parking Solutions
            </p>
          </div>
        </div>
      </section>

      {/*  Whatsapp clone  */}
      <section className="wrapper wrapper-whatsapp">
        <div className="container">
          <div className="details">
            <h3>Whatsapp Clone</h3>
            <p>Firebase</p>
            <p>React</p>
            <p>Firestore</p>
            <p>Cloud Storage GCP</p>
            <p>Fetch API</p>
            <p>Nodejs</p>
            <p>Material ui</p>
          </div>
          <div className="img">
            <a
              href="https://whatsappcosmos.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                class="skewElem"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.1 }}
                src={whatsappclone}
                alt="Dwarf INC"
              />
            </a>
          </div>
        </div>
      </section>

      {/*  Instagram clone  */}
      <section className="wrapper wrapper-insta">
        <div className="container">
          <div className="img">
            <a
              href="https://instagramclonecosmos.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                class="skewElem"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.1 }}
                src={instagramclone}
                alt="Dwarf INC"
              />
            </a>
          </div>
          <div className="details">
            <h3>Instagram Clone</h3>
            <p>Firebase</p>
            <p>Firestore</p>
            <p>Cloud Storage GCP</p>
            <p>Fetch API</p>
            <p>Nodejs</p>
            <p>React</p>
            <p>Material ui</p>
          </div>
        </div>
      </section>

      <section className="wrapper wrapper-3">
        <div className="container">
          <div className="details">
            <h3>Paying Guest</h3>
            <p>Firebase backend</p>
            <p>Firestore</p>
            <p>React</p>
            <p>Material ui</p>
          </div>
          <div className="img">
            <a
              href="http://www.payingguest.ml"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                class="skewElem"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                  //   transitionEnd: {
                  //     display: "none",
                  //   },
                }}
                transition={{ duration: 0.1 }}
                src={payingguest}
                alt="Paying Guest"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="wrapper dwarf-company">
        <div className="container">
          <div className="img">
            <a
              href="https://www.dwarf.ga"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                class="skewElem"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                  //   transitionEnd: {
                  //     display: "none",
                  //   },
                }}
                transition={{ duration: 0.1 }}
                src={dwarf}
                alt="The Dwarf Company"
              />
            </a>
          </div>
          <div className="details fadeIn">
            <h3>The Dwarf Company</h3>

            <p>Startup's are love.</p>
            <p>React</p>
            <p>Netlify</p>
            <p>Contentfull</p>
            <p>Firebase</p>
          </div>
        </div>
      </section>

      {/* <section className="wrapper wrapper-5">
        <div className="heading container heading-android">
          <Bounce left>
            <h1 style={{ color: "#e77f67" }}>Android</h1>
          </Bounce>
        </div>
        <div className="container">
          <div className="details">
        
              <h3>Awning Manufacture</h3>
          
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
                <motion.img
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                    //   transitionEnd: {
                    //     display: "none",
                    //   },
                  }}
                  transition={{ duration: 0.1 }}
                  className="android-image"
                  src={awningApp}
                  alt="Paying Guest"
                />
              </div>
            </a>
          </div>
        </div>
      </section> */}

      <section className="wrapper wrapper-python">
        <div className="heading heading-python">
          {/* <Bounce left> */}
          <h1 style={{ color: "#30336b" }}>Python</h1>
          {/* </Bounce> */}
        </div>
        <div className="container">
          <div className="details">
            <h3>Automated Gaming</h3>
            <p>Python</p>
            <p>PyAutoGUI</p>
            <p>PIL</p>
          </div>
          <div className="img">
            <motion.img
              class="skewElem"
              whileHover={{
                scale: 1.02,
                boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                //   transitionEnd: {
                //     display: "none",
                //   },
              }}
              transition={{ duration: 0.1 }}
              src={trex}
              alt="Dwarf INC"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
