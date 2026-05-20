// ===============================================
// File: models/Reception.js
// ===============================================

import mongoose from "mongoose";

const receptionSchema = new mongoose.Schema(
  {
    // Reference To User Collection
    // Reception Login Account
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Reception Shift Timing
    shift: {
      type: String,
      enum: ["morning", "evening", "night"],
      required: true,
      default: "morning",
    },

    // Reception Monthly Salary
    salary: {
      type: Number,
      required: true,
      min: 0,
    },

    // Joining Date
    joiningDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    // Reception Employee Status
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

const Reception = mongoose.model(
  "Reception",
  receptionSchema
);

export default Reception;