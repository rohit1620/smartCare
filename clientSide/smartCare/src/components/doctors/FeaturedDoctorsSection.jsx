"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Activity,
  BadgeCheck,
  Clock3,
  Phone,
  MessageCircle,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Senior Cardiologist",
    experience: "15+ Years Experience",
    rating: "4.9 Rating",
    award: "Best Medical Excellence Award 2024",
    fee: "$120 Consultation",
    status: "Available Now",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    description:
      "Specialized in advanced cardiac care, preventive cardiology, and patient-centered treatments with exceptional recovery success rates.",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    role: "Neurosurgeon",
    experience: "12+ Years Experience",
    rating: "4.8 Rating",
    award: "Global Surgical Innovation Award",
    fee: "$140 Consultation",
    status: "Available Now",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Experienced neurosurgeon delivering advanced brain and spine treatments using modern minimally invasive techniques.",
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Pediatric Specialist",
    experience: "10+ Years Experience",
    rating: "4.9 Rating",
    award: "Trusted Child Care Excellence Award",
    fee: "$90 Consultation",
    status: "Available Now",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
    description:
      "Dedicated to compassionate child healthcare with expertise in preventive pediatrics and family-centered treatment.",
  },
  {
    id: 4,
    name: "Dr. David Miller",
    role: "Orthopedic Surgeon",
    experience: "18+ Years Experience",
    rating: "4.9 Rating",
    award: "Advanced Orthopedic Excellence Award",
    fee: "$150 Consultation",
    status: "Available Now",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Expert in orthopedic surgery, sports injury recovery, and advanced bone and joint treatments for faster rehabilitation.",
  },
];

const stats = [
  "100+ Expert Specialists",
  "50K+ Successful Treatments",
  "24/7 Online Consultation",
  "98% Patient Satisfaction",
];

const floatingIcons = [
  {
    icon: Stethoscope,
    className: "top-[12%] left-[5%] hidden xl:flex",
  },
  {
    icon: HeartPulse,
    className: "top-[20%] right-[8%] hidden xl:flex",
  },
  {
    icon: ShieldCheck,
    className: "bottom-[18%] left-[7%] hidden xl:flex",
  },
  {
    icon: Activity,
    className: "bottom-[15%] right-[8%] hidden xl:flex",
  },
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

export default function FeaturedDoctorsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Particles */}
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
              duration: 4 + Math.random() * 4,
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
            Medical Specialists
          </motion.div>

          {/* Heading */}
          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Meet Our Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Healthcare Experts
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            Our experienced specialists combine advanced medical expertise,
            compassionate care, and innovative treatment approaches to deliver
            exceptional healthcare experiences and patient outcomes.
          </motion.p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              custom={index + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl ${
                doctor.featured ? "xl:-translate-y-6 xl:border-cyan-400/30" : ""
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <div className="relative h-[340px] overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Featured Badge */}
                {doctor.featured && (
                  <div className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-xl">
                    Top Specialist
                  </div>
                )}

                {/* Verified Badge */}
                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl">
                  <BadgeCheck className="h-4 w-4 text-cyan-300" />
                  Verified
                </div>

                {/* Online Status */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/15 px-4 py-2 text-xs font-medium text-emerald-200 backdrop-blur-xl">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
                  </span>

                  {doctor.status}
                </div>

                {/* Hover Socials */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-20 items-center justify-center gap-4 pb-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-cyan-400/20">
                    <Phone className="h-5 w-5" />
                  </button>

                  <button className="rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-cyan-400/20">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-7">
                {/* Name */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {doctor.name}
                    </h3>

                    <p className="mt-2 text-cyan-300">{doctor.role}</p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-200">
                    {doctor.fee}
                  </div>
                </div>

                {/* Ratings */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <span className="text-sm text-slate-300">
                    {doctor.rating}
                  </span>
                </div>

                {/* Experience */}
                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Clock3 className="h-5 w-5 text-cyan-300" />

                  <span className="text-sm text-slate-300">
                    {doctor.experience}
                  </span>
                </div>

                {/* Award */}
                <div className="mt-4 flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-cyan-300" />

                  <p className="text-sm leading-relaxed text-slate-300">
                    {doctor.award}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  {doctor.description}
                </p>

                {/* Buttons */}
                <div className="mt-7 flex gap-3">
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="group/btn flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-cyan-500/30"
                  >
                    Book Appointment
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </motion.button>

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
                  >
                    View Profile
                  </motion.button>
                </div>
              </div>

              {/* Shine */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.03,
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
