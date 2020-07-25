import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="container">
            <div className="header-inner">
              <div className="logo">
                <img src={require("../image/logo.png")} alt="logo" />
              </div>

              {/* <div className="nav">
                <ul>
                  <li>Works</li>
                  <li>Certifications</li>
                </ul>
              </div> */}

              <h1>Web Developer, Android Developer and Programmer.</h1>
              <div className="buttons">
                <button className="b-github">
                  <a
                    href="https://www.github.com/lishugupta652"
                    target="_blank"
                  >
                    <i class="fa fa-github icon-m" aria-hidden="true"></i>
                    Github
                  </a>
                </button>

                <button className="b-resume">
                  <a
                    href="https://docs.google.com/document/d/1UiG9E1EZsSIehbzVPrvFfXyfyQhO7GC_E66tvmv1vjc/edit?usp=sharing"
                    target="_blank"
                  >
                    <i class="fa fa-file-text-o icon-m" aria-hidden="true"></i>
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
