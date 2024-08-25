import React from 'react';
import styles from './EditProfile.module.css';
import Logo from '../assets/bearmaps_logo.png';

function EditProfilePage() {
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
            </div>

            <div className={styles.courses}>
              <label htmlFor="dropdown1">Courses</label>
              <select id="dropdown1" name="courses">
                <option value="course1">Option 1</option>
                <option value="course2">Option 2</option>
                <option value="course3">Option 3</option>
              </select>
            </div>

          </div>

          <button className={styles.submit}>Submit</button>

        </div>
      </div>

    </div>
  );
}

export default EditProfilePage;
