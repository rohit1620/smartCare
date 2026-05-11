import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Search,
  Bell,
  HeartPulse,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Doctors",
  "Departments",
  "Appointments",
  "Services",
  "Contact",
];

export default function HospitalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-3"
            : "bg-white/40 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-400 blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500 rounded-full"></div>

                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-700 via-teal-500 to-cyan-400 flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <HeartPulse className="text-white w-7 h-7" />
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-800 leading-none">
                  smartCare<span className="text-red-600">+</span>
                </h1>
                <p className="text-xs text-slate-500 mt-1 tracking-wide">
                  Advanced Healthcare Solution
                </p>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8 lg:pr-5">
              {navLinks.map((link) => (
                <Link
                  to={link == "Home" ? "/" : `/${link.toLowerCase()}`}
                  key={link}
                >
                  <button
                    key={link}
                    onClick={() => setActive(link)}
                    className={`relative text-sm lg:cursor-pointer font-semibold tracking-wide transition-all duration-300 ${
                      active === link
                        ? "text-teal-700"
                        : "text-slate-600 hover:text-teal-600"
                    }`}
                  >
                    {link}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2.5px] rounded-full bg-gradient-to-r from-teal-600 to-cyan-400 transition-all duration-500 ${
                        active === link ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                </Link>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search */}
              {/* <button className="relative w-11 h-11 rounded-xl border border-slate-200 bg-white/70 flex items-center justify-center hover:bg-teal-50 hover:border-teal-200 transition-all duration-300 hover:scale-105">
                <Search className="w-5 h-5 text-slate-700" />
              </button> */}

              {/* Notification */}
              {/* <button className="relative w-11 h-11 rounded-xl border border-slate-200 bg-white/70 flex items-center justify-center hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-300 hover:scale-105">
                <Bell className="w-5 h-5 text-slate-700" />

                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </button> */}

              {/* Emergency */}
              <button className="group relative overflow-hidden px-5 py-3 rounded-xl border border-red-200 bg-red-50 text-red-600 font-semibold transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5 lg:cursor-pointer">
                <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  <Phone className="w-4 h-4" />
                  Emergency
                </span>
              </button>

              {/* CTA */}
              <button className="group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-500 text-white font-semibold shadow-[0_10px_25px_rgba(15,118,110,0.35)] hover:shadow-[0_14px_40px_rgba(15,118,110,0.45)] transition-all duration-500 hover:-translate-y-1 lg:cursor-pointer">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <span className="relative flex items-center gap-2">
                  Book Appointment
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-lg border border-slate-200 flex items-center justify-center shadow-lg"
            >
              <div className="transition-all duration-500">
                {isOpen ? (
                  <X className="w-6 h-6 text-slate-800 rotate-180 transition-all duration-500" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800 transition-all duration-500" />
                )}
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* PANEL */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-cyan-50 to-teal-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-28 px-6 pb-10 flex flex-col h-full">
            {/* LINKS */}
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <button
                  key={link}
                  onClick={() => {
                    setActive(link);
                    setIsOpen(false);
                  }}
                  className={`group flex items-center justify-between px-5 py-5 rounded-2xl text-left font-semibold text-lg transition-all duration-500 ${
                    active === link
                      ? "bg-gradient-to-r from-teal-700 to-cyan-500 text-white shadow-xl"
                      : "bg-white/80 text-slate-700 hover:bg-white hover:shadow-lg"
                  }`}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <span>{link}</span>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      active === link
                        ? "translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-auto space-y-4 pt-10">
              <button className="w-full py-4 rounded-2xl bg-red-50 border border-red-200 text-red-600 font-bold flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all duration-500">
                <Phone className="w-5 h-5" />
                Emergency Contact
              </button>

              <button className="group w-full py-4 rounded-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-500 text-white font-bold shadow-2xl hover:shadow-teal-300/40 transition-all duration-500 hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  Book Appointment
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <button className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <Search className="w-5 h-5 text-slate-700" />
                </button>

                <button className="relative w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300">
                  <Bell className="w-5 h-5 text-slate-700" />

                  <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-28"></div>
    </>
  );
}
