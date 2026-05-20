import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  LineChart,
  Line,
  Cell,
} from "recharts";

const Charts = ({ departmentData, statusData, weeklyData }) => {
  const COLORS = {
    pending: "#eab308",
    confirm: "#00FF00",
    completed: "#06b6d4",
    cancelled: "#f43f5e",
  };
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="bg-white/10 rounded-3xl p-5">
        <h2 className="text-white mb-4">Departments</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={departmentData}>
            <XAxis dataKey="department" />

            <Tooltip />

            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white/10 rounded-3xl p-5">
        <h2 className="text-white mb-4">Status</h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="count"
              nameKey="status"
              outerRadius={90}
            >
              {statusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[entry.status]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white/10 rounded-3xl p-5">
        <h2 className="text-white mb-4">Weekly</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={weeklyData}>
            <XAxis dataKey="day" />

            <Tooltip />

            <Line dataKey="appointments" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
