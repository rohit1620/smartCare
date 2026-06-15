import React, { useState } from "react";
import { createPrescription } from "../../services/receptionService";
import { updateAppointmentStatus } from "../../services/receptionService";

const PrescriptionModal = ({
  isOpen,
  onClose,
  patient = "rohit",
  onSubmit,
  med,
}) => {
  if (!isOpen) return null;

  // 1. दवाओं के लिए स्टेट (Array of Objects)
  const [medicines, setMedicines] = useState([
    {
      drugName: "",
      form: "Tablet",
      dosage: "",
      frequency: "1-0-1",
      timing: "After Food",
      duration: "",
      instructions: "",
    },
  ]);

  // 2. अपॉइंटमेंट स्टेटस के लिए स्टेट
  const [status, setStatus] = useState("COMPLETED"); // डिफ़ॉल्ट 'COMPLETED' रहेगा जैसा आपने कहा
  const [clinicalNotes, setClinicalNotes] = useState("");

  // नई दवा की रो (Row) जोड़ने के लिए
  const addMedicineRow = () => {
    setMedicines([
      ...medicines,
      {
        drugName: "",
        form: "Tablet",
        dosage: "",
        frequency: "1-0-1",
        timing: "After Food",
        duration: "",
        instructions: "",
      },
    ]);
  };

  // किसी रो को हटाने के लिए
  const removeMedicineRow = (index) => {
    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);
  };

  // इनपुट चेंज हैंडल करने के लिए
  const handleInputChange = (index, field, value) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[index][field] = value;
    setMedicines(updatedMedicines);
  };

  // फॉर्म सबमिट करने पर

  const patient1 = {
    doctorId: "6a1fea152b88d7343271e4a6",
    doctorName: "rohit",
    patientId: "6a1fea152b88d7343271e4a6",
    patientName: "raju",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const prescriptionData = {
        doctorId: patient1.doctorId,
        doctorName: patient1.doctorName,

        patientId: patient1.patientId,
        patientName: patient1.patientName,

        appointmentStatus: "COMPLETED",

        clinicalNotes,

        medicines,
      };

      console.log("Sending Data:", prescriptionData);

      const result = await createPrescription(prescriptionData);
      const id = med;
      await updateAppointmentStatus(id, { status: "completed" });

      console.log(result);

      if (result.success) {
        alert("Prescription Created Successfully");

        onClose();

        // अगर parent refresh करना है
        if (onSubmit) {
          onSubmit(result.data);
        }
      }
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Prescription creation failed",
      );
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-fadeIn">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-xl">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Write Prescription
            </h3>
            <p className="text-sm text-gray-500">
              Patient:{" "}
              <span className="font-semibold text-indigo-600">
                {patient.name}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-semibold"
          >
            &times;
          </button>
        </div>

        {/* Modal Body / Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 overflow-y-auto flex-1 space-y-6"
        >
          {/* Status & Clinical Notes Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Update Appointment Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 font-semibold text-sm bg-white"
              >
                <option value="PENDING">PENDING</option>
                <option value="CONFIRMED">CONFIRMED</option>
                <option value="COMPLETED">COMPLETED (Recommended)</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Diagnosis / Clinical Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Viral Fever, Cough..."
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
          </div>

          {/* Medicines Section */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold text-gray-700">
                Medication Details
              </h4>
              <button
                type="button"
                onClick={addMedicineRow}
                className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
              >
                + Add Medicine
              </button>
            </div>

            <div className="space-y-3">
              {medicines.map((med, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200 items-end relative"
                >
                  {/* Medicine Name */}
                  <div className="md:col-span-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Drug Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Paracetamol 650mg"
                      value={med.drugName}
                      onChange={(e) =>
                        handleInputChange(index, "drugName", e.target.value)
                      }
                      className="w-full p-1.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Form */}
                  <div className="md:col-span-1.5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Form
                    </label>
                    <select
                      value={med.form}
                      onChange={(e) =>
                        handleInputChange(index, "form", e.target.value)
                      }
                      className="w-full p-1.5 border border-gray-300 rounded text-sm bg-white"
                    >
                      <option>Tablet</option>
                      <option>Syrup</option>
                      <option>Capsule</option>
                      <option>Injection</option>
                      <option>Drops</option>
                    </select>
                  </div>

                  {/* Dosage */}
                  <div className="md:col-span-1.5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Dosage
                    </label>
                    <input
                      type="text"
                      placeholder="1 Tab / 5ml"
                      value={med.dosage}
                      onChange={(e) =>
                        handleInputChange(index, "dosage", e.target.value)
                      }
                      className="w-full p-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>

                  {/* Frequency */}
                  <div className="md:col-span-1.5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Frequency
                    </label>
                    <select
                      value={med.frequency}
                      onChange={(e) =>
                        handleInputChange(index, "frequency", e.target.value)
                      }
                      className="w-full p-1.5 border border-gray-300 rounded text-sm bg-white"
                    >
                      <option>1-0-1 (BD)</option>
                      <option>1-0-0 (OD)</option>
                      <option>1-1-1 (TDS)</option>
                      <option>0-0-1 (HS)</option>
                      <option>SOS (As needed)</option>
                    </select>
                  </div>

                  {/* Timing */}
                  <div className="md:col-span-1.5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Timing
                    </label>
                    <select
                      value={med.timing}
                      onChange={(e) =>
                        handleInputChange(index, "timing", e.target.value)
                      }
                      className="w-full p-1.5 border border-gray-300 rounded text-sm bg-white"
                    >
                      <option>After Food</option>
                      <option>Before Food</option>
                    </select>
                  </div>

                  {/* Duration */}
                  <div className="md:col-span-1.5">
                    <label className="block text-xs font-medium text-gray-500 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      placeholder="5 Days"
                      value={med.duration}
                      onChange={(e) =>
                        handleInputChange(index, "duration", e.target.value)
                      }
                      className="w-full p-1.5 border border-gray-300 rounded text-sm"
                    />
                  </div>

                  {/* Delete Button */}
                  <div className="md:col-span-1 flex justify-center">
                    {medicines.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMedicineRow(index)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded transition mb-0.5"
                        title="Remove Medicine"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Actions Footer */}
          <div className="border-t border-gray-100 pt-4 flex justify-end space-x-3 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium shadow-sm transition"
            >
              Submit & Complete Prescription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrescriptionModal;
