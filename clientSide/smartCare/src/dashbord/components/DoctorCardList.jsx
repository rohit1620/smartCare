import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorCardList = () => {
  const navigate = useNavigate();

  // स्टैटिक डेटा (बाद में आप इसे API से बदल सकते हैं)
  const doctors = [
    {
      id: "6a293bc47fd07a2bab7adaf7",
      name: "Dr. David Miller",
      specialization: "Orthopedic",
      exp: "14 Years",
      fees: 700,
    },
    {
      id: "6a1fec3c2b88d7343271e4a7",
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      exp: "15 Years",
      fees: 700,
    },
    {
      id: "6a1fea152b88d7343271e4a6",
      name: "Dr. Michael Lee",
      specialization: "Neurologist",
      exp: "5 Years",
      fees: 500,
    },
  ];

  const handleCardClick = (id) => {
    // क्लिक करने पर URL अपडेट होगा
    navigate(`/dashboard/admin/doctor?doctorId=${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Select a Doctor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => handleCardClick(doctor.id)}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                {doctor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-bold text-lg">{doctor.name}</h3>
                <p className="text-blue-600 font-medium">
                  {doctor.specialization}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Experience: {doctor.exp}</p>
              <p>Consultation Fees: ₹{doctor.fees}</p>
            </div>
            <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
              View Appointments
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCardList;
