import { Routes, Route } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
import Sidebar from "./dashbord/reception/components/Sidebar";

// import Topbar from "./components/Topbar";
import Topbar from "./dashbord/reception/components/Topbar";

// import Dashboard from "./pages/Dashboard";
import Dashboard from "./dashbord/reception/pages/Dashboard";

// import Appointments from "./pages/Appointments";
import Appointments from "./dashbord/reception/pages/Appointments";

const App = () => {
  return (
    <div className="flex bg-[#071028] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
