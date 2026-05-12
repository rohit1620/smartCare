import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  PhoneCall,
  Ambulance,
  Activity,
  MapPin,
  Mail,
  Clock3,
  Globe,
  MessageCircle,
  Phone,
  ArrowRight,
  Send,
  CheckCircle2,
} from "lucide-react";

const ContactInfo = [
  {
    icon: MapPin,
    title: "Hospital Address",
    value: "123 Healthcare Avenue, Medical City, NY 10001",
  },
  {
    icon: PhoneCall,
    title: "Phone Number",
    value: "+1 (800) 123-4567",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "support@healthcare.com",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon – Sun : Open 24 Hours",
  },
];

const supportCards = [
  "Instant Response",
  "Online Consultation",
  "Secure Healthcare Support",
];

const trustStrip = [
  "Secure Healthcare Communication",
  "Certified Medical Support",
  "Emergency Response Team",
  "Online Consultation Available",
];

const floatingIcons = [
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  PhoneCall,
  Ambulance,
  Activity,
];

const ContactSection = () => {
  const [focused, setFocused] = useState("");

  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(40)].map((_, i) => (
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
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute hidden lg:flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl
          ${i % 2 === 0 ? "left-[5%] top-[20%]" : "right-[5%] bottom-[15%]"}
          h-14 w-14`}
        >
          <Icon className="h-6 w-6 text-cyan-300" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
            <HeartPulse className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-medium text-cyan-100">
              24/7 Patient Assistance
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Get In Touch With Our{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Healthcare Team
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Connect with our compassionate healthcare professionals for medical
            guidance, emergency support, appointment assistance, and trusted
            patient-first healthcare services anytime you need.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
              {/* Shine Effect */}
              <div className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-white/10 blur-2xl transition-all duration-700 hover:left-[120%]" />

              <div className="space-y-6">
                {ContactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/10"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-3">
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Emergency Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-cyan-500/10 p-6 backdrop-blur-xl"
                >
                  <div className="absolute right-5 top-5 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-red-500/20 p-4">
                      <Ambulance className="h-7 w-7 text-red-300" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        Emergency Assistance
                      </h3>
                      <p className="mt-1 text-sm text-slate-300">
                        Available 24/7 With Rapid Ambulance Support
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-cyan-500 px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                    Call Emergency Support
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>

                {/* Support Cards */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {supportCards.map((card, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"
                    >
                      <ShieldCheck className="mx-auto mb-3 h-6 w-6 text-cyan-300" />
                      <p className="text-sm text-slate-200">{card}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 pt-4">
                  {[Globe, MessageCircle, Phone, Mail].map((Icon, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.12, y: -4 }}
                      href="/"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-[32px] border border-cyan-400/10" />

              {/* Success Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                <CheckCircle2 className="h-4 w-4" />
                We Usually Respond Within Minutes
              </div>

              <form className="space-y-6">
                {/* Input Group */}
                {[
                  {
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email address",
                  },
                  {
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "Enter your phone number",
                  },
                  {
                    label: "Subject",
                    type: "text",
                    placeholder: "Enter message subject",
                  },
                ].map((field, i) => (
                  <div key={i} className="relative">
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.label)}
                      onBlur={() => setFocused("")}
                      className={`w-full rounded-2xl border bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500
                      ${
                        focused === field.label
                          ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                          : "border-white/10"
                      }`}
                    />
                  </div>
                ))}

                {/* Department */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Department
                  </label>

                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                    <option className="bg-slate-900">Cardiology</option>
                    <option className="bg-slate-900">Neurology</option>
                    <option className="bg-slate-900">Orthopedics</option>
                    <option className="bg-slate-900">Pediatrics</option>
                    <option className="bg-slate-900">Emergency Care</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-500 group-hover:translate-y-0" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-5 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl md:grid-cols-2 xl:grid-cols-4"
        >
          {trustStrip.map((item, index) => (
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

export default ContactSection;
