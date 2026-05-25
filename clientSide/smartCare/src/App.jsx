import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllPages from "./pages/AllPages";
import ScrollToTop from "./components/other/ScrollToTop";
import { useLocation } from "react-router-dom";

// import HospitalNavbar from "./components/Navbar1";

const App = () => {
  const { pathname } = useLocation();
  console.log("Current pathname:", pathname);
  return (
    <div>
      {pathname !== "/dashboard/reception" &&
      pathname !== "/dashboard/doctor" &&
      pathname !== "/dashboard/user" &&
      pathname !== "/dashboard/medical" ? (
        <Navbar />
      ) : null}

      {/* <HospitalNavbar /> */}
      {/* <Home /> */}
      <ScrollToTop />

      <AllPages />
    </div>
  );
};

export default App;
