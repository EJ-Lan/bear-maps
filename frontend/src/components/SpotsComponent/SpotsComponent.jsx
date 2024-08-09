//import React from "@vitejs/plugin-react-swc";
//import React from "react"
import './SpotsComponent.css'

function SpotsComponent () {
    return (
        <div className="panel"> 
            <button className="x-button">
                X
            </button>
            <div className="inside-panel">
                <h1>Building Name</h1>
                <img src="/assets/imageIcon.jpg" alt="Building Image" width="500" height="600">
                </img>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Nam vel risus at quam sollicitudin scelerisque. Sed vel augue sit amet leo dictum efficitur. Fusce nec efficitur tortor. Donec tempor malesuada libero, nec varius nibh.

Pellentesque habitant morbi tristique senect
                </p>
                <h2>Food Spots in this building</h2>
                <li>
                    N/A
                </li>
                 
            </div>
            <button className="find-rooms">
                Find Study Rooms
            </button>

           
        </div>
    )
}

export default SpotsComponent