import React from "react";
import { motion } from "framer-motion";
import {
  Ambulance,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  PhoneCall,
  CalendarDays,
  Activity,
  Syringe,
  ArrowRight,
  Video,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const floatingIcons = [
  Ambulance,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  PhoneCall,
  CalendarDays,
  Activity,
  Syringe,
];

const stats = [
  "24/7 Emergency Support",
  "50K+ Successful Treatments",
  "Instant Consultation",
  "98% Patient Satisfaction",
];

export default function EmergencyCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#061326] py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-100px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-100px] h-[28rem] w-[28rem] rounded-full bg-red-500/20 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
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
            className="absolute h-2 w-2 rounded-full bg-cyan-300/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
          }}
          className={`absolute hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:flex ${
            index % 2 === 0 ? "left-10 top-20" : "right-10 bottom-20"
          }`}
        >
          <Icon className="h-6 w-6 text-cyan-300" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-300 backdrop-blur-xl">
              <Activity className="h-4 w-4" />
              24/7 Emergency Medical Support
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              Need Immediate <br />
              Medical Assistance?
            </h2>

            {/* Tagline */}
            <p className="mt-6 text-xl font-medium leading-8 text-cyan-200">
              Get instant access to emergency healthcare services, expert
              doctors, ambulance support, and online consultations anytime you
              need.
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our dedicated healthcare team is available 24/7 to provide rapid
              emergency response, seamless appointment booking, online medical
              consultations, and advanced patient-focused care whenever you need
              urgent medical attention.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 text-lg font-semibold shadow-[0_0_40px_rgba(6,182,212,0.45)] transition-all duration-300"
              >
                Book Appointment
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group inline-flex items-center gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-7 py-4 text-lg font-semibold text-red-300 backdrop-blur-xl transition-all duration-300 hover:bg-red-500 hover:text-white"
              >
                <PhoneCall className="h-5 w-5" />
                Call Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:bg-cyan-500/20"
              >
                <Video className="h-5 w-5 text-cyan-300" />
                Online Consultation
              </motion.button>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 backdrop-blur-xl">
              <ShieldCheck className="h-6 w-6 text-cyan-300" />
              <div>
                <p className="font-semibold">Trusted By 100K+ Patients</p>
                <p className="text-sm text-slate-300">
                  Professional Healthcare Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Emergency Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10" />

              {/* Pulse */}
              <div className="absolute right-8 top-8">
                <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-5 w-5 rounded-full bg-red-500"></span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700">
                  <Ambulance className="h-8 w-8 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">24/7 Emergency Care</h3>
                  <p className="mt-1 text-slate-300">
                    Rapid Ambulance Response
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Instant Doctor Assistance",
                  "Emergency Ambulance Available",
                  "Critical Care Specialists",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Floating Appointment Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-cyan-200">Online Consultation</p>
                    <h4 className="mt-1 text-lg font-bold">
                      Dr. Sarah Johnson
                    </h4>
                  </div>

                  <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                    Available
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 text-slate-300">
                  <Clock3 className="h-5 w-5 text-cyan-300" />
                  Available Within Minutes
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg">
                <HeartPulse className="h-7 w-7 text-white" />
              </div>

              <div>
                <p className="text-lg font-bold">{item}</p>
                <p className="text-sm text-slate-400">
                  Trusted Healthcare Services
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
