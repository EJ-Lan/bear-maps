import React from 'react';
import styles from './SignUp.module.css';
import Logo from '../assets/bearmaps_logo.png';
import Friends from '../assets/friends_studying.png';

function SignUpPage() {
    return (
        <div className={styles.SignUp_Page}>

            <div className={styles.Right}>
                <img src={Friends} alt="Friends Studying" />
            </div>

            <div className={styles.Left}>
                <img src={Logo} alt="BearMaps Logo" />

                <div className={styles.SignUp_Container}>

                    <h1>BearMaps</h1>
                    <h3>For UofA Students by UofA Students, find your study spot now!</h3>

                    <form>
                        <div className={styles.input_rectangle}>
                            <p className={styles.rectangle_content}>Email (ualberta domain)</p>
                            <input type="text" className={`${styles.email} ${styles.rectangle_content}`} placeholder='tgakinlo@ualberta.ca' />
                        </div>

                        <div className={styles.input_rectangle}>
                            <p className={styles.rectangle_content}>Password</p>
                            <input type="password" className={`${styles.password} ${styles.rectangle_content}`} placeholder='*******************' />
                        </div>

                        <div className={styles.input_rectangle}>
                            <p className={styles.rectangle_content}>Confirm Password</p>
                            <input type="password" className={`${styles.password} ${styles.rectangle_content}`} placeholder='*******************' />
                        </div>

                        <div className={styles.RMFP}>
                            <p>
                                <input type="checkbox" className={styles.checkbox} />
                                Remember Me
                            </p>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <div className={styles.SULG}>
                            <button type='submit' className={styles.SignUp}>Sign Up</button>
                            <button className={styles.Login}>Login</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default SignUpPage;
