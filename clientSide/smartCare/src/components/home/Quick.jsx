import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  PhoneCall,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  Activity,
  BadgeCheck,
  Users,
  Star,
  Stethoscope,
  Sparkles,
} from "lucide-react";

export default function QuickAppointmentSection() {
  const floatingAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-20 bg-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-5 h-5 bg-teal-300 rounded-full blur-sm opacity-60"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-20 w-6 h-6 bg-cyan-300 rounded-full blur-sm opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal-100 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>

              <span className="font-semibold text-slate-700">
                Fast & Secure Booking
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-8 text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight text-slate-900"
            >
              Book Your
              <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">
                {" "}
                Appointment{" "}
              </span>
              In Minutes
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg leading-8 text-slate-600 max-w-2xl"
            >
              Get instant access to expert doctors, premium healthcare
              facilities, and emergency support with our modern smart booking
              system designed for speed, trust, and convenience.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                "24/7 Support",
                "Instant Confirmation",
                "Certified Doctors",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur-xl shadow-lg"
                >
                  <BadgeCheck className="w-5 h-5 text-[#14B8A6]" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-3 gap-5 mt-12"
            >
              {[
                {
                  icon: Users,
                  value: "250+",
                  title: "Doctors",
                },
                {
                  icon: HeartPulse,
                  value: "50K+",
                  title: "Patients",
                },
                {
                  icon: Star,
                  value: "98%",
                  title: "Satisfaction",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  animate={floatingAnimation}
                  className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-70"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="mt-5 text-3xl font-black text-slate-900">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-slate-600 font-medium">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Medical Icon */}
            <motion.div
              animate={{
                rotate: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="hidden xl:flex absolute -top-10 right-10 w-20 h-20 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-[#14B8A6]" />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating Cards */}
            <motion.div
              animate={floatingAnimation}
              className="absolute -top-8 -left-8 z-20 hidden md:flex items-center gap-4 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <PhoneCall className="text-white w-6 h-6" />
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900">Emergency</h4>
                <p className="text-sm text-slate-600">24/7 Support</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-8 right-0 z-20 hidden md:flex items-center gap-4 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center">
                <Activity className="text-white w-6 h-6" />

                <span className="absolute inset-0 rounded-2xl bg-teal-400 animate-ping opacity-30"></span>
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900">Live</h4>
                <p className="text-sm text-slate-600">Doctors Available</p>
              </div>
            </motion.div>

            {/* Form Container */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/70 to-cyan-50/70"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-xl">
                    <CalendarDays className="text-white w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-slate-900">
                      Quick Appointment
                    </h3>

                    <p className="text-slate-600 mt-1">
                      Secure your consultation instantly
                    </p>
                  </div>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                      />
                    </div>

                    <div className="relative">
                      <select className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20 text-slate-600">
                        <option>Select Department</option>
                        <option>Cardiology</option>
                        <option>Neurology</option>
                        <option>Orthopedics</option>
                        <option>Dental Care</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative">
                      <select className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20 text-slate-600">
                        <option>Select Doctor</option>
                        <option>Dr. Sharma</option>
                        <option>Dr. Patel</option>
                        <option>Dr. Verma</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <input
                        type="date"
                        className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-4 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                      />

                      <div className="relative">
                        <select className="w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-4 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20 text-slate-600">
                          <option>Time</option>
                          <option>09:00 AM</option>
                          <option>11:00 AM</option>
                          <option>02:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows="5"
                      placeholder="Describe Symptoms / Message"
                      className="w-full rounded-3xl border border-slate-200 bg-white/80 px-5 py-4 outline-none resize-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                    ></textarea>
                  </div>

                  {/* CTA */}
                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full h-16 rounded-2xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] text-white font-semibold text-lg shadow-[0_15px_40px_rgba(20,184,166,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,184,166,0.45)]"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <span className="relative flex items-center justify-center gap-3">
                      Book Appointment
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </form>

                {/* Bottom Info */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-3">
                    <div className="relative w-4 h-4">
                      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>

                      <span className="relative block w-4 h-4 rounded-full bg-green-500"></span>
                    </div>

                    <span className="text-slate-600 font-medium">
                      12 Doctors Online Now
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />

                    <span className="text-slate-600 font-medium">
                      100% Secure Booking
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Medical Icon */}
            <motion.div
              animate={{
                rotate: [0, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="hidden xl:flex absolute top-1/2 -right-12 w-24 h-24 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl items-center justify-center"
            >
              <Stethoscope className="w-12 h-12 text-[#14B8A6]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
