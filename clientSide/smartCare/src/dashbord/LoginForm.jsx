import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctorLogin } from "../services/receptionService";

const HospitalLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "doctor", // Default role selection
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // High-End Role Mapping Configuration
  const roles = [
    // {
    //   id: "patient",
    //   label: "PATIENT",
    //   icon: "👤",
    //   color: "blue",
    //   ringColor: "focus:ring-blue-500",
    //   activeBg: "bg-blue-950/40 border-blue-500 shadow-blue-900/40",
    // },
    {
      id: "reception",
      label: "RECEPTION",
      icon: "📞",
      color: "teal",
      ringColor: "focus:ring-teal-500",
      activeBg: "bg-teal-950/40 border-teal-500 shadow-teal-900/40",
    },
    {
      id: "doctor",
      label: "DOCTOR",
      icon: "🩺",
      color: "emerald",
      ringColor: "focus:ring-emerald-500",
      activeBg: "bg-emerald-950/40 border-emerald-500 shadow-emerald-900/40",
    },
    {
      id: "medical",
      label: "MEDICAL",
      icon: "💊",
      color: "amber",
      ringColor: "focus:ring-amber-500",
      activeBg: "bg-amber-950/40 border-amber-500 shadow-amber-900/40",
    },
    {
      id: "admin",
      label: "ADMIN",
      icon: "🔑",
      color: "rose",
      ringColor: "focus:ring-rose-500",
      activeBg: "bg-rose-950/40 border-rose-500 shadow-rose-900/40",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (roleId) => {
    setFormData((prev) => ({ ...prev, role: roleId }));
  };

  // Upgraded Login Logic with Clean Error Tracking & Simulation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Basic Front-end validation checks
      if (!formData.email.includes("@")) {
        throw new Error("Please enter a valid hospital email address.");
      }
      if (formData.password.length < 6) {
        throw new Error("Password must be at least 6 characters long.");
      }

      // Simulating production network request delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (formData.role === "doctor") {
        const loginResponse = await doctorLogin({
          email: formData.email,
          password: formData.password,
        });
        navigate(
          `/dashboard/${formData.role}?doctorId=${loginResponse.doctor.id}`,
        );
      }
      // Doctor login successful hone ke baad
      // navigate(`/dashboard/doctor?doctorId=${loginResponse.id}`);

      if (
        formData.role === "admin" &&
        formData.email !== "admin@gmail.com" &&
        formData.password !== "1234567"
      ) {
        throw new Error("Invalid admin credentials.");
      }
      if (formData.role === "doctor" && loginResponse.success !== true) {
        throw new Error("Invalid doctor credentials.");
      }

      if (
        formData.role === "reception" &&
        formData.email !== "reception@gmail.com" &&
        formData.password !== "1234567"
      ) {
        throw new Error("Invalid reception credentials.");
      }

      // if (
      //   formData.role === "patient" &&
      //   formData.email !== "patient@example.com" &&
      //   formData.password !== "patient123"
      // ) {
      //   throw new Error("Invalid patient credentials.");
      // }

      if (
        formData.role === "medical" &&
        formData.email !== "medical@gmail.com" &&
        formData.password !== "1234567"
      ) {
        throw new Error("Invalid medical credentials.");
      } else {
        navigate(`/dashboard/${formData.role}`);
      }

      console.log("Authentication successful for routing:", formData);

      // Dynamic Redirect Logic based on validated context
      console.log(
        "Navigating to dashboard with doctorId:",
        loginResponse.doctor.id,
      );
    } catch (err) {
      setError(err.message || "An unexpected error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const activeRoleConfig =
    roles.find((r) => r.id === formData.role) || roles[2];

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4 font-sans antialiased text-slate-100 relative overflow-hidden">
      {/* Background Dynamic Glow Effects synced with role color */}
      <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none transition-all duration-700">
        <div
          className={`h-80 w-80 rounded-full absolute -top-10 -left-10 bg-${activeRoleConfig.color}-500 animate-pulse`}
        ></div>
        <div className="h-96 w-96 rounded-full absolute -bottom-20 -right-10 bg-slate-800 animate-pulse-slow"></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-xl w-full bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl transition-all duration-300">
        {/* Branding Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className={`text-3xl transition-transform duration-300 transform hover:rotate-12 text-${activeRoleConfig.color}-400`}
            >
              🏥
            </span>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              MedPulse{" "}
              <span className="font-light text-slate-400 text-2xl">OS</span>
            </h1>
          </div>
          <p className="text-xs uppercase font-bold tracking-widest text-slate-500">
            Enterprise Healthcare Management
          </p>
        </div>

        {/* Error Alert Display */}
        {error && (
          <div className="mb-6 bg-rose-950/50 border border-rose-800 p-4 rounded-2xl text-sm text-rose-300 font-medium flex items-center gap-3 animate-fade-in">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Fixed Responsive Grid Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Select Operating Environment
            </label>

            {/* Grid settings: Mobile me 2 columns, tablet/desktop me 5 columns -> koi element bahar nahi niklega */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {roles.map((r) => {
                const isSelected = formData.role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => handleRoleSelect(r.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? `${r.activeBg} border-2 transform scale-105`
                        : "border-slate-800 bg-slate-950/40 hover:border-slate-700 hover:bg-slate-900/50"
                    } ${r.id === "admin" && "col-span-2 sm:col-span-1" /* Mobile fallback center logic */}`}
                  >
                    <span
                      className={`text-2xl mb-1 filter drop-shadow transition-transform ${isSelected ? "scale-110" : "opacity-60"}`}
                    >
                      {r.icon}
                    </span>
                    <span
                      className={`text-[10px] font-black tracking-wider transition-colors ${isSelected ? `text-${r.color}-400` : "text-slate-400"}`}
                    >
                      {r.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-800/60 my-2" />

          {/* Email / ID Input Block */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-slate-400"
            >
              Identity Protocol (Email / User ID)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                📧
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="doctor@medpulse.com"
                className={`w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-transparent focus:ring-2 ${activeRoleConfig.ringColor} transition-all duration-200 text-sm`}
              />
            </div>
          </div>

          {/* Password Input Block */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-xs font-bold uppercase tracking-wider text-slate-400"
            >
              Security Keyphrase
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                🔑
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••••••"
                className={`w-full pl-12 pr-12 py-3.5 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-transparent focus:ring-2 ${activeRoleConfig.ringColor} transition-all duration-200 text-sm`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs font-semibold"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className={`h-4 w-4 bg-slate-950 border-slate-800 rounded checked:bg-${activeRoleConfig.color}-500 focus:ring-0 accent-${activeRoleConfig.color}-500`}
              />
              <span className="text-slate-400">Keep terminal authorized</span>
            </label>
            <a
              href="#"
              className={`font-bold transition-colors text-${activeRoleConfig.color}-400 hover:underline`}
            >
              Recover Access?
            </a>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl text-slate-950 text-sm font-black uppercase tracking-wider transition-all duration-200 shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 bg-white hover:bg-slate-200`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-slate-950"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Validating Token...
              </span>
            ) : (
              <span>Initialize Session System →</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalLogin;
