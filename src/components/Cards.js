import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Intervetions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src={process.env.PUBLIC_URL + "/images/train.jpg"}
              text="We Co-develop with farmers and other stakeholders involved in agriculture to develop and new agricultural model that is sustainable"
              label="Offer trainings"
              path="/" 
            />
             <CardItems
              src={process.env.PUBLIC_URL + "/images/IoTfarm.jpg"}
              text="We develop IoT solutions that enable farmers to practice a smart farming"
              label="IoT Solutions"
              path="/services" 
            />
            
          </ul>
          <ul className="cards__items">
            <CardItems
              src={process.env.PUBLIC_URL + "/images/loan.jpeg"}
              text="We offer small loans to customers in order to ensure that farmers are able to get the basic needs even before the harvest"
              label="Provide loans to farmers"
              path="/services" 
            />
             <CardItems
              src={process.env.PUBLIC_URL + "/images/production.jpg"}
              text="We work together with the farmers to make sure that we provide all material and technical support needed to boost the production"
              label="Work to increase production"
              path="/services" 
            />
            <CardItems
              src={process.env.PUBLIC_URL + "/images/export.jpg"}
              text="We create channels to external markets in order to valorise the products and get the foreign currency to farmers"
              label="Export agricultural products"
              path="/services" 
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;