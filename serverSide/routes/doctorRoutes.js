import express from "express";
import {createDoctor, getAllDoctors, updateDoctor, deleteDoctor} from "../controllers/doctorController.js";


const router = express.Router();

// Create a new doctor
router.post("/create", createDoctor);

// Get all doctors
router.get("/", getAllDoctors);

// Get a specific doctor by ID
// router.get("/doctors/:id", getDoctorById);

// Update a doctor
router.put("/update/:id", updateDoctor);

// Delete a doctor
router.delete("/delete/:id", deleteDoctor);

export default router;