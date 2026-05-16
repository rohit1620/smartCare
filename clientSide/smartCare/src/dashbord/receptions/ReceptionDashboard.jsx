import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  Bell,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  Filter,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  Stethoscope,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const stats = [
  {
    title: "Total Patients Today",
    value: "248",
    icon: Users,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Waiting Patients",
    value: "36",
    icon: Clock3,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Completed Check-ins",
    value: "189",
    icon: CheckCircle2,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Emergency Cases",
    value: "12",
    icon: AlertTriangle,
    color: "from-red-500 to-pink-600",
  },
];

const queuePatients = [
  {
    name: "Rohit Sharma",
    token: "A-102",
    time: "10:30 AM",
    priority: "High",
    status: "Waiting",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Priya Verma",
    token: "B-204",
    time: "11:00 AM",
    priority: "Normal",
    status: "In Queue",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
];

const emergencyPatients = [
  {
    name: "Emergency Trauma",
    issue: "Accident Case",
  },
  {
    name: "Critical Cardiac",
    issue: "Heart Attack",
  },
];

const activities = [
  "Patient Rohit Sharma checked in",
  "Doctor assigned to Priya Verma",
  "Bill generated for Token A-102",
  "Emergency patient moved to ICU",
];

const patientFlow = [
  { day: "Mon", patients: 40 },
  { day: "Tue", patients: 55 },
  { day: "Wed", patients: 48 },
  { day: "Thu", patients: 70 },
  { day: "Fri", patients: 66 },
  { day: "Sat", patients: 82 },
];

const departmentTraffic = [
  { department: "Cardio", count: 32 },
  { department: "Neuro", count: 21 },
  { department: "Dental", count: 18 },
  { department: "Ortho", count: 27 },
];

export default function ReceptionDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040816] text-white flex overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-[280px] bg-white/5 backdrop-blur-2xl border-r border-white/10 p-6 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MedixCare
            </h1>
            <p className="text-sm text-gray-400">Reception Panel</p>
          </div>

          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
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
              icon: Users,
              label: "Patients",
            },
            {
              icon: Calendar,
              label: "Appointments",
            },
            {
              icon: CreditCard,
              label: "Billing",
            },
            {
              icon: Activity,
              label: "Emergency",
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
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-40 bg-[#040816]/70 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu />
            </button>

            <div>
              <h2 className="text-2xl font-semibold">Reception Dashboard</h2>

              <p className="text-sm text-gray-400">
                Real-time hospital reception management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 w-[300px]">
              <Search className="w-4 h-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search patients..."
                className="bg-transparent outline-none w-full text-sm placeholder:text-gray-500"
              />
            </div>

            {/* Notification */}
            <button className="relative p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <Bell className="w-5 h-5" />

              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
            </button>

            {/* Profile */}
            <button className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
              <img
                src="https://i.pravatar.cc/100"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">Reception Admin</p>

                <p className="text-xs text-gray-400">Front Desk</p>
              </div>

              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8">
          {/* Overview Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((card, index) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={index}
                className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-20 blur-3xl`}
                ></div>

                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-gray-400">{card.title}</p>

                    <h3 className="text-3xl font-bold mt-2">{card.value}</h3>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center`}
                  >
                    <card.icon className="w-7 h-7" />
                  </div>
                </div>

                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Queue + Billing */}
          <section className="grid xl:grid-cols-3 gap-6">
            {/* Live Queue */}
            <div className="xl:col-span-2 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Live Patient Queue</h3>

                <button className="text-cyan-400 text-sm">View All</button>
              </div>

              <div className="space-y-5">
                {queuePatients.map((patient, index) => (
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white/5 border border-white/10 rounded-3xl p-5"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={patient.image}
                        alt=""
                        className="w-16 h-16 rounded-2xl object-cover"
                      />

                      <div>
                        <h4 className="font-semibold">{patient.name}</h4>

                        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-400">
                          <span>Token: {patient.token}</span>

                          <span>{patient.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      <span
                        className={`px-4 py-2 rounded-full text-xs ${
                          patient.priority === "High"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-cyan-500/20 text-cyan-400"
                        }`}
                      >
                        {patient.priority}
                      </span>

                      <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                        {patient.status}
                      </span>

                      <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition">
                        Assign Doctor
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Billing */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-cyan-400" />

                <h3 className="text-xl font-semibold">Billing Summary</h3>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between text-gray-300">
                  <span>Consultation Fee</span>
                  <span>₹800</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Emergency Charges</span>
                  <span>₹1200</span>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-semibold">
                  <span>Total Amount</span>
                  <span>₹2000</span>
                </div>

                <div className="flex items-center justify-between bg-green-500/10 border border-green-500/20 rounded-2xl px-4 py-3">
                  <span className="text-green-400">Payment Status</span>

                  <span className="text-green-400 font-semibold">Paid</span>
                </div>

                <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition">
                  Generate Bill
                </button>
              </div>
            </div>
          </section>

          {/* Doctor Assignment + Emergency */}
          <section className="grid xl:grid-cols-2 gap-6">
            {/* Doctor Assignment */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="text-cyan-400" />

                <h3 className="text-xl font-semibold">Doctor Assignment</h3>
              </div>

              <div className="space-y-5">
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none">
                  <option>Select Doctor</option>
                  <option>Dr. Sarah Wilson</option>
                  <option>Dr. Alex Johnson</option>
                  <option>Dr. Priya Sharma</option>
                </select>

                <div className="flex flex-wrap gap-3">
                  {["Cardiology", "Neurology", "Orthopedic", "Emergency"].map(
                    (dept, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm"
                      >
                        {dept}
                      </span>
                    ),
                  )}
                </div>

                <div className="flex items-center justify-between bg-white/5 rounded-2xl border border-white/10 p-4">
                  <div>
                    <p className="font-medium">Dr. Sarah Wilson</p>

                    <p className="text-sm text-green-400">Available Now</p>
                  </div>

                  <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                    Assign Patient
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Section */}
            <div className="rounded-3xl bg-white/5 border border-red-500/20 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-red-400" />

                <h3 className="text-xl font-semibold">Emergency Patients</h3>
              </div>

              <div className="space-y-5">
                {emergencyPatients.map((item, index) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    key={index}
                    className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/10 p-5"
                  >
                    <div className="absolute inset-0 bg-red-500/10 blur-3xl"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>

                        <p className="text-sm text-red-300 mt-1">
                          {item.issue}
                        </p>
                      </div>

                      <button className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition">
                        Quick Action
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Analytics */}
          <section className="grid xl:grid-cols-2 gap-6">
            {/* Patient Flow */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <h3 className="text-xl font-semibold mb-6">
                Patient Flow Analytics
              </h3>

              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={patientFlow}>
                    <defs>
                      <linearGradient id="flow" x1="0" y1="0" x2="0" y2="1">
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

                    <XAxis dataKey="day" stroke="#94a3b8" />

                    <Tooltip />

                    <Area
                      type="monotone"
                      dataKey="patients"
                      stroke="#06b6d4"
                      fillOpacity={1}
                      fill="url(#flow)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Department Traffic */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Department Traffic</h3>

              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentTraffic}>
                    <XAxis dataKey="department" stroke="#94a3b8" />

                    <Tooltip />

                    <Bar
                      dataKey="count"
                      fill="#06b6d4"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Search + Timeline */}
          <section className="grid xl:grid-cols-2 gap-6">
            {/* Search Filters */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Filter className="text-cyan-400" />

                <h3 className="text-xl font-semibold">Search & Filters</h3>
              </div>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Search patient..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none placeholder:text-gray-500"
                />

                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none">
                  <option>Filter by Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Dental</option>
                </select>

                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none">
                  <option>Filter by Status</option>
                  <option>Waiting</option>
                  <option>Completed</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Recent Activities</h3>

              <div className="space-y-5">
                {activities.map((activity, index) => (
                  <motion.div
                    whileHover={{ x: 5 }}
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>

                      {index !== activities.length - 1 && (
                        <div className="w-[2px] h-full bg-cyan-500/20"></div>
                      )}
                    </div>

                    <div className="pb-6">
                      <p className="text-gray-300">{activity}</p>

                      <span className="text-xs text-gray-500">Just now</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
