import React from "react";
import { TimelineLite } from "gsap";

function Test() {
  React.useEffect(() => {
    const t = new TimelineLite();
    t.fromTo(
      ".text h1 .hidetext",
      1.5,
      {
        delay: 1.6,
        y: "110%",
        opacity: 0,
        ease: "Expo.easeInOut",
      },
      {
        delay: 1.6,
        y: "0%",
        opacity: 1,
        ease: "Expo.easeInOut",
      }
    );
  }, []);
  return (
    <>
      <div className="test">
        <div className="wrapper">
          {/* navbar */}
          <div className="navbar">
            <div className="title">Medicaps</div>

            <div className="categories">
              <ul>
                <li>Doctor</li>
                <li>patients</li>
                <li></li>
              </ul>
            </div>

            <div className="menu">
              <ion-icon name="ios-menu">🍔</ion-icon>
            </div>
            <div className="search">
              <ion-icon name="ios-search">🔍</ion-icon>
            </div>
          </div>

          {/* social media */}
          <div className="media">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

          {/* image */}
          <div className="img-wrapper01">
            <div className="img01"></div>
            <div className="block"></div>
          </div>
          <div className="img-wrapper02">
            <div className="img02"></div>
            <div className="block"></div>
          </div>

          {/* text */}
          <div className="text">
            <h1>
              <span className="hidetext">Medicaps</span>
            </h1>
            <p>
              <span className="hidetext">Get consultation on your screen.</span>
            </p>
          </div>

          {/* desc */}
          <div className="desc">
            <ul>
              <li>Volume 01</li>
              <li>Volume 02</li>
            </ul>
            <p>
              Organisation Operating in the field of Construction, Fabrication,
              Smart Gardens, Smart Library, Smart parking Solutions
            </p>
          </div>

          {/* scroll down */}
          <div className="scrolldown">scroll down</div>

          {/* bottom menu */}
          <div className="bottomnav">
            <div className="next">up next</div>

            <div className="nav">
              <ul>
                <li>👆</li>
                <li>👇</li>
              </ul>

              <div className="bottomnav-img"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="e-content">
        <p>
          Organisation Operating in the field of Construction, Fabrication,
          Smart Gardens, Smart Library, Smart parking Solutions Organisation
          Operating in the field of Construction, Fabrication, Smart Gardens,
          Smart Library, Smart parking Solutions Organisation Operating in the
          field of Construction, Fabrication, Smart Gardens, Smart Library,
          Smart parking Solutions Organisation Operating in the field of
          Construction, Fabrication, Smart Gardens, Smart Library, Smart parking
          Solutions
        </p>
      </div>
    </>
  );
}

export default Test;
