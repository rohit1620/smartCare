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