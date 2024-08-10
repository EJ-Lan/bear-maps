//import React from "@vitejs/plugin-react-swc";
//import React from "react"

import React, { useEffect } from 'react';
import './ProfileComponent.css';

function ProfileComponent() {
    useEffect(() => {
        const addButton = document.getElementById('add-course');
        
        const handleAddCourse = () => {
            const selectBox = document.getElementById('course-select');
            const selectedIndex = selectBox.selectedIndex;
            const selectedCourse = selectBox.options[selectBox.selectedIndex].text;
            
            if (selectedCourse !== "Select Course:") {
                const courseList = document.getElementById('added-courses');
                
                // Create a new list item
                const listItem = document.createElement('li');
                listItem.textContent = selectedCourse;
                
                // Add the new list item to the list and remove from the remaining courses available to chose
                courseList.appendChild(listItem);
                selectBox.remove(selectedIndex);
                
                // Reset the select box to the default option
                selectBox.selectedIndex = 0;
            }
        };

        // Add event listener when component mounts
        addButton.addEventListener('click', handleAddCourse);

        // Clean up the event listener when the component unmounts
        return () => {
            addButton.removeEventListener('click', handleAddCourse);
        };
    }, []);

    return (
        <div className="box"> 
            <button className="x-button">
                X
            </button>
            <img src="./assets/imageIcon.jpg" alt="Profile icon" width="500" height="600" />
            <div className="profile-box">
                <div className="user-input">
                    <input className="name" type="text" placeholder="Name" />
                </div>
                <div className="user-input">
                    <input className="email" type="email" placeholder="Email" />
                </div>
                <div className="user-input">
                    <input className="degree" type="text" placeholder="Degree" />
                </div>
                <div className="user-input">
                    <input className="year-of-degree" type="number" placeholder="Year of Degree" />
                </div>
                <select id="course-select">
                    <option value="">Select Course:</option>
                    <option value="1"> CMPUT 101 </option>
                    <option value="2"> CMPUT 174 </option>
                    <option value="3"> CMPUT 175 </option>
                    <option value="4"> CMPUT 191 </option>
                    <option value="5"> CMPUT 195 </option>
                    <option value="6"> CMPUT 200 </option>
                    <option value="7"> CMPUT 201 </option>
                    <option value="8"> CMPUT 204 </option>
                    <option value="9"> CMPUT 206 </option>
                    <option value="10"> CMPUT 210 </option>
                    <option value="11"> CMPUT 229 </option>
                    <option value="12"> CMPUT 250 </option>
                    <option value="13"> CMPUT 256 </option>
                    <option value="14"> CMPUT 261 </option>
                    <option value="15"> CMPUT 267 </option>
                    <option value="16"> CMPUT 272 </option>
                    <option value="17"> CMPUT 274 </option>
                    <option value="18"> CMPUT 275 </option>
                </select>
                <button id="add-course"> Add Course </button>
                <ul id="added-courses">
                    {/* Courses will be added here */}
                </ul>
            </div>
            <button className="submit">
                Submit
            </button>
        </div>
    );
}

export default ProfileComponent;
