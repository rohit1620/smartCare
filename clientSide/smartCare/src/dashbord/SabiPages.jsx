import React from "react";
import { Route, Routes } from "react-router-dom";
import DoctorDashboard from "./DoctorDashboard";
import ReceptionDashboard from "./ReceptionDashboard";
import AdminDoctorManager from "./AdminDoctorManager";
import MedicalDashboard from "./MedicalDashboard";

const SabiPages = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='' element={}/> */}
        <Route path="/dashboard/admin" element={<ReceptionDashboard />} />
        <Route path="/dashboard/admin/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/admin/medical" element={<MedicalDashboard />} />
        <Route
          path="/dashboard/admin/admindoctor"
          element={<AdminDoctorManager />}
        />
      </Routes>
    </div>
  );
};

export default SabiPages;
