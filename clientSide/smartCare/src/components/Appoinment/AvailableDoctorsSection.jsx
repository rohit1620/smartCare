"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Activity,
  CalendarDays,
  Star,
  BadgeCheck,
  Clock3,
  ArrowRight,
  Phone,
  Video,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Senior Cardiologist",
    experience: "15+ Years Experience",
    rating: "4.9",
    reviews: "2.5K+ Reviews",
    fee: "$49",
    available: "Available Now",
    nextSlot: "Today • 04:30 PM",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialization: "Neurology Specialist",
    experience: "12+ Years Experience",
    rating: "4.8",
    reviews: "1.8K+ Reviews",
    fee: "$55",
    available: "Online Consultation",
    nextSlot: "Tomorrow • 10:00 AM",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    specialization: "Orthopedic Surgeon",
    experience: "10+ Years Experience",
    rating: "4.9",
    reviews: "3K+ Reviews",
    fee: "$60",
    available: "Available Today",
    nextSlot: "Today • 06:00 PM",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Dr. Daniel Smith",
    specialization: "Dermatology Expert",
    experience: "8+ Years Experience",
    rating: "4.7",
    reviews: "1.2K+ Reviews",
    fee: "$40",
    available: "Available Now",
    nextSlot: "Today • 02:00 PM",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
  },
];

const floatingIcons = [
  {
    icon: Stethoscope,
    className: "top-20 left-10",
  },
  {
    icon: HeartPulse,
    className: "top-40 right-16",
  },
  {
    icon: ShieldCheck,
    className: "bottom-24 left-16",
  },
  {
    icon: Activity,
    className: "bottom-16 right-20",
  },
  {
    icon: CalendarDays,
    className: "top-1/2 left-1/2",
  },
];

export default function AvailableDoctorsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

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
              duration: 4 + Math.random() * 4,
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

      {/* Floating Medical Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
            }}
            className={`absolute hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl xl:flex ${item.className}`}
          >
            <Icon className="h-8 w-8 text-cyan-300" />
          </motion.div>
        );
      })}

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4" />
            Available Specialists
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Consult With{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Trusted Medical Experts
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Connect with highly experienced doctors, book instant consultations,
            and receive advanced patient-focused healthcare services from
            trusted medical specialists.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl ${
                doctor.featured ? "ring-2 ring-cyan-400/30" : ""
              }`}
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Featured Badge */}
              {doctor.featured && (
                <div className="absolute left-5 top-5 z-30 rounded-full border border-cyan-300/20 bg-cyan-400/15 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-xl">
                  Top Specialist
                </div>
              )}

              {/* Doctor Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

                {/* Verified Badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  <BadgeCheck className="h-4 w-4 text-cyan-300" />

                  <span className="text-xs font-medium text-white">
                    Verified Doctor
                  </span>
                </div>

                {/* Online Status */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-medium text-emerald-200">
                    {doctor.available}
                  </span>
                </div>

                {/* Hover Social Icons */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-10 items-center justify-center gap-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:pb-8 group-hover:opacity-100">
                  <button className="rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-400/20">
                    <Phone className="h-5 w-5" />
                  </button>

                  <button className="rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-400/20">
                    <Video className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Name */}
                <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>

                {/* Specialization */}
                <p className="mt-2 text-cyan-200">{doctor.specialization}</p>

                {/* Rating & Fee */}
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {doctor.rating} Rating
                      </p>

                      <span className="text-xs text-slate-400">
                        {doctor.reviews}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                    {doctor.fee}
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-3">
                  <Clock3 className="h-5 w-5 text-cyan-300" />

                  <span className="text-sm text-slate-300">
                    {doctor.experience}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 leading-relaxed text-slate-300">
                  Expert specialist providing compassionate care, advanced
                  treatment solutions, and trusted healthcare experiences
                  focused on patient recovery and wellness.
                </p>

                {/* Next Slot */}
                <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">
                  <p className="text-sm font-medium text-emerald-200">
                    Next Available: {doctor.nextSlot}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-7 flex gap-4">
                  <button className="group/btn flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03]">
                    Book Appointment
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <button className="rounded-full border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/15">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
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
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            "100+ Expert Specialists",
            "50K+ Successful Consultations",
            "24/7 Appointment Support",
            "98% Patient Satisfaction",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="rounded-[28px] border border-white/10 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-2xl"
            >
              <p className="font-semibold text-white">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Info Card */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mx-auto mt-16 max-w-2xl rounded-[32px] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-2xl"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div>
              <h4 className="text-2xl font-bold text-white">
                Instant Booking Confirmation
              </h4>

              <p className="mt-2 text-slate-300">
                Online consultation available with emergency healthcare support
                24/7.
              </p>
            </div>

            <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
