import react from "@vitejs/plugin-react-swc";
import React from react
import './SpotsComponent.css'
import InfoBlock from 'C:\Users\toluw\webproject\web-group\frontend\src\components\InfoBlock\InfoBlock.js'
import InfoTable from 'C:\Users\toluw\webproject\web-group\frontend\src\components\InfoTable\InfoTable.js'

function SpotsComponent () {
    return (
        <div className="panel"> 
            <InfoBlock />
            <InfoTable />
        </div>
    )
}

export default SpotsComponent