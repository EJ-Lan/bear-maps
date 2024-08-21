//import React from "@vitejs/plugin-react-swc";
//import React from "react"

import React, { useEffect, useState} from 'react';
import './ProfileComponent.css';
//import Icon from '../assets/imageIcon.png';

function ProfileComponent() {

    const [selectedCourses, setSelectedCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleAddCourse = () => {
        if (selectedCourse && !selectedCourses.includes(selectedCourse)) {
            setSelectedCourses([...selectedCourses, selectedCourse]);
        }
        setSelectedCourse("");  // Reset dropdown after adding
    };

    const handleRemoveCourse = (course) => {
        setSelectedCourses(selectedCourses.filter(c => c !== course));
    };

    return (
        <div className="background">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
            <div className="box">
                <div className="header">
                    <button className="x-button">X</button>
                </div>
                <div className="profile-picture">
                    <div className="profile-icon">
                        <img src='.\src\assets\userIcon.png' alt= "Profile icon" width="100" height="100"/>
                    </div>
                    <button className="edit-photo">Edit Photo</button>
                </div>
                <form>
                    <input type="text" className="input-field" placeholder="Name" required/>
                    <input type="email" className="input-field" placeholder="Email" required/>
                    <input type="text" className="input-field" placeholder="Degree" required/>
                    <input type="number" className="input-field" placeholder="Year of Degree" required/>
                
                    <div class="dropdown-container">
                        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                            <option value="" disabled seleced>Courses</option>
                            <option value="CMPUT 101"> CMPUT 101 </option>
                            <option value="CMPUT 174"> CMPUT 174 </option>
                            <option value="CMPUT 175"> CMPUT 175 </option>
                            <option value="CMPUT 191"> CMPUT 191 </option>
                            <option value="CMPUT 195"> CMPUT 195 </option>
                            <option value="CMPUT 200"> CMPUT 200 </option>
                            <option value="CMPUT 201"> CMPUT 201 </option>
                            <option value="CMPUT 204"> CMPUT 204 </option>
                            <option value="CMPUT 206"> CMPUT 206 </option>
                            <option value="CMPUT 210"> CMPUT 210 </option>
                            <option value="CMPUT 229"> CMPUT 229 </option>
                            <option value="CMPUT 250"> CMPUT 250 </option>
                            <option value="CMPUT 256"> CMPUT 256 </option>
                            <option value="CMPUT 261"> CMPUT 261 </option>
                            <option value="CMPUT 267"> CMPUT 267 </option>
                            <option value="CMPUT 272"> CMPUT 272 </option>
                            <option value="CMPUT 274"> CMPUT 274 </option>
                            <option value="CMPUT 275"> CMPUT 275 </option>
                            <option value="CMPUT 291"> CMPUT 291 </option>
                            <option value="CMPUT 296"> CMPUT 296 </option>
                            <option value="CMPUT 297"> CMPUT 297 </option>
                            <option value="CMPUT 298"> CMPUT 298 </option>
                            <option value="CMPUT 299"> CMPUT 299 </option>
                            <option value="CMPUT 300"> CMPUT 300 </option>
                        </select>
                        <button id="add-course" className='add-course' onClick={handleAddCourse}> Add Course </button>
                    </div>

                    <div class="tag-container">
                        {selectedCourses.map((course, index) => (
                            <div className="tag" key={index}>
                                {course} <span class="remove-tag" onClick={() => handleRemoveCourse(course)}>X</span>
                            </div>
                        ))}
                    </div>


                    <button type="submit" class="submit-button">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default ProfileComponent;
