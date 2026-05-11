import React from "react";
import AboutHeroSection from "../components/About/AboutHeroSection";
import MissionVisionValues from "../components/About/MissionVisionValues";
import InfrastructureFacilities from "../components/About/InfrastructureFacilities";
import PatientTestimonials from "../components/About/PatientTestimonials";
import HospitalFAQSection from "../components/About/HospitalFAQSection";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <MissionVisionValues />
      <InfrastructureFacilities />
      <PatientTestimonials />
      <HospitalFAQSection />
    </div>
  );
};

export default AboutPage;
