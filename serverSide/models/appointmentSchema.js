import mongoose from "mongoose";

const appointmentSchema =
  new mongoose.Schema(
    {
      patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      department: {
        type: String,
        required: true,
      },

      symptoms: {
        type: String,
        required: true,
      },

      appointmentDate: {
        type: String,
        required: true,
      },

      timeSlot: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        enum: [
          "pending",
          "confirmed",
          "completed",
          "cancelled",
        ],
        default: "pending",
      },

      assignedDoctor: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      paymentStatus: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending",
      },

      visited: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);

export default Appointment;