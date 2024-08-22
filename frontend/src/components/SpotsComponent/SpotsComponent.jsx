//import React from "@vitejs/plugin-react-swc";
//import React from "react"
import './SpotsComponent.css'
 
function SpotsComponent () {
    return (
        <div className="panel">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link> 
            <div className="inside-panel">
                <div className='back'>
                    <button className='x-button'>
                        X
                    </button>
                </div>

                <div className="header">Computing Science Centre (CSC)</div>
                <div className='image'>
                    <img src='.\src\assets\imageIcon.png' className="image-icon" alt= "Building image"/> 
                </div>
                <div className="body-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Nam vel risus at quam sollicitudin scelerisque. Sed vel augue sit amet leo dictum efficitur. Fusce nec efficitur tortor. Donec tempor malesuada libero, nec varius nibh.
                Pellentesque habitant morbi tristique senect
                Lorem ipsum dolor sit amet, consectetur 
                </div>
                <div className="food-spots">
                    <div className='food-spots-title'>
                        Food Spots in this building
                    </div>
                    <li className='food-list'>
                        N/A
                    </li>
                </div>

                <div className='courses'>
                    
                
                    <div className='courses-title'>Courses Offered in this Building</div>
                    <div class="courses-list">
                        <p>CMPUT 301 (LEC 2A45) - Room B1-103</p>
                        <p>CMPUT 301 (LEC 3A92)</p>
                        <p>CMPUT 402 (LEC 1B34) - Room B2-210</p>
                        <p>CMPUT 114 (LEC 4D12) - Room A1-100</p>
                        <p>CMPUT 229 (LEC 4D12) - Room L1-160</p>
                    </div>

                </div>

                <div className="find-rooms">
                    <button className="find-rooms-btn">Find Study Rooms</button>
                </div>
            </div>
            
            

           
        </div>
    )
}

export default SpotsComponent