import React, { useState, useMemo } from "react";
import {
  Sun,
  Moon,
  LayoutDashboard,
  UserCheck,
  CircleDollarSign,
  CheckCircle2,
  Clock,
  Users,
  UserSquare2,
  XCircle,
  Search,
  Filter,
  Check,
  TrendingUp,
  Activity,
  Menu,
  X,
} from "lucide-react";
// Recharts for Analytics
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";

export default function ReceptionDashboard() {
  // Theme & Layout States
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Backend Query/Filter States (Directly connects to your API controllers)
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all, pending, confirmed, completed, cancelled

  // Backend Data Mock State
  const [dashboardData, setDashboardData] = useState({
    success: true,
    message: "Reception dashboard fetched successfully",
    reception: {
      _id: "65f1234567890abcdef12345",
      shift: "morning",
      salary: 25000,
      joiningDate: "2026-01-15T10:30:00.000Z",
      status: "active",
      userId: {
        name: "Rahul Sharma",
        email: "rahul.reception@smartcare.com",
        phone: "+91 98765 43210",
        profileImage:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
      },
    },
    statistics: {
      totalAppointments: 148,
      todayAppointments: 32,
      pendingAppointments: 8,
      confirmedAppointments: 16,
      completedAppointments: 6,
      cancelledAppointments: 2,
      totalDoctors: 12,
      totalPatients: 85,
    },
    todayAppointmentList: [
      {
        _id: "appt_001",
        appointmentDate: "2026-05-19T10:00:00.000Z",
        status: "pending",
        paymentStatus: "unpaid",
        consultationFees: 500,
        user: {
          name: "Amit Verma",
          phone: "94141XXXXX",
          gender: "Male",
          age: 34,
        },
        doctor: null,
      },
      {
        _id: "appt_002",
        appointmentDate: "2026-05-19T11:30:00.000Z",
        status: "confirmed",
        paymentStatus: "paid",
        consultationFees: 600,
        user: {
          name: "Priya Meena",
          phone: "70141XXXXX",
          gender: "Female",
          age: 28,
        },
        doctor: {
          doctorName: "Dr. S.K. Sharma",
          specialization: "Cardiologist",
          department: "Cardiology",
        },
      },
      {
        _id: "appt_003",
        appointmentDate: "2026-05-19T12:15:00.000Z",
        status: "completed",
        paymentStatus: "paid",
        consultationFees: 400,
        user: {
          name: "Rajesh Dhaked",
          phone: "98290XXXXX",
          gender: "Male",
          age: 45,
        },
        doctor: {
          doctorName: "Dr. Anjali Roy",
          specialization: "Pediatrician",
          department: "Pediatrics",
        },
      },
      {
        _id: "appt_004",
        appointmentDate: "2026-05-19T02:00:00.000Z",
        status: "cancelled",
        paymentStatus: "unpaid",
        consultationFees: 500,
        user: {
          name: "Karan Singh",
          phone: "82390XXXXX",
          gender: "Male",
          age: 22,
        },
        doctor: {
          doctorName: "Dr. S.K. Sharma",
          specialization: "Cardiologist",
          department: "Cardiology",
        },
      },
    ],
    recentAppointments: [
      {
        _id: "appt_recent_1",
        createdAt: "2026-05-19T14:45:00.000Z",
        status: "confirmed",
        user: { name: "Vijay Gupta" },
        doctor: {
          doctorName: "Dr. Anjali Roy",
          specialization: "Pediatrician",
        },
      },
      {
        _id: "appt_recent_2",
        createdAt: "2026-05-19T14:20:00.000Z",
        status: "cancelled",
        user: { name: "Karan Singh" },
        doctor: {
          doctorName: "Dr. S.K. Sharma",
          specialization: "Cardiologist",
        },
      },
    ],
  });

  const stats = dashboardData.statistics;
  const staff = dashboardData.reception;

  // ======================================================
  // 1. Chart Data Formatting (Using Backend Statistics)
  // ======================================================
  const appointmentBarData = [
    { name: "Pending", count: stats.pendingAppointments, color: "#f59e0b" },
    { name: "Confirmed", count: stats.confirmedAppointments, color: "#10b981" },
    { name: "Completed", count: stats.completedAppointments, color: "#6366f1" },
    { name: "Cancelled", count: stats.cancelledAppointments, color: "#ef4444" },
  ];

  const overallPieData = [
    { name: "Doctors", value: stats.totalDoctors, color: "#6366f1" },
    {
      name: "Registered Patients",
      value: stats.totalPatients,
      color: "#3b82f6",
    },
  ];

  // ======================================================
  // 2. Client Side Filtering Logic (Matches getTodayPatients parameters)
  // ======================================================
  const filteredAppointments = useMemo(() => {
    return dashboardData.todayAppointmentList.filter((appt) => {
      const matchesSearch =
        appt.user.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        appt.user.phone.includes(searchFilter);
      const matchesStatus =
        statusFilter === "all" || appt.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchFilter, statusFilter, dashboardData.todayAppointmentList]);

  // Action Operation Handlers
  const handleActionClick = (action, id) => {
    alert(`Triggered Route Action: ${action} for ID: ${id}`);
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-200 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}
    >
      {/* Header section */}
      <header
        className={`sticky top-0 z-40 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md transition-colors ${darkMode ? "bg-slate-900/90 border-slate-800" : "bg-white/90 border-slate-200 shadow-sm"}`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-slate-500/10 lg:hidden"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/25">
              S
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">
              SmartCare
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all ${darkMode ? "border-slate-800 bg-slate-800 text-amber-400 hover:bg-slate-700" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div
            className={`flex items-center gap-3 pl-3 border-l ${darkMode ? "border-slate-800" : "border-slate-200"}`}
          >
            <img
              src={staff.userId.profileImage}
              alt={staff.userId.name}
              className="h-9 w-9 rounded-xl object-cover ring-2 ring-indigo-500/20"
            />
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold leading-none">
                {staff.userId.name}
              </p>
              <p className="text-xs font-medium text-slate-400 mt-1 capitalize">
                {staff.shift} Shift
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 top-[69px] z-30 w-64 border-r transition-all lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}
        >
          <div className="p-4 flex flex-col h-[calc(100vh-69px)] justify-between">
            <div className="space-y-1">
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core
              </p>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${darkMode ? "bg-slate-800 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`}
              >
                <LayoutDashboard size={18} /> Analytics Console
              </a>
            </div>
            <div
              className={`p-4 rounded-2xl border text-xs ${darkMode ? "bg-slate-950/40 border-slate-800" : "bg-slate-50 border-slate-100"}`}
            >
              <p className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] mb-2">
                Duty Token
              </p>
              <p className="font-medium">
                Status:{" "}
                <span className="text-emerald-500 font-bold capitalize">
                  {staff.status}
                </span>
              </p>
              <p className="text-slate-400 mt-1">
                Salary Point: ₹{staff.salary.toLocaleString()}
              </p>
            </div>
          </div>
        </aside>

        {/* Main Panel Content */}
        <main className="flex-1 p-6 max-w-[1600px] mx-auto w-full space-y-6 overflow-x-hidden">
          {/* Welcome Dashboard Metrics Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Reception Analytics
              </h1>
              <p
                className={`text-sm mt-0.5 ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Live status tracking and system distribution matrices.
              </p>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className={`p-4 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center justify-between text-slate-400">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Today's Load
                </span>
                <UserSquare2 size={16} className="text-blue-500" />
              </div>
              <p className="text-2xl font-bold mt-2">
                {stats.todayAppointments}{" "}
                <span className="text-xs font-normal text-slate-400">
                  / {stats.totalAppointments} T
                </span>
              </p>
            </div>
            <div
              className={`p-4 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center justify-between text-amber-500">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Pending Assign
                </span>
                <Clock size={16} />
              </div>
              <p className="text-2xl font-bold mt-2 text-amber-500">
                {stats.pendingAppointments}
              </p>
            </div>
            <div
              className={`p-4 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center justify-between text-emerald-500">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Confirmed
                </span>
                <CheckCircle2 size={16} />
              </div>
              <p className="text-2xl font-bold mt-2 text-emerald-500">
                {stats.confirmedAppointments}
              </p>
            </div>
            <div
              className={`p-4 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center justify-between text-indigo-500">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Active Staff
                </span>
                <Users size={16} />
              </div>
              <p className="text-2xl font-bold mt-2 text-indigo-500">
                {stats.totalDoctors}{" "}
                <span className="text-xs font-normal text-slate-400">Docs</span>
              </p>
            </div>
          </div>

          {/* ======================================================
              3. CHARTS CONTAINER SECTION (Functional & Scalable)
              ====================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Bar Chart: Appointment Split Workflow */}
            <div
              className={`lg:col-span-2 p-5 rounded-2xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-indigo-500" />
                <h3 className="text-sm font-bold tracking-tight">
                  Today's Appointment Status Spectrum
                </h3>
              </div>
              <div className="h-64 w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={appointmentBarData} barSize={45}>
                    <XAxis
                      dataKey="name"
                      stroke={darkMode ? "#64748b" : "#94a3b8"}
                      fontSize={11}
                      tickLine={false}
                    />
                    <YAxis
                      stroke={darkMode ? "#64748b" : "#94a3b8"}
                      fontSize={11}
                      tickLine={false}
                      allowDecimals={false}
                    />
                    <Tooltip
                      cursor={{ fill: "rgba(99, 102, 241, 0.04)" }}
                      contentStyle={{
                        backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                        borderColor: darkMode ? "#1e293b" : "#e2e8f0",
                        borderRadius: "12px",
                        color: darkMode ? "#f1f5f9" : "#0f172a",
                      }}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                      {appointmentBarData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart: Registration Structural Distribution */}
            <div
              className={`p-5 rounded-2xl border flex flex-col justify-between ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Activity size={16} className="text-blue-500" />
                <h3 className="text-sm font-bold tracking-tight">
                  Hospital Resources Mix
                </h3>
              </div>
              <div className="h-44 w-full relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: darkMode ? "#0f172a" : "#ffffff",
                        borderColor: darkMode ? "#1e293b" : "#e2e8f0",
                        borderRadius: "8px",
                      }}
                    />
                    <Pie
                      data={overallPieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={75}
                      paddingAngle={4}
                    >
                      {overallPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute text-center pointer-events-none">
                  <p className="text-xl font-bold text-slate-100 dark:text-slate-100">
                    {stats.totalPatients + stats.totalDoctors}
                  </p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Total Units
                  </p>
                </div>
              </div>
              {/* Custom Legend */}
              <div className="grid grid-cols-2 gap-2 text-xs border-t pt-3 border-slate-100 dark:border-slate-800/80">
                {overallPieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="text-slate-400 font-medium">
                      {item.name}:{" "}
                      <b className="text-slate-700 dark:text-slate-200">
                        {item.value}
                      </b>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================
              4. CONTROL FILTER MECHANISM (Matches API Model schema)
              ====================================================== */}
          <div
            className={`p-4 rounded-2xl border flex flex-col sm:flex-row gap-3 sm:items-center justify-between ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
          >
            {/* Search Bar filter */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search by patient name or phone index..."
                className={`w-full text-xs pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${darkMode ? "bg-slate-950 border-slate-800 text-slate-100 focus:border-slate-700" : "bg-slate-50 border-slate-200 text-slate-800 focus:border-slate-300"}`}
              />
            </div>

            {/* Status Category Pills Row */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto py-1">
              <div className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
                <Filter size={12} /> Filter:
              </div>
              {["all", "pending", "confirmed", "completed", "cancelled"].map(
                (category) => (
                  <button
                    key={category}
                    onClick={() => setStatusFilter(category)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium capitalize border transition-all ${
                      statusFilter === category
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                        : darkMode
                          ? "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {category}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Core Appointment Data Queue Grid */}
          <div
            className={`rounded-2xl border overflow-hidden ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-sm font-bold">
                Dynamic Queue Feed ({filteredAppointments.length} matching)
              </h3>
              <span className="text-[10px] font-bold text-indigo-500 bg-indigo-500/5 px-2 py-1 rounded-md">
                Live Sync Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr
                    className={`text-xs font-bold uppercase border-b ${darkMode ? "bg-slate-950/50 border-slate-800 text-slate-400" : "bg-slate-50/70 border-slate-100 text-slate-500"}`}
                  >
                    <th className="p-4">Patient Parameters</th>
                    <th className="p-4">Assigned Doctor</th>
                    <th className="p-4">Workflow Status</th>
                    <th className="p-4">Billing Status</th>
                    <th className="p-4 text-right">Operations Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-xs">
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appt) => (
                      <tr
                        key={appt._id}
                        className="hover:bg-slate-500/5 transition-colors"
                      >
                        <td className="p-4">
                          <div>
                            <p className="font-bold">{appt.user.name}</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {appt.user.age} Yrs • {appt.user.gender} •{" "}
                              {appt.user.phone}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          {appt.doctor ? (
                            <div>
                              <p className="font-medium text-slate-200 dark:text-slate-200">
                                {appt.doctor.doctorName}
                              </p>
                              <p className="text-[10px] text-slate-400">
                                {appt.doctor.specialization}
                              </p>
                            </div>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/10 text-rose-500">
                              Unassigned
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold capitalize ${
                              appt.status === "confirmed"
                                ? "bg-emerald-500/10 text-emerald-500"
                                : appt.status === "pending"
                                  ? "bg-amber-500/10 text-amber-500"
                                  : appt.status === "completed"
                                    ? "bg-indigo-500/10 text-indigo-500"
                                    : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            <span
                              className={`h-1 w-1 rounded-full ${
                                appt.status === "confirmed"
                                  ? "bg-emerald-500"
                                  : appt.status === "pending"
                                    ? "bg-amber-500"
                                    : appt.status === "completed"
                                      ? "bg-indigo-500"
                                      : "bg-red-500"
                              }`}
                            ></span>
                            {appt.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold">
                            ₹{appt.consultationFees}
                          </p>
                          <span
                            className={`inline-flex items-center text-[9px] uppercase font-bold tracking-wider ${appt.paymentStatus === "paid" ? "text-emerald-500" : "text-rose-500"}`}
                          >
                            {appt.paymentStatus}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {!appt.doctor && (
                              <button
                                onClick={() =>
                                  handleActionClick("Assign", apppt._id)
                                }
                                className="px-2.5 py-1 rounded-md font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
                              >
                                Assign Doctor
                              </button>
                            )}
                            {appt.paymentStatus === "unpaid" && (
                              <button
                                onClick={() =>
                                  handleActionClick("Collect Payment", appt._id)
                                }
                                className="p-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-amber-500 hover:bg-slate-500/5"
                                title="Collect Cash/UPI"
                              >
                                <CircleDollarSign size={15} />
                              </button>
                            )}
                            {appt.status === "pending" && appt.doctor && (
                              <button
                                onClick={() =>
                                  handleActionClick("Confirm Status", appt._id)
                                }
                                className="p-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-emerald-500 hover:bg-slate-500/5"
                                title="Confirm Block"
                              >
                                <Check size={15} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="p-8 text-center text-slate-400 font-medium"
                      >
                        No active queue entries match this search pattern.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
