import Doctor from "../models/Doctor.js";
import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";

// ======================================================
// Function: createDoctor
// ======================================================
// @desc    Create New Doctor
// @route   POST /api/doctors
// @access  Admin / Reception
export const createDoctor = async (req, res) => {
  try {
    const {
      doctorName,
      specialization,
      experience,
      fees,
      availability,
      qualification,
      department,
      profileImage,
      status,
    } = req.body;

    // ======================================================
    // Validation
    // ======================================================

    if (
      !doctorName ||
      !specialization ||
      !experience ||
      !fees ||
      !qualification ||
      !department
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // ======================================================
    // Check Existing Doctor
    // ======================================================

    const existingDoctor = await Doctor.findOne({
      doctorName: doctorName.trim(),
      specialization: specialization.trim(),
    });

    if (existingDoctor) {
      return res.status(409).json({
        success: false,
        message: "Doctor already exists",
      });
    }

    // ======================================================
    // Create Doctor
    // ======================================================

    const newDoctor = await Doctor.create({
      doctorName: doctorName.trim(),
      specialization: specialization.trim(),
      experience,
      fees,
      availability,
      qualification: qualification.trim(),
      department: department.trim(),
      profileImage,
      status,
    });

    // ======================================================
    // Response
    // ======================================================

    return res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    console.log("Create Doctor Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};




// ======================================================
// Function: getAllDoctors
// ======================================================
// @desc    Get All Doctors
// @route   GET /api/doctors
// @access  Admin / Reception / User
export const getAllDoctors = async (req, res) => {
  try {
    // ======================================================
    // Query Parameters
    // ======================================================

    const {
      search,
      specialization,
      department,
      status,
      page = 1,
      limit = 10,
      sort = "createdAt",
      order = "desc",
    } = req.query;

    // ======================================================
    // Filters
    // ======================================================

    const filters = {};

    // Search By Doctor Name
    if (search) {
      filters.doctorName = {
        $regex: search,
        $options: "i",
      };
    }

    // Filter By Specialization
    if (specialization) {
      filters.specialization = specialization;
    }

    // Filter By Department
    if (department) {
      filters.department = department;
    }

    // Filter By Status
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
    // Sorting
    // ======================================================

    const sortOption = {
      [sort]: order === "asc" ? 1 : -1,
    };

    // ======================================================
    // Database Query
    // ======================================================

    const doctors = await Doctor.find(filters)
      .sort(sortOption)
      .skip(skip)
      .limit(pageLimit);

    // ======================================================
    // Total Documents
    // ======================================================

    const totalDoctors = await Doctor.countDocuments(filters);

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctors fetched successfully",

      totalDoctors,

      currentPage,

      totalPages: Math.ceil(totalDoctors / pageLimit),

      doctors,
    });
  } catch (error) {
    console.log("Get All Doctors Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


// ======================================================
// Function: getSingleDoctor
// ======================================================
// @desc    Get Single Doctor
// @route   GET /api/doctors/:id
// @access  Admin / Reception / User
export const getSingleDoctor = async (req, res) => {
  try {
    // ======================================================
    // Get Doctor ID
    // ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Find Doctor
    // ======================================================

    const doctor = await Doctor.findById(id);

    // ======================================================
    // Check Doctor Exists
    // ======================================================

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctor fetched successfully",
      doctor,
    });
  } catch (error) {
    console.log("Get Single Doctor Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};



// ======================================================
// Function: updateDoctor
// ======================================================
// @desc    Update Doctor
// @route   PUT /api/doctors/:id
// @access  Admin / Reception
export const updateDoctor = async (req, res) => {
  try {
    // ======================================================
    // Get Doctor ID
    // ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Find Existing Doctor
    // ======================================================

    const existingDoctor = await Doctor.findById(id);

    if (!existingDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // ======================================================
    // Extract Request Body
    // ======================================================

    const {
      doctorName,
      specialization,
      experience,
      fees,
      availability,
      qualification,
      department,
      profileImage,
      status,
    } = req.body;

    // ======================================================
    // Update Fields
    // ======================================================

    if (doctorName !== undefined) {
      existingDoctor.doctorName = doctorName.trim();
    }

    if (specialization !== undefined) {
      existingDoctor.specialization = specialization.trim();
    }

    if (experience !== undefined) {
      existingDoctor.experience = experience;
    }

    if (fees !== undefined) {
      existingDoctor.fees = fees;
    }

    if (availability !== undefined) {
      existingDoctor.availability = availability;
    }

    if (qualification !== undefined) {
      existingDoctor.qualification = qualification.trim();
    }

    if (department !== undefined) {
      existingDoctor.department = department.trim();
    }

    if (profileImage !== undefined) {
      existingDoctor.profileImage = profileImage;
    }

    if (status !== undefined) {
      existingDoctor.status = status;
    }

    // ======================================================
    // Save Updated Doctor
    // ======================================================

    const updatedDoctor = await existingDoctor.save();

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctor updated successfully",
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.log("Update Doctor Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


// ======================================================
// Function: deleteDoctor
// ======================================================
// @desc    Delete Doctor
// @route   DELETE /api/doctors/:id
// @access  Admin
export const deleteDoctor = async (req, res) => {
  try {
    // ======================================================
    // Get Doctor ID
    // ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Find Doctor
    // ======================================================

    const doctor = await Doctor.findById(id);

    // ======================================================
    // Check Doctor Exists
    // ======================================================

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // ======================================================
    // Delete Doctor
    // ======================================================

    await doctor.deleteOne();

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.log("Delete Doctor Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


// ======================================================
// Function: getDoctorPatients
// ======================================================
// @desc    Get All Patients Of Specific Doctor
// @route   GET /api/doctors/:id/patients
// @access  Doctor / Admin
export const getDoctorPatients = async (req, res) => {
  try {
    // ======================================================
    // Get Doctor ID
    // ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Check Doctor Exists
    // ======================================================

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

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
    // Filters
    // ======================================================

    const filters = {
      doctor: id,
    };

    // Appointment Status Filter
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
    // Find Appointments
    // ======================================================

    let appointmentsQuery = Appointment.find(filters)
      .populate({
        path: "user",
        select: "name email phone profileImage",
      })
      .populate({
        path: "doctor",
        select: "doctorName specialization department",
      })
      .sort({ appointmentDate: -1 })
      .skip(skip)
      .limit(pageLimit);

    // ======================================================
    // Search Patient Name
    // ======================================================

    if (search) {
      appointmentsQuery = Appointment.find(filters)
        .populate({
          path: "user",
          match: {
            name: {
              $regex: search,
              $options: "i",
            },
          },
          select: "name email phone profileImage",
        })
        .populate({
          path: "doctor",
          select: "doctorName specialization department",
        })
        .sort({ appointmentDate: -1 })
        .skip(skip)
        .limit(pageLimit);
    }

    const appointments = await appointmentsQuery;

    // ======================================================
    // Remove Null Users (Search Case)
    // ======================================================

    const filteredAppointments = appointments.filter(
      (appointment) => appointment.user !== null
    );

    // ======================================================
    // Total Patients Count
    // ======================================================

    const totalPatients = filteredAppointments.length;

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctor patients fetched successfully",

      totalPatients,

      currentPage,

      totalPages: Math.ceil(totalPatients / pageLimit),

      patients: filteredAppointments,
    });
  } catch (error) {
    console.log("Get Doctor Patients Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


// ======================================================
// Function: getDoctorAppointments
// ======================================================
// @desc    Get Doctor Appointments
// @route   GET /api/doctors/:id/appointments
// @access  Doctor / Admin
export const getDoctorAppointments = async (req, res) => {
  try {
    // ======================================================
    // Get Doctor ID
    // ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Check Doctor Exists
    // ======================================================

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // ======================================================
    // Query Parameters
    // ======================================================

    const {
      status,
      date,
      page = 1,
      limit = 10,
      sort = "appointmentDate",
      order = "desc",
    } = req.query;

    // ======================================================
    // Filters
    // ======================================================

    const filters = {
      doctor: id,
    };

    // Appointment Status Filter
    if (status) {
      filters.status = status;
    }

    // Filter By Appointment Date
    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);

      filters.appointmentDate = {
        $gte: startDate,
        $lte: endDate,
      };
    }

    // ======================================================
    // Pagination
    // ======================================================

    const currentPage = Number(page);
    const pageLimit = Number(limit);

    const skip = (currentPage - 1) * pageLimit;

    // ======================================================
    // Sorting
    // ======================================================

    const sortOption = {
      [sort]: order === "asc" ? 1 : -1,
    };

    // ======================================================
    // Fetch Appointments
    // ======================================================

    const appointments = await Appointment.find(filters)
      .populate({
        path: "user",
        select: "name email phone profileImage gender age",
      })
      .populate({
        path: "doctor",
        select: "doctorName specialization department",
      })
      .sort(sortOption)
      .skip(skip)
      .limit(pageLimit);

    // ======================================================
    // Total Appointments
    // ======================================================

    const totalAppointments = await Appointment.countDocuments(filters);

    // ======================================================
    // Appointment Statistics
    // ======================================================

    const confirmedAppointments = await Appointment.countDocuments({
      doctor: id,
      status: "confirmed",
    });

    const pendingAppointments = await Appointment.countDocuments({
      doctor: id,
      status: "pending",
    });

    const cancelledAppointments = await Appointment.countDocuments({
      doctor: id,
      status: "cancelled",
    });

    const completedAppointments = await Appointment.countDocuments({
      doctor: id,
      status: "completed",
    });

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctor appointments fetched successfully",

      statistics: {
        totalAppointments,
        confirmedAppointments,
        pendingAppointments,
        cancelledAppointments,
        completedAppointments,
      },

      pagination: {
        currentPage,
        totalPages: Math.ceil(totalAppointments / pageLimit),
        totalAppointments,
        limit: pageLimit,
      },

      appointments,
    });
  } catch (error) {
    console.log("Get Doctor Appointments Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};



// ======================================================
// Function: updateDoctorAvailability
// ======================================================
// @desc    Update Doctor Availability
// @route   PATCH /api/doctors/:id/availability
// @access  Doctor / Admin
export const updateDoctorAvailability = async (req, res) => {
  try {
    // ======================================================
    // Get Doctor ID
    // ======================================================

    const { id } = req.params;

    // ======================================================
    // Validate MongoDB ObjectId
    // ======================================================

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid doctor ID",
      });
    }

    // ======================================================
    // Get Availability Data
    // ======================================================

    const { availability } = req.body;

    // ======================================================
    // Validation
    // ======================================================

    if (!availability) {
      return res.status(400).json({
        success: false,
        message: "Availability is required",
      });
    }

    if (!Array.isArray(availability)) {
      return res.status(400).json({
        success: false,
        message: "Availability must be an array",
      });
    }

    // ======================================================
    // Find Doctor
    // ======================================================

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    // ======================================================
    // Update Availability
    // ======================================================

    doctor.availability = availability;

    // ======================================================
    // Save Updated Doctor
    // ======================================================

    const updatedDoctor = await doctor.save();

    // ======================================================
    // Response
    // ======================================================

    return res.status(200).json({
      success: true,
      message: "Doctor availability updated successfully",
      availability: updatedDoctor.availability,
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.log("Update Doctor Availability Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};