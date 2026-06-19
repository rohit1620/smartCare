"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  CalendarDays,
  Clock3,
  ShieldCheck,
  HeartPulse,
  Activity,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { bookAppointment } from "../../services/receptionService";
import Swal from "sweetalert2";

const floatingIcons = [
  {
    icon: CalendarDays,
    className: "top-[10%] left-[5%] hidden xl:flex",
  },
  {
    icon: Stethoscope,
    className: "top-[20%] right-[8%] hidden xl:flex",
  },
  {
    icon: HeartPulse,
    className: "bottom-[20%] left-[8%] hidden xl:flex",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[15%] right-[10%] hidden xl:flex",
  },
  {
    icon: Activity,
    className: "top-[50%] right-[18%] hidden 2xl:flex",
  },
];

const stats = [
  "100+ Expert Doctors",
  "50K+ Successful Appointments",
  "Instant Booking Confirmation",
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

export default function QuickAppointmentFormSection() {
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    department: "",
    assignedDoctorName: "",
    appointmentDate: "",
    timeSlot: "",
    symptoms: "",
  });

  const [loading, setLoading] = useState(false);

  // ======================================================
  // Handle Change
  // ======================================================

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ======================================================
  // Handle Submit
  // ======================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log("form data:", formData);

      const response = await bookAppointment(formData);

      // alert(response.message);

      // 2. Alert ki jagah ye use karein
      Swal.fire({
        title: "Success!",
        text: response.message,
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset Form
      setFormData({
        patientName: "",
        patientEmail: "",
        patientPhone: "",
        department: "",
        assignedDoctorName: "",
        appointmentDate: "",
        timeSlot: "",
        symptoms: "",
      });
    } catch (error) {
      console.log(error);

      // alert(error.response?.data?.message || "Something went wrong");
      // Agar koi error aata hai (network error ya server side error)
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <svg
          className="animate-spin h-10 w-10 text-teal-500"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-100px] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Particles */}
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

      {/* Floating Icons */}
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

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
          >
            <CalendarDays className="h-4 w-4" />
            Quick Appointment Booking
          </motion.div>

          {/* Heading */}
          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl"
          >
            Book Your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Medical Consultation
            </span>{" "}
            Instantly
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            Schedule appointments with expert specialists through our secure and
            seamless healthcare booking platform designed for faster
            consultations, personalized care, and exceptional patient
            experiences.
          </motion.p>

          {/* Trust Card */}
          <motion.div
            custom={4}
            variants={fadeUp}
            whileHover={{
              y: -5,
            }}
            className="group relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10 flex items-start gap-5">
              <div className="rounded-2xl bg-cyan-400/15 p-4">
                <ShieldCheck className="h-8 w-8 text-cyan-300" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">
                  24/7 Appointment Assistance
                </h4>

                <p className="mt-3 leading-relaxed text-slate-300">
                  Dedicated patient support, secure appointment booking, instant
                  confirmations, and emergency consultation assistance available
                  anytime.
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Dedicated Patient Support",
                    "Secure Medical Booking",
                    "Instant Appointment Confirmation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shine */}
            <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={5}
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="rounded-[28px] border border-white/10 bg-white/10 p-5 text-center shadow-2xl backdrop-blur-2xl"
              >
                <p className="text-sm font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Emergency Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mt-10 w-fit rounded-[28px] border border-emerald-400/20 bg-emerald-400/10 p-5 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-400/20 p-3">
                <HeartPulse className="h-7 w-7 text-emerald-300" />
              </div>

              <div>
                <p className="text-sm text-emerald-200">Emergency Support</p>

                <h5 className="font-semibold text-white">24/7 Available</h5>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
            {/* Glow */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" /> */}

            {/* Form */}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-5 text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="patientPhone"
                    value={formData.patientPhone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-5 text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <input
                    type="email"
                    name="patientEmail"
                    value={formData.patientEmail}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-5 text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                  />
                </div>
                <div className="relative">
                  <select
                    className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20 text-slate-300"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option>Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Dental Care">Dental Care</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <select
                    className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-5 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20 text-slate-300"
                    name="assignedDoctorName"
                    value={formData.assignedDoctorName}
                    onChange={handleChange}
                  >
                    <option>Select Doctor</option>
                    <option value="Dr. Michael Lee (Neurologist)">
                      Dr. Michael Lee (Neurologist)
                    </option>
                    <option value="Dr. Sarah Johnson (Cardiologist)">
                      Dr. Sarah Johnson (Cardiologist)
                    </option>
                    <option value="Dr. David Miller (Orthopedic)">
                      Dr. David Miller (Orthopedic)
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-4 text-slate-300 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                  />
                  <div className="relative">
                    <select
                      className="w-full h-14 rounded-2xl border border-slate-700 bg-slate-800 px-4 outline-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20 text-slate-300"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                    >
                      <option>Time</option>
                      <option>09:00 AM</option>
                      <option>09:15 AM</option>
                      <option>09:30 AM</option>
                      <option>09:45 AM</option>
                      <option>10:00 AM</option>
                      <option>10:15 AM</option>
                      <option>10:30 AM</option>
                      <option>10:45 AM</option>
                      <option>11:00 AM</option>
                      <option>11:15 AM</option>
                      <option>11:30 AM</option>
                      <option>11:45 AM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="5"
                  placeholder="Describe Symptoms / Message"
                  className="w-full rounded-3xl border border-slate-700 bg-slate-800 px-5 py-4 text-white placeholder-slate-400 outline-none resize-none transition-all duration-300 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/20"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Input Field */
function InputField({ icon: Icon, type, placeholder }) {
  return (
    <div className="group relative">
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
        {Icon && <Icon className="h-5 w-5 text-cyan-300" />}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/10 pl-12 pr-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/40 focus:bg-white/15"
      />

      <div className="absolute inset-0 rounded-2xl border border-cyan-400/0 transition-all duration-300 group-focus-within:border-cyan-400/20" />
    </div>
  );
}

/* Select Field */
function SelectField({ placeholder, options }) {
  return (
    <div className="group relative">
      <select className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/10 px-5 pr-12 text-white outline-none backdrop-blur-xl transition-all duration-300 focus:border-cyan-400/40 focus:bg-white/15">
        <option className="bg-slate-900">{placeholder}</option>

        {options.map((option, index) => (
          <option key={index} className="bg-slate-900">
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-300" />
    </div>
  );
}
