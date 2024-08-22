// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import Navbar from "./components/Navbar.jsx";
import StudySpotAdder from "./components/StudySpotAdder.jsx";

import LoginPage from "./components/Login.jsx";
import SignUpPage from "./components/SignUp.jsx";
import ForgotPasswordPage from "./components/ForgotPassword.jsx";
import ViewProfilePage from "./components/ViewProfile.jsx";

import StudySessionFinder from "./components/ActiveStudySessions.jsx"; 
import MajorFilter from "./components/StudentMajorFilter.jsx";



function App() {
  return (
    <>
      {/* <Navbar />   */}

      {/* <StudySpotAdder /> */}

      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <ForgotPasswordPage /> */}

      <ViewProfilePage />

      {/* <StudySessionFinder /> */}
      {/* <MajorFilter /> */}

    </>
  );
}

export default App;
