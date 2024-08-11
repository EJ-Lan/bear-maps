import React, { useState } from 'react';
import './StudentMajorFilter.css';
import { BiCaretDown, BiCaretRight,BiLogoBaidu } from 'react-icons/bi';

export default function MajorFilter() {
    const [majors, setMajors] = useState([
        { name: 'AGRICULTURE', number: 3, students: ['Simon Haile', 'Haile Simon', 'EJ Lanada']},
        { name: 'MATH', number: 3, students: ['Simon Haile', 'Haile Simon', 'EJ Lanada']},
        { name: 'ECONOMICS', number: 2, students: ['Simon Haile', 'Haile Simon', 'EJ Lanada']},
    ]);

    const [students, setStudents] = useState({
        'Simon Haile': {year:'3rd', major:'Agri.'},
        'Haile Simon': {year:'3rd', major:'Agri.'},
        'EJ Lanada': {year:'3rd', major:'Agri.'}
    });

    const [filteredMajors, setFilteredMajors] = useState(majors);
    const [activeMajor, setActiveMajor] = useState(null);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setFilteredMajors(majors.filter(majorItem =>
            majorItem.name.toLowerCase().includes(searchTerm)
        ));
    };

    const handleClick = (majorItem) => {
        setActiveMajor(prevActiveMajor =>
            prevActiveMajor === majorItem ? null : majorItem
        );
    };

    return (
        <section className="sidebar">
            <div className="major-search-bar">
                <input type="text" id="search-input" placeholder="Search Majors..." onChange={handleSearch}/>
            </div>
            <hr className="divider" />
            <div id="major-list" className="major-list">
                {filteredMajors.map(majorItem => (
                    <div key={majorItem.name} className="major-item">
                        <div className={`major-name ${activeMajor === majorItem ? 'active' : ''}`} onClick={() => handleClick(majorItem)}>
                            <span className="major-name-text"> 
                                {activeMajor === majorItem ? <BiCaretDown className="caret-icon" size={24} /> : <BiCaretRight className="caret-icon" size={24} />}
                                {majorItem.name}
                            </span>
                            <span>{majorItem.number}</span>
                        </div>
                        {activeMajor === majorItem && (
                            <div className="major-students">
                                {majorItem.students.map((student, index) => (
                                    <div key={index} className="student-item">
                                        <span>
                                            <BiLogoBaidu className="caret-icon"/>
                                            &nbsp;
                                            {student} 
                                        </span>
                                        <span style={{ fontFamily: 'Courier New', fontWeight: '100', fontSize:'12px' }}>
                                            {students[student]?.year}
                                            &nbsp;
                                            {students[student]?.major}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
