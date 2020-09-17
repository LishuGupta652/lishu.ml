import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogRocket from "logrocket";
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
  return (
    <>
      <header>
        <div className="header">
          <motion.div
            animate={{ x: "-100%" }}
            transition={{ delay: 0.3 }}
            className="animated-overlay"
          />

          <div className="love">💓 WITH EASTER EGGS 💗</div>
          <div className="content">
            <motion.h1
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={{ opacity: 1, y: "-60px" }}
              transition={{ ease: "easeInOut", duration: 0.25, delay: 1 }}
            >
              Web and Android Developer
            </motion.h1>
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
                animate={{
                  rotate: [0, 0, 270, 270, 0],
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
                  default: { duration: 2 },
                }}
              >
                <a className="logo" href="https://www.github.com/lishugupta652/" target="_blank" ><span role="img" aria-label="rocket">🚀</span>
LISHU GUPTA <span role="img" aria-label="rocket">🚀</span></a>
              </motion.h6>
            </motion.div>
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link to="/login">Login</Link>
            </motion.h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
