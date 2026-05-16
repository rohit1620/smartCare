import { LayoutDashboard, CalendarDays } from "lucide-react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 min-h-screen p-5 hidden lg:block">
      <h1 className="text-2xl font-bold text-white mb-10">Reception</h1>

      <div className="space-y-3">
        <Link
          to="/"
          className="flex items-center gap-3 bg-cyan-500/20 text-cyan-300 p-4 rounded-2xl"
        >
          <LayoutDashboard />
          Dashboard
        </Link>

        <Link
          to="/appointments"
          className="flex items-center gap-3 text-zinc-300 hover:bg-white/10 p-4 rounded-2xl"
        >
          <CalendarDays />
          Appointments
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
