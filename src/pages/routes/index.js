import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "../Destination";
import Home from "../Home";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}
