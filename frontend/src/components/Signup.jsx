import React from 'react';
import './SignUp.css';
import Logo from '../assets/bearmaps_logo.png';
import Friends from '../assets/friends_studying.png';

function SignUpPage() {
    return (
        <div className="SignUp_Page">

            <div className="Right">
                <img src={Friends} alt="Friends Studying" />
            </div>

            <div className='Left'>
                <img src={Logo} alt="BearMaps Logo" />

                <div className='SignUp_Container'>

                    <h1>BearMaps</h1>
                    <h3>For UofA Students by UofA Students, find your study spot now!</h3>

                    <form>
                        <div className='input_rectangle'>
                            <p className='rectangle_content'>Email (ualberta domain)</p>
                            <input type="text" className="email rectangle_content" placeholder='tgakinlo@ualberta.ca' />
                        </div>

                        <div className='input_rectangle'>
                            <p className='rectangle_content'>Password</p>
                            <input type="password" className="password rectangle_content" placeholder='*******************' />
                        </div>

                        <div className='RMFP'>

                            <p>
                                <input type="checkbox" className='checkbox' />
                                Remember Me
                            </p>
                            <a>Forgot Password?</a>
                        </div>

                        <div className='SULG'>
                            <button  type='submit' className="SignUp">Sign Up</button>
                            <button                className="Login">Login</button>
                        </div>
                    </form>


                </div>
            </div>

        </div>
    );
}

export default SignUpPage;