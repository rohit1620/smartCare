import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Globe,
  HeartPulse,
  Building2,
  Sparkles,
  CheckCircle2,
  Activity,
  Star,
  Lock,
} from "lucide-react";

const partners = [
  "MEDICARE+",
  "HEALTH PRIME",
  "WHO CARE",
  "LIFELINE",
  "MEDISTAR",
  "CAREPOINT",
  "GLOBAL HEALTH",
  "MEDITECH",
];

const certifications = [
  {
    icon: ShieldCheck,
    title: "NABH Certified",
    desc: "National accreditation for premium healthcare quality and patient safety.",
  },
  {
    icon: Globe,
    title: "WHO Guidelines",
    desc: "International healthcare standards and modern medical protocols.",
  },
  {
    icon: BadgeCheck,
    title: "ISO Certified",
    desc: "Certified hospital systems ensuring operational excellence.",
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    desc: "Advanced patient data security and privacy protection standards.",
  },
  {
    icon: HeartPulse,
    title: "24/7 Emergency",
    desc: "Round-the-clock emergency healthcare and ambulance support.",
  },
];

export default function TrustedPartnersSection() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-28 bg-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-[-150px] left-[-100px] w-[420px] h-[420px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[420px] h-[420px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 right-20 w-6 h-6 bg-cyan-300 rounded-full blur-sm opacity-70"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-20 w-5 h-5 bg-teal-300 rounded-full blur-sm opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal-100 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>

            <span className="font-semibold text-slate-700">
              Trusted Healthcare Network
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Recognized By
            <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">
              {" "}
              Leading Healthcare{" "}
            </span>
            Organizations
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-600">
            Our hospital is trusted by top healthcare organizations,
            international medical standards, and certified healthcare networks
            to deliver world-class treatment, safety, and patient care.
          </p>

          {/* Counter */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>

                <div className="relative w-4 h-4 rounded-full bg-green-500"></div>
              </div>

              <span className="text-slate-700 font-semibold">
                Trusted By 50+ Organizations
              </span>
            </div>
          </div>
        </motion.div>

        {/* ================= PARTNERS MARQUEE ================= */}
        <div className="relative mt-20 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.06,
                  y: -6,
                }}
                className="group relative overflow-hidden min-w-[240px] rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl px-8 py-7 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-70"></div>

                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-300 transition-all duration-500"></div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                    <Building2 className="text-white w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-wide">
                      {partner}
                    </h3>

                    <p className="text-slate-500 text-sm mt-1">
                      Healthcare Partner
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24">
          {certifications.map((item, index) => (
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-cyan-50/70 opacity-80"></div>

              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-300/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Verification Badge */}
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>

                  <div className="relative w-12 h-12 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] flex items-center justify-center shadow-[0_15px_40px_rgba(20,184,166,0.35)]"
                >
                  <item.icon className="text-white w-10 h-10" />
                </motion.div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-black text-slate-900">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="mt-4 text-slate-600 leading-7">{item.desc}</p>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#14B8A6] font-semibold">
                    <ShieldCheck className="w-5 h-5" />
                    Verified
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <Sparkles className="w-5 h-5" />
                    Trusted
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= TRUST BADGES ================= */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          {[
            {
              icon: ShieldCheck,
              title: "Secure Medical Standards",
              text: "Advanced healthcare compliance and certified operational systems.",
            },
            {
              icon: Activity,
              title: "Live Verification System",
              text: "Real-time verified medical procedures and patient safety checks.",
            },
            {
              icon: HeartPulse,
              title: "Enterprise Healthcare",
              text: "Premium healthcare infrastructure trusted by thousands of patients.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-teal-50/60"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
                  <item.icon className="text-white w-8 h-8" />
                </div>

                <h4 className="mt-6 text-2xl font-black text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 text-slate-600 leading-7">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
