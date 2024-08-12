import React, { useState } from 'react';
import "./ActiveStudySessions.css";
import { BiCaretDown, BiCaretRight } from 'react-icons/bi';



export default function StudySessionFinder(){
    const [classes, setClasses] = useState([
        { name: 'MATH 101', number: 3, locations: ['CCIS 212', 'BUS101', 'RUTHERFORD N.2'] },
        { name: 'SCIENCE 101', number: 3, locations: ['CCIS 212', 'BUS101', 'RUTHERFORD N.2'] },
        { name: 'HISTORY 101', number: 2, locations: ['CCIS 212', 'BUS101', 'RUTHERFORD N.2'] }
    ]);

    const [filteredClasses, setFilteredClasses] = useState(classes);
    const [activeClass, setActiveClass] = useState(null);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setFilteredClasses(classes.filter(classItem =>
            classItem.name.toLowerCase().includes(searchTerm)
        ));
    };

    const handleClick = (classItem) => {
        setActiveClass(prevActiveClass => 
            prevActiveClass === classItem ? null : classItem
        );
    };

    return (
        <section class="sidebar">
            <div class="session-search-bar">
                <input type="text" id="search-input"placeholder="Search Study Sessions..." onChange={handleSearch}/>
            </div>
            <hr class="divider" />
            <div id="class-list" class="class-list">
                {filteredClasses.map(classItem => (
                    <div key={classItem.name} class="class-item">
                        <div class={`class-name ${activeClass === classItem ? 'active' : ''}`} onClick={() => handleClick(classItem)}>
                            <span class="class-name-text">
                                {activeClass === classItem ? <BiCaretDown className="caret-icon" size={24} /> : <BiCaretRight className="caret-icon" size={24} />}
                                {classItem.name}
                            </span>
                            <span>{classItem.number}</span>
                        </div>
                        {activeClass === classItem && (
                            <div class="class-locations">
                                {classItem.locations.map((location, index) => (
                                    <div key={index} class="location-item">{location}</div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
