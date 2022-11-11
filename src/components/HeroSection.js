import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function HeroSection() {
  return (
    <>
    <section className="hero" role="banner">
    <div className="hero-img">
                    <img src="images/company.png" className="w3-circle" alt="Hero image"/>
                </div>
                <div className="hero-txt">
                    <h2>Engine for modernization and change of life for farmers in Africa</h2>
                    <p>We strive on a joint application of principles and their underlying values to design an
                      alternative and truly innovative farming and food system.</p>
                    <Link to="/Home" className="btn-mobile">
                    <Button
                    >Intervetions</Button></Link>
                </div>
            </section>
    </>
  );
}

export default HeroSection;
