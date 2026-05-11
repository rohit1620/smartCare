import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllPages from "./pages/AllPages";
import ScrollToTop from "./components/other/ScrollToTop";

// import HospitalNavbar from "./components/Navbar1";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HospitalNavbar /> */}
      {/* <Home /> */}
      <ScrollToTop />
      <AllPages />
    </div>
  );
};

export default App;
