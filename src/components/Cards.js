import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Interventions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/farmer1.jpg"
              text="To be added ccccccccccccccccccccccccccccccccccccccc
              cccccccccccccccccccccccccccccccccccccccc
              cccccccccccccccccccccccccccccccccccccccccccccccccc
              cccccccccccccccccccccccccccccccc"
              label="Modern agriculture"
              /* path="/services" */
            />
            <CardItems
              src="images/IoTfarm.jpg"
              text="To be added  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
              vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
              label="Smart Farming"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/kids.jpg"
              text="To be added"
              label="Improve farmer's life"
            />
            <CardItems
              src="images/institution.jpg"
              text="Tobe Added"
              label="Support Institutions"
            />
            <CardItems
              src="images/accompagne.jpg"
              text="To be added"
              label="Sustainable farming"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
