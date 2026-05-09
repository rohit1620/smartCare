import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  Clock3,
  Brain,
  Stethoscope,
  Activity,
  BadgeCheck,
  Sparkles,
  Users,
  ArrowRight,
  Star,
  HeartHandshake,
  FileHeart,
  Siren,
  Microscope,
  LaptopMinimal,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Highly qualified specialists delivering advanced healthcare with years of medical expertise.",
  },
  {
    icon: Siren,
    title: "24/7 Emergency Support",
    desc: "Rapid emergency response teams available around the clock for critical situations.",
  },
  {
    icon: Microscope,
    title: "Modern Medical Equipment",
    desc: "Advanced healthcare technologies and modern diagnostic systems for accurate treatment.",
  },
  {
    icon: LaptopMinimal,
    title: "Instant Appointment Booking",
    desc: "Fast digital booking system designed for seamless patient scheduling and convenience.",
  },
  {
    icon: Activity,
    title: "Advanced Diagnostics",
    desc: "Comprehensive diagnostic solutions powered by modern healthcare infrastructure.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Patient Care",
    desc: "Patient-focused treatment plans designed to improve comfort, care, and recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Healthcare Standards",
    desc: "Trusted healthcare services compliant with global medical safety protocols.",
  },
  {
    icon: BadgeCheck,
    title: "Affordable Treatment",
    desc: "Premium healthcare services with transparent and patient-friendly pricing structures.",
  },
  {
    icon: FileHeart,
    title: "Digital Health Records",
    desc: "Secure digital records ensuring efficient patient management and accessibility.",
  },
];

const stats = [
  {
    value: "50K+",
    label: "Happy Patients",
  },
  {
    value: "250+",
    label: "Expert Doctors",
  },
  {
    value: "24/7",
    label: "Emergency Support",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-[-150px] left-[-100px] w-[420px] h-[420px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-32 right-20 w-6 h-6 rounded-full bg-cyan-300 blur-sm opacity-70"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-16 w-5 h-5 rounded-full bg-teal-300 blur-sm opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal-100 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>

            <span className="font-semibold text-slate-700">
              Why Patients Trust Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Delivering Advanced
            <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">
              {" "}
              Healthcare{" "}
            </span>
            With Compassion & Innovation
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-600">
            We combine expert medical professionals, advanced healthcare
            technology, and patient-centered care to deliver world-class
            treatment experiences with trust, safety, and innovation.
          </p>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Certified Healthcare",
              "24/7 Live Support",
              "Trusted By Thousands",
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
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="relative overflow-hidden rounded-[30px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-cyan-50/70"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                  <Users className="text-white w-8 h-8" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600 font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid xl:grid-cols-2 gap-16 mt-28 items-start">
          {/* ================= FEATURES GRID ================= */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-teal-50/60 opacity-90"></div>

                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-300/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-[100%] duration-1000"></div>
                </div>

                <div className="relative z-10">
                  {/* Trust Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                      Trusted
                    </div>

                    <ShieldCheck className="w-5 h-5 text-[#14B8A6]" />
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
                    className="mt-8 relative w-20 h-20 rounded-3xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] flex items-center justify-center shadow-[0_15px_40px_rgba(20,184,166,0.35)]"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-cyan-300 blur-xl opacity-40"></div>

                    <item.icon className="relative z-10 text-white w-10 h-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-5 text-slate-600 leading-7">{item.desc}</p>

                  {/* Bottom */}
                  <button className="group/btn mt-8 inline-flex items-center gap-3 text-[#0F766E] font-semibold">
                    Learn More
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-2xl p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-cyan-50/70"></div>

              {/* Glow Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[320px] h-[320px] rounded-full border border-dashed border-cyan-300/40"
                ></motion.div>
              </div>

              {/* Image Placeholder */}
              <div className="relative z-10 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#06B6D4] h-[620px] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="text-center relative z-10 px-10">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="mx-auto w-32 h-32 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                  >
                    <HeartPulse className="text-white w-16 h-16" />
                  </motion.div>

                  <h3 className="mt-10 text-4xl font-black text-white">
                    Premium Healthcare Experience
                  </h3>

                  <p className="mt-6 text-lg text-white/80 leading-8">
                    Delivering advanced healthcare services with trusted medical
                    experts and modern treatment technologies.
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-[-30px] rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 px-6 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center">
                    <Star className="text-white w-7 h-7 fill-white" />

                    <div className="absolute inset-0 rounded-2xl bg-cyan-300 blur-xl opacity-40"></div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-slate-900">98%</h4>

                    <p className="text-slate-600 text-sm">
                      Patient Satisfaction
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-16 right-[-30px] rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/40 px-6 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                    <Clock3 className="text-white w-7 h-7" />

                    <div className="absolute inset-0 rounded-2xl bg-red-300 blur-xl opacity-40"></div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-slate-900">24/7</h4>

                    <p className="text-slate-600 text-sm">
                      Emergency Available
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Support Badge */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute bottom-8 left-10 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>

                  <div className="relative w-4 h-4 rounded-full bg-green-500"></div>
                </div>

                <span className="font-semibold text-slate-700">
                  Live Online Support
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= CTA SECTION ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="relative overflow-hidden mt-28 rounded-[40px] border border-white/40 bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] p-10 md:p-14 shadow-[0_25px_80px_rgba(20,184,166,0.35)]"
        >
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Glow */}
          <div className="absolute -top-20 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
                <Sparkles className="text-white w-5 h-5" />

                <span className="text-white font-semibold">
                  Most Trusted Healthcare Partner
                </span>
              </div>

              <h3 className="mt-8 text-4xl md:text-5xl font-black text-white leading-tight">
                Ready To Experience Better Healthcare?
              </h3>

              <p className="mt-6 text-lg text-white/80 leading-8">
                Connect with our medical specialists and experience premium
                healthcare services designed for trust, safety, and patient
                satisfaction.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full xl:w-auto">
              <button className="group h-16 px-8 rounded-2xl bg-white text-[#0F766E] font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              <button className="group h-16 px-8 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white font-bold text-lg hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  Emergency Help
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
