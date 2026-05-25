import React, { useState, useMemo } from "react";
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

// ==========================================
// MOCK DATA BASED DIRECTLY ON BACKEND SCHEMA
// ==========================================
const MOCK_DOCTOR = {
  _id: "64b2f123c5e89a001def4567",
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

const MOCK_APPOINTMENTS = [
  {
    _id: "ap1",
    appointmentDate: "2026-05-20T10:30:00.000Z",
    status: "confirmed",
    user: {
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      gender: "Male",
      age: 45,
    },
  },
  {
    _id: "ap2",
    appointmentDate: "2026-05-20T11:45:00.000Z",
    status: "pending",
    user: {
      name: "Priya Patel",
      email: "priya@gmail.com",
      phone: "+91 8765432109",
      gender: "Female",
      age: 32,
    },
  },
  {
    _id: "ap3",
    appointmentDate: "2026-05-19T09:15:00.000Z",
    status: "completed",
    user: {
      name: "Amit Singh",
      email: "amit@gmail.com",
      phone: "+91 7654321098",
      gender: "Male",
      age: 60,
    },
  },
  {
    _id: "ap4",
    appointmentDate: "2026-05-18T16:00:00.000Z",
    status: "cancelled",
    user: {
      name: "Sneha Reddy",
      email: "sneha@gmail.com",
      phone: "+91 6543210987",
      gender: "Female",
      age: 28,
    },
  },
  {
    _id: "ap5",
    appointmentDate: "2026-05-21T14:00:00.000Z",
    status: "confirmed",
    user: {
      name: "Vikram Malhotra",
      email: "vikram@gmail.com",
      phone: "+91 9988776655",
      gender: "Male",
      age: 52,
    },
  },
];

export default function DoctorDashboard() {
  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Controller states matching query/body options
  const [activeTab, setActiveTab] = useState("appointments"); // "appointments" | "patients" | "profile"
  const [statusFilter, setStatusFilter] = useState(""); // empty string acts as "All"
  const [searchQuery, setSearchQuery] = useState("");
  const [appointmentDateFilter, setAppointmentDateFilter] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Manage Availability array state safely (Matches PATCH controller route)
  const [doctorAvailability, setDoctorAvailability] = useState(
    MOCK_DOCTOR.availability,
  );

  // Statistics Calculation (Derived exactly from backend stats variables)
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
  }, []);

  // Filter Pipeline: Mimics getDoctorAppointments & getDoctorPatients logic
  const filteredAppointments = useMemo(() => {
    return MOCK_APPOINTMENTS.filter((item) => {
      // 1. Status Filter match
      if (statusFilter && item.status !== statusFilter) return false;

      // 2. Search Patient Name match ($regex logic fallback)
      if (
        searchQuery &&
        !item.user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

      // 3. Date Matching logic
      if (appointmentDateFilter) {
        const itemDateStr = new Date(item.appointmentDate)
          .toISOString()
          .split("T")[0];
        if (itemDateStr !== appointmentDateFilter) return false;
      }
      return true;
    });
  }, [statusFilter, searchQuery, appointmentDateFilter]);

  // Pagination chunking
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedAppointments = useMemo(() => {
    const skip = (page - 1) * itemsPerPage;
    return filteredAppointments.slice(skip, skip + itemsPerPage);
  }, [filteredAppointments, page]);

  // Handle Availability Toggle Action
  const toggleDay = (day) => {
    const updated = doctorAvailability.includes(day)
      ? doctorAvailability.filter((d) => d !== day)
      : [...doctorAvailability, day];
    setDoctorAvailability(updated);
    // Real application context: Trigger fetch() PATCH: /api/doctors/:id/availability here
  };

  return (
    <div
      className={`${darkMode ? "dark bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"} min-h-screen transition-colors duration-300 font-sans`}
    >
      {/* Top Navbar Section */}
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
              alt="Doctor profile"
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

      {/* Main Container */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">
        {/* Backend Variable Metrics Matrix Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Bookings
              </span>
              <div className="p-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl">
                <Calendar size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight">
                {statistics.totalAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Confirmed
              </span>
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-xl">
                <CheckCircle size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                {statistics.confirmedAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Pending
              </span>
              <div className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl">
                <Clock size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-amber-500">
                {statistics.pendingAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Completed
              </span>
              <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <CheckCircle size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-emerald-500">
                {statistics.completedAppointments}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 col-span-2 lg:col-span-1 flex flex-col justify-between shadow-sm border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Est. Earnings
              </span>
              <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-xl">
                <DollarSign size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                ₹{statistics.estimatedEarnings}
              </h3>
            </div>
          </div>
        </section>

        {/* Dashboard Visual Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left / Top Controls Area (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Controller Filters Header Block */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800/60 rounded-xl w-fit">
                  <button
                    onClick={() => {
                      setActiveTab("appointments");
                      setStatusFilter("");
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "appointments" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"}`}
                  >
                    Appointments Query
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("patients");
                      setStatusFilter("completed");
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${activeTab === "patients" ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"}`}
                  >
                    Patient History ({statistics.completedAppointments})
                  </button>
                </div>

                {/* Inline Status Routing Pill Badges */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <SlidersHorizontal
                    size={14}
                    className="text-slate-400 mr-1 flex-shrink-0"
                  />
                  {["", "confirmed", "pending", "completed", "cancelled"].map(
                    (st) => (
                      <button
                        key={st}
                        onClick={() => {
                          setStatusFilter(st);
                          setPage(1);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize border whitespace-nowrap transition-all ${statusFilter === st ? "bg-slate-900 border-slate-900 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-950" : "bg-transparent border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"}`}
                      >
                        {st === "" ? "Show All" : st}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Dynamic Sub-query Input Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800/60">
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
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <input
                  type="date"
                  value={appointmentDateFilter}
                  onChange={(e) => {
                    setAppointmentDateFilter(e.target.value);
                    setPage(1);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Main Dynamic Table Data Renderer List */}
            <div className="space-y-3">
              {paginatedAppointments.length > 0 ? (
                paginatedAppointments.map((ap) => (
                  <div
                    key={ap._id}
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 flex-shrink-0 font-bold text-sm uppercase">
                        {ap.user.name.charAt(0)}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          {ap.user.name}
                          <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                            ({ap.user.age} yrs • {ap.user.gender})
                          </span>
                        </h4>
                        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
                          <p>
                            Contact: {ap.user.phone} | {ap.user.email}
                          </p>
                          <p className="flex items-center gap-1 text-slate-400">
                            <Calendar size={12} />{" "}
                            {new Date(ap.appointmentDate).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-semibold text-slate-400 sm:hidden">
                        Appointment Status:
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider ${
                          ap.status === "confirmed"
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400"
                            : ap.status === "pending"
                              ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                              : ap.status === "completed"
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                                : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400"
                        }`}
                      >
                        {ap.status === "confirmed" && <CheckCircle size={12} />}
                        {ap.status === "pending" && <Clock size={12} />}
                        {ap.status === "completed" && <CheckCircle size={12} />}
                        {ap.status === "cancelled" && <XCircle size={12} />}
                        {ap.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-400 space-y-2">
                  <AlertCircle
                    size={32}
                    className="mx-auto text-slate-300 dark:text-slate-700"
                  />
                  <p className="text-sm font-medium">
                    No system records match current pipeline filters
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Controls Section */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs font-medium text-slate-400">
                  Showing page {page} of {totalPages || 1}
                </p>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Statistics & Visual Metadata Column */}
          <div className="space-y-6">
            {/* Distribution Graph Representation Chart alternative via Tailwind bars */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Appointment Analytics Chart
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  Live operational loads metric visual representation
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Confirmed Ops</span>
                    <span className="font-bold">
                      {Math.round(
                        (statistics.confirmedAppointments /
                          statistics.totalAppointments) *
                          100 || 0,
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 transition-all rounded-full"
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
                          100 || 0,
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all rounded-full"
                      style={{
                        width: `${(statistics.completedAppointments / statistics.totalAppointments) * 100 || 0}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span>Pending Queries</span>
                    <span className="font-bold">
                      {Math.round(
                        (statistics.pendingAppointments /
                          statistics.totalAppointments) *
                          100 || 0,
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 transition-all rounded-full"
                      style={{
                        width: `${(statistics.pendingAppointments / statistics.totalAppointments) * 100 || 0}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Profile Metadata Box Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Doctor Information Profile
              </h4>

              <div className="space-y-3.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-400">
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
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-400">
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
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-400">
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
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-400">
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

            {/* Managed Availability Action Module (Toggles array dynamically based on updateDoctorAvailability) */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Manage Availability Matrix
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Click pills to update active tracking arrays directly.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => {
                  const isActive = doctorAvailability.includes(day);
                  return (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 dark:bg-emerald-500/20 dark:text-emerald-400"
                          : "bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {day.substring(0, 3)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
