import React from 'react';
import styles from './ForgotPassword.module.css';
import Logo from '../assets/bearmaps_logo.png';
import Friends from '../assets/friends_studying.png';

function ForgotPasswordPage() {
  return (
    <div className={styles.ForgotPasswordPage}>

      <div className={styles.Right}>
        <img src={Friends} alt="Friends Studying" />
      </div>


      <div className={styles.Left}>
        <img src={Logo} alt="BearMaps Logo" />

        <div className={styles.ForgotPassword_Container}>

          <h1>BearMaps</h1>
          <h3>Enter the email address associated with your account and we'll send your password to that email</h3>

          <form>
            <div className={styles.input_rectangle}>
              <p className={styles.rectangle_content}>Email (ualberta domain)</p>
              <input type="text" className={`${styles.email} ${styles.rectangle_content}`} placeholder='tgakinlo@ualberta.ca' />
            </div> 

            <div className={styles.CSU}>
              <button type='submit' className={styles.Continue}>Continue</button>
              <p>Don't have an Account? <a href=''>Sign Up</a></p> 
            </div>
          </form>

        </div>
      </div>

    </div>
  );
}

export default ForgotPasswordPage;
