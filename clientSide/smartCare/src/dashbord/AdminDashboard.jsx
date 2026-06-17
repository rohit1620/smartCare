import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Pill,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";
// import SabiPages from "./SabiPages";
// import AllPages from "../pages/AllPages";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard/admin",
    },
    {
      name: "Reception",
      icon: <Users size={20} />,
      path: "/dashboard/admin/reception",
    },
    {
      name: "Doctors",
      icon: <Stethoscope size={20} />,
      path: "/dashboard/admin/doctor",
    },
    {
      name: "Medical/Pharmacy",
      icon: <Pill size={20} />,
      path: "/dashboard/admin/medical",
    },
    {
      name: "Add Doctor",
      icon: <UserPlus size={20} />,
      path: "/dashboard/admin/admindoctor",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-blue-900 text-white w-64 ${isOpen ? "block" : "hidden"} md:block transition-all fixed top-0 left-0 h-screen w-64`}
      >
        <div className="p-6 text-2xl font-bold border-b border-blue-800">
          Hospital Admin
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-4 px-6 py-4 hover:bg-blue-800 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        {/* <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu size={24} />
          </button>
          <h2 className="text-xl font-semibold text-gray-700">
            Admin Overview
          </h2>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            A
          </div>
        </header> */}

        {/* Dynamic Content Area */}
        <main className="ml-64">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
          {/* Yahan aap apne cards add kar sakte hain */}
          {/* <div className="bg-white p-6 rounded-lg shadow">
              Total Doctors: 25
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              Total Patients: 150
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              Pharmacy Stock: 85%
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              Appointments: 12
            </div>
          </div> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
