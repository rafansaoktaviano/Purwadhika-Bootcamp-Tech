import React from "react";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Profile from "./Component/Profile";
import Nav from "./Component/Nav"
import Notfound from "./Component/Notfound";
export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </>
  );
}
