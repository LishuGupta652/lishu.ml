import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogRocket from "logrocket";
// components
// gsap
import { gsap } from "gsap";
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
  const headerRef = useRef(null);
  const [background, setBackground] = useState("#121212");

  const toggleBackground = () => {
    const color = background !== "#121212" ? "#121212" : "#f5f5f5";
    setBackground(color);
  };

  // Targeting the header ref for animation
  useEffect(() => {
    gsap.to(headerRef.current, {
      duration: 0.15,
      backgroundColor: background,
      ease: "none",
    });
    console.log(background);
  }, [background]);

  // Targeting the header ref for animation
  //   useEffect(() => {
  //     gsap.from(headerRef.current, {
  //       duration: 0.15,
  //       autoAlpha: 0,
  //       ease: "none",
  //       delay: 0.12,
  //     });
  //   }, []);
  // Create Hearts when use first enter the component
  useEffect(() => {
    createHeart();
  }, []);

  // Gsap Animation
  useEffect(() => {
    gsap.fromTo(
      ".hidetext",
      0.5,
      {
        y: "60px",
        opacity: 0,
        ease: "Expo.easeInOut",
      },
      {
        delay: 1,
        y: "0px",
        opacity: 1,
        ease: "Expo.easeInOut",
      }
    );
  }, []);

  const createHeart = () => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      const test = document.getElementById("createHeart");

      const randomNumSec = Math.random() * 1 + 3;
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = randomNumSec + "s";
      heart.style.animationDelay = Math.random() * 1 + 2;
      const heartList = [
        "💘",
        "💖",
        "💗",
        "💓",
        "💙",
        "💚",
        "💛",
        "💜",
        "🧡",
        "💝",
      ];
      heart.innerText = heartList[Math.floor(Math.random() * heartList.length)];
      test.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, randomNumSec * 1000);
    }
    toggleBackground();
  };
  return (
    <>
      <header ref={headerRef}>
        <div className="header">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ delay: 0.3 }}
            className="animated-overlay"
          />

          <div className="love">🐣 WITH EASTER LOVE🐣</div>
          <div className="content">
            <h1 className="hidetext" onClick={createHeart}>
              Web and Android Developer
            </h1>
          </div>
          <div className="nav">
            <motion.div className="logo">
              {/* <motion.img
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 150,
                  bottom: 150,
                }}
                src={require("../image/logo.png")}
                alt="logo"
              /> */}
              <motion.h6
                className="logo"
                animate={{
                  y: -10,
                  opacity: [0, 1],
                }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                whileHover={{ scale: 1.2 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 100 },
                  default: { duration: 0.3 },
                }}
              >
                <a href="https://www.github.com/lishugupta652/" target="_blank">
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                  LISHU GUPTA
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                </a>
              </motion.h6>
            </motion.div>
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link to="/login">Login</Link>
            </motion.h1>
          </div>
          <div className="create-heart-container" id="createHeart"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
