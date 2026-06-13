import express from 'express';
const router = express.Router();
// const { createPrescription, getPrescriptions } = require('../controllers/prescriptionController.');
import {createPrescription,getPrescriptions} from "../controllers/prescriptionController.js"

// डॉक्टर जब फॉर्म सबमिट करेगा (POST Request)
router.post('/create', createPrescription);

// मेडिकल स्टोर/फार्मेसी वाला जब डेटा देखेगा (GET Request)
router.get('/all', getPrescriptions);

export default router;