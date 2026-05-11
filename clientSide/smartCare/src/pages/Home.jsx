import React from "react";
import Heroku from "../components/home/Heroku";
import Quick from "../components/home/Quick";
import TrustedPartnersSection from "../components/home/Partners";
import Services from "../components/home/Services";
import WhyChooseUsSection from "../components/home/Choose";
import MeetOurDoctors from "../components/home/Doctors";

const Home = () => {
  return (
    <div>
      <Heroku />
      <Quick />
      <TrustedPartnersSection />
      <MeetOurDoctors />
      <Services />
      <WhyChooseUsSection />
    </div>
  );
};

export default Home;
