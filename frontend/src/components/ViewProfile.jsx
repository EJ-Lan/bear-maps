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
          <h2 className={styles.name}>First Name Last Name</h2>

          <div className={styles.Profile_Content}>

            <div className={styles.Profile_Info}>
              <div className={styles.leftSection}>
                <h4 className={styles.email}> Email </h4>
                <h4 className={styles.degree}> Degree </h4>
                <h4 className={styles.year}> Year </h4>
              </div>

              <h4 className={styles.bio}> Bio </h4>
            </div>

            <div className={styles.courses}>
              <label htmlFor="dropdown1">Courses Enrolled</label>
              <select id="dropdown1" name="courses">
                <option value="CMPUT455">CMPUT455</option>
                <option value="CMPUT328">CMPUT328</option>
                <option value="CMPUT201">CMPUT201</option>
              </select>
            </div>

            <div className={styles.current}>
              <div className={styles.circles}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
              </div>
              <h4>Current Study Spot/Course Studying</h4>
            </div>

            <div className={styles.studysesh}>
              <label htmlFor="dropdown2">Study Sessions Enrolled</label>
              <select id="dropdown2" name="studysessions">
                <option value="studysesh1">Session 1</option>
                <option value="studysesh2">Session 2</option>
                <option value="studysesh3">Session 3</option>
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
