import { useEffect, useState } from "react";

import AppointmentTable from "../components/AppointmentTable";

import { getAppointments } from "../services/appointmentService";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments();

        setAppointments(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex flex-col lg:flex-row gap-4">
        <input
          type="text"
          placeholder="Search patient..."
          className="bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none flex-1"
        />

        <select className="bg-white/10 border border-white/10 rounded-2xl p-4 text-white">
          <option>Status</option>
        </select>

        <select className="bg-white/10 border border-white/10 rounded-2xl p-4 text-white">
          <option>Department</option>
        </select>
      </div>

      <AppointmentTable appointments={appointments} />
    </div>
  );
};

export default Appointments;
