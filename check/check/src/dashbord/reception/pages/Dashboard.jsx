import { Calendar, Clock3, CheckCircle, Wallet, XCircle } from "lucide-react";

import { useEffect, useState } from "react";

import StatsCard from "../components/StatsCard";

import Charts from "../components/Charts";

import { getDashboardStats } from "../services/appointmentService";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <p className="text-white">Loading...</p>;

  const cards = [
    {
      title: "Total",
      value: stats.totalAppointments,
      icon: Calendar,
    },

    {
      title: "Pending",
      value: stats.pendingAppointments,
      icon: Clock3,
    },

    {
      title: "Completed",
      value: stats.completedAppointments,
      icon: CheckCircle,
    },

    {
      title: "Cancelled",
      value: stats.cancelledAppointments,
      icon: XCircle,
    },

    {
      title: "Paid",
      value: stats.paidPayments,
      icon: Wallet,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
        {cards.map((card, i) => (
          <StatsCard key={i} {...card} />
        ))}
      </div>

      <Charts
        departmentData={stats.departmentStats}
        statusData={stats.statusStats}
        weeklyData={stats.weeklyStats}
      />
    </div>
  );
};

export default Dashboard;
