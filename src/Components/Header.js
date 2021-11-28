import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import LogRocket from "logrocket";
// components
// gsap
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin);


const Header = () => {
  const headerRef = useRef(null);

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

          <div className="love">
            <span role="img" aria-label="sheep">
              🐣
            </span>{" "}
            WITH EASTER LOVE
            <span role="img" aria-label="sheep">
              🐣
            </span>
          </div>
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
                <a
                  href="https://www.github.com/lishugupta652/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
