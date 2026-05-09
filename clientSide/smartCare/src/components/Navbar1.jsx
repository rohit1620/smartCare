import React, { useEffect, useState } from "react";
import {
  HeartPulse,
  Menu,
  X,
  Bell,
  Search,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Doctors",
  "Departments",
  "Appointments",
  "Services",
  "Contact",
];

export default function HospitalNavbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/75 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3"
            : "bg-white/40 backdrop-blur-xl py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-400/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#06B6D4] flex items-center justify-center shadow-[0_10px_35px_rgba(20,184,166,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <HeartPulse className="text-white w-7 h-7" />
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-800 leading-none">
                  MediNova
                </h1>

                <p className="text-xs text-slate-500 mt-1 tracking-wider font-medium">
                  Advanced Healthcare System
                </p>
              </div>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveLink(item)}
                  className={`relative text-[15px] font-semibold tracking-wide transition-all duration-300 ${
                    activeLink === item
                      ? "text-[#0F766E]"
                      : "text-slate-600 hover:text-[#14B8A6]"
                  }`}
                >
                  {item}

                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] transition-all duration-500 ${
                      activeLink === item ? "w-full" : "w-0"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              <button className="group relative w-11 h-11 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-[#14B8A6] hover:bg-[#14B8A6]/10 hover:shadow-lg hover:-translate-y-0.5">
                <Search className="w-5 h-5 text-slate-700 transition-all duration-300 group-hover:text-[#0F766E]" />
              </button>

              {/* Notification */}
              <button className="group relative w-11 h-11 rounded-xl border border-slate-200 bg-white/70 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-lg hover:-translate-y-0.5">
                <Bell className="w-5 h-5 text-slate-700 transition-all duration-300 group-hover:text-cyan-600" />

                <span className="absolute top-2 right-2 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </button>

              {/* Emergency */}
              <button className="group relative overflow-hidden px-5 py-3 rounded-xl border border-red-200 bg-red-50 text-red-600 font-semibold transition-all duration-500 hover:shadow-[0_10px_25px_rgba(239,68,68,0.25)] hover:-translate-y-1">
                <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                <span className="relative flex items-center gap-2 transition-all duration-500 group-hover:text-white">
                  <PhoneCall className="w-4 h-4" />
                  Emergency
                </span>
              </button>

              {/* CTA */}
              <button className="group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] text-white font-semibold shadow-[0_12px_30px_rgba(20,184,166,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(20,184,166,0.45)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/20"></div>

                <span className="relative flex items-center gap-2">
                  Book Appointment
                  <ChevronRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden relative z-50 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-300"
            >
              <div className="transition-all duration-500">
                {mobileMenu ? (
                  <X className="w-6 h-6 text-slate-800 rotate-180 transition-all duration-500" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800 transition-all duration-500" />
                )}
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-all duration-700 ${
            mobileMenu ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* PANEL */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-cyan-50 to-teal-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-28 px-6 pb-10 flex flex-col h-full">
            {/* LINKS */}
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveLink(item);
                    setMobileMenu(false);
                  }}
                  className={`group flex items-center justify-between px-5 py-5 rounded-2xl text-left font-semibold text-lg transition-all duration-500 ${
                    activeLink === item
                      ? "bg-gradient-to-r from-[#0F766E] to-[#06B6D4] text-white shadow-2xl"
                      : "bg-white/80 backdrop-blur-lg text-slate-700 hover:bg-white hover:shadow-xl"
                  }`}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <span>{item}</span>

                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeLink === item
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* BOTTOM ACTIONS */}
            <div className="mt-auto pt-10 space-y-4">
              <button className="w-full py-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 font-bold flex items-center justify-center gap-3 transition-all duration-500 hover:bg-red-500 hover:text-white hover:shadow-xl">
                <PhoneCall className="w-5 h-5" />
                Emergency Contact
              </button>

              <button className="group w-full py-4 rounded-2xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] text-white font-bold shadow-[0_15px_40px_rgba(20,184,166,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,184,166,0.45)]">
                <span className="flex items-center justify-center gap-2">
                  Book Appointment
                  <ChevronRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <div className="flex items-center justify-center gap-5 pt-2">
                <button className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Search className="w-5 h-5 text-slate-700" />
                </button>

                <button className="relative w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Bell className="w-5 h-5 text-slate-700" />

                  <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR SPACING */}
      <div className="h-28"></div>
    </>
  );
}
