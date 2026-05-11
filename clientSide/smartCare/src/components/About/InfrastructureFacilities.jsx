"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  FlaskConical,
  ShieldPlus,
  Ambulance,
  BedDouble,
  Cpu,
  Activity,
} from "lucide-react";

const facilities = [
  {
    title: "ICU & Critical Care",
    description:
      "24/7 intensive care support with advanced patient monitoring systems and specialized critical care teams.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Advanced Laboratories",
    description:
      "Modern diagnostic laboratories equipped with precise testing technology for accurate medical analysis.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Operation Theaters",
    description:
      "State-of-the-art modular operation theaters with advanced surgical and sterilization equipment.",
    icon: ShieldPlus,
    image:
      "https://images.stockcake.com/public/d/9/e/d9e0f1cb-6bb7-406a-aa30-c72cf629d5ac_large/hospital-emergency-room-stockcake.jpg",
  },
  {
    title: "Emergency & Trauma Ward",
    description:
      "Rapid emergency response systems designed for critical trauma care and life-saving treatment.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Ambulance Services",
    description:
      "Fast emergency ambulance services with trained paramedics and advanced medical assistance.",
    icon: Ambulance,
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Patient Rooms",
    description:
      "Luxury patient rooms focused on comfort, safety, privacy, and premium healing experiences.",
    icon: BedDouble,
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Advanced Medical Equipment",
    description:
      "AI-powered diagnostics and next-generation healthcare technology for precise medical treatment.",
    icon: Cpu,
    image:
      "https://feeds.abplive.com/onecms/images/uploaded-images/2025/02/23/63b1acdffb91087b65009327987410e01740320533185906_original.png?impolicy=abp_cdn&imwidth=320",
  },
];

const stats = [
  "24/7 Emergency Support",
  "100+ Advanced Equipment",
  "50+ ICU Beds",
  "10+ Modern Operation Theaters",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

export default function InfrastructureFacilities() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        {/* Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/10"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -100],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            custom={1}
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
          >
            World-Class Infrastructure
          </motion.div>

          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Advanced Facilities Designed for{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Exceptional Patient Care
            </span>
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            Our hospital infrastructure combines advanced medical technology,
            patient-centered environments, and modern healthcare facilities to
            deliver world-class treatment experiences.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl ${
                  item.featured ? "md:col-span-2 xl:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-500/0 transition-all duration-500 group-hover:bg-cyan-500/10" />

                  {/* Shine Effect */}
                  <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-4"
                  >
                    <Icon className="h-8 w-8 text-cyan-300" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-6 rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-6 py-5 text-center"
            >
              <p className="font-semibold text-white">{stat}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
