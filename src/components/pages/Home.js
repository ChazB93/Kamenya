import React from "react";
import "../../App.css";
//import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Activities from "../Activies";
import Quote from "../Quote";

function Home() {
  return (
    <>
      <HeroSection />
      <Activities/>
      <Quote/>
      <Footer />
    </>
  );
}

export default Home;
