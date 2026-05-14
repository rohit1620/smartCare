import express from "express";

import {
  bookAppointment,
  getMyAppointments,
  getSingleAppointment,
  cancelAppointment,
  getAllAppointments,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";

// import {
//   verifyToken
 
// } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/book",
//   verifyToken,
//   authorizeRoles("user"),
  bookAppointment
);

router.get(
  "/my-appointments",
//   verifyToken,
//   authorizeRoles("user"),
  getMyAppointments
);

router.get(
  "/:id",
//   verifyToken,
  getSingleAppointment
);

router.put(
  "/cancel/:id",
//   verifyToken,
//   authorizeRoles("user"),
  cancelAppointment
);

router.get(
  "/all",
//   verifyToken,
//   authorizeRoles(
//     "admin",
//     "receptionist"
//   ),
  getAllAppointments
);

router.put(
  "/status/:id",
//   verifyToken,
//   authorizeRoles(
//     "admin",
//     "receptionist"
//   ),
  updateAppointmentStatus
);

export default router;