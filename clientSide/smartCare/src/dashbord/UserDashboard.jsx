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
  Mail,
  Phone,
  Layers,
  Heart,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
  Activity,
} from "lucide-react";

// ======================================================
// MOCK DATA BASED DIRECTLY ON BACKEND SCHEMA/POPULATE
// ======================================================
const MOCK_USER_PROFILE = {
  _id: "usr_9876543210active",
  name: "Rohit Kumar Malav",
  email: "rohit.malav@gmail.com",
  phone: "+91 9460000000",
  gender: "Male",
  age: 30,
  bloodGroup: "O+",
  profileImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
};

const MOCK_USER_APPOINTMENTS = [
  {
    _id: "ap1",
    appointmentDate: "2026-05-20T10:30:00.000Z",
    status: "confirmed",
    doctor: {
      doctorName: "Dr. Arvind Sharma",
      specialization: "Cardiologist",
      department: "Cardiology",
      fees: 800,
    },
  },
  {
    _id: "ap2",
    appointmentDate: "2026-05-26T11:45:00.000Z",
    status: "pending",
    doctor: {
      doctorName: "Dr. K.C. Soni",
      specialization: "Dermatologist",
      department: "Dermatology",
      fees: 600,
    },
  },
  {
    _id: "ap3",
    appointmentDate: "2026-04-15T09:15:00.000Z",
    status: "completed",
    doctor: {
      doctorName: "Dr. Arvind Sharma",
      specialization: "Cardiologist",
      department: "Cardiology",
      fees: 800,
    },
  },
  {
    _id: "ap4",
    appointmentDate: "2026-03-12T16:00:00.000Z",
    status: "cancelled",
    doctor: {
      doctorName: "Dr. Meera Bai",
      specialization: "Gynecologist",
      department: "Gynecology",
      fees: 700,
    },
  },
];

export default function UserDashboard() {
  // Theme Toggle State
  const [darkMode, setDarkMode] = useState(false);

  // Controller states matching query pipelines
  const [statusFilter, setStatusFilter] = useState(""); // Default "" implies "All"
  const [searchDoctor, setSearchDoctor] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // Real-time local counters based on Backend logic properties
  const statistics = useMemo(() => {
    return {
      totalBooked: MOCK_USER_APPOINTMENTS.length,
      confirmed: MOCK_USER_APPOINTMENTS.filter((a) => a.status === "confirmed")
        .length,
      pending: MOCK_USER_APPOINTMENTS.filter((a) => a.status === "pending")
        .length,
      completed: MOCK_USER_APPOINTMENTS.filter((a) => a.status === "completed")
        .length,
      totalExpenses: MOCK_USER_APPOINTMENTS.filter(
        (a) => a.status === "completed" || a.status === "confirmed",
      ).reduce((sum, item) => sum + item.doctor.fees, 0),
    };
  }, []);

  // Filter Pipeline: Simulates .find(filters).populate('doctor') backend query
  const filteredAppointments = useMemo(() => {
    return MOCK_USER_APPOINTMENTS.filter((item) => {
      // 1. Filter by Status
      if (statusFilter && item.status !== statusFilter) return false;

      // 2. Filter by Doctor Name Search ($regex logic match)
      if (
        searchDoctor &&
        !item.doctor.doctorName
          .toLowerCase()
          .includes(searchDoctor.toLowerCase())
      )
        return false;

      return true;
    });
  }, [statusFilter, searchDoctor]);

  // Pagination Math chunks
  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const paginatedAppointments = useMemo(() => {
    const skip = (page - 1) * itemsPerPage;
    return filteredAppointments.slice(skip, skip + itemsPerPage);
  }, [filteredAppointments, page]);

  return (
    <div
      className={`${darkMode ? "dark bg-slate-950 text-slate-50" : "bg-slate-50 text-slate-900"} min-h-screen transition-colors duration-300 font-sans`}
    >
      {/* Dynamic Dashboard Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-indigo-500 to-blue-600 rounded-xl text-white shadow-md shadow-indigo-500/20">
            <Activity size={22} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Patient Portal
            </h1>
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
              SMARTCARE PATIENT DB
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
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/20">
              {MOCK_USER_PROFILE.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold">{MOCK_USER_PROFILE.name}</p>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                ID: {MOCK_USER_PROFILE._id.slice(0, 8)}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Framework Container */}
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">
        {/* Dynamic Metric Grid Matrix */}
        <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Booked
              </span>
              <div className="p-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl">
                <Calendar size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight">
                {statistics.totalBooked}
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
                {statistics.confirmed}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Awaiting / Pending
              </span>
              <div className="p-2 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 rounded-xl">
                <Clock size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-amber-500">
                {statistics.pending}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 flex flex-col justify-between shadow-sm">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Consultations Done
              </span>
              <div className="p-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <CheckCircle size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-emerald-500">
                {statistics.completed}
              </h3>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-4 col-span-2 lg:col-span-1 flex flex-col justify-between shadow-sm border-l-4 border-l-indigo-500">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Paid Fees
              </span>
              <div className="p-2 bg-indigo-500/10 text-indigo-500 rounded-xl">
                <Layers size={18} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                ₹{statistics.totalExpenses}
              </h3>
            </div>
          </div>
        </section>

        {/* Dashboard Dynamic Double Column Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: User Profile Data Schema Block */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex flex-col items-center text-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-md uppercase mb-3">
                  {MOCK_USER_PROFILE.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {MOCK_USER_PROFILE.name}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  Patient Profile Account
                </p>
              </div>

              {/* Dynamic Information Grid */}
              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl">
                    <Mail size={14} />
                  </div>
                  <div className="truncate">
                    <p className="text-slate-400 text-[10px] uppercase font-bold">
                      Email Address
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {MOCK_USER_PROFILE.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase font-bold">
                      Phone Number
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {MOCK_USER_PROFILE.phone}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40 text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-bold">
                      Age / Gender
                    </p>
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-200 mt-0.5">
                      {MOCK_USER_PROFILE.age} / {MOCK_USER_PROFILE.gender}
                    </p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/40 text-center">
                    <p className="text-slate-400 text-[10px] uppercase font-bold flex items-center justify-center gap-1">
                      <Heart size={10} className="text-rose-500" /> Blood
                    </p>
                    <p className="font-bold text-sm text-rose-600 dark:text-rose-400 mt-0.5">
                      {MOCK_USER_PROFILE.bloodGroup}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Micro Graph: Appointment Completion Loading Metric */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Treatment Success Analytics
                </h4>
              </div>
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-medium">
                  <span>Completed Bookings</span>
                  <span className="font-bold">
                    {Math.round(
                      (statistics.completed / statistics.totalBooked) * 100 ||
                        0,
                    )}
                    %
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all"
                    style={{
                      width: `${(statistics.completed / statistics.totalBooked) * 100 || 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointments Fetching Query Framework (2 Columns Wide) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filter Pipeline Module */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
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
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize border whitespace-nowrap transition-all ${statusFilter === st ? "bg-slate-900 border-slate-900 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-950" : "bg-transparent border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"}`}
                      >
                        {st === "" ? "All Appointments" : st}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Text Search Pipeline Input */}
              <div className="relative pt-1">
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={15}
                />
                <input
                  type="text"
                  value={searchDoctor}
                  onChange={(e) => {
                    setSearchDoctor(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Filter bookings by typing doctor name..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* List Array Renderer mapping Appointment Objects */}
            <div className="space-y-3">
              {paginatedAppointments.length > 0 ? (
                paginatedAppointments.map((ap) => (
                  <div
                    key={ap._id}
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
                    style={{
                      borderLeftColor:
                        ap.status === "confirmed"
                          ? "#6366f1"
                          : ap.status === "pending"
                            ? "#f59e0b"
                            : ap.status === "completed"
                              ? "#10b981"
                              : "#f43f5e",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 flex-shrink-0">
                        <PlusCircle size={20} className="text-indigo-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {ap.doctor.doctorName}
                        </h4>
                        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                          {ap.doctor.specialization} • {ap.doctor.department}
                        </p>
                        <div className="text-xs text-slate-400 space-y-0.5 pt-1">
                          <p className="flex items-center gap-1">
                            <Calendar size={12} />{" "}
                            {new Date(ap.appointmentDate).toLocaleString()}
                          </p>
                          <p className="font-medium text-slate-500 dark:text-slate-400">
                            Consultation Paid:{" "}
                            <span className="text-emerald-500 font-semibold">
                              ₹{ap.doctor.fees}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-semibold text-slate-400 sm:hidden">
                        Booking Status:
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                          ap.status === "confirmed"
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400"
                            : ap.status === "pending"
                              ? "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400"
                              : ap.status === "completed"
                                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                                : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400"
                        }`}
                      >
                        {ap.status === "confirmed" && <CheckCircle size={10} />}
                        {ap.status === "pending" && <Clock size={10} />}
                        {ap.status === "completed" && <CheckCircle size={10} />}
                        {ap.status === "cancelled" && <XCircle size={10} />}
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
                    No appointment bookings matches the selected filters
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Segment */}
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
        </div>
      </main>
    </div>
  );
}
