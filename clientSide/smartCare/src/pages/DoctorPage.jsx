import React from "react";
import DoctorsHeroSection from "../components/doctors/DoctorsHeroSection";
import DoctorsSearchFilterSection from "../components/doctors/DoctorsSearchFilterSection";
import FeaturedDoctorsSection from "../components/doctors/FeaturedDoctorsSection";

const DoctorPage = () => {
  return (
    <div>
      <DoctorsHeroSection />
      <DoctorsSearchFilterSection />
      <FeaturedDoctorsSection />
    </div>
  );
};

export default DoctorPage;
