// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import StudySpotAdder from "./components/StudySpotAdder.jsx";

import LoginPage from "./components/Login.jsx";
import SignUpPage from "./components/SignUp.jsx";

function App() {
  return (
    <>
      <Navbar />
      <StudySpotAdder />

      {/* For Testing Page Components */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
    </>
  );
}

export default App;
