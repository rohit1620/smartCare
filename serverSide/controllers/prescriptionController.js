// const Prescription = require('../models/Prescription'); // अपने स्कीमा का पाथ दें
import Prescription from "../models/prescriptionSchema.js";

// ----------------------------------------------------
// 1. CREATE PRESCRIPTION (डेटाबेस में ऐड करने के लिए)
// ----------------------------------------------------
export const createPrescription = async (req, res) => {
  try {
    const { 
      doctorName, 
      doctorId, 
      patientId, 
      patientName, 
      patientEmail,
      patientPhone,
      department,
      dispenseStatus, 
      clinicalNotes, 
      medicines 
    } = req.body;

    // बेसिक वैलिडेशन (चेक करना कि जरूरी डेटा आया है या नहीं)
    if (!doctorName || !patientId || !patientName || !medicines || medicines.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "कृपया सभी जरूरी फील्ड्स और कम से कम एक दवा जरूर भरें।" 
      });
    }

    // नया प्रेस्क्रिप्शन ऑब्जेक्ट बनाना
    const newPrescription = new Prescription({
      doctorName,
      doctorId,
      patientId,
      patientName,
      patientEmail,
      patientPhone,
      department,
      dispenseStatus: dispenseStatus || 'pending', // अगर फ्रंटएंड से नहीं आया तो डिफ़ॉल्ट COMPLETED
      clinicalNotes,
      medicines
    });

    // डेटाबेस में सेव करना
    const savedPrescription = await newPrescription.save();

    // सफलता का रिस्पॉन्स भेजना
    return res.status(201).json({
      success: true,
      message: "Prescription successfully created and appointment updated!",
      data: savedPrescription
    });

  } catch (error) {
    console.error("Error in createPrescription:", error);
    return res.status(500).json({
      success: false,
      message: "सर्वर में कोई गड़बड़ है, प्रेस्क्रिप्शन सेव नहीं हो पाया।",
      error: error.message
    });
  }
};


// ----------------------------------------------------
// 2. GET ALL PRESCRIPTIONS (फार्मेसी/मेडिकल डैशबोर्ड के लिए)
// ----------------------------------------------------
export const getPrescriptions = async (req, res) => {
  try {
    // डेटाबेस से सभी प्रेस्क्रिप्शन्स निकालना (नया पहले दिखेगा - sort by createdAt)
    // .populate('patientId') का इस्तेमाल करके आप पेशेंट की अन्य डिटेल्स (जैसे फोन, उम्र) भी ला सकते हैं
    const prescriptions = await Prescription.find()
      .sort({ createdAt: -1 }); 

    // अगर कोई डेटा न मिले
    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).json({
        success: true,
        message: "अभी तक कोई प्रेस्क्रिप्शन नहीं लिखा गया है।",
        data: []
      });
    }

    // डेटा फ्रंटएंड को भेजना
    return res.status(200).json({
      success: true,
      count: prescriptions.length,
      data: prescriptions
    });

  } catch (error) {
    console.error("Error in getPrescriptions:", error);
    return res.status(500).json({
      success: false,
      message: "डेटा लाने में कोई समस्या आ रही है।",
      error: error.message
    });
  }
};

