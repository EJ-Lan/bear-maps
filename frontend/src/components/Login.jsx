import React from 'react';
import './Login.css';
import Logo from '../assets/bearmaps_logo.png';
import Friends from '../assets/friends_studying.png';

function LoginPage() {
    return (
        <div className="Login_Page">

            <div className="Right">
                <img src={Friends} alt="Friends Studying" />
            </div>

            <div className='Left'>
                <img src={Logo} alt="BearMaps Logo" />

                <h1>BearMaps</h1>
                <h3>For UofA Students by UofA Students, find your study spot now!</h3>

                <div className="Rectangle2" />
                <div className="Rectangle7" />
                <div className="Rectangle4" />
                <div className="Rectangle5" />


                <form>
                    <div className='input_rectangle'>
                        <p>Email (ualberta domain)</p>
                        <input type="text" className="email" placeholder='tgakinlo@ualberta.ca' />
                    </div>

                    <div className='input_rectangle'>
                        <p>Password</p>
                        <input type="password" className="password" placeholder='*******************' />
                    </div>

                    <button className="Login">Login</button>
                    <button className="SignUp">Sign Up</button>
                </form>

                <p>Remember Me</p>
                <a>Forgot Password?</a>
            </div>

        </div>
    );
}

export default LoginPage;