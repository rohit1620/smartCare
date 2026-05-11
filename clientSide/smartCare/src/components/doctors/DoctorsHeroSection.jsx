"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Activity,
  ArrowRight,
  ChevronRight,
  Mouse,
} from "lucide-react";

const floatingIcons = [
  {
    icon: Stethoscope,
    className: "top-[18%] left-[8%] hidden lg:flex",
  },
  {
    icon: HeartPulse,
    className: "top-[28%] right-[10%] hidden lg:flex",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[26%] left-[12%] hidden xl:flex",
  },
  {
    icon: Activity,
    className: "bottom-[20%] right-[12%] hidden xl:flex",
  },
];

const stats = [
  "15+ Years Medical Excellence",
  "24/7 Patient Care",
  "100K+ Successful Treatments",
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export default function DoctorsHeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?q=80&w=2070&auto=format&fit=crop"
          alt="Doctors Background"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />

        {/* Gradient Glow */}
        <div className="absolute left-[-120px] top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-120px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/10"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            {/* Top Badge */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 shadow-lg backdrop-blur-xl"
            >
              Trusted Medical Professionals
            </motion.div>

            {/* Breadcrumb */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="mt-6 flex items-center gap-2 text-sm text-slate-300"
            >
              <span className="transition-colors hover:text-cyan-300">
                Home
              </span>

              <ChevronRight className="h-4 w-4 text-cyan-300" />

              <span className="text-cyan-300">Doctors</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={3}
              variants={fadeUp}
              className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl"
            >
              Meet Our{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Medical Experts
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              custom={4}
              variants={fadeUp}
              className="mt-6 text-2xl font-medium leading-relaxed text-cyan-100 md:text-3xl"
            >
              Experienced Specialists Dedicated To Your Health
            </motion.h2>

            {/* Description */}
            <motion.p
              custom={5}
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Our team of highly experienced doctors and medical specialists is
              committed to delivering compassionate care, advanced treatment
              expertise, and patient-focused healthcare solutions using modern
              medical technology and world-class clinical standards.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={6}
              variants={fadeUp}
              className="mt-10 flex flex-col gap-5 sm:flex-row"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-cyan-500/30"
              >
                Book Consultation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 font-semibold text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
              >
                View Specialists
              </motion.button>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              custom={7}
              variants={fadeUp}
              className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-5 shadow-xl backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <p className="relative z-10 text-sm font-medium text-white">
                    {item}
                  </p>

                  {/* Shine */}
                  <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
            className="relative hidden lg:flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative z-10 inline-flex rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-5">
                <ShieldCheck className="h-12 w-12 text-cyan-300" />
              </div>

              {/* Text */}
              <h3 className="relative z-10 mt-8 text-3xl font-bold text-white">
                100+ Experienced Specialists
              </h3>

              <p className="relative z-10 mt-5 max-w-md leading-relaxed text-slate-300">
                Trusted by thousands of patients for delivering exceptional
                healthcare services through experienced specialists,
                compassionate treatment, and advanced medical expertise.
              </p>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Shine */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 lg:flex"
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <Mouse className="h-7 w-7" />
          <span className="text-xs tracking-[0.25em]">SCROLL</span>
        </div>
      </motion.div>
    </section>
  );
}
