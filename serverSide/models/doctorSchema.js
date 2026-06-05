// ===============================================
// File: models/Doctor.js
// ===============================================

import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    // Doctor Full Name
    doctorName: {
      type: String,
      required: true,
      trim: true,
    },

    // Doctor Specialization
    specialization: {
      type: String,
      required: true,
      trim: true,
    },

    // Experience in Years
    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    // Consultation Fees
    fees: {
      type: Number,
      required: true,
      min: 0,
    },

    // Doctor Available Timings / Days
    availability: {
      type: [String],
      required: true,
      default: [],
    },

    // Qualification
    qualification: {
      type: String,
      required: true,
      trim: true,
    },

    // Department Name
    department: {
      type: String,
      required: true,
      trim: true,
    },

    // Profile Image URL
    profileImage: {
      type: String,
      default: "",
    },
    // Email
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // Password
    password: {
      type: String,
      required: true,
      minlength: 6,
    },  

    // Doctor Account Status
    status: {
      type: String,
      enum: ["active", "inactive", "on_leave"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;