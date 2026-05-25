#### .env file me

Database_Url=mongodb+srv://smartcare:smart123@cluster0.kot3vpb.mongodb.net/smart?appName=Cluster0
Port=5000

#### middleware me

#### authorizeRoles.js file me

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

#### verifytoken.js file me

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

#### ReceptionSchema.js file me

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

#### receptionController.js file me

import mongoose from "mongoose";

import Reception from "../models/Reception.js";
import Appointment from "../models/Appointment.js";
import Doctor from "../models/Doctor.js";
import User from "../models/User.js";

// ======================================================

// Function: getReceptionDashboard
// ======================================================

// @desc Get Reception Dashboard Data
// @route GET /api/reception/dashboard/:id
// @access Reception / Admin
export const getReceptionDashboard = async (req, res) => {
try {
// ======================================================
// Get Reception ID
// ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid reception ID",
      });
    }

    // ======================================================
    // Check Reception Exists
    // ======================================================

    const reception = await Reception.findById(id).populate({
      path: "userId",
      select: "name email phone profileImage",
    });

    if (!reception) {
      return res.status(404).json({
        success: false,
        message: "Reception staff not found",
      });
    }

    // ======================================================
    // Date Setup
    // ======================================================

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    // ======================================================
    // Dashboard Statistics
    // ======================================================

    const totalAppointments = await Appointment.countDocuments();

    const todayAppointments = await Appointment.countDocuments({
      appointmentDate: {
        $gte: todayStart,
        $lte: todayEnd,
      },
    });

    const pendingAppointments = await Appointment.countDocuments({
      status: "pending",
    });

    const confirmedAppointments = await Appointment.countDocuments({
      status: "confirmed",
    });

    const completedAppointments = await Appointment.countDocuments({
      status: "completed",
    });

    const cancelledAppointments = await Appointment.countDocuments({
      status: "cancelled",
    });

    const totalDoctors = await Doctor.countDocuments({
      status: "active",
    });

    const totalPatients = await User.countDocuments({
      role: "user",
    });

    // ======================================================
    // Today's Appointment List
    // ======================================================

    const todayAppointmentList = await Appointment.find({
      appointmentDate: {
        $gte: todayStart,
        $lte: todayEnd,
      },
    })
      .populate({
        path: "user",
        select: "name email phone gender age profileImage",
      })
      .populate({
        path: "doctor",
        select: "doctorName specialization department",
      })
      .sort({ appointmentDate: 1 });

    // ======================================================
    // Recent Appointments
    // ======================================================

    const recentAppointments = await Appointment.find()
      .populate({
        path: "user",
        select: "name profileImage",
      })
      .populate({
        path: "doctor",
        select: "doctorName specialization",
      })
      .sort({ createdAt: -1 })
      .limit(10);

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Reception dashboard fetched successfully",

      reception,

      statistics: {
        totalAppointments,
        todayAppointments,
        pendingAppointments,
        confirmedAppointments,
        completedAppointments,
        cancelledAppointments,
        totalDoctors,
        totalPatients,
      },

      todayAppointmentList,

      recentAppointments,
    });

} catch (error) {
console.log(
"Get Reception Dashboard Error:",
error
);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

}
};

// ======================================================

// Function: assignDoctorToPatient
// ======================================================

// @desc Assign Doctor To Patient Appointment
// @route PATCH /api/reception/assign-doctor/:appointmentId
// @access Reception / Admin
export const assignDoctorToPatient = async (req, res) => {
try {
// ======================================================
// Get Appointment ID
// ======================================================

    const { appointmentId } = req.params;

    // ======================================================
    // Validate Appointment ID
    // ======================================================

    if (
      !mongoose.Types.ObjectId.isValid(
        appointmentId
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment ID",
      });
    }

    // ======================================================
    // Get Request Data
    // ======================================================

    const {
      doctorId,
      consultationFees,
      paymentStatus,
      appointmentStatus,
    } = req.body;

    // ======================================================
    // Validation
    // ======================================================

    if (!doctorId) {
      return res.status(400).json({
        success: false,
        message: "Doctor ID is required",
      });
    }

    if (
      !mongoose.Types.ObjectId.isValid(doctorId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Find Appointment
    // ======================================================

    const appointment = await Appointment.findById(
      appointmentId
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // ======================================================
    // Find Doctor
    // ======================================================

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // ======================================================
    // Check Doctor Status
    // ======================================================

    if (doctor.status !== "active") {
      return res.status(400).json({
        success: false,
        message:
          "Doctor is currently unavailable",
      });
    }

    // ======================================================
    // Assign Doctor & Update Appointment
    // ======================================================

    appointment.doctor = doctorId;

    // Auto Add Fees If Not Sent
    appointment.consultationFees =
      consultationFees || doctor.fees;

    // Payment Status
    if (paymentStatus) {
      appointment.paymentStatus = paymentStatus;
    }

    // Appointment Status
    if (appointmentStatus) {
      appointment.status = appointmentStatus;
    } else {
      appointment.status = "confirmed";
    }

    // Save Updated Appointment
    await appointment.save();

    // ======================================================
    // Populate Updated Data
    // ======================================================

    const updatedAppointment =
      await Appointment.findById(appointment._id)
        .populate({
          path: "user",
          select:
            "name email phone gender age profileImage",
        })
        .populate({
          path: "doctor",
          select:
            "doctorName specialization department fees",
        });

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message:
        "Doctor assigned to patient successfully",

      appointment: updatedAppointment,
    });

} catch (error) {
console.log(
"Assign Doctor To Patient Error:",
error
);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

}
};

// ======================================================

// Function: collectPayment
// ======================================================

// @desc Collect Patient Payment
// @route PATCH /api/reception/collect-payment/:appointmentId
// @access Reception / Admin
export const collectPayment = async (req, res) => {
try {
// ======================================================
// Get Appointment ID
// ======================================================

    const { appointmentId } = req.params;

    // ======================================================
    // Validate Appointment ID
    // ======================================================

    if (
      !mongoose.Types.ObjectId.isValid(
        appointmentId
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment ID",
      });
    }

    // ======================================================
    // Get Request Body Data
    // ======================================================

    const {
      amount,
      paymentMethod,
      paymentStatus,
      transactionId,
      notes,
    } = req.body;

    // ======================================================
    // Validation
    // ======================================================

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Payment amount is required",
      });
    }

    if (!paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "Payment method is required",
      });
    }

    // ======================================================
    // Find Appointment
    // ======================================================

    const appointment = await Appointment.findById(
      appointmentId
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // ======================================================
    // Prevent Duplicate Payment
    // ======================================================

    if (appointment.paymentStatus === "paid") {
      return res.status(400).json({
        success: false,
        message:
          "Payment already collected for this appointment",
      });
    }

    // ======================================================
    // Update Payment Details
    // ======================================================

    appointment.consultationFees = amount;

    appointment.paymentMethod =
      paymentMethod;

    appointment.paymentStatus =
      paymentStatus || "paid";

    appointment.transactionId =
      transactionId || "";

    appointment.paymentDate = new Date();

    appointment.paymentNotes =
      notes || "";

    // Auto Confirm Appointment After Payment
    if (appointment.status === "pending") {
      appointment.status = "confirmed";
    }

    // ======================================================
    // Save Updated Appointment
    // ======================================================

    await appointment.save();

    // ======================================================
    // Populate Updated Appointment
    // ======================================================

    const updatedAppointment =
      await Appointment.findById(appointmentId)
        .populate({
          path: "user",
          select:
            "name email phone gender age",
        })
        .populate({
          path: "doctor",
          select:
            "doctorName specialization department",
        });

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message:
        "Payment collected successfully",

      appointment: updatedAppointment,
    });

} catch (error) {
console.log(
"Collect Payment Error:",
error
);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

}
};

// ======================================================

// Function: confirmAppointment
// ======================================================

// @desc Confirm Patient Appointment
// @route PATCH /api/reception/confirm-appointment/:appointmentId
// @access Reception / Admin
export const confirmAppointment = async (req, res) => {
try {
// ======================================================
// Get Appointment ID
// ======================================================

    const { appointmentId } = req.params;

    // ======================================================
    // Validate Appointment ID
    // ======================================================

    if (
      !mongoose.Types.ObjectId.isValid(
        appointmentId
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid appointment ID",
      });
    }

    // ======================================================
    // Find Appointment
    // ======================================================

    const appointment = await Appointment.findById(
      appointmentId
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    // ======================================================
    // Prevent Reconfirming
    // ======================================================

    if (appointment.status === "confirmed") {
      return res.status(400).json({
        success: false,
        message:
          "Appointment already confirmed",
      });
    }

    // ======================================================
    // Optional Validation
    // ======================================================

    if (!appointment.doctor) {
      return res.status(400).json({
        success: false,
        message:
          "Please assign doctor before confirming appointment",
      });
    }

    // ======================================================
    // Update Appointment Status
    // ======================================================

    appointment.status = "confirmed";

    appointment.confirmedAt = new Date();

    // ======================================================
    // Save Appointment
    // ======================================================

    await appointment.save();

    // ======================================================
    // Populate Updated Appointment
    // ======================================================

    const updatedAppointment =
      await Appointment.findById(appointmentId)
        .populate({
          path: "user",
          select:
            "name email phone gender age profileImage",
        })
        .populate({
          path: "doctor",
          select:
            "doctorName specialization department",
        });

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message:
        "Appointment confirmed successfully",

      appointment: updatedAppointment,
    });

} catch (error) {
console.log(
"Confirm Appointment Error:",
error
);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

}
};

// ======================================================

// Function: getTodayPatients
// ======================================================

// @desc Get Today's Patients
// @route GET /api/reception/today-patients
// @access Reception / Admin
export const getTodayPatients = async (req, res) => {
try {
// ======================================================
// Query Parameters
// ======================================================

    const {
      status,
      search,
      page = 1,
      limit = 10,
    } = req.query;

    // ======================================================
    // Today's Date Range
    // ======================================================

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    // ======================================================
    // Filters
    // ======================================================

    const filters = {
      appointmentDate: {
        $gte: todayStart,
        $lte: todayEnd,
      },
    };

    // Filter By Appointment Status
    if (status) {
      filters.status = status;
    }

    // ======================================================
    // Pagination
    // ======================================================

    const currentPage = Number(page);

    const pageLimit = Number(limit);

    const skip = (currentPage - 1) * pageLimit;

    // ======================================================
    // Fetch Today's Appointments
    // ======================================================

    let appointments = await Appointment.find(
      filters
    )
      .populate({
        path: "user",
        select:
          "name email phone gender age profileImage",
      })
      .populate({
        path: "doctor",
        select:
          "doctorName specialization department",
      })
      .sort({ appointmentDate: 1 })
      .skip(skip)
      .limit(pageLimit);

    // ======================================================
    // Search Patient Name
    // ======================================================

    if (search) {
      appointments = appointments.filter(
        (appointment) =>
          appointment.user?.name
            ?.toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // ======================================================
    // Total Patients Count
    // ======================================================

    const totalPatients =
      appointments.length;

    // ======================================================
    // Statistics
    // ======================================================

    const confirmedPatients =
      appointments.filter(
        (item) => item.status === "confirmed"
      ).length;

    const pendingPatients =
      appointments.filter(
        (item) => item.status === "pending"
      ).length;

    const completedPatients =
      appointments.filter(
        (item) => item.status === "completed"
      ).length;

    const cancelledPatients =
      appointments.filter(
        (item) => item.status === "cancelled"
      ).length;

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message:
        "Today's patients fetched successfully",

      statistics: {
        totalPatients,
        confirmedPatients,
        pendingPatients,
        completedPatients,
        cancelledPatients,
      },

      pagination: {
        currentPage,
        totalPages: Math.ceil(
          totalPatients / pageLimit
        ),
        limit: pageLimit,
      },

      patients: appointments,
    });

} catch (error) {
console.log(
"Get Today Patients Error:",
error
);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });

}
};
