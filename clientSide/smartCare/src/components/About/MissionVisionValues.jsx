"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const cards = [
  {
    id: 1,
    title: "Our Mission",
    icon: HeartPulse,
    description:
      "We are dedicated to delivering compassionate healthcare services through advanced medical technology, patient-focused treatments, safety-driven practices, and exceptional clinical excellence for every patient.",
  },
  {
    id: 2,
    title: "Our Vision",
    icon: Eye,
    description:
      "Our vision is to become a trusted leader in modern healthcare by combining innovation, medical excellence, advanced technology, and patient-centered care to improve lives globally.",
  },
  {
    id: 3,
    title: "Our Core Values",
    icon: ShieldCheck,
    values: ["Compassion", "Innovation", "Integrity", "Care", "Trust"],
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            custom={1}
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
          >
            Our Foundation
          </motion.span>

          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Driven by Compassion,
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Guided by Excellence
            </span>
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            Our mission, vision, and values reflect our unwavering commitment to
            compassionate care, innovation, medical excellence, and building
            lifelong trust with every patient we serve.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />
                </div>

                {/* Shine Effect */}
                <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="relative z-10 mb-6 inline-flex rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-4"
                >
                  <Icon className="h-10 w-10 text-cyan-300" />
                </motion.div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                {/* Description */}
                {card.description && (
                  <p className="relative z-10 mt-5 leading-relaxed text-slate-300">
                    {card.description}
                  </p>
                )}

                {/* Values List */}
                {card.values && (
                  <div className="relative z-10 mt-6 space-y-4">
                    {card.values.map((value, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                        <span className="font-medium text-slate-200">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Decorative Border Glow */}
                <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
