"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock3,
  PhoneCall,
  ChevronRight,
} from "lucide-react";

const floatingIcons = [
  {
    icon: CalendarDays,
    className: "top-[15%] left-[6%] hidden xl:flex",
  },
  {
    icon: Stethoscope,
    className: "top-[20%] right-[7%] hidden xl:flex",
  },
  {
    icon: HeartPulse,
    className: "bottom-[22%] left-[8%] hidden xl:flex",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[15%] right-[10%] hidden xl:flex",
  },
  {
    icon: Activity,
    className: "top-[50%] right-[20%] hidden 2xl:flex",
  },
];

const stats = [
  "15+ Years Medical Excellence",
  "50K+ Successful Appointments",
  "24/7 Patient Assistance",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function AppointmentHeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?q=80&w=2070&auto=format&fit=crop"
          alt="Hospital Background"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />

        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/20" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/10"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -120],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Medical Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
            className={`absolute z-20 ${item.className}`}
          >
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
              <Icon className="h-8 w-8 text-cyan-300" />
            </div>
          </motion.div>
        );
      })}

      <div className="relative z-30 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          {/* Badge */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
          >
            <ShieldCheck className="h-4 w-4" />
            Trusted Healthcare Appointments
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 text-sm text-slate-300"
          >
            <span className="transition hover:text-cyan-300">Home</span>

            <ChevronRight className="h-4 w-4 text-cyan-300" />

            <span className="text-cyan-300">Appointment</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={3}
            variants={fadeUp}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl"
          >
            Book Your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Appointment
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={4}
            variants={fadeUp}
            className="mt-6 text-2xl font-medium text-cyan-200"
          >
            Schedule Your Healthcare Consultation In Minutes
          </motion.p>

          {/* Description */}
          <motion.p
            custom={5}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Experience seamless healthcare booking with expert doctors, advanced
            medical consultations, emergency support, and patient-first care
            designed to make your healthcare journey fast, secure, and
            stress-free.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={6}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-cyan-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Appointment
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>

              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="rounded-full border border-white/10 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
            >
              <span className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-cyan-300" />
                Contact Support
              </span>
            </motion.button>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            custom={7}
            variants={fadeUp}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <p className="relative z-10 text-center text-sm font-semibold text-white">
                  {item}
                </p>

                <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Floating Cards */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative hidden lg:flex"
        >
          {/* Main Glass Card */}
          <div className="relative w-full rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />

            {/* Appointment Card */}
            <div className="relative z-10 rounded-[28px] border border-white/10 bg-slate-950/40 p-6 backdrop-blur-xl">
              {/* Doctor */}
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
                  alt="Doctor"
                  className="h-16 w-16 rounded-2xl object-cover"
                />

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Dr. Sarah Johnson
                  </h4>

                  <p className="text-sm text-cyan-300">Senior Cardiologist</p>
                </div>
              </div>

              {/* Appointment Time */}
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <div>
                  <p className="text-sm text-slate-400">Appointment Time</p>

                  <h5 className="mt-1 text-lg font-semibold text-white">
                    Today • 04:30 PM
                  </h5>
                </div>

                <CalendarDays className="h-10 w-10 text-cyan-300" />
              </div>

              {/* Status */}
              <div className="mt-5 flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4">
                <div>
                  <p className="text-sm text-emerald-200">
                    Online Consultation
                  </p>

                  <h5 className="mt-1 font-semibold text-white">
                    Available Now
                  </h5>
                </div>

                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                  <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400"></span>
                </span>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-4">
                {[
                  "Instant Appointment Booking",
                  "24/7 Emergency Assistance",
                  "Secure Online Consultation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Small Cards */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-10 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/20 p-3">
                  <Clock3 className="h-6 w-6 text-cyan-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-300">Instant Booking</p>

                  <h5 className="font-semibold text-white">Under 2 Minutes</h5>
                </div>
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
              className="absolute -bottom-8 right-0 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-emerald-400/20 p-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-300" />
                </div>

                <div>
                  <p className="text-sm text-slate-300">Emergency Support</p>

                  <h5 className="font-semibold text-white">24/7 Available</h5>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
          <div className="mt-3 h-3 w-3 rounded-full bg-cyan-300" />
        </div>
      </motion.div>
    </section>
  );
}
