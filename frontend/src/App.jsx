// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import StudySpotAdder from "./components/StudySpotAdder.jsx";
import StudySessionFinder from "./components/ActiveStudySessions.jsx"; 
import MajorFilter from "./components/StudentMajorFilter.jsx";



function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <StudySpotAdder />
      <StudySessionFinder />
      <MajorFilter />
    </>
  );
}

export default App;
