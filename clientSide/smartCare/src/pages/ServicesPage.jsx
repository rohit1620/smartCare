import React from "react";
import ServicesHeroSection from "../components/services/ServicesHeroSection";
import MedicalServicesSection from "../components/services/MedicalServicesSection";
import EmergencyCTASection from "../components/services/EmergencyCTASection";
import WhyChooseHealthcare from "../components/services/WhyChooseHealthcare";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHeroSection />
      <MedicalServicesSection />
      <EmergencyCTASection />
      <WhyChooseHealthcare />
    </div>
  );
};

export default ServicesPage;
