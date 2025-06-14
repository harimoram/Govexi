import React from 'react';
import Hero from '../sections/Hero'; // Import the Hero component
import ProjectsSection from '../sections/ProjectsSection';
import ServicesSection from '../sections/ServicesSection';
import IndustriesSection from '../sections/IndustriesSection';
import FooterSection from '../sections/FooterSection';

function HomePage() {
  return (
    <div>
      <Hero />
      <ProjectsSection/>
      <ServicesSection/>
      <IndustriesSection/>
      <FooterSection/>

      {/* You can add other sections of your homepage here later */}
    </div>
  );
}

export default HomePage;