import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Clock3,
  Video,
  CalendarCheck,
  Phone,
  //   Facebook,
  Twitter,
  //   Linkedin,
  Stethoscope,
  BadgeCheck,
  Users,
  Sparkles,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ Years",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Neurologist",
    experience: "12+ Years",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    name: "Dr. Emily Clark",
    specialty: "Orthopedic Specialist",
    experience: "10+ Years",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
    available: false,
  },
  {
    name: "Dr. Daniel Smith",
    specialty: "Pediatrician",
    experience: "9+ Years",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    name: "Dr. Olivia Martin",
    specialty: "Dentist",
    experience: "11+ Years",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop",
    available: true,
  },
  {
    name: "Dr. James Wilson",
    specialty: "Dermatologist",
    experience: "14+ Years",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
    available: false,
  },
];

const stats = [
  {
    value: "250+",
    label: "Specialists",
  },
  {
    value: "50K+",
    label: "Patients Treated",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Patient Satisfaction",
  },
];

export default function MeetOurDoctors() {
  return (
    <section className="relative overflow-hidden py-28 bg-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-teal-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      {/* Floating Glow Particles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 left-16 w-5 h-5 bg-cyan-300 rounded-full blur-sm opacity-70"
      />

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-24 right-20 w-6 h-6 bg-teal-300 rounded-full blur-sm opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-teal-100 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F766E] to-[#06B6D4] flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>

            <span className="font-semibold text-slate-700">
              Meet Our Specialists
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Trusted Medical Experts
            <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#06B6D4] bg-clip-text text-transparent">
              {" "}
              Dedicated{" "}
            </span>
            To Your Care
          </h2>

          {/* Paragraph */}
          <p className="mt-8 text-lg leading-8 text-slate-600">
            Our experienced healthcare specialists combine advanced medical
            expertise, compassionate care, and innovative treatment methods to
            provide exceptional patient outcomes.
          </p>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Top Healthcare Specialists",
              "24/7 Online Consultation",
              "Verified Medical Experts",
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
              animate={{ y: [0, -10, 0] }}
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

        {/* ================= MAIN AREA ================= */}
        <div className="grid xl:grid-cols-[1.1fr_0.9fr] gap-12 mt-28">
          {/* ================= DOCTOR CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-teal-50/60 opacity-90"></div>

                {/* Glow */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-300/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 group-hover:left-[100%] duration-1000"></div>
                </div>

                {/* Doctor Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Availability Badge */}
                  <div className="absolute top-5 left-5">
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 text-sm font-semibold ${
                        doctor.available
                          ? "bg-green-500/20 text-white"
                          : "bg-red-500/20 text-white"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          doctor.available
                            ? "bg-green-400 animate-pulse"
                            : "bg-red-400"
                        }`}
                      ></div>

                      {doctor.available ? "Available" : "Busy"}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-5 right-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/20">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />

                    <span className="text-white font-semibold">
                      {doctor.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">
                        {doctor.name}
                      </h3>

                      <p className="mt-2 text-[#0F766E] font-semibold">
                        {doctor.specialty}
                      </p>
                    </div>

                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] shadow-lg">
                      <Stethoscope className="text-white w-7 h-7" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 text-slate-500">
                    <Clock3 className="w-5 h-5" />

                    <span>{doctor.experience} Experience</span>
                  </div>

                  <p className="mt-5 text-slate-600 leading-7">
                    Dedicated healthcare professional providing trusted medical
                    treatment with advanced patient-focused care solutions.
                  </p>

                  {/* Social */}
                  <div className="mt-6 flex items-center gap-3">
                    {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-gradient-to-r hover:from-[#0F766E] hover:to-[#06B6D4] text-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="group flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#06B6D4] text-white font-semibold shadow-[0_10px_30px_rgba(20,184,166,0.35)] hover:scale-[1.03] transition-all duration-300">
                      <span className="flex items-center justify-center gap-3">
                        Book Appointment
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>

                    <button className="flex-1 h-14 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 font-semibold hover:border-[#14B8A6] hover:text-[#0F766E] transition-all duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= FEATURED DOCTOR ================= */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/70 backdrop-blur-2xl p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-cyan-50/70"></div>

              {/* Rotating Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[350px] h-[350px] rounded-full border border-dashed border-cyan-300/40"
                ></motion.div>
              </div>

              {/* Featured Image */}
              <div className="relative z-10 overflow-hidden rounded-[32px] h-[700px]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop"
                  alt="Featured Doctor"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Top Rated Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 left-8 flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20"
                >
                  <BadgeCheck className="text-cyan-300 w-6 h-6" />

                  <div>
                    <h4 className="text-white font-bold">
                      Top Rated Specialist
                    </h4>

                    <p className="text-white/70 text-sm">
                      Verified Healthcare Expert
                    </p>
                  </div>
                </motion.div>

                {/* Online Consultation */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-32 right-8 flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>

                    <div className="relative w-4 h-4 rounded-full bg-green-400"></div>
                  </div>

                  <div>
                    <h4 className="text-white font-bold">
                      Online Consultation
                    </h4>

                    <p className="text-white/70 text-sm">Available Right Now</p>
                  </div>
                </motion.div>

                {/* Patient Review */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-8 left-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 p-5 max-w-[260px]"
                >
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-white/90 leading-7">
                    “Exceptional healthcare experience with compassionate
                    patient-focused treatment.”
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
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
                  Need Expert Medical Consultation?
                </span>
              </div>

              <h3 className="mt-8 text-4xl md:text-5xl font-black text-white leading-tight">
                Connect With Our Trusted Medical Specialists
              </h3>

              <p className="mt-6 text-lg text-white/80 leading-8">
                Book appointments with experienced doctors and receive advanced
                healthcare consultation tailored to your needs.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full xl:w-auto">
              <button className="group h-16 px-8 rounded-2xl bg-white text-[#0F766E] font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  <CalendarCheck className="w-5 h-5" />
                  Book Appointment
                </span>
              </button>

              <button className="group h-16 px-8 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl text-white font-bold text-lg hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  Emergency Support
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
