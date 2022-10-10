import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="images/kamenya.png" />
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          MISSION & VISSION
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
