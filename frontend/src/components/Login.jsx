import React from 'react';
import './Login.css';
import Friends from '../assets/friends_studying.png';

function LoginPage() {
    return (
        <div className="Login_Page">
            
            <div className="Right">
                <img src={Friends} alt="Friends Studying" />
            </div>

            <div className='Left'>
                <h1>BearMaps</h1>
                <h3>For UofA Students by UofA Students, find your study spot now!</h3>

                <div className="Rectangle2" />
                <div className="Rectangle7" />
                <div className="Rectangle4" />
                <div className="Rectangle5" />


                <form>
                    <p className="EmailUalbertaDomain">Email  (ualberta domain)</p>
                    <input type="text" className="email" placeholder='tgakinlo@ualberta.ca' />

                    <p className="Password">Password</p>
                    <input type="password" className="password" placeholder='*******************' />

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