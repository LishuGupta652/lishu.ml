import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a href="https://www.github.com/lishugupta652">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <h1>
          {" "}
          <i class="fa fa-quote-left" aria-hidden="true"></i> Don't Judge Me I
          Am Still Learning.
        </h1>
      </div>

      <div className="resume">
        <a href="https://docs.google.com/document/d/e/2PACX-1vQAYtwHunE6q5hijPSPIjnDbJW6LViny7gwaY08_mH0FNFQgbhYOtP74du28FIRTwMaLXvJ6w8Ghqlb/pub">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
