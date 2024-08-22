import React from 'react';
import styles from './ViewProfile.module.css';
import Logo from '../assets/bearmaps_logo.png';

function ViewProfilePage() {
  return (
    <div className={styles.ViewProfilePage}>
      <img src={Logo} alt="BearMaps Logo" />

      <div className={styles.Center}>

        <div className={styles.Profile_Container}>

          <img className='Profile_Picture' src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='Profile Picture' />
          <h3> FirstName LastName</h3>

          <div className='Profile_Content'>
            <h4 className='email'> Email </h4>
            <h4 className='degree'> Degree </h4>
            <h4 className='year'> Year </h4>
            <h4 className='bio'> Bio </h4>

            <label for="dropdown1">Courses Enrolled</label>
            <select id="dropdown1" name="courses">
              <option value="course1">Option 1</option>
              <option value="course2">Option 2</option>
              <option value="course3">Option 3</option>
            </select>

            <h4 className='current'>Current Study Spot/Course Studying</h4>

            <label for="dropdown2">Study Sessions Enrolled</label>
            <select id="dropdown2" name="studysessions">
              <option value="studysesh1">Option 1</option>
              <option value="studysesh2">Option 2</option>
              <option value="studysesh3">Option 3</option>
            </select>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ViewProfilePage;
