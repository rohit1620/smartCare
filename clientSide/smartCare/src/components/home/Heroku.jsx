import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  PhoneCall,
  Activity,
  Star,
  Users,
  BadgeCheck,
  Stethoscope,
} from "lucide-react";

export default function HospitalHeroSection() {
  const floatingAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center pt-14 pb-20">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="absolute top-[-120px] left-[-100px] w-[450px] h-[450px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[450px] h-[450px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-teal-200/20 rounded-full blur-[100px] animate-pulse"></div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* TRUST BADGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal-100 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>

              <span className="text-slate-700 font-semibold text-sm sm:text-base">
                Trusted by 25k+ Patients Worldwide
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-slate-900"
            >
              Advanced
              <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">
                {" "}
                Healthcare{" "}
              </span>
              For A Healthier Tomorrow
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-8 text-lg text-slate-600 leading-8 max-w-2xl"
            >
              Experience world-class healthcare solutions with advanced medical
              technology, expert doctors, and patient-centered care designed to
              provide trust, comfort, and faster recovery.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-10 flex flex-col sm:flex-row gap-5"
            >
              <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] text-white font-semibold shadow-[0_15px_40px_rgba(20,184,166,0.35)] hover:shadow-[0_20px_50px_rgba(20,184,166,0.45)] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <span className="relative flex items-center justify-center gap-2">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <button className="group px-8 py-4 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl text-slate-700 font-semibold hover:border-teal-300 hover:bg-teal-50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <Activity className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </button>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14"
            >
              {[
                {
                  icon: Users,
                  title: "250+",
                  subtitle: "Doctors Available",
                },
                {
                  icon: BadgeCheck,
                  title: "98%",
                  subtitle: "Successful Treatments",
                },
                {
                  icon: PhoneCall,
                  title: "24/7",
                  subtitle: "Emergency Support",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={floatingAnimation}
                  transition={{
                    delay: index * 0.3,
                  }}
                  className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-70"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                      <item.icon className="text-white w-6 h-6" />
                    </div>

                    <h3 className="mt-5 text-3xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-slate-600 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT IMAGE SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative flex justify-center items-center"
          >
            {/* MAIN GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#14B8A6]/30 to-[#06B6D4]/30 rounded-full blur-[100px] animate-pulse"></div>

            {/* IMAGE CONTAINER */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-lg"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#0F766E] to-[#06B6D4] blur-2xl opacity-20"></div>

              <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                  alt="Doctor"
                  className="w-full h-[650px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* SATISFACTION CARD */}
              <motion.div
                animate={floatingAnimation}
                className="absolute top-10 -left-10 w-64 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-slate-900">
                      4.9/5
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Patient Satisfaction
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* EXPERIENCE CARD */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-16 -left-12 w-60 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#14B8A6] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-slate-900">
                      15+ Yrs
                    </h4>
                    <p className="text-slate-600 text-sm">Doctor Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* EMERGENCY CARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-1/2 -right-10 w-64 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-white" />

                    <span className="absolute inset-0 rounded-2xl bg-red-400 animate-ping opacity-30"></span>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-slate-900">24/7</h4>
                    <p className="text-slate-600 text-sm">
                      Emergency Available
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* TRUSTED BRANDS */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-24"
        >
          <p className="text-center text-slate-500 font-medium mb-8">
            Trusted By Leading Healthcare Partners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            {["MEDICARE", "HEALTH+", "CAREPOINT", "LIFELINE", "MEDISTAR"].map(
              (brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="text-slate-400 text-2xl font-black tracking-widest"
                >
                  {brand}
                </motion.div>
              ),
            )}
          </div>
        </motion.div> */}

        {/* SCROLL INDICATOR */}
        {/* <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center"
        >
          <span className="text-slate-500 text-sm mb-3">Scroll Down</span>

          <div className="w-7 h-12 rounded-full border-2 border-slate-300 flex justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-[#0F766E] to-[#06B6D4] rounded-full animate-bounce"></div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
