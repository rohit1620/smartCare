const express = require('express');
const router = express.Router();
const { createPrescription, getPrescriptions } = require('../controllers/prescriptionController');

// डॉक्टर जब फॉर्म सबमिट करेगा (POST Request)
router.post('/add', createPrescription);

// मेडिकल स्टोर/फार्मेसी वाला जब डेटा देखेगा (GET Request)
router.get('/all', getPrescriptions);

module.exports = router;