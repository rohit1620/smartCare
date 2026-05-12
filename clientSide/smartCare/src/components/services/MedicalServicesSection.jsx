import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Bone,
  Activity,
  Baby,
  Smile,
  ScanLine,
  Ambulance,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Syringe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Cardiology",
    doctors: "12+ Specialist Doctors",
    icon: HeartPulse,
    desc: "Advanced cardiac care with modern diagnostics, preventive treatments, and expert heart specialists.",
    popular: true,
  },
  {
    title: "Neurology",
    doctors: "10+ Specialist Doctors",
    icon: Brain,
    desc: "Comprehensive neurological treatments with precision diagnostics and expert neuro care.",
  },
  {
    title: "Orthopedics",
    doctors: "15+ Specialist Doctors",
    icon: Bone,
    desc: "Advanced bone, joint, and spine treatments designed for faster recovery and mobility.",
  },
  {
    title: "ICU & Critical Care",
    doctors: "24/7 Emergency Experts",
    icon: Activity,
    desc: "Modern intensive care units with continuous monitoring and emergency medical support.",
  },
  {
    title: "Pediatrics",
    doctors: "8+ Child Specialists",
    icon: Baby,
    desc: "Compassionate child healthcare services with modern pediatric treatments and wellness care.",
  },
  {
    title: "Dental Care",
    doctors: "6+ Dental Experts",
    icon: Smile,
    desc: "Premium dental treatments, cosmetic dentistry, and complete oral healthcare solutions.",
  },
  {
    title: "Radiology",
    doctors: "AI-Powered Diagnostics",
    icon: ScanLine,
    desc: "Modern imaging and diagnostic technology delivering accurate and fast medical results.",
  },
  {
    title: "Emergency Care",
    doctors: "24/7 Emergency Team",
    icon: Ambulance,
    desc: "Rapid emergency response with critical trauma support and advanced medical assistance.",
  },
];

const floatingIcons = [
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Activity,
  Ambulance,
  Microscope,
  Syringe,
  ScanLine,
];

export default function MedicalServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#061326] py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((Icon, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
          className={`absolute hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:flex ${
            i % 2 === 0 ? "left-10 top-20" : "right-10 bottom-20"
          }`}
        >
          <Icon className="h-6 w-6 text-cyan-300" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4" />
            Comprehensive Healthcare Departments
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Advanced Medical Services Designed For Every Patient
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore specialized healthcare departments powered by expert
            doctors, cutting-edge medical technology, emergency support, and
            compassionate patient-first care designed for complete wellness and
            faster recovery.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-[0_10px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 ${
                  service.popular
                    ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-white/5"
                    : ""
                }`}
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Shine */}
                <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[120%]" />

                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg"
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-sm text-cyan-300">
                    <CheckCircle2 className="h-4 w-4" />
                    {service.doctors}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {service.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">
                  <button className="group/btn inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-white">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Available
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            "100+ Medical Services",
            "50+ Specialist Doctors",
            "24/7 Emergency Care",
            "98% Patient Satisfaction",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>

              <div>
                <p className="text-lg font-bold">{item}</p>
                <p className="text-sm text-slate-400">
                  Trusted Healthcare Excellence
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
