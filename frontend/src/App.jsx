// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import StudySpotAdder from "./components/StudySpotAdder.jsx";

import LoginPage from "./components/Login.jsx";
import SignUpPage from "./components/SignUp.jsx";
import StudySessionFinder from "./components/ActiveStudySessions.jsx";
import MajorFilter from "./components/StudentMajorFilter.jsx";

function App() {
  return (
    <>
      {/* For Testing Page Components */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/addStudySpot" element={<StudySpotAdder />}></Route>
        <Route
          path="/findStudySession"
          element={<StudySessionFinder />}
        ></Route>
        <Route path="/filterMajor" element={<MajorFilter />}></Route>
      </Routes>
    </>
  );
}

export default App;
