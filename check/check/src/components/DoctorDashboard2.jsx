// ===============================================
// File: src/pages/DoctorDashboard.jsx
// ===============================================

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  CalendarDays,
  Users,
  UserCheck,
  UserX,
  Activity,
  Search,
  Moon,
  Sun,
  Filter,
  Stethoscope,
  IndianRupee,
  Clock3,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

const DoctorDashboard = () => {
  // =========================================================
  // STATES
  // =========================================================

  const [darkMode, setDarkMode] = useState(true);

  const [doctorId, setDoctorId] = useState("");

  const [appointments, setAppointments] = useState([]);

  const [statistics, setStatistics] = useState({});

  const [pagination, setPagination] = useState({});

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [dateFilter, setDateFilter] = useState("");

  const [doctorData, setDoctorData] = useState(null);

  // =========================================================
  // API BASE URL
  // =========================================================

  const API = "http://localhost:5000/api";

  // =========================================================
  // FETCH DOCTOR
  // =========================================================

  const fetchDoctor = async () => {
    try {
      const res = await axios.get(`${API}/doctors/${doctorId}`);

      setDoctorData(res.data.doctor);
    } catch (error) {
      console.log(error);
    }
  };

  // =========================================================
  // FETCH APPOINTMENTS
  // =========================================================

  const fetchAppointments = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/doctors/${doctorId}/appointments`, {
        params: {
          status: statusFilter,
          date: dateFilter,
        },

        headers: {
          Authorization: `Bearer ${token}`,
        },

        withCredentials: true,
      });

      setAppointments(res.data.appointments);

      setStatistics(res.data.statistics);

      setPagination(res.data.pagination);

      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  // =========================================================
  // INITIAL LOAD
  // =========================================================

  useEffect(() => {
    const id = localStorage.getItem("doctorId");

    if (id) {
      setDoctorId(id);
    }
  }, []);

  useEffect(() => {
    if (doctorId) {
      fetchDoctor();
      fetchAppointments();
    }
  }, [doctorId, statusFilter, dateFilter]);

  // =========================================================
  // SEARCH FILTER
  // =========================================================

  const filteredAppointments = useMemo(() => {
    return appointments.filter((item) =>
      item?.user?.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [appointments, search]);

  // =========================================================
  // CHART DATA
  // =========================================================

  const appointmentStatusData = [
    {
      name: "Confirmed",
      value: statistics?.confirmedAppointments || 0,
    },
    {
      name: "Pending",
      value: statistics?.pendingAppointments || 0,
    },
    {
      name: "Cancelled",
      value: statistics?.cancelledAppointments || 0,
    },
    {
      name: "Completed",
      value: statistics?.completedAppointments || 0,
    },
  ];

  const weeklyData = [
    {
      day: "Mon",
      patients: 4,
    },
    {
      day: "Tue",
      patients: 8,
    },
    {
      day: "Wed",
      patients: 5,
    },
    {
      day: "Thu",
      patients: 9,
    },
    {
      day: "Fri",
      patients: 7,
    },
    {
      day: "Sat",
      patients: 10,
    },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444", "#3b82f6"];

  // =========================================================
  // THEME
  // =========================================================

  const theme = {
    bg: darkMode ? "bg-[#0f172a]" : "bg-[#f1f5f9]",

    card: darkMode ? "bg-[#111827]" : "bg-white",

    border: darkMode ? "border-gray-800" : "border-gray-200",

    text: darkMode ? "text-white" : "text-gray-900",

    subtext: darkMode ? "text-gray-400" : "text-gray-600",
  };

  // =========================================================
  // LOADER
  // =========================================================

  //   if (!doctorId) {
  //     return (
  //       <div className="h-screen flex items-center justify-center text-2xl font-bold">
  //         Doctor ID Not Found
  //       </div>
  //     );
  //   }

  return (
    <div className={`${theme.bg} min-h-screen transition-all duration-300`}>
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="p-6 md:p-10">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* LEFT */}

          <div className="flex gap-5 items-center">
            <img
              src={
                doctorData?.profileImage ||
                "https://cdn-icons-png.flaticon.com/512/387/387561.png"
              }
              alt=""
              className="w-24 h-24 rounded-3xl object-cover border-4 border-cyan-500 shadow-2xl"
            />

            <div>
              <h1 className={`text-3xl md:text-4xl font-black ${theme.text}`}>
                Dr. {doctorData?.doctorName}
              </h1>

              <p className={`mt-2 ${theme.subtext}`}>
                {doctorData?.specialization}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                  {doctorData?.department}
                </span>

                <span className="px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  {doctorData?.experience} Years Experience
                </span>

                <span className="px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-sm flex items-center gap-1">
                  <IndianRupee size={14} />
                  {doctorData?.fees}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-xl"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* ===================================================== */}
        {/* STATS */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          <Card
            icon={<CalendarDays />}
            title="Total Appointments"
            value={statistics?.totalAppointments || 0}
            color="from-cyan-500 to-blue-600"
            theme={theme}
          />

          <Card
            icon={<UserCheck />}
            title="Confirmed"
            value={statistics?.confirmedAppointments || 0}
            color="from-green-500 to-emerald-600"
            theme={theme}
          />

          <Card
            icon={<Clock3 />}
            title="Pending"
            value={statistics?.pendingAppointments || 0}
            color="from-yellow-500 to-orange-500"
            theme={theme}
          />

          <Card
            icon={<UserX />}
            title="Cancelled"
            value={statistics?.cancelledAppointments || 0}
            color="from-red-500 to-pink-600"
            theme={theme}
          />
        </div>

        {/* ===================================================== */}
        {/* FILTERS */}
        {/* ===================================================== */}

        <div
          className={`${theme.card} ${theme.border} border rounded-3xl p-5 mt-10 shadow-2xl`}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* SEARCH */}

            <div className="flex-1 relative">
              <Search
                className={`absolute left-4 top-4 ${theme.subtext}`}
                size={18}
              />

              <input
                type="text"
                placeholder="Search patient..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl outline-none ${theme.bg} ${theme.text}`}
              />
            </div>

            {/* STATUS */}

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`px-5 py-4 rounded-2xl outline-none ${theme.bg} ${theme.text}`}
            >
              <option value="">All Status</option>

              <option value="confirmed">Confirmed</option>

              <option value="pending">Pending</option>

              <option value="cancelled">Cancelled</option>

              <option value="completed">Completed</option>
            </select>

            {/* DATE */}

            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className={`px-5 py-4 rounded-2xl outline-none ${theme.bg} ${theme.text}`}
            />
          </div>
        </div>

        {/* ===================================================== */}
        {/* CHARTS */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-10">
          {/* PIE CHART */}

          <div
            className={`${theme.card} ${theme.border} border rounded-3xl p-6 shadow-2xl`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-cyan-400" />

              <h2 className={`text-2xl font-bold ${theme.text}`}>
                Appointment Analytics
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={appointmentStatusData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {appointmentStatusData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* AREA CHART */}

          <div
            className={`${theme.card} ${theme.border} border rounded-3xl p-6 shadow-2xl`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-green-400" />

              <h2 className={`text-2xl font-bold ${theme.text}`}>
                Weekly Patient Flow
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient
                    id="colorPatients"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />

                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="patients"
                  stroke="#06b6d4"
                  fillOpacity={1}
                  fill="url(#colorPatients)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ===================================================== */}
        {/* APPOINTMENT TABLE */}
        {/* ===================================================== */}

        <div
          className={`${theme.card} ${theme.border} border rounded-3xl p-6 shadow-2xl mt-10 overflow-x-auto`}
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className={`text-2xl font-bold ${theme.text}`}>
                Recent Appointments
              </h2>

              <p className={theme.subtext}>Manage all doctor appointments</p>
            </div>

            <div className="flex items-center gap-2 text-cyan-400">
              <Filter size={18} />

              <span>{filteredAppointments.length} Results</span>
            </div>
          </div>

          {loading ? (
            <div className="h-60 flex justify-center items-center">
              <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className={`border-b ${theme.border}`}>
                  <th className={`text-left py-4 ${theme.subtext}`}>Patient</th>

                  <th className={`text-left py-4 ${theme.subtext}`}>Gender</th>

                  <th className={`text-left py-4 ${theme.subtext}`}>Age</th>

                  <th className={`text-left py-4 ${theme.subtext}`}>Phone</th>

                  <th className={`text-left py-4 ${theme.subtext}`}>Status</th>

                  <th className={`text-left py-4 ${theme.subtext}`}>Date</th>
                </tr>
              </thead>

              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr
                    key={appointment._id}
                    className={`border-b ${theme.border} hover:bg-cyan-500/5 transition-all`}
                  >
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            appointment?.user?.profileImage ||
                            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          }
                          alt=""
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                          <h3 className={`font-semibold ${theme.text}`}>
                            {appointment?.user?.name}
                          </h3>

                          <p className={theme.subtext}>
                            {appointment?.user?.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className={`${theme.text}`}>
                      {appointment?.user?.gender}
                    </td>

                    <td className={`${theme.text}`}>
                      {appointment?.user?.age}
                    </td>

                    <td className={`${theme.text}`}>
                      {appointment?.user?.phone}
                    </td>

                    <td>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${
                          appointment?.status === "confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : appointment?.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-300"
                              : appointment?.status === "cancelled"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-blue-500/20 text-blue-400"
                        }
                        `}
                      >
                        {appointment?.status}
                      </span>
                    </td>

                    <td className={`${theme.text}`}>
                      {new Date(
                        appointment?.appointmentDate,
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

// =========================================================
// CARD COMPONENT
// =========================================================

const Card = ({ icon, title, value, color, theme }) => {
  return (
    <div
      className={`${theme.card} ${theme.border} border rounded-3xl p-6 shadow-2xl hover:scale-[1.02] transition-all`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className={theme.subtext}>{title}</p>

          <h2 className={`text-4xl font-black mt-3 ${theme.text}`}>{value}</h2>
        </div>

        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} text-white flex items-center justify-center shadow-xl`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
