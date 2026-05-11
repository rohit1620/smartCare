import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Ambulance,
  Video,
  CalendarCheck,
  Stethoscope,
  FlaskConical,
  Plus,
  PhoneCall,
} from "lucide-react";

const faqs = [
  {
    icon: ShieldCheck,
    question: "Do you provide insurance support and cashless treatment?",
    answer:
      "Yes, we partner with leading insurance providers to offer seamless cashless treatment services, helping patients receive quality healthcare with minimal financial stress.",
  },
  {
    icon: Ambulance,
    question: "Is emergency care available 24/7?",
    answer:
      "Our emergency department operates 24/7 with rapid ambulance services, advanced trauma care units, and experienced critical care specialists available at all times.",
  },
  {
    icon: Video,
    question: "Can I book online consultations with doctors?",
    answer:
      "Absolutely. Patients can schedule secure online consultations, connect with specialists virtually, and access healthcare services conveniently from home.",
  },
  {
    icon: CalendarCheck,
    question: "How can I book a hospital appointment?",
    answer:
      "Appointments can be booked easily through our website, phone support, or hospital reception with quick scheduling and instant confirmation assistance.",
  },
  {
    icon: Stethoscope,
    question: "Do you have specialist and experienced doctors?",
    answer:
      "Our hospital is supported by highly experienced specialists, surgeons, and healthcare professionals dedicated to delivering world-class patient care.",
  },
  {
    icon: FlaskConical,
    question: "Are advanced diagnostic and laboratory services available?",
    answer:
      "Yes, we provide modern diagnostic imaging, pathology labs, and advanced medical testing facilities powered by next-generation healthcare technology.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function HospitalFAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-3xl" />

        {/* Floating Particles */}
        {[...Array(35)].map((_, i) => (
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
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-200 backdrop-blur-xl"
            >
              Frequently Asked Questions
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={2}
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Everything Patients{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Need to Know
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-slate-300"
            >
              Find answers to common patient questions regarding appointments,
              emergency support, insurance coverage, online consultations, and
              advanced healthcare services.
            </motion.p>

            {/* Support Card */}
            <motion.div
              custom={4}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-4">
                  <PhoneCall className="h-8 w-8 text-cyan-300" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  24/7 Patient Assistance
                </h3>

                <p className="mt-4 text-slate-300">
                  Our dedicated support team is always available to help
                  patients with appointments, emergency guidance, insurance
                  support, and healthcare assistance.
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-cyan-500/30"
                >
                  Contact Support
                </motion.button>
              </div>

              {/* Shine Effect */}
              <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[150%]" />
            </motion.div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="relative z-10 flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                        className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-3"
                      >
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </motion.div>

                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    {/* Plus Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full border border-white/10 bg-white/5 p-2"
                    >
                      <Plus className="h-5 w-5 text-cyan-300" />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="relative z-10 px-6 pb-6 pl-24">
                          <p className="leading-relaxed text-slate-300">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-[28px] border border-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
