"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Ambulance,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

const floatingIcons = [
  { Icon: Stethoscope, top: "12%", left: "8%" },
  { Icon: HeartPulse, top: "18%", right: "10%" },
  { Icon: Activity, bottom: "18%", left: "12%" },
  { Icon: ShieldCheck, bottom: "14%", right: "14%" },
  { Icon: Ambulance, top: "42%", left: "5%" },
  { Icon: Microscope, top: "50%", right: "5%" },
  { Icon: Syringe, bottom: "32%", left: "18%" },
  { Icon: CalendarDays, bottom: "26%", right: "20%" },
];

const stats = [
  "100+ Medical Services",
  "24/7 Emergency Support",
  "50+ Specialist Doctors",
  "98% Patient Satisfaction",
];

const trustStats = [
  "15+ Years Medical Excellence",
  "100K+ Successful Treatments",
  "24/7 Patient Assistance",
  "Advanced Healthcare Technology",
];

export default function ServicesHeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop"
          alt="Hospital Background"
          className="h-full w-full object-cover scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/70" />

        {/* Gradient Glow */}
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Healthcare Icons */}
      {floatingIcons.map(({ Icon, ...pos }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className="absolute hidden rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:flex"
          style={pos}
        >
          <Icon className="h-7 w-7 text-cyan-300" />
        </motion.div>
      ))}

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            Comprehensive Healthcare Solutions
          </motion.div>

          {/* Breadcrumb */}
          <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
            <span>Home</span>

            <ChevronRight className="h-4 w-4" />

            <span className="text-cyan-300">Services</span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl xl:text-7xl">
            Advanced Medical Services For{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Complete Patient Care
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-8 text-xl leading-relaxed text-slate-300 md:text-2xl">
            Innovative Treatments, Expert Specialists & Compassionate Healthcare
            Services Designed Around Every Patient.
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Our hospital delivers advanced medical care through cutting-edge
            technology, highly experienced specialists, emergency healthcare
            support, and patient-first treatment experiences designed to ensure
            comfort, safety, and faster recovery.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >
              Book Appointment
            </motion.button>
          </div>

          {/* Trust Stats Strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {trustStats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl"
              >
                <p className="text-sm font-medium text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Dashboard Layout */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          {/* Main Glass Card */}
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl bottom-10">
            {/* Glow Border */}
            <div className="absolute  inset-0 rounded-[36px] border border-cyan-400/20" />

            {/* Service Preview */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-200">
                  Premium Healthcare Services
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  Cardiology Care
                </h3>
              </div>

              <div className="rounded-2xl bg-cyan-400/10 p-4">
                <HeartPulse className="h-10 w-10 text-cyan-300" />
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-cyan-400/10 p-3">
                      <Activity className="h-5 w-5 text-cyan-300" />
                    </div>

                    <p className="text-sm font-medium text-slate-200">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Service Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute right-10 -top-16 w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-300" />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Emergency Support
                  </h4>

                  <p className="text-sm text-slate-300">Available 24/7</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm text-emerald-200">
                  Online Consultation Active
                </span>
              </div>
            </motion.div>

            {/* Floating Trust Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className=" left-10 rounded-3xl border mt-10 border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-4 ">
                <div className="rounded-2xl bg-cyan-400/10 p-4">
                  <ShieldCheck className="h-8 w-8 text-cyan-300" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white ">
                    Trusted By 100K+ Patients
                  </h4>

                  <p className="text-sm text-slate-300">
                    Patient-First Healthcare Services
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex"
      >
        <span className="mb-2 text-sm text-slate-300">Scroll Down</span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="mt-2 h-3 w-3 rounded-full bg-cyan-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
