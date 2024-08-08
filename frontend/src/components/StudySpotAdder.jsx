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

  const [description, setDescription] = useState();

  //useState for buildings dropdown
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [roomNumber, setRoomNumber] = useState("");

  //useState for date selector
  const [selectedDate, setselectedDate] = useState(null);
  const [startTime, setStartTime] = useState();
  const [endtime, setEndTIme] = useState();

  //changes the course based on the dropdown selection
  const handleCourseChange = (selectedCourse) => {
    setSelectedCourse(selectedCourse);
  };

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
            <textarea
              className="description-area"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
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
              <input
                type="text"
                className="room-input"
                placeholder="Room #"
                value={roomNumber}
                maxLength={6}
                onChange={(e) => {
                  setRoomNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="time">
            <h2>Time</h2>
            <div className="time-inputs">
              <input
                type="date"
                className="date-input"
                value={selectedDate}
                onChange={(e) => {
                  setselectedDate(e.target.value);
                }}
              ></input>
              <div className="start-end">
                <div className="start">
                  <label>Start:</label>
                  <input
                    type="time"
                    placeholder="start"
                    value={startTime}
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                  />
                </div>
                <div className="end">
                  <label>End:</label>
                  <input
                    type="time"
                    placeholder="end"
                    value={endtime}
                    onChange={(e) => {
                      setEndTIme(e.target.value);
                    }}
                  />
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
