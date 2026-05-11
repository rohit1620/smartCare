// "use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  PhoneCall,
  HeartPulse,
  Stethoscope,
  Activity,
  Mouse,
} from "lucide-react";

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop"
          alt="Hospital Background"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-slate-900/50 to-cyan-900/40" />

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20"
            initial={{
              y: 0,
              x: Math.random() * 1000,
              opacity: 0,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Medical Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-28 left-10 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <HeartPulse className="h-8 w-8 text-cyan-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-12 top-40 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <Stethoscope className="h-8 w-8 text-blue-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-40 right-24 hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl lg:block"
      >
        <Activity className="h-8 w-8 text-cyan-200" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-blue-100"
          >
            <span className="cursor-pointer transition hover:text-cyan-300">
              Home
            </span>

            <ChevronRight className="h-4 w-4" />

            <span className="text-cyan-300">About Us</span>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="rounded-full bg-cyan-400/20 p-2">
              <ShieldCheck className="h-5 w-5 text-cyan-300" />
            </div>

            <span>15+ Years of Medical Excellence</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Our Hospital
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-xl font-semibold leading-relaxed text-cyan-100 sm:text-2xl lg:text-3xl"
          >
            Delivering Trusted Healthcare Excellence Since 2008
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            We are committed to providing compassionate patient care through
            advanced medical technology, experienced healthcare professionals,
            and a patient-first approach focused on trust, safety, and lifelong
            wellness.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:shadow-cyan-500/30"
            >
              Book Appointment
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >
              <PhoneCall className="h-5 w-5" />
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/70">
          <Mouse className="h-7 w-7" />
          <span className="mt-2 text-xs tracking-widest">SCROLL DOWN</span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
