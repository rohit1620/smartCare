.env file me
Database_Url=mongodb+srv://smartcare:smart123@cluster0.kot3vpb.mongodb.net/smart?appName=Cluster0
Port=5000

middleware me
authorizeRoles.js file me
export const authorizeRoles =
(...roles) => {
return (req, res, next) => {
if (
!roles.includes(req.user.role)
) {
return res.status(403).json({
success: false,
message: "Access denied",
});
}

      next();
    };

};

verifytoken.js file me
import jwt from "jsonwebtoken";

export const verifyToken = async (
req,
res,
next
) => {
try {
const token =
req.cookies.token || req.headers.authorization?.split(
" "
)[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

} catch (error) {
res.status(401).json({
success: false,
message: "Invalid token",
});
}
};

appointmentSchema file me
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

appointmentController.js file me

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

// import Appointment from "../models/Appointment.js";

export const getDashboardStats =
async (req, res) => {
try {
// TOTAL
const totalAppointments =
await Appointment.countDocuments();

      // PENDING
      const pendingAppointments =
        await Appointment.countDocuments({
          status: "pending",
        });

      // CONFIRMED
      const confirmedAppointments =
        await Appointment.countDocuments({
          status: "confirmed",
        });

      // COMPLETED
      const completedAppointments =
        await Appointment.countDocuments({
          status: "completed",
        });

      // CANCELLED
      const cancelledAppointments =
        await Appointment.countDocuments({
          status: "cancelled",
        });

      // PAID
      const paidPayments =
        await Appointment.countDocuments({
          paymentStatus: "paid",
        });

      // PENDING PAYMENT
      const pendingPayments =
        await Appointment.countDocuments({
          paymentStatus: "pending",
        });

      // TODAY APPOINTMENTS
      const today = new Date()
        .toISOString()
        .split("T")[0];

      const todayAppointments =
        await Appointment.countDocuments({
          appointmentDate: today,
        });

      // DEPARTMENT CHART
      const departmentStats =
        await Appointment.aggregate([
          {
            $group: {
              _id: "$department",

              count: {
                $sum: 1,
              },
            },
          },

          {
            $project: {
              _id: 0,

              department: "$_id",

              count: 1,
            },
          },
        ]);

      // STATUS CHART
      const statusStats =
        await Appointment.aggregate([
          {
            $group: {
              _id: "$status",

              count: {
                $sum: 1,
              },
            },
          },

          {
            $project: {
              _id: 0,

              status: "$_id",

              count: 1,
            },
          },
        ]);

      // WEEKLY CHART
      const weeklyRaw =
        await Appointment.aggregate([
          {
            $group: {
              _id: {
                $dayOfWeek:
                  "$createdAt",
              },

              appointments: {
                $sum: 1,
              },
            },
          },
        ]);

      const days = [
        "",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ];

      const weeklyStats =
        weeklyRaw.map((item) => ({
          day: days[item._id],

          appointments:
            item.appointments,
        }));

      // RECENT APPOINTMENTS
      const recentAppointments =
        await Appointment.find()
          .populate(
            "patient",
            "name"
          )
          .sort({
            createdAt: -1,
          })
          .limit(5);

      // FINAL RESPONSE
      res.status(200).json({
        totalAppointments,

        pendingAppointments,

        confirmedAppointments,

        completedAppointments,

        cancelledAppointments,

        paidPayments,

        pendingPayments,

        todayAppointments,

        departmentStats,

        statusStats,

        weeklyStats,

        recentAppointments,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to fetch dashboard stats",
      });
    }

};
