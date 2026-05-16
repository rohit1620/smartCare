import Appointment from "../models/appointmentSchema.js";
import mongoose from "mongoose";

export const bookAppointment =
  async (req, res) => {
    try {

      const {
        patient,
        department,
        symptoms,
        appointmentDate,
        timeSlot,
      } = req.body;

      // validation
      if (
        !department ||
        !symptoms ||
        !appointmentDate ||
        !timeSlot
      ) {
        return res.status(400).json({
          success: false,
          message:
            "All fields are required",
        });
      }

      // check past date
      const selectedDate =
        new Date(appointmentDate);

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        return res.status(400).json({
          success: false,
          message:
            "Past date not allowed",
        });
      }

      // check duplicate slot
      const existingAppointment =
        await Appointment.findOne({
          appointmentDate,
          timeSlot,
          department,
        });

      if (existingAppointment) {
        return res.status(400).json({
          success: false,
          message:
            "This slot is already booked",
        });
      }

      // create appointment
      const appointment =
        await Appointment.create({
          patient,
          //  req.user.id,
          department,
          symptoms,
          appointmentDate,
          timeSlot,
          status: "pending",
        });

      // response
      res.status(201).json({
        success: true,
        message:
          "Appointment booked successfully",
        appointment,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };




export const getMyAppointments =
  async (req, res) => {
    try {

      // fetch appointments
      const appointments =
        await Appointment.find({
          patient: req.user.id,
        })
          .populate(
            "assignedDoctor",
            "name email specialization"
          )
          .sort({
            createdAt: -1,
          });

      // check appointments
      if (!appointments) {
        return res.status(404).json({
          success: false,
          message:
            "No appointments found",
        });
      }

      // response
      res.status(200).json({
        success: true,
        count: appointments.length,
        appointments,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };






export const getSingleAppointment =
  async (req, res) => {
    try {

      const { id } = req.params;

      // validate mongo id
      if (
        !mongoose.Types.ObjectId.isValid(
          id
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid appointment ID galat",
        });
      }

      // find appointment
      const appointment =
        await Appointment.findById(id)
          .populate(
            "patient",
            "name email phone"
          )
          .populate(
            "assignedDoctor",
            "name email specialization"
          );

      // check appointment
      if (!appointment) {
        return res.status(404).json({
          success: false,
          message:
            "Appointment not found",
        });
      }

      // authorization check
      if (
        appointment.patient._id.toString() !==
          req.user.id &&
        req.user.role !== "admin"
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      // response
      res.status(200).json({
        success: true,
        appointment,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };


  

export const cancelAppointment =
  async (req, res) => {
    try {

      const { id } = req.params;

      // validate mongo id
      if (
        !mongoose.Types.ObjectId.isValid(
          id
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid appointment ID ",
        });
      }

      // find appointment
      const appointment =
        await Appointment.findById(id);

      // check appointment
      if (!appointment) {
        return res.status(404).json({
          success: false,
          message:
            "Appointment not found",
        });
      }

      // authorization check
      if (
        appointment.patient.toString() !==
          req.user.id &&
        req.user.role !== "admin"
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      // already cancelled
      if (
        appointment.status ===
        "cancelled"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Appointment already cancelled",
        });
      }

      // completed appointment check
      if (
        appointment.status ===
        "completed"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Completed appointment cannot be cancelled",
        });
      }

      // cancel appointment
      appointment.status =
        "cancelled";

      appointment.cancelledAt =
        new Date();

      await appointment.save();

      // response
      res.status(200).json({
        success: true,
        message:
          "Appointment cancelled successfully",
        appointment,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };




export const getAllAppointments =
  async (req, res) => {
    try {

      // admin check
      // if (
      //   req.user.role !== "admin"
      // ) {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Access denied",
      //   });
      // }

      // pagination
      const page =
        Number(req.query.page) || 1;

      const limit =
        Number(req.query.limit) || 10;

      const skip =
        (page - 1) * limit;

      // filters
      const filter = {};

      if (req.query.status) {
        filter.status =
          req.query.status;
      }

      if (req.query.department) {
        filter.department =
          req.query.department;
      }

      // fetch appointments
      const appointments =
        await Appointment.find(filter)
          .populate(
            "patient",
            "name email phone"
          )
          .populate(
            "assignedDoctor",
            "name specialization"
          )
          .sort({
            createdAt: -1,
          })
          .skip(skip)
          .limit(limit);

      // total count
      const totalAppointments =
        await Appointment.countDocuments(
          filter
        );

      // response
      res.status(200).json({
        success: true,

        currentPage: page,

        totalPages: Math.ceil(
          totalAppointments / limit
        ),

        totalAppointments,

        appointments,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };


 

export const updateAppointmentStatus =
  async (req, res) => {
    try {

      const { id } = req.params;

      const { status } = req.body;

      // admin check
      if (
        req.user.role !== "admin"
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      // validate mongo id
      if (
        !mongoose.Types.ObjectId.isValid(
          id
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid appointment ID",
        });
      }

      // validate status
      const validStatuses = [
        "pending",
        "confirmed",
        "completed",
        "cancelled",
      ];

      if (
        !validStatuses.includes(
          status
        )
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid status",
        });
      }

      // find appointment
      const appointment =
        await Appointment.findById(id);

      // check appointment
      if (!appointment) {
        return res.status(404).json({
          success: false,
          message:
            "Appointment not found",
        });
      }

      // business rules
      if (
        appointment.status ===
        "completed"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Completed appointment cannot be updated",
        });
      }

      // update status
      appointment.status = status;

      // timestamps
      if (
        status === "completed"
      ) {
        appointment.completedAt =
          new Date();
      }

      if (
        status === "cancelled"
      ) {
        appointment.cancelledAt =
          new Date();
      }

      await appointment.save();

      // response
      res.status(200).json({
        success: true,
        message:
          "Appointment status updated successfully",
        appointment,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };