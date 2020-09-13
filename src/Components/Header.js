import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
          <motion.div
            animate={{
              rotate: [0, 0, 270, 270, 0],
            }}
            whileHover={{ scale: 1.2 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 150,
              bottom: 150,
            }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            <img src={require("../image/logo.png")} alt="logo" />
          </motion.div>

          <div className="content">
            <h1>Web and Android Developer</h1>
          </div>
          <div className="nav">
            <h1>Login</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
