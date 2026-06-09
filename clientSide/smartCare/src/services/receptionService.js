// services/receptionService.js

// import axios from "../api/axios";

// ==========================================
// Get Reception Dashboard
// ==========================================

// export const getReceptionDashboard = async (receptionId) => {
//   try {
//     const response = await axios.get(
//       `/reception/dashboard/${receptionId}`
//     );

//     return response.data;
//   } catch (error) {
//     console.error(
//       "Get Reception Dashboard Error:",
//       error
//     );

//     throw (
//       error.response?.data || {
//         success: false,
//         message: "Something went wrong",
//       }
//     );
//   }
// };


import API from "../api/axios";

export const getDashboardStats = async () => {
  const res = await API.get(
    "/appointments/stats"
  );

  return res.data;
};

export const getAppointments = async (
//   params
) => {
  const res = await API.get(
    "/appointments/all"
    // ,
    // {
    //   params,
    // }
  );

  return res.data;
};

export const updateStatus = async (
  id,
  status
) => {
  return API.patch(
    `/appointments/${id}/status`,
    {
      status,
    }
  );
};

export const assignDoctor = async (
  id,
  doctorId
) => {
  return API.patch(
    `/appointments/${id}/assign-doctor`,
    {
      doctorId,
    }
  );
};

export const updatePayment = async (
  id
) => {
  return API.patch(
    `/appointments/${id}/payment`
  );
};

export const toggleVisited = async (
  id
) => {
  return API.patch(
    `/appointments/${id}/visited`
  );
};


// import api from "../api/axios";

// ===============================================
// Book Appointment
// ===============================================

export const bookAppointment = async (appointmentData) => {
  const response = await API.post(
    "/appointments/book",
    appointmentData
  );

  return response.data;
};



// ======================================================
// Register User
// ======================================================

export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);

  return response.data;
};

// ======================================================
// Login User
// ======================================================

export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);

  return response.data;
};




// services/doctorService.js



export const createDoctor = async (doctorData) => {
  const response = await API.post(
    "/doctors/create",
    doctorData
  );

  return response.data;
};




export const getAllDoctors = async () => {
  try {
    const response = await API.get("/doctors");

    return response.data;
  } catch (error) {
    console.log("Get Doctors Error:", error);

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Failed to fetch doctors",
    };
  }
};



export const fetchDoctorAppointments = async (doctorId, queryParams = {}) => {
  try {
    const response = await API.get(`/doctors/${doctorId}`, {
      params: queryParams, // यह क्वेरी पैरामीटर्स (?status=pending&page=1) को संभालेगा
    });
    return response.data; // बैकएंड का पूरा JSON रिस्पांस रिटर्न करेगा
  } catch (error) {
    // एरर हैंडलिंग ताकि फ्रंटएंड पर सही मैसेज दिखे
    throw error.response ? error.response.data : new Error("Network Error");
  }
};

export const doctorLogin = async (credentials) => {
  try {
    const response = await API.post("/doctors/login", credentials);
    return response.data; // लॉगिन सफल होने पर डॉक्टर का डेटा रिटर्न करेगा
  } catch (error) {
    // एरर हैंडलिंग ताकि फ्रंटएंड पर सही मैसेज दिखे
    throw error.response ? error.response.data : new Error("Network Error");
  } 
};

export const updateAppointmentStatus = async (appointmentId, status) => {
  try {
    const response = await API.patch(`/appointments/status/${appointmentId}`, { status="confirmed" });
    return response.data; // अपडेटेड अपॉइंटमेंट डेटा रिटर्न करेगा
  } catch (error) {
    // एरर हैंडलिंग ताकि फ्रंटएंड पर सही मैसेज दिखे
    throw error.response ? error.response.data : new Error("Network Error");
  }
};


