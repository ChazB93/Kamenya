import React from "react";
import "../../App.css";
//import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Activities from "../Activies";

function Home() {
  return (
    <>
      <HeroSection />
      <Activities/>
      <Footer />
    </>
  );
}

export default Home;
