import React, { useState } from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  ClipboardList,
  Download,
  FileText,
  LayoutDashboard,
  Menu,
  Settings,
  User,
  Users,
  X,
  Activity,
  Stethoscope,
  CheckCircle2,
  Clock3,
  Plus,
} from "lucide-react";

import { motion } from "framer-motion";

import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const chartData = [
  { month: "Jan", visits: 20 },
  { month: "Feb", visits: 35 },
  { month: "Mar", visits: 28 },
  { month: "Apr", visits: 45 },
  { month: "May", visits: 40 },
  { month: "Jun", visits: 60 },
];

const appointments = [
  {
    doctor: "Dr. Sarah Wilson",
    specialization: "Cardiologist",
    date: "15 May 2026",
    time: "10:30 AM",
    status: "Approved",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400",
  },
  {
    doctor: "Dr. John Miller",
    specialization: "Neurologist",
    date: "18 May 2026",
    time: "02:00 PM",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400",
  },
];

const history = [
  {
    date: "12 May",
    doctor: "Dr. Sarah",
    disease: "Heart Checkup",
    prescription: "Medicine A",
    status: "Completed",
  },
  {
    date: "08 May",
    doctor: "Dr. Alex",
    disease: "Fever",
    prescription: "Medicine B",
    status: "Completed",
  },
  {
    date: "02 May",
    doctor: "Dr. Watson",
    disease: "Dental Care",
    prescription: "Medicine C",
    status: "Pending",
  },
];

const notifications = [
  "Your appointment has been approved.",
  "Medical report uploaded successfully.",
  "Reminder: Appointment tomorrow at 10 AM.",
];

const stats = [
  {
    title: "Total Appointments",
    value: "124",
    icon: Calendar,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Pending Appointments",
    value: "18",
    icon: Clock3,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Completed Visits",
    value: "89",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Medical Reports",
    value: "42",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
];

export default function HospitalUserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050816] text-white flex overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`fixed lg:static z-50 top-0 left-0 h-full w-[280px] bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MedixCare
            </h1>
            <p className="text-gray-400 text-sm">Hospital Management</p>
          </div>

          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X />
          </button>
        </div>

        <nav className="space-y-3">
          {[
            {
              icon: LayoutDashboard,
              label: "Dashboard",
            },
            {
              icon: Calendar,
              label: "Appointments",
            },
            {
              icon: FileText,
              label: "Reports",
            },
            {
              icon: Users,
              label: "Doctors",
            },
            {
              icon: ClipboardList,
              label: "Medical History",
            },
            {
              icon: Settings,
              label: "Settings",
            },
          ].map((item, index) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              key={index}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30"
                  : "hover:bg-white/5"
              }`}
            >
              <item.icon className="w-5 h-5 text-cyan-400" />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </motion.aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-40 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu />
            </button>

            <div>
              <h2 className="text-xl font-semibold">User Dashboard</h2>
              <p className="text-sm text-gray-400">
                Welcome back to your healthcare portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
              </button>

              {notificationOpen && (
                <div className="absolute right-0 mt-3 w-[320px] bg-[#0b1120]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                  <h3 className="font-semibold mb-4">Notifications</h3>

                  <div className="space-y-3">
                    {notifications.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-2 rounded-2xl"
              >
                <img
                  src="https://i.pravatar.cc/100"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">Rohit Kumar</p>
                  <p className="text-xs text-gray-400">Premium Member</p>
                </div>

                <ChevronDown className="w-4 h-4" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#0b1120]/95 border border-white/10 backdrop-blur-xl rounded-2xl p-2">
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
                    <User size={18} />
                    Profile
                  </button>

                  <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
                    <Settings size={18} />
                    Settings
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-8">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-cyan-400 mb-3">Welcome Back 👋</p>

                <h1 className="text-4xl font-bold leading-tight mb-4">
                  Your Health,
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    Our Priority
                  </span>
                </h1>

                <p className="text-gray-400 mb-8 max-w-xl">
                  Manage appointments, access reports, monitor your medical
                  history and stay connected with your healthcare providers.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-medium hover:scale-105 transition">
                    Book Appointment
                  </button>

                  <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                    View Reports
                  </button>
                </div>
              </div>

              {/* Illustration */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

                  <div className="relative w-[320px] h-[320px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
                    <Activity className="w-32 h-32 text-cyan-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((card, index) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={index}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 blur-3xl`}
                ></div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">{card.title}</p>

                    <h3 className="text-3xl font-bold mt-2">{card.value}</h3>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center`}
                  >
                    <card.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Appointment + Chart */}
          <section className="grid xl:grid-cols-3 gap-6">
            {/* Upcoming Appointments */}
            <div className="xl:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Upcoming Appointments</h3>

                <button className="text-cyan-400 text-sm">View All</button>
              </div>

              <div className="space-y-5">
                {appointments.map((item, i) => (
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    key={i}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white/5 border border-white/10 rounded-3xl p-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt=""
                        className="w-16 h-16 rounded-2xl object-cover"
                      />

                      <div>
                        <h4 className="font-semibold">{item.doctor}</h4>

                        <p className="text-gray-400 text-sm">
                          {item.specialization}
                        </p>

                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
                          <Calendar className="w-4 h-4" />
                          {item.date} • {item.time}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm ${
                          item.status === "Approved"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </span>

                      <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition">
                        View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="text-cyan-400" />
                <h3 className="text-xl font-semibold">Notifications</h3>
              </div>

              <div className="space-y-4">
                {notifications.map((item, i) => (
                  <motion.div
                    whileHover={{ x: 5 }}
                    key={i}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <p className="text-sm text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Chart + Quick Actions */}
          <section className="grid xl:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="xl:col-span-2 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-8">
                <Stethoscope className="text-cyan-400" />
                <h3 className="text-xl font-semibold">Health Activity</h3>
              </div>

              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="colorVisits"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#06b6d4"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#06b6d4"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <XAxis dataKey="month" stroke="#94a3b8" />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="visits"
                      stroke="#06b6d4"
                      fillOpacity={1}
                      fill="url(#colorVisits)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Plus,
                    label: "Book",
                  },
                  {
                    icon: FileText,
                    label: "Reports",
                  },
                  {
                    icon: Download,
                    label: "Prescription",
                  },
                  {
                    icon: User,
                    label: "Profile",
                  },
                ].map((item, i) => (
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    key={i}
                    className="group rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-cyan-500/40 transition"
                  >
                    <item.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto group-hover:scale-110 transition" />

                    <p className="text-sm">{item.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Medical History */}
          <section className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Medical History</h3>

              <button className="text-cyan-400 text-sm">
                View Full History
              </button>
            </div>

            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="text-left text-gray-400 border-b border-white/10">
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Doctor</th>
                  <th className="pb-4">Disease</th>
                  <th className="pb-4">Prescription</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {history.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="py-5">{item.date}</td>

                    <td>{item.doctor}</td>

                    <td>{item.disease}</td>

                    <td>{item.prescription}</td>

                    <td>
                      <span
                        className={`px-4 py-2 rounded-full text-xs ${
                          item.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Loading Skeletons */}
          <section className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white/5 border border-white/10 p-6 animate-pulse"
              >
                <div className="h-6 w-32 bg-white/10 rounded mb-5"></div>

                <div className="h-4 w-full bg-white/10 rounded mb-3"></div>

                <div className="h-4 w-2/3 bg-white/10 rounded"></div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
