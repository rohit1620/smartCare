import { Route, Routes } from "react-router-dom";

import React from "react";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </>
  );
};

export default AllPages;
