"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play, ShieldCheck, HeartHandshake } from "lucide-react";

const featuredTestimonial = {
  name: "Sophia Williams",
  treatment: "Cardiac Recovery Patient",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  review:
    "The doctors and medical staff provided exceptional care throughout my treatment journey. Their compassionate support, advanced technology, and constant encouragement helped me recover faster than I ever imagined.",
};

const testimonials = [
  {
    name: "Michael Carter",
    treatment: "Orthopedic Surgery",
    review:
      "Professional doctors, world-class facilities, and excellent patient care experience.",
  },
  {
    name: "Emma Johnson",
    treatment: "Neurology Treatment",
    review:
      "The hospital environment felt safe, modern, and incredibly supportive during recovery.",
  },
  {
    name: "Daniel Brown",
    treatment: "Emergency Care",
    review:
      "Fast emergency response and compassionate medical staff saved my life.",
  },
];

const stats = [
  "4.9/5 Average Rating",
  "10K+ Happy Patients",
  "98% Recovery Satisfaction",
  "24/7 Patient Support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function PatientTestimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        {/* Floating Particles */}
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
              duration: 5 + Math.random() * 4,
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
        {/* Section Header */}
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
            Patient Experiences
          </motion.div>

          <motion.h2
            custom={2}
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Trusted by Thousands of{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Patients Worldwide
            </span>
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-slate-300"
          >
            Hear inspiring recovery stories and real patient experiences that
            reflect our commitment to compassionate healthcare, advanced
            treatment, and trusted medical excellence.
          </motion.p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Featured Testimonial */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl xl:col-span-2"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Quote Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-8 top-8"
            >
              <Quote className="h-16 w-16 text-cyan-300/20" />
            </motion.div>

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.name}
                  className="h-44 w-44 rounded-3xl object-cover"
                />

                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
                  <ShieldCheck className="h-4 w-4" />
                  Verified
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {featuredTestimonial.name}
                </h3>

                <p className="mt-2 text-cyan-300">
                  {featuredTestimonial.treatment}
                </p>

                <p className="mt-6 leading-relaxed text-slate-300">
                  {featuredTestimonial.review}
                </p>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
          </motion.div>

          {/* Video Testimonial */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative h-full min-h-[420px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                alt="Video Testimonial"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Play Button */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-2xl"
              >
                <Play className="ml-1 h-8 w-8 fill-slate-950" />
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
                  <HeartHandshake className="h-4 w-4" />
                  Recovery Story
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Watch Recovery Story
                </h3>

                <p className="mt-3 text-slate-300">
                  Discover how compassionate care and advanced treatments helped
                  transform a patient’s journey toward recovery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Review Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              custom={index + 3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Stars */}
              <div className="relative z-10 mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <h4 className="relative z-10 text-xl font-semibold text-white">
                {item.name}
              </h4>

              <p className="relative z-10 mt-1 text-cyan-300">
                {item.treatment}
              </p>

              <p className="relative z-10 mt-5 leading-relaxed text-slate-300">
                {item.review}
              </p>

              {/* Shine */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
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
