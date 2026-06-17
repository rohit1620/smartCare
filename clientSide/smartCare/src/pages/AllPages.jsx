import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import Appoinment from "./Appoinment";
import ContactPage from "./ContactPage";
import DoctorPage from "./DoctorPage";
import ServicesPage from "./ServicesPage";
import Auth from "./Auth";
// import HospitalUserDashboard from "../dashbord/HospitalUserDashboard";
import ReceptionDashboard from "../dashbord/ReceptionDashboard";
import DoctorDashboard from "../dashbord/DoctorDashboard";
import UserDashboard from "../dashbord/UserDashboard";
import MedicalDashboard from "../dashbord/MedicalDashboard";
import AdminDoctorManager from "../dashbord/AdminDoctorManager";
import LoginForm from "../dashbord/LoginForm";
import AdminDashboard from "../dashbord/AdminDashboard";

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
        {/* <Route path="/dashboard/user" element={<HospitalUserDashboard />} /> */}
        <Route path="/dashboard/reception" element={<ReceptionDashboard />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/medical" element={<MedicalDashboard />} />
        <Route path="/dashboard/admindoctor" element={<AdminDoctorManager />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />}>
          <Route
            path="/dashboard/admin/reception"
            element={<ReceptionDashboard />}
          />
          <Route path="/dashboard/admin/doctor" element={<DoctorDashboard />} />
          <Route
            path="/dashboard/admin/medical"
            element={<MedicalDashboard />}
          />
          <Route
            path="/dashboard/admin/admindoctor"
            element={<AdminDoctorManager />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default AllPages;
