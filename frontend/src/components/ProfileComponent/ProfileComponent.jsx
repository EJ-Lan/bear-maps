//import React from "@vitejs/plugin-react-swc";
//import React from "react"
import './ProfileComponent.css'

function ProfileComponent () {
    return (
        <div className="box"> 
            <button className="x-button">
                X
            </button>
            <img src="./assets/imageIcon.jpg" alt="Profile icon" width="500" height="600">
                </img>
            <div className="profile-box">
                <input className="name" type="text" placeholder="Name"></input>
                <input className="email" type="email" placeholder="Email"></input>
                <input className="degree" type="text" placeholder="Degree"></input>
                <input className="year-of-degree" type="number" placeholder="Year of Degree"></input>
                
               
               
                 
            </div>
            <button className="submit">
                Submit
            </button>

           
        </div>
    )
}

export default ProfileComponent