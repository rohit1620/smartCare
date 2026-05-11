import React from "react";
// import AppoinmentHeroSection from "../components/appoinment/AppoinmentHeroSection";
import AppointmentHeroSection from "../components/appoinment/AppointmentHeroSection";
import QuickAppointmentFormSection from "../components/Appoinment/QuickAppointmentFormSection";
import AvailableDoctorsSection from "../components/Appoinment/AvailableDoctorsSection";
import AvailableTimeSlotsSection from "../components/Appoinment/AvailableTimeSlotsSection";

const Appoinment = () => {
  return (
    <div>
      <QuickAppointmentFormSection />
      <AppointmentHeroSection />
      <AvailableDoctorsSection />
      <AvailableTimeSlotsSection />
    </div>
  );
};

export default Appoinment;
