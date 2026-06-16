import mongoose from "mongoose";

const PrescriptionSchema = new mongoose.Schema({
  // 1. Doctor Details
  doctorName: {
    type: String,
    required: [true, 'Doctor name is required'],
    trim: true
  },
  department:{
    type:String,
    required:true
  },

  // अगर आपके पास डॉक्टर की ID भी है, तो इसे रख सकते हैं (Optional but Recommended)
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor' 
  },

  // 2. Patient Details
  patientId: {
    type: mongoose.Schema.Types.ObjectId, // डेटाबेस की यूनिक ID के लिए
    ref: 'Patient',                       // अगर आपकी कोई Patient टेबल/कलेक्शन है
    required: [true, 'Patient ID is required']
  },
  patientName: {
    type: String,
    required: [true, 'Patient name is required'],
    trim: true
  },

patientEmail:{
  type:String,
  required:true
},
patientPhone:{
  type:String,
  required:true
},



  // 3. Appointment & Consultation Details
  dispenseStatus: {
    type: String,
    enum: ['pending', 'dispensed'],
    default: 'pending' // जैसा कि आपके UI में रिकमेंडेड है
  },
  clinicalNotes: {
    type: String,
    trim: true,
    default: '' // उदा. Viral Fever, Cough...
  },

  // 4. Medication Details (यह आपके UI की दवाओं की डायनेमिक रो का Array है)
  medicines: [
    {
      drugName: {
        type: String,
        required: [true, 'Medicine name is required'],
        trim: true
      },
      form: {
        type: String,
        enum: ['Tablet', 'Syrup', 'Capsule', 'Injection', 'Drops'],
        default: 'Tablet'
      },
      dosage: {
        type: String, // '1 Tab' या '5ml' स्टोर करने के लिए String बेस्ट है
        required: true
      },
      frequency: {
        type: String, // '1-0-1', '1-0-0' आदि के लिए
        required: true
      },
      timing: {
        type: String, // 'After Food' या 'Before Food'
        required: true
      },
      duration: {
        type: String, // '5 Days', '1 Week' आदि के लिए
        required: true
      }
    }
  ],

  // 5. Timestamps (इससे अपने आप पता चल जाएगा कि प्रेस्क्रिप्शन कब बना और अपडेट हुआ)
}, { timestamps: true });

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

export default Prescription