import React, { useState, useMemo, useEffect } from "react";
import { fetchDoctorAppointments } from "../services/receptionService";
import {
  User,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Search,
  SlidersHorizontal,
  Sun,
  Moon,
  TrendingUp,
  MapPin,
  FileText,
  DollarSign,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// import { doctorLogin } from "../services/receptionService";
import { useLocation } from "react-router-dom";

const MOCK_DOCTOR = {
  _id: null,
  doctorName: "Dr. Arvind Sharma",
  specialization: "Cardiologist",
  experience: 12,
  fees: 800,
  availability: ["Monday", "Wednesday", "Friday"],
  qualification: "MD, DM (Cardiology)",
  department: "Cardiology",
  profileImage:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80",
  status: "active",
};

export default function DoctorDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [MOCK_APPOINTMENTS, setMOCK_APPOINTMENTS] = useState([]);
  const [activeTab, setActiveTab] = useState("appointments");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [appointmentDateFilter, setAppointmentDateFilter] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [doctorAvailability, setDoctorAvailability] = useState(
    MOCK_DOCTOR.availability,
  );

  const location = useLocation();
  const doctorId = new URLSearchParams(location.search).get("doctorId");
  console.log("Extracted doctorId from URL:", doctorId);

  // invailid doctorId hone par bhi dashboard khul raha tha, isliye ek check lagaya hai ki agar doctorId milta hai to hi MOCK_DOCTOR ka _id set karega. Agar doctorId nahi milega to dashboard khulega lekin appointments load nahi honge, aur console me doctorId null ya undefined dikhayega, jisse pata chalega ki URL me doctorId missing hai.
  // okay ye to tik hai lakin doctorId kyu nhi mil rhi hai login ke badd?

  useEffect(() => {
    if (doctorId) {
      MOCK_DOCTOR._id = doctorId;
    }
  }, [doctorId]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        setLoading(true);
        setError("");

        const id = MOCK_DOCTOR._id;
        //  "6a1fea152b88d7343271e4a6";

        const data = await fetchDoctorAppointments(id, {
          status: statusFilter,
          limit: 10,
          sort: "appointmentDate",
          order: "desc",
        });

        if (data.success) {
          setMOCK_APPOINTMENTS(data.appointments);
        }
      } catch (err) {
        setError(err.message || "अपॉइंटमेंट लोड करने में दिक्कत आ रही है।");
      } finally {
        setLoading(false);
      }
    };

    getAppointments();
  }, [statusFilter]); // statusFilter बदलने पर दोबारा फेच करें

  // FIX 1: dependency array में MOCK_APPOINTMENTS को जोड़ा ताकि डेटा आते ही यह दोबारा चले
  const statistics = useMemo(() => {
    return {
      totalAppointments: MOCK_APPOINTMENTS.length,
      confirmedAppointments: MOCK_APPOINTMENTS.filter(
        (a) => a.status === "confirmed",
      ).length,
      pendingAppointments: MOCK_APPOINTMENTS.filter(
        (a) => a.status === "pending",
      ).length,
      cancelledAppointments: MOCK_APPOINTMENTS.filter(
        (a) => a.status === "cancelled",
      ).length,
      completedAppointments: MOCK_APPOINTMENTS.filter(
        (a) => a.status === "completed",
      ).length,
      estimatedEarnings:
        MOCK_APPOINTMENTS.filter(
          (a) => a.status === "completed" || a.status === "confirmed",
        ).length * MOCK_DOCTOR.fees,
    };
  }, [MOCK_APPOINTMENTS]);

  // FIX 2: dependencies में MOCK_APPOINTMENTS को शामिल किया
  const filteredAppointments = useMemo(() => {
    return MOCK_APPOINTMENTS.filter((item) => {
      if (statusFilter && item.status !== statusFilter) return false;

      // Safe check if patientName or user.name exists
      const nameToSearch = item.patientName || item.user?.name || "";
      if (
        searchQuery &&
        !nameToSearch.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (appointmentDateFilter) {
        if (!item.appointmentDate) return false;
        const itemDateStr = new Date(item.appointmentDate)
          .toISOString()
          .split("T")[0];
        if (itemDateStr !== appointmentDateFilter) return false;
      }
      return true;
    });
  }, [MOCK_APPOINTMENTS, statusFilter, searchQuery, appointmentDateFilter]);

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedAppointments = useMemo(() => {
    const skip = (page - 1) * itemsPerPage;
    return filteredAppointments.slice(skip, skip + itemsPerPage);
  }, [filteredAppointments, page]);

  const toggleDay = (day) => {
    const updated = doctorAvailability.includes(day)
      ? doctorAvailability.filter((d) => d !== day)
      : [...doctorAvailability, day];
    setDoctorAvailability(updated);
  };

  if (loading)
    return <p className="p-8 text-center text-sm">Loading Dashboard Data...</p>;
  if (error)
    return (
      <p className="p-8 text-center text-sm" style={{ color: "red" }}>
        {error}
      </p>
    );

  return (
    <div
      className={`${darkMode ? "dark bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"} min-h-screen transition-colors duration-300 font-sans`}
    >
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-xl text-white shadow-md shadow-emerald-500/20">
            <TrendingUp size={22} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              SmartCare Portal
            </h1>
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
              SYSTEM APP: CLUSTER0
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-slate-600 dark:text-slate-400"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-indigo-600" />
            )}
          </button>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800" />
          <div className="flex items-center gap-3">
            <img
              src={MOCK_DOCTOR.profileImage}
              alt="Doctor"
              className="w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500/20"
            />
            <div className="hidden md:block">
              <p className="text-sm font-semibold">{MOCK_DOCTOR.doctorName}</p>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                {MOCK_DOCTOR.status}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">
        {/* Statistics Metric Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Bookings
              </span>
              <div className="p-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 rounded-xl">
                <Calendar size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">
                {statistics.totalAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Confirmed
              </span>
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 rounded-xl">
                <CheckCircle size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-indigo-600">
                {statistics.confirmedAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Pending
              </span>
              <div className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-600 rounded-xl">
                <Clock size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-amber-500">
                {statistics.pendingAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Completed
              </span>
              <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 rounded-xl">
                <CheckCircle size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-emerald-500">
                {statistics.completedAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Est. Earnings
              </span>
              <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl">
                <DollarSign size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-emerald-600">
                ₹{statistics.estimatedEarnings}
              </h3>
            </div>
          </div>
        </section>

        {/* Filters and List pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
                  <button
                    onClick={() => {
                      setActiveTab("appointments");
                      setStatusFilter("");
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "appointments" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm" : "text-slate-500"}`}
                  >
                    Appointments Query
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("patients");
                      setStatusFilter("completed");
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "patients" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm" : "text-slate-500"}`}
                  >
                    Patient History ({statistics.completedAppointments})
                  </button>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <SlidersHorizontal
                    size={14}
                    className="text-slate-400 mr-1"
                  />
                  {["", "confirmed", "pending", "completed", "cancelled"].map(
                    (st) => (
                      <button
                        key={st}
                        onClick={() => {
                          setStatusFilter(st);
                          setPage(1);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize border transition-all ${statusFilter === st ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950" : "text-slate-500 border-slate-200 dark:border-slate-800"}`}
                      >
                        {st === "" ? "Show All" : st}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="relative">
                  <Search
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search query by patient name..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                  />
                </div>
                <input
                  type="date"
                  value={appointmentDateFilter}
                  onChange={(e) => {
                    setAppointmentDateFilter(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                />
              </div>
            </div>

            {/* Renderer List */}
            <div className="space-y-3">
              {paginatedAppointments.length > 0 ? (
                paginatedAppointments.map((ap) => (
                  <div
                    key={ap._id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-sm uppercase">
                        {(ap.patientName || ap.user?.name || "P").charAt(0)}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          {ap.patientName || ap.user?.name}
                          {/* FIX 3: Optional Chaining (?.) का उपयोग किया ताकि डेटा न होने पर क्रैश न हो */}
                          <span className="text-xs font-normal text-slate-400">
                            ({ap.user?.age || "N/A"} yrs •{" "}
                            {ap.user?.gender || "N/A"})
                          </span>
                        </h4>
                        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
                          <p>
                            Contact:{" "}
                            {ap.patientPhone || ap.user?.phone || "N/A"} |{" "}
                            {ap.patientEmail || ap.user?.email || "N/A"}
                          </p>
                          <p className="flex items-center gap-1 text-slate-400">
                            <Calendar size={12} />{" "}
                            {ap.appointmentDate
                              ? new Date(ap.appointmentDate).toLocaleString()
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-0 pt-3 sm:pt-0">
                      <span className="text-xs font-semibold text-slate-400 sm:hidden">
                        Status:
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                          ap.status === "confirmed"
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40"
                            : ap.status === "pending"
                              ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40"
                              : ap.status === "completed"
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40"
                                : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {ap.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-12 text-center text-slate-400">
                  <AlertCircle
                    size={32}
                    className="mx-auto text-slate-300 mb-2"
                  />
                  <p className="text-sm font-medium">
                    No system records match current filters
                  </p>
                </div>
              )}
            </div>

            {/* Pagination UI */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-slate-400">
                  Showing page {page} of {totalPages}
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className="p-2 border rounded-xl disabled:opacity-40"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    className="p-2 border rounded-xl disabled:opacity-40"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Analytics & Profile info) */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Appointment Analytics
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Confirmed Ops</span>
                    <span className="font-bold">
                      {Math.round(
                        (statistics.confirmedAppointments /
                          statistics.totalAppointments) *
                          100,
                      ) || 0}
                      %
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 dynamic-bar"
                      style={{
                        width: `${(statistics.confirmedAppointments / statistics.totalAppointments) * 100 || 0}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Completed Target</span>
                    <span className="font-bold">
                      {Math.round(
                        (statistics.completedAppointments /
                          statistics.totalAppointments) *
                          100,
                      ) || 0}
                      %
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500"
                      style={{
                        width: `${(statistics.completedAppointments / statistics.totalAppointments) * 100 || 0}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Doctor Information Profile
              </h4>
              <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    <User size={14} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {MOCK_DOCTOR.doctorName}
                    </p>
                    <p className="text-slate-400 text-[11px]">
                      {MOCK_DOCTOR.qualification}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    <Briefcase size={14} />
                  </div>
                  <p>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {MOCK_DOCTOR.specialization}
                    </span>{" "}
                    • {MOCK_DOCTOR.experience} Years Experience
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    <MapPin size={14} />
                  </div>
                  <p>
                    Department:{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {MOCK_DOCTOR.department}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-xl">
                    <FileText size={14} />
                  </div>
                  <p>
                    Standard Consultation Fees:{" "}
                    <span className="font-semibold text-emerald-500">
                      ₹{MOCK_DOCTOR.fees}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
