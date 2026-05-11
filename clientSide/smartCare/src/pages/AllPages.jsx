import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import Appoinment from "./Appoinment";
import ContactPage from "./ContactPage";
import DoctorPage from "./DoctorPage";
import ServicesPage from "./ServicesPage";
import Auth from "./Auth";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/appointments" element={<Appoinment />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
};

export default AllPages;
