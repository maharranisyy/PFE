import React from "react";
import './CSS/SignUp.css';
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="signup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="email address" />
                    <input type="text" placeholder="password" />
                </div>
                <button>Continue</button>
                <p className="signup-login">Already have an account ? <Link to="/login">Login here</Link></p>
                <div className="signup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing , i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp