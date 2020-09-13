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
        <div className="logo">
          <img src={require("../image/logo.png")} alt="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
