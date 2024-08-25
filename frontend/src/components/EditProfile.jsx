import React from 'react';
import { useState } from 'react';
import styles from './EditProfile.module.css';
import Logo from '../assets/bearmaps_logo.png';

function EditProfilePage() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelected) => {
      if (!prevSelected.includes(value)) {
        return [...prevSelected, value];
      }
      return prevSelected;
    });
  };

  const handleUnselect = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelected) => {
      return prevSelected.filter((option) => option !== value);
    });
  };

  return (
    <div className={styles.ViewProfilePage}>
      <img className={styles.Bearmaps_Logo} src={Logo} alt="BearMaps Logo" />

      <div className={styles.Center}>

        <div className={styles.Profile_Container}>

          <img className={styles.Profile_Picture} src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='Profile Picture' />
          <h2 className={styles.photo}>Edit Photo</h2>

          <div className={styles.Profile_Content}>

            <div className={styles.Profile_Info}>
              <h4 className={styles.name}> Name </h4>
              <h4 className={styles.email}> Email </h4>
              <h4 className={styles.degree}> Degree </h4>
              <h4 className={styles.year}> Year of Degree </h4>

              <div className={styles.course}>
                <label htmlFor="courseSelect">Choose Courses:</label>
                <select id="courseSelect" onChange={handleSelectChange}>
                  <option value="CMPUT455">CMPUT455</option>
                  <option value="CMPUT328">CMPUT328</option>
                  <option value="CMPUT201">CMPUT201</option>
                </select>
              </div>

              {/* Display selected options as grey rectangles */}
              <div className={styles.selectedContainer}>
                {selectedOptions.map((option, index) => (
                  <div key={index} className={styles.selectedCourses}>
                    {option} <div className={styles.cancel} onClick={handleUnselect}>X</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className={styles.submit}>Submit</button>

        </div>
      </div>

    </div>
  );
}

export default EditProfilePage;
