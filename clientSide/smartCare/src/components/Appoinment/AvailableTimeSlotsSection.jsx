"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Video,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const morningSlots = [
  { time: "09:00 AM", status: "available", type: "offline" },
  { time: "09:30 AM", status: "few", type: "online" },
  { time: "10:00 AM", status: "available", type: "online" },
  { time: "11:30 AM", status: "booked", type: "offline" },
];

const eveningSlots = [
  { time: "04:00 PM", status: "available", type: "offline" },
  { time: "05:00 PM", status: "few", type: "online" },
  { time: "06:30 PM", status: "available", type: "online" },
  { time: "08:00 PM", status: "booked", type: "offline" },
];

const stats = [
  "24/7 Appointment Booking",
  "Instant Confirmation",
  "Online & Offline Consultation",
  "Emergency Healthcare Support",
];

export default function AvailableTimeSlotsSection() {
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");

  const getSlotStyles = (status) => {
    switch (status) {
      case "available":
        return "border-emerald-400/30 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20";
      case "few":
        return "border-yellow-400/30 bg-yellow-500/10 text-yellow-200 hover:bg-yellow-500/20";
      case "booked":
        return "border-red-400/20 bg-red-500/10 text-red-200 opacity-50 cursor-not-allowed";
      default:
        return "";
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/10"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-10 top-24 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl xl:flex"
      >
        <CalendarDays className="h-8 w-8 text-cyan-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-16 top-36 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl xl:flex"
      >
        <HeartPulse className="h-8 w-8 text-cyan-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 left-20 hidden rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl xl:flex"
      >
        <ShieldCheck className="h-8 w-8 text-cyan-300" />
      </motion.div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl">
            <CalendarDays className="h-4 w-4" />
            Doctor Availability
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Choose Your Preferred{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Consultation Time
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Book appointments instantly with live doctor availability, online
            consultations, and premium healthcare scheduling support designed
            for seamless patient experiences.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Doctor Card */}
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
                  alt="Doctor"
                  className="h-20 w-20 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Dr. Sarah Johnson
                  </h3>

                  <p className="mt-1 text-cyan-200">Senior Cardiologist</p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                    </span>

                    <span className="text-sm text-emerald-200">
                      Live Available Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Consultation Types */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  <Video className="h-4 w-4" />
                  Online Consultation
                </div>

                <div className="flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                  <Building2 className="h-4 w-4" />
                  Offline Visit
                </div>
              </div>

              {/* Appointment Info */}
              <div className="mt-8 space-y-4">
                {[
                  "Instant Confirmation",
                  "24/7 Booking Support",
                  "Emergency Consultation Available",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/30 px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Reminder Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-cyan-300" />

                  <div>
                    <h4 className="font-semibold text-white">
                      Appointment Reminder
                    </h4>

                    <p className="mt-1 text-sm text-slate-300">
                      You’ll receive instant booking confirmation and
                      consultation updates.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Slots Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
              {/* Morning Slots */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <Clock3 className="h-6 w-6 text-cyan-300" />

                  <h3 className="text-2xl font-bold text-white">
                    Morning Slots
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {morningSlots.map((slot, index) => (
                    <motion.button
                      key={index}
                      whileHover={{
                        scale: slot.status !== "booked" ? 1.05 : 1,
                      }}
                      whileTap={{
                        scale: slot.status !== "booked" ? 0.96 : 1,
                      }}
                      onClick={() =>
                        slot.status !== "booked" && setSelectedSlot(slot.time)
                      }
                      className={`relative overflow-hidden rounded-2xl border px-4 py-5 text-center transition-all duration-300 ${getSlotStyles(
                        slot.status,
                      )} ${
                        selectedSlot === slot.time ? "ring-2 ring-cyan-300" : ""
                      }`}
                    >
                      <div className="relative z-10">
                        <p className="font-semibold">{slot.time}</p>

                        <div className="mt-2 flex items-center justify-center gap-2 text-xs">
                          {slot.type === "online" ? (
                            <>
                              <Video className="h-3 w-3" />
                              Online
                            </>
                          ) : (
                            <>
                              <Building2 className="h-3 w-3" />
                              Offline
                            </>
                          )}
                        </div>
                      </div>

                      {slot.status === "available" && (
                        <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Evening Slots */}
              <div className="mt-12">
                <div className="mb-6 flex items-center gap-3">
                  <Clock3 className="h-6 w-6 text-cyan-300" />

                  <h3 className="text-2xl font-bold text-white">
                    Evening Slots
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {eveningSlots.map((slot, index) => (
                    <motion.button
                      key={index}
                      whileHover={{
                        scale: slot.status !== "booked" ? 1.05 : 1,
                      }}
                      whileTap={{
                        scale: slot.status !== "booked" ? 0.96 : 1,
                      }}
                      onClick={() =>
                        slot.status !== "booked" && setSelectedSlot(slot.time)
                      }
                      className={`relative overflow-hidden rounded-2xl border px-4 py-5 text-center transition-all duration-300 ${getSlotStyles(
                        slot.status,
                      )} ${
                        selectedSlot === slot.time ? "ring-2 ring-cyan-300" : ""
                      }`}
                    >
                      <div className="relative z-10">
                        <p className="font-semibold">{slot.time}</p>

                        <div className="mt-2 flex items-center justify-center gap-2 text-xs">
                          {slot.type === "online" ? (
                            <>
                              <Video className="h-3 w-3" />
                              Online
                            </>
                          ) : (
                            <>
                              <Building2 className="h-3 w-3" />
                              Offline
                            </>
                          )}
                        </div>
                      </div>

                      {slot.status === "available" && (
                        <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Legends */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
                  Green = Available
                </div>

                <div className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">
                  Yellow = Few Slots Left
                </div>

                <div className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-200">
                  Red = Booked
                </div>

                <div className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                  Blue = Online Consultation
                </div>
              </div>

              {/* Selected Slot Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mt-10 rounded-[28px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      Appointment Preview
                    </h4>

                    <div className="mt-4 space-y-2 text-slate-300">
                      <p>
                        Doctor:{" "}
                        <span className="text-white">Dr. Sarah Johnson</span>
                      </p>

                      <p>
                        Selected Time:{" "}
                        <span className="text-cyan-200">{selectedSlot}</span>
                      </p>

                      <p>
                        Consultation Type:{" "}
                        <span className="text-white">Online Consultation</span>
                      </p>

                      <p>
                        Status:{" "}
                        <span className="text-emerald-300">Available</span>
                      </p>
                    </div>
                  </div>

                  <button className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
                    Confirm Booking
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-[28px] border border-white/10 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-2xl"
            >
              <p className="font-semibold text-white">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
