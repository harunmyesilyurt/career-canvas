import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Experience from "../pages/experiance/Experiance";

function RouterIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />

        <Route path="/experience" element={<Experience />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterIndex;
