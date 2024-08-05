// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import StudySpotAdder from "./components/StudySpotAdder.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <StudySpotAdder />
    </>
  );
}

export default App;
