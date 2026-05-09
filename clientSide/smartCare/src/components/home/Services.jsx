import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Bone,
  Smile,
  Baby,
  Ambulance,
  ShieldPlus,
  ScanLine,
  Activity,
  Stethoscope,
  Eye,
  Sparkles,
  ArrowRight,
  Clock3,
  Users,
  Star,
  BadgeCheck,
} from "lucide-react";

const departments = [
  {
    icon: HeartPulse,
    title: "Cardiology",
    doctors: "24 Doctors",
    desc: "Advanced heart care with modern diagnostics and treatment facilities.",
  },
  {
    icon: Brain,
    title: "Neurology",
    doctors: "18 Doctors",
    desc: "Specialized neurological treatment with cutting-edge medical care.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    doctors: "15 Doctors",
    desc: "Comprehensive bone and joint treatment for all age groups.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    doctors: "12 Doctors",
    desc: "Premium cosmetic and general dental healthcare solutions.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    doctors: "16 Doctors",
    desc: "Compassionate healthcare services designed for children and infants.",
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    doctors: "24/7 Team",
    desc: "Instant emergency response with rapid medical assistance support.",
  },
  {
    icon: ShieldPlus,
    title: "ICU",
    doctors: "10 Specialists",
    desc: "Critical care units equipped with advanced medical monitoring systems.",
  },
  {
    icon: ScanLine,
    title: "Radiology",
    doctors: "14 Doctors",
    desc: "Accurate imaging and diagnostics using modern scanning technologies.",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    doctors: "11 Experts",
    desc: "Recovery-focused therapy programs with modern rehabilitation care.",
  },
  {
    icon: Stethoscope,
    title: "General Surgery",
    doctors: "22 Surgeons",
    desc: "Safe and effective surgical procedures with expert medical teams.",
  },
  {
    icon: Eye,
    title: "Eye Care",
    doctors: "9 Doctors",
    desc: "Advanced ophthalmology treatments and vision correction services.",
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    doctors: "13 Doctors",
    desc: "Modern skin care and cosmetic dermatology with expert specialists.",
  },
];

export default function DepartmentsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-28 bg-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-[-120px] left-[-100px] w-[420px] h-[420px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 right-16 w-5 h-5 rounded-full bg-cyan-300 blur-sm opacity-70"
      />

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-24 left-16 w-5 h-5 rounded-full bg-teal-300 blur-sm opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP CONTENT ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal-100 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center">
              <BadgeCheck className="text-white w-5 h-5" />
            </div>

            <span className="font-semibold text-slate-700">
              Most Trusted Healthcare Departments
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Comprehensive
            <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">
              {" "}
              Healthcare Services{" "}
            </span>
            For Every Patient
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-600">
            Explore our specialized medical departments equipped with advanced
            healthcare technology, experienced doctors, and patient-focused
            treatment solutions for world-class care.
          </p>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "24/7 Emergency Support",
              "250+ Specialists",
              "Advanced Diagnostics",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 border border-slate-200 backdrop-blur-xl shadow-lg"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= STATS ================= */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: Users,
              value: "250+",
              title: "Specialists",
            },
            {
              icon: HeartPulse,
              value: "50K+",
              title: "Patients",
            },
            {
              icon: Clock3,
              value: "24/7",
              title: "Emergency",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="relative overflow-hidden rounded-[30px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-cyan-50/70"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                  <item.icon className="text-white w-8 h-8" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600 font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">
          {departments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-teal-50/60 opacity-90"></div>

              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-300/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-[34px] border border-transparent group-hover:border-cyan-300 transition-all duration-500"></div>

              {/* Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-[100%] duration-1000"></div>
              </div>

              <div className="relative z-10">
                {/* Availability Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    Available
                  </div>

                  <div className="text-sm text-slate-500 font-medium">
                    {item.doctors}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="mt-8 w-20 h-20 rounded-3xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] flex items-center justify-center shadow-[0_15px_40px_rgba(20,184,166,0.35)]"
                >
                  <item.icon className="text-white w-10 h-10" />
                </motion.div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-black text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-slate-600 leading-7">{item.desc}</p>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">
                  <button className="group/btn inline-flex items-center gap-3 text-[#0F766E] font-semibold">
                    Learn More
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2 text-amber-500">
                    <Star className="w-5 h-5 fill-amber-500" />
                    <span className="font-semibold text-slate-700">4.9</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden mt-28 rounded-[40px] border border-white/40 bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] p-10 md:p-14 shadow-[0_25px_80px_rgba(20,184,166,0.35)]"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Floating Glow */}
          <div className="absolute -top-20 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse"></div>

                <span className="text-white font-semibold">
                  Emergency Medical Support
                </span>
              </div>

              <h3 className="mt-8 text-4xl md:text-5xl font-black text-white leading-tight">
                Need Immediate Medical Assistance?
              </h3>

              <p className="mt-6 text-lg text-white/80 leading-8">
                Our emergency medical teams and specialists are available 24/7
                to provide instant healthcare support and critical treatment.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full xl:w-auto">
              <button className="group h-16 px-8 rounded-2xl bg-white text-[#0F766E] font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Emergency Help
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <button className="group h-16 px-8 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white font-bold text-lg hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
