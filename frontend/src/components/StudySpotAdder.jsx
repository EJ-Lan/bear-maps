import React from "react";
import "./StudySpotAdder.css";

const courses = ["CPSC 101", "BCOMM 152", "AFST 302", "AFST 201", "CPSC 251"];

const buildings = ["Kinaniskis", "Yamnuska", "Rundle", "Crowsnest", "The Hub"];

function StudySpotAdder() {
  return (
    <div className="container">
      <h1>Add Study Session</h1>
      <div className="form-container">
        <form>
          <div className="course-selector">
            <h2>Course Selection</h2>
            <select type="text" placeholder="courses">
              <option>CPSC 499</option>
            </select>
          </div>
          <div className="description">
            <h2>Description</h2>
            <textarea type=""></textarea>
          </div>
          <div className="location">
            <h2>Location</h2>
            <input type=""></input>
            <input placeholder="Room #"></input>
          </div>
          <div className="time">
            <h2>Time</h2>
            <input type=""></input>
            <div>
              <input placeholder="start #"></input>
              <input placeholder="end"></input>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default StudySpotAdder;
