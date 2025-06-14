import React from "react";
import "../styles/ServicesSection.css";
import SpotlightCard from "../components/SpotlightCard.jsx";
import Particle from '../components/Particles'; // Particle background

// 🎨 Icon imports from react-icons
import { FaPaintBrush, FaMobileAlt, FaLaptopCode, FaFingerprint } from "react-icons/fa";

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting user-centered interfaces that are beautiful, functional, and intuitive.",
    color: "rgba(0, 229, 255, 0.2)",
    icon: <FaPaintBrush size={42} color="#18BC9C" />,
  },
  {
    title: "Web App Design",
    description: "Designing performant, responsive web applications with smooth user flows.",
    color: "rgba(255, 0, 174, 0.2)",
    icon: <FaLaptopCode size={42} color="#18BC9C" />,
  },
  {
    title: "Mobile App Design",
    description: "Creating sleek mobile-first experiences tailored to users on the go.",
    color: "rgba(0, 255, 133, 0.2)",
    icon: <FaMobileAlt size={42} color="#18BC9C" />,
  },
  {
    title: "Brand Identity",
    description: "Building distinct visual identities that capture your brand’s essence.",
    color: "rgba(255, 180, 0, 0.2)",
    icon: <FaFingerprint size={42} color="#18BC9C" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="particle-background">
        <Particle />
      </div>
      <div className="services-intro">
        <h2 className="services-heading">We Don’t Just Design — We Engineer Experiences</h2>
        <p className="services-subtext">
          Discover our core services crafted to elevate your brand through thoughtful design and digital precision.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <SpotlightCard
            key={idx}
            className="service-card"
            spotlightColor={service.color}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
