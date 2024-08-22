import React from 'react';
import styles from './ViewProfile.module.css';
import Logo from '../assets/bearmaps_logo.png';

function ViewProfilePage() {
  return (
    <div className={styles.ViewProfilePage}>
      <img className={styles.Bearmaps_Logo} src={Logo} alt="BearMaps Logo" />

      <div className={styles.Center}>

        <div className={styles.Profile_Container}>

          <img className={styles.Profile_Picture} src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='Profile Picture' />
          <h2 className={styles.name}>FirstName LastName</h2>

          <div className={styles.Profile_Content}>
            <h4 className={styles.email}> Email </h4>
            <h4 className={styles.degree}> Degree </h4>
            <h4 className={styles.year}> Year </h4>
            <h4 className={styles.bio}> Bio </h4>

            <div className={styles.courses}>
              <label for="dropdown1">Courses Enrolled</label>
              <select id="dropdown1" name="courses">
                <option value="course1">Option 1</option>
                <option value="course2">Option 2</option>
                <option value="course3">Option 3</option>
              </select>
            </div>

            <h4 className={styles.current}>Current Study Spot/Course Studying</h4>

            <div className={styles.studysesh}>
              <label for="dropdown2">Study Sessions Enrolled</label>
              <select id="dropdown2" name="studysessions">
                <option value="studysesh1">Option 1</option>
                <option value="studysesh2">Option 2</option>
                <option value="studysesh3">Option 3</option>
              </select>
            </div>

          </div>

          <button className={styles.message}>Message</button>

        </div>
      </div>

    </div>
  );
}

export default ViewProfilePage;
