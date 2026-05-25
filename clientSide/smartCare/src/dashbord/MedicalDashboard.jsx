import React, { useState, useMemo } from "react";
import {
  Pill,
  Search,
  CheckCircle2,
  Clock,
  User,
  FileText,
  Printer,
  PackageCheck,
  AlertCircle,
  TrendingUp,
  SlidersHorizontal,
  FileSpreadsheet,
  Activity,
} from "lucide-react";

// ======================================================
// MOCK DATA: Simulates Doctor-Completed Appointments
// Populated with Patient Details & Prescribed Medicines
// ======================================================
const MOCK_PRESCRIPTIONS_FROM_DOCTOR = [
  {
    _id: "pres_101",
    appointmentId: "ap3",
    completedAt: "2026-05-20T11:15:00.000Z",
    dispenseStatus: "pending", // pending, dispensed
    patient: {
      name: "Rohit Kumar Malav",
      age: 30,
      gender: "Male",
      phone: "+91 9460000000",
      bloodGroup: "O+",
    },
    doctor: {
      name: "Dr. Arvind Sharma",
      department: "Cardiology",
    },
    medicines: [
      {
        name: "Telmisartan 40mg",
        dosage: "1-0-0 (Before Food)",
        duration: "30 Days",
        quantity: 30,
      },
      {
        name: "Atorvastatin 10mg",
        dosage: "0-0-1 (After Food)",
        duration: "30 Days",
        quantity: 30,
      },
      {
        name: "Aspirin 75mg",
        dosage: "0-1-0 (After Food)",
        duration: "15 Days",
        quantity: 15,
      },
    ],
  },
  {
    _id: "pres_102",
    appointmentId: "ap9",
    completedAt: "2026-05-20T12:30:00.000Z",
    dispenseStatus: "dispensed",
    patient: {
      name: "Amit Sharma",
      age: 45,
      gender: "Male",
      phone: "+91 9829012345",
      bloodGroup: "A+",
    },
    doctor: {
      name: "Dr. K.C. Soni",
      department: "Dermatology",
    },
    medicines: [
      {
        name: "Allegra 120mg",
        dosage: "0-0-1",
        duration: "10 Days",
        quantity: 10,
      },
      {
        name: "Elocon Cream 15g",
        dosage: "Apply Thin Layer",
        duration: "7 Days",
        quantity: 1,
      },
    ],
  },
  {
    _id: "pres_103",
    appointmentId: "ap12",
    completedAt: "2026-05-19T16:00:00.000Z",
    dispenseStatus: "pending",
    patient: {
      name: "Kiran Devi",
      age: 52,
      gender: "Female",
      phone: "+91 9116001122",
      bloodGroup: "B+",
    },
    doctor: {
      name: "Dr. Meera Bai",
      department: "Gynecology",
    },
    medicines: [
      {
        name: "Calcium Carbonate 500mg",
        dosage: "1-0-1",
        duration: "60 Days",
        quantity: 120,
      },
      {
        name: "Vitamin D3 60K",
        dosage: "Once a week",
        duration: "4 Weeks",
        quantity: 4,
      },
    ],
  },
];

export default function MedicalDashboard() {
  // Local state for tracking orders and pipelines
  const [prescriptions, setPrescriptions] = useState(
    MOCK_PRESCRIPTIONS_FROM_DOCTOR,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("pending"); // Default to pending queues
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  // Counters for Pharmacy Stats Card Matrix
  const stats = useMemo(() => {
    return {
      totalReceived: prescriptions.length,
      pendingCount: prescriptions.filter((p) => p.dispenseStatus === "pending")
        .length,
      dispensedCount: prescriptions.filter(
        (p) => p.dispenseStatus === "dispensed",
      ).length,
    };
  }, [prescriptions]);

  // Search and Filter Pipeline
  const filteredPrescriptions = useMemo(() => {
    return prescriptions.filter((p) => {
      const matchesStatus =
        statusFilter === "all" || p.dispenseStatus === statusFilter;
      const matchesSearch =
        p.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.patient.phone.includes(searchTerm) ||
        p._id.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [prescriptions, searchTerm, statusFilter]);

  // Handler to simulate status change (dispensing medicine)
  const handleDispenseMedicine = (id) => {
    setPrescriptions((prev) =>
      prev.map((p) =>
        p._id === id ? { ...p, dispenseStatus: "dispensed" } : p,
      ),
    );
    if (selectedPrescription && selectedPrescription._id === id) {
      setSelectedPrescription((prev) => ({
        ...prev,
        dispenseStatus: "dispensed",
      }));
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      {/* Header section tailored for Pharmacy desk */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-600 rounded-xl text-white shadow-md shadow-emerald-600/20">
            <Pill size={22} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              SmartCare Pharmacy
            </h1>
            <p className="text-xs font-semibold text-slate-400">
              REAL-TIME PRESCRIPTION DISPENSING COUNTER
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-200">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
          Live Feed Active
        </div>
      </header>

      {/* Analytics Counter Grid */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Orders Today
              </p>
              <h3 className="text-2xl font-bold mt-1">{stats.totalReceived}</h3>
            </div>
            <div className="p-3 bg-slate-100 text-slate-600 rounded-xl">
              <FileSpreadsheet size={20} />
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-sm border-l-4 border-l-amber-500">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Pending Handover
              </p>
              <h3 className="text-2xl font-bold mt-1 text-amber-600">
                {stats.pendingCount}
              </h3>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Clock size={20} />
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-sm border-l-4 border-l-emerald-500">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Successfully Dispensed
              </p>
              <h3 className="text-2xl font-bold mt-1 text-emerald-600">
                {stats.dispensedCount}
              </h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <PackageCheck size={20} />
            </div>
          </div>
        </section>

        {/* Search & Controller Pipeline Row */}
        <section className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by Patient Name, Phone or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto">
            <SlidersHorizontal size={14} className="text-slate-400 mr-1" />
            {[
              { label: "Pending Prescriptions", value: "pending" },
              { label: "Dispensed History", value: "dispensed" },
              { label: "All Records", value: "all" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setStatusFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border transition-all ${statusFilter === tab.value ? "bg-slate-900 border-slate-900 text-white" : "bg-transparent border-slate-200 text-slate-500 hover:border-slate-300"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Twin Grid Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Prescription Live Queue List (2 Columns wide) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
              Live Feed Queue
            </h3>
            {filteredPrescriptions.length > 0 ? (
              filteredPrescriptions.map((p) => (
                <div
                  key={p._id}
                  onClick={() => setSelectedPrescription(p)}
                  className={`bg-white border p-4 rounded-xl shadow-sm cursor-pointer transition-all border-l-4 flex flex-col gap-2 ${selectedPrescription?._id === p._id ? "ring-2 ring-emerald-500 border-transparent" : "border-slate-200 hover:border-slate-300"}`}
                  style={{
                    borderLeftColor:
                      p.dispenseStatus === "pending" ? "#f59e0b" : "#10b981",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {p.patient.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {p.patient.gender}, {p.patient.age} Yrs •{" "}
                        {p.patient.bloodGroup}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${p.dispenseStatus === "pending" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}
                    >
                      {p.dispenseStatus}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-dashed border-slate-100 flex justify-between items-center text-[11px] text-slate-400 font-medium">
                    <span>By: {p.doctor.name}</span>
                    <span>
                      {new Date(p.completedAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-400">
                <AlertCircle
                  size={24}
                  className="mx-auto mb-2 text-slate-300"
                />
                <p className="text-xs font-medium">
                  No matching prescriptions in queue
                </p>
              </div>
            )}
          </div>

          {/* Active Prescription Desk/Invoice Viewer (3 Columns wide) */}
          <div className="lg:col-span-3">
            {selectedPrescription ? (
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden sticky top-24">
                {/* Desk Header */}
                <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                      Rx Digital Token
                    </span>
                    <h3 className="text-base font-bold">
                      {selectedPrescription._id}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.print()}
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                      title="Print Sticker"
                    >
                      <Printer size={16} />
                    </button>
                  </div>
                </div>

                {/* Patient Profile Snapshot */}
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-slate-400 font-medium">
                      Patient Details
                    </p>
                    <p className="font-bold text-slate-800 mt-0.5">
                      {selectedPrescription.patient.name}
                    </p>
                    <p className="text-slate-500">
                      {selectedPrescription.patient.phone}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 font-medium">
                      Prescribed Consultant
                    </p>
                    <p className="font-bold text-slate-800 mt-0.5">
                      {selectedPrescription.doctor.name}
                    </p>
                    <p className="text-indigo-600 font-semibold">
                      {selectedPrescription.doctor.department}
                    </p>
                  </div>
                </div>

                {/* Medicine List Core Array Mapping */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <FileText size={14} className="text-emerald-600" />{" "}
                    Prescribed Medicines
                  </div>

                  <div className="border border-slate-100 rounded-xl overflow-hidden text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100">
                          <th className="p-3">Medicine Name</th>
                          <th className="p-3">Dosage / Freq</th>
                          <th className="p-3 text-center">Qty</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {selectedPrescription.medicines.map((med, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="p-3 font-bold text-slate-800">
                              <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
                              {med.name}
                            </td>
                            <td className="p-3 text-slate-600">
                              <div>{med.dosage}</div>
                              <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.2 rounded font-semibold">
                                {med.duration}
                              </span>
                            </td>
                            <td className="p-3 text-center font-bold text-slate-900">
                              {med.quantity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Call to Action Footer Panel */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-400 font-medium">
                    Log Time:{" "}
                    {new Date(
                      selectedPrescription.completedAt,
                    ).toLocaleDateString()}
                  </div>
                  {selectedPrescription.dispenseStatus === "pending" ? (
                    <button
                      onClick={() =>
                        handleDispenseMedicine(selectedPrescription._id)
                      }
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all shadow-emerald-600/10"
                    >
                      <CheckCircle2 size={15} /> Dispense & Handover
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold px-3 py-2 bg-emerald-50 rounded-xl border border-emerald-200">
                      <PackageCheck size={16} /> Stock Handed Over
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 border-dashed rounded-2xl p-16 text-center text-slate-400 space-y-2">
                <Pill
                  size={36}
                  className="mx-auto text-slate-300 animate-bounce"
                />
                <h4 className="text-sm font-bold text-slate-700">
                  No Active Selection
                </h4>
                <p className="text-xs max-w-xs mx-auto">
                  Select any patient record from the live queue list to inspect
                  the prescription details and dispense medicines.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
