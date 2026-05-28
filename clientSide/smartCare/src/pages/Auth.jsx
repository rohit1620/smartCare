import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";
import { loginUser, registerUser } from "../services/receptionService";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "male",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });
      const result = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      console.log("Login Result:", result);
    } else {
      console.log("Register Data:", formData);
      const result = await registerUser(formData);
      console.log("Register Result:", result);
    }
  };

  return (
    <div className="min-h-screen bg-[#07111f] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full"></div>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-cyan-600/20 to-blue-900/20 relative">
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
                <Stethoscope className="text-white" size={28} />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white">MediCare Plus</h1>
                <p className="text-cyan-200 text-sm">
                  Smart Hospital Management
                </p>
              </div>
            </div>

            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Professional Hospital Portal
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Securely manage appointments, doctors, reception, medical records,
              and hospital operations from one modern dashboard.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                <h3 className="text-cyan-300 font-semibold text-xl">24/7</h3>
                <p className="text-gray-300 text-sm mt-1">Healthcare Support</p>
              </div>

              <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                <h3 className="text-cyan-300 font-semibold text-xl">100%</h3>
                <p className="text-gray-300 text-sm mt-1">
                  Secure Authentication
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="flex justify-center lg:hidden mb-8">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/40">
              <Stethoscope className="text-white" size={30} />
            </div>
          </div>

          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-3">
              {isLogin ? "Welcome Back 👋" : "Create Account"}
            </h2>

            <p className="text-gray-400">
              {isLogin
                ? "Login to continue managing your hospital dashboard."
                : "Register your hospital account securely."}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-white/5 p-1 rounded-xl mb-8 border border-white/10">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isLogin ? "bg-cyan-500 text-white shadow-lg" : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isLogin ? "bg-cyan-500 text-white shadow-lg" : "text-gray-400"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 outline-none focus:border-cyan-400 transition-all"
              />
            </div>

            {/* Phone */}
            {!isLogin && (
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 outline-none focus:border-cyan-400 transition-all"
                />
              </div>
            )}

            {/* Gender & Role */}
            {!isLogin && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white rounded-xl py-4 px-4 outline-none focus:border-cyan-400"
                >
                  <option value="male" className="bg-[#07111f]">
                    Male
                  </option>
                  <option value="female" className="bg-[#07111f]">
                    Female
                  </option>
                  <option value="other" className="bg-[#07111f]">
                    Other
                  </option>
                </select>

                <div className="relative">
                  <ShieldPlus
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 outline-none focus:border-cyan-400"
                  >
                    <option value="user" className="bg-[#07111f]">
                      User
                    </option>

                    <option value="receptionist" className="bg-[#07111f]">
                      Receptionist
                    </option>

                    <option value="doctor" className="bg-[#07111f]">
                      Doctor
                    </option>

                    <option value="medical" className="bg-[#07111f]">
                      Medical Staff
                    </option>

                    <option value="admin" className="bg-[#07111f]">
                      Admin
                    </option>
                  </select>
                </div>
              </div>
            )}

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 text-white rounded-xl py-4 pl-12 pr-14 outline-none focus:border-cyan-400 transition-all"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forgot Password */}
            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-all"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              {isLogin ? "Login Account" : "Create Account"}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            {isLogin ? (
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Register
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
