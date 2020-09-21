import React, { Suspense, lazy } from "react";
import PageProgress from "react-page-progress";

//Components Imports
import Header from "../Components/Header";
// import Skills from "../Components/Skills";
// import Works from "../Components/Works";
// import Footer from "../Components/Footer";

// const Header = lazy(() => import("../Components/Header"));
const Works = lazy(() => import("../Components/Works"));
const Footer = lazy(() => import("../Components/Footer"));

function Home() {
  return (
    <>
      <Suspense fallback={<div className="loading-suspense">LOADING</div>}>
        <PageProgress color={"skyblue"} height={5} />
      </Suspense>
      <Header />
      {/* <Skills /> */}

      <Suspense fallback={<div />}>
        <Works />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
