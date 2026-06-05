import express from "express";
import {createDoctor, getAllDoctors,getDoctorAppointments,updateDoctor, deleteDoctor,doctorLogin} from "../controllers/doctorController.js";


const router = express.Router();

// Create a new doctor
router.post("/create", createDoctor);

// Get all doctors
router.get("/", getAllDoctors);

// Get a specific doctor by ID
router.get("/:id", getDoctorAppointments);

// Update a doctor
router.put("/update/:id", updateDoctor);

// Delete a doctor
router.delete("/delete/:id", deleteDoctor);
    
// Doctor Login
router.post("/login", doctorLogin);

export default router;