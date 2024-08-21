//import React from "@vitejs/plugin-react-swc";
//import React from "react"

import React, { useEffect, useState} from 'react';
import './ProfileComponent.css';
//import Icon from '../assets/imageIcon.png';

function ProfileComponent() {
    
    

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
                        <select required>
                            <option value="" disabled selected>Courses</option>
                            <option value="CMPUT 401">CMPUT 401</option>
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
                            <option value="19"> CMPUT 291 </option>
                            <option value="20"> CMPUT 300 </option>
                        </select>
                        <button id="add-course" className='add-course'> Add Course </button>
                    </div>

                    <div class="tag-container">
                        <div class="tag">CMPUT 401 <span class="remove-tag">X</span></div>
                    </div>


                    <button type="submit" class="submit-button">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default ProfileComponent;
