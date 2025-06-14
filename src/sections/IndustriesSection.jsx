import React from "react";
import "../styles/IndustriesSection.css";
import FlowingMenu from "../components/FlowingMenu.jsx";
import ecommerceImg from '../assets/E-commerce.png';
import healthcareImg from '../assets/Healthcare.png';
import foodImg from "../assets/Food.png";
import realestateImg from "../assets/RealEstate.png";
import fintechImg from "../assets/Fintech.png"

const demoItems = [
  { link: "#", text: "E-commerce", image: ecommerceImg },
  { link: "#", text: "Healthcare ", image: healthcareImg },
  { link: "#", text: "Food & Delivery", image: foodImg },
  { link: "#", text: "Real Estate", image: realestateImg },
  { link: "#", text: "Fintech ", image: fintechImg },
  
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="industries-intro">
        <h2 className="industries-heading">Industries We Serve</h2>
        <p className="industries-subtext">
          Our expertise spans across multiple industries, helping them innovate with cutting-edge digital solutions.
        </p>
      </div>

      <div className="flowing-menu-wrapper">
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
};

export default IndustriesSection;
