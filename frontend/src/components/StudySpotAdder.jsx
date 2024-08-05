// import React from "react";
import { useState } from "react";
import "./StudySpotAdder.css";
import Select from "react-select";

const courses = [
  { value: "CPSC 101", label: "CPSC 101" },
  { value: "BCOMM 152", label: "BCOMM 152" },
  { value: "AFST 302", label: "AFST 302" },
  { value: "AFST 201", label: "AFST 201" },
  { value: "CPSC 251", label: "CPSC 251" },
];

const buildings = [
  { value: "Kinaniskis", label: "Kinaniskis" },
  { value: "Yamnuska", label: "Yamnuska" },
  { value: "Rundle", label: "Rundle" },
  { value: "Crowsnest", label: "Crowsnest" },
  { value: "The Hub", label: "The Hub" },
];

function StudySpotAdder() {
  //useState for course dropdown
  const [selectedCourse, setSelectedCourse] = useState(null);
  //changes the course based on the dropdown selection
  const handleCourseChange = (selectedCourse) => {
    setSelectedCourse(selectedCourse);
  };

  //useState for buildings dropdown
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  //changes the course based on the dropdown selection
  const handleBuildingChange = (selectedBuilding) => {
    setSelectedBuilding(selectedBuilding);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Add Study Session</h1>
        <form>
          <div className="courses">
            <h2>Course Selection</h2>
            <Select
              className="course-selector"
              type="text"
              placeholder="courses..."
              options={courses}
              value={selectedCourse}
              onChange={handleCourseChange}
            />
          </div>
          <div className="description">
            <h2>Description</h2>
            <textarea className="description-area" type="text"></textarea>
          </div>
          <div className="location">
            <h2>Location</h2>
            <div className="location-inputs">
              <Select
                className="building-input"
                type="text"
                placeholder="building..."
                options={buildings}
                value={selectedBuilding}
                onChange={handleBuildingChange}
              />
              <input className="room-input" placeholder="Room #"></input>
            </div>
          </div>
          <div className="time">
            <h2>Time</h2>
            <div className="time-inputs">
              <input
                type="text"
                className="date-input"
                placeholder="date..."
              ></input>
              <div className="start-end">
                <div className="start">
                  <label>Start:</label>
                  <input placeholder="start"></input>
                </div>
                <div className="end">
                  <label>End:</label>
                  <input placeholder="end"></input>
                </div>
              </div>
            </div>
          </div>
          <div className="submit-container">
            <input className="submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudySpotAdder;
