import { updatePayment, toggleVisited } from "../services/appointmentService";

const AppointmentTable = ({ appointments }) => {
  console.log("apoinmentesdata", appointments.appointments);
  return (
    <div className="bg-white/10 rounded-3xl overflow-hidden border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr className="text-left text-zinc-300">
              <th className="p-4">Patient</th>

              <th className="p-4">Department</th>

              <th className="p-4">Date</th>

              <th className="p-4">Status</th>

              <th className="p-4">Payment</th>

              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments?.appointments?.map((item) => (
              <tr
                key={item._id}
                className="border-t border-white/5 hover:bg-white/5"
              >
                <td className="p-4 text-white">{item.patient?.name}</td>

                <td className="p-4 text-zinc-300">{item.department}</td>

                <td className="p-4 text-zinc-300">{item.appointmentDate}</td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                    {item.status}
                  </span>
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                    {item.paymentStatus}
                  </span>
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => updatePayment(item._id)}
                    className="bg-green-500 px-3 py-2 rounded-xl text-sm"
                  >
                    Paid
                  </button>

                  <button
                    onClick={() => toggleVisited(item._id)}
                    className="bg-cyan-500 px-3 py-2 rounded-xl text-sm"
                  >
                    Visit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
