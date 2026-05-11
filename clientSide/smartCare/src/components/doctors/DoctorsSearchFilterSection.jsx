"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Activity,
  ChevronDown,
  X,
  Filter,
} from "lucide-react";

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
];

const specializations = [
  "Heart Specialist",
  "Surgeon",
  "Child Specialist",
  "Skin Specialist",
  "Physiotherapist",
];

const experiences = ["1+ Years", "5+ Years", "10+ Years", "15+ Years"];

const availability = [
  "Available Today",
  "Available Tomorrow",
  "Weekend Available",
];

const trustStats = [
  "100+ Expert Doctors",
  "24/7 Online Consultation",
  "Trusted Healthcare Network",
];

const floatingIcons = [
  {
    icon: Stethoscope,
    className: "top-[15%] left-[6%] hidden xl:flex",
  },
  {
    icon: HeartPulse,
    className: "top-[22%] right-[8%] hidden xl:flex",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[18%] left-[8%] hidden xl:flex",
  },
  {
    icon: Activity,
    className: "bottom-[15%] right-[10%] hidden xl:flex",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
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

export default function DoctorsSearchFilterSection() {
  const [selectedFilters, setSelectedFilters] = useState([
    "Cardiology",
    "10+ Years",
    "Online Consultation",
  ]);

  const [onlineConsultation, setOnlineConsultation] = useState(true);

  const [showFilters, setShowFilters] = useState(false);

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Floating Particles */}
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
              delay: Math.random() * 4,
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
            className={`absolute z-10 ${item.className}`}
          >
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
              <Icon className="h-8 w-8 text-cyan-300" />
            </div>
          </motion.div>
        );
      })}

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
          >
            Find Your Specialist
          </motion.div>

          {/* Heading */}
          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Search & Connect With{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Expert Doctors
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            Easily discover experienced specialists, filter doctors by
            department and expertise, and connect with trusted healthcare
            professionals for world-class medical care.
          </motion.p>
        </motion.div>

        {/* Search Container */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl lg:p-8"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />

          {/* Search Top */}
          <div className="relative z-10 flex flex-col gap-5">
            {/* Search Input */}
            <div className="group relative">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-300" />

              <input
                type="text"
                placeholder="Search doctors, specialists..."
                className="h-16 w-full rounded-2xl border border-white/10 bg-white/10 pl-14 pr-5 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/40 focus:bg-white/15"
              />

              <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 transition-all duration-300 group-focus-within:border-cyan-400/30" />
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur-xl lg:hidden"
            >
              <Filter className="h-5 w-5 text-cyan-300" />
              Filters
            </button>

            {/* Filters */}
            <AnimatePresence>
              {(showFilters || window.innerWidth >= 1024) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
                    {/* Department */}
                    <FilterDropdown label="Department" options={departments} />

                    {/* Specialization */}
                    <FilterDropdown
                      label="Specialization"
                      options={specializations}
                    />

                    {/* Experience */}
                    <FilterDropdown label="Experience" options={experiences} />

                    {/* Availability */}
                    <FilterDropdown
                      label="Availability"
                      options={availability}
                    />

                    {/* Online Consultation */}
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-400">
                            Online Consultation
                          </p>

                          <p className="mt-1 font-medium text-white">
                            Available
                          </p>
                        </div>

                        {/* Toggle */}
                        <button
                          onClick={() =>
                            setOnlineConsultation(!onlineConsultation)
                          }
                          className={`relative h-7 w-14 rounded-full transition-all duration-300 ${
                            onlineConsultation ? "bg-cyan-400" : "bg-white/20"
                          }`}
                        >
                          <motion.div
                            animate={{
                              x: onlineConsultation ? 28 : 2,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="absolute top-1 h-5 w-5 rounded-full bg-white"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-5 pt-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Filter Chips */}
              <div className="flex flex-wrap gap-3">
                <AnimatePresence>
                  {selectedFilters.map((filter, index) => (
                    <motion.div
                      key={filter}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="group flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl"
                    >
                      {filter}

                      <button
                        onClick={() => removeFilter(filter)}
                        className="rounded-full p-1 transition-colors hover:bg-white/10"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Clear Button */}
                <button className="text-sm text-slate-400 transition-colors hover:text-cyan-300">
                  Clear All Filters
                </button>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Results */}
                <div className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-xl">
                  120 Doctors Available
                </div>

                {/* Search Button */}
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
                  <span className="relative z-10">Search Doctors</span>

                  {/* Shine */}
                  <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {trustStats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <p className="relative z-10 text-center text-lg font-semibold text-white">
                {item}
              </p>

              {/* Shine */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Dropdown Component */
function FilterDropdown({ label, options }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>

          <p className="mt-1 font-medium text-white">Select {label}</p>
        </div>

        <ChevronDown className="h-5 w-5 text-cyan-300" />
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
