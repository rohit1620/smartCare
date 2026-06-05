import React, { useState, useEffect } from "react";
import { createDoctor } from "../services/receptionService";
import { getAllDoctors } from "../services/receptionService";

const AdminDoctorManager = () => {
  // 1. Schema ke mutabik Initial State
  const initialFormState = {
    doctorName: "",
    specialization: "",
    experience: "",
    fees: "",
    availability: [],
    qualification: "",
    department: "",
    profileImage: "",
    status: "active",
  };

  const [formData, setFormData] = useState(initialFormState);

  // Dummy local state taaki bina backend ke bhi add kiya hua doctor niche list me dikhe
  const [doctorsList, setDoctorsList] = useState([]);

  const [availInput, setAvailInput] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const result = await getAllDoctors();
      if (result.success) {
        setDoctorsList(result.doctors);
      }
    };

    fetchDoctors();
  }, []);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Availability tags management
  const handleAddAvailability = () => {
    if (
      availInput.trim() &&
      !formData.availability.includes(availInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        availability: [...prev.availability, availInput.trim()],
      }));
      setAvailInput("");
    }
  };

  const handleRemoveAvailability = (dayToRemove) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.filter((day) => day !== dayToRemove),
    }));
  };

  // Form Submission
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // Yahan aap apna Axios/Fetch ka API call laga sakte ho
  //     // e.g., axios.post('/api/doctors', formData)

  //     const newDoctor = {
  //       ...formData,
  //       id: Date.now(), // Local UI unique id ke liye
  //       experience: Number(formData.experience),
  //       fees: Number(formData.fees),
  //     };

  //     setDoctorsList([newDoctor, ...doctorsList]); // Naya doctor list me sabse upar dikhega
  //     setFormData(initialFormState); // Form reset
  //     alert("Doctor successfully add ho gaya!");
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorData = {
      doctorName: formData.doctorName,
      specialization: formData.specialization,
      experience: formData.experience,
      fees: formData.fees,
      availability: formData.availability,
      qualification: formData.qualification,
      department: formData.department,
      profileImage: formData.profileImage,
      status: formData.status,
      email: formData.email,
      password: formData.password,
    };

    const result = await createDoctor(doctorData);

    if (result.success) {
      console.log("Doctor Created:", result.doctor);
    } else {
      console.log(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b pb-4">
          Doctor Management Dashboard
        </h1>

        {/* Desktop me side-by-side aur Mobile me top-bottom layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ================= HALF PAGE: FORM CONTROLLER ================= */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full inline-block"></span>
              Add New Doctor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Doctor Name *
                </label>
                <input
                  type="text"
                  name="doctorName"
                  required
                  value={formData.doctorName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Dr. Rohit Kumar"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Department *
                  </label>
                  <input
                    type="text"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Neurology"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Specialization *
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    required
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Brain Surgeon"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Experience (Years) *
                  </label>
                  <input
                    type="number"
                    name="experience"
                    min="0"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Fees (INR) *
                  </label>
                  <input
                    type="number"
                    name="fees"
                    min="0"
                    required
                    value={formData.fees}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Qualification *
                </label>
                <input
                  type="text"
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. MBBS, MD"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Profile Image URL
                </label>
                <input
                  type="url"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {/* is jagah par email aur password ka field add karo bina kisi field ko replace kare*/}

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. doctor@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a strong password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Availability Days *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={availInput}
                    onChange={(e) => setAvailInput(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Mon, Tue, Sat"
                  />
                  <button
                    type="button"
                    onClick={handleAddAvailability}
                    className="px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
                  >
                    Add
                  </button>
                </div>
                {/* Selected Days Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {formData.availability.map((day, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md border border-blue-200"
                    >
                      {day}
                      <button
                        type="button"
                        onClick={() => handleRemoveAvailability(day)}
                        className="text-blue-500 hover:text-blue-800 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Account Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="on_leave">On Leave</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm"
              >
                Save Doctor Profile
              </button>
            </form>
          </div>

          {/* ================= HALF PAGE: DOCTORS DISPLAY LIST ================= */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-green-600 rounded-full inline-block"></span>
              Registered Doctors ({doctorsList.length})
            </h2>

            {doctorsList.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                Koi doctor added nahi hai. Kripya form fill karein.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[75vh] overflow-y-auto pr-2">
                {doctorsList.map((doc) => (
                  <div
                    key={doc.id}
                    className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition relative flex flex-col justify-between"
                  >
                    <div>
                      {/* Top info & Status Indicator */}
                      <div className="flex items-start gap-3 mb-3">
                        <img
                          src={
                            doc.profileImage ||
                            "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop"
                          }
                          alt={doc.doctorName}
                          className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                        />
                        <div>
                          <h3 className="font-bold text-gray-800 text-base leading-tight">
                            {doc.doctorName}
                          </h3>
                          <p className="text-xs text-blue-600 font-medium">
                            {doc.qualification}
                          </p>
                          <p className="text-xs text-gray-500 font-semibold mt-0.5">
                            {doc.department} Department
                          </p>
                        </div>
                      </div>

                      {/* Doctor Specs */}
                      <div className="space-y-1 text-xs text-gray-600 border-t pt-2 border-dashed">
                        <div>
                          <span className="font-semibold text-gray-700">
                            Speciality:
                          </span>{" "}
                          {doc.specialization}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">
                            Experience:
                          </span>{" "}
                          {doc.experience} Years
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">
                            Fees:
                          </span>{" "}
                          ₹{doc.fees}
                        </div>
                      </div>
                    </div>

                    {/* Footer: Availability & Badge */}
                    <div className="mt-4 pt-2 border-t border-gray-100 flex flex-col gap-2">
                      <div className="flex flex-wrap gap-1">
                        {doc.availability.map((day, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px]"
                          >
                            {day}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center mt-1">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-medium tracking-wide capitalize
                          ${doc.status === "active" ? "bg-green-100 text-green-700" : ""}
                          ${doc.status === "inactive" ? "bg-red-100 text-red-700" : ""}
                          ${doc.status === "on_leave" ? "bg-amber-100 text-amber-700" : ""}
                        `}
                        >
                          {doc.status.replace("_", " ")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDoctorManager;
