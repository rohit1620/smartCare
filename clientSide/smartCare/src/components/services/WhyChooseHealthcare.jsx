import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Activity,
  Ambulance,
  Microscope,
  Syringe,
  ScanHeart,
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description:
      "Our highly experienced medical specialists provide compassionate and patient-focused healthcare services with exceptional expertise.",
    badge: "50+ Specialists",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description:
      "AI-powered diagnostics, cutting-edge medical equipment, and modern healthcare innovations ensure precise treatments.",
    badge: "Smart Healthcare",
  },
  {
    icon: Ambulance,
    title: "24/7 Emergency Care",
    description:
      "Rapid emergency response teams and ambulance support available round the clock for critical healthcare needs.",
    badge: "Always Active",
  },
  {
    icon: HeartPulse,
    title: "Personalized Care",
    description:
      "Customized treatment plans and compassionate healthcare experiences designed around every patient’s needs.",
    badge: "Patient First",
  },
  {
    icon: Activity,
    title: "Fast Diagnosis",
    description:
      "Modern laboratories and advanced diagnostic systems deliver rapid and highly accurate medical reports.",
    badge: "Quick Results",
  },
  {
    icon: ShieldCheck,
    title: "Certified Standards",
    description:
      "International healthcare standards, trusted safety protocols, and certified medical excellence across departments.",
    badge: "Certified Care",
  },
];

const stats = [
  { number: "100K+", label: "Happy Patients" },
  { number: "50+", label: "Expert Specialists" },
  { number: "15+", label: "Years Excellence" },
  { number: "24/7", label: "Emergency Support" },
];

const floatingIcons = [
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Activity,
  Ambulance,
  Microscope,
  Syringe,
  ScanHeart,
];

const WhyChooseHealthcare = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300"
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
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute hidden lg:flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl
          ${i % 2 === 0 ? "top-[15%] left-[5%]" : "bottom-[10%] right-[6%]"}
          h-14 w-14`}
        >
          <Icon className="h-6 w-6 text-cyan-300" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-sm font-medium tracking-wide text-cyan-100">
                Trusted Healthcare Excellence
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Healthcare Services
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Experience world-class healthcare powered by expert specialists,
              advanced medical technologies, emergency support, and
              compassionate patient-first treatment experiences designed for
              every stage of your wellness journey.
            </p>

            {/* Counters */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center shadow-2xl backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-bold text-cyan-300">
                    {item.number}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Healthcare Consultation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
              </motion.button>
            </div>

            {/* Floating Trust Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 left-0 hidden w-64 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-cyan-400/20 p-3">
                  <BadgeCheck className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Trusted By 100K+ Patients
                  </h4>
                  <p className="text-sm text-slate-300">
                    98% Patient Satisfaction
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl"
                  >
                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-[28px] border border-cyan-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* Shine */}
                    <div className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[120%]" />

                    {/* Icon */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-4"
                    >
                      <Icon className="h-8 w-8 text-cyan-300" />
                    </motion.div>

                    {/* Badge */}
                    <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      {feature.badge}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </p>

                    {/* CTA */}
                    <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating Support Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-12 right-0 hidden w-72 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-green-400/20 p-3">
                  <HeartPulse className="h-6 w-6 text-green-300" />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Online Consultation
                  </h4>
                  <p className="text-sm text-slate-300">
                    Specialist Available Now
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
                    <span className="text-xs text-green-300">
                      Active Support
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-5 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            "Advanced Healthcare Infrastructure",
            "Certified Medical Excellence",
            "24/7 Specialist Support",
            "Trusted Global Healthcare Standards",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4"
            >
              <div className="rounded-xl bg-cyan-400/20 p-2">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
              </div>

              <p className="text-sm font-medium text-slate-200">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseHealthcare;
