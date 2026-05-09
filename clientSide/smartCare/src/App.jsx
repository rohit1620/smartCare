import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// import HospitalNavbar from "./components/Navbar1";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HospitalNavbar /> */}
      <Home />
      <h1>This is app component</h1>
    </div>
  );
};

export default App;
