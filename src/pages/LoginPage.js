/*
Login Page
Created: 2024-APR-29
~
Photo by <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a> on <a href="https://unsplash.com/photos/white-sticks-on-black-textile-rwVSwdGN3o8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import "./LoginPage.css";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div id="loginPageBG">
            <form id="loginPageUI">
                <h2>Login</h2>
                {/* <label fo>Email</label> */}
                <input type="text" id="email" name="fname"  placeholder="Email"></input>
                <br/>
                {/* <label>Password</label> */}
                <input type="password" id="password" name="password-field"  placeholder="Password"></input>
                {/* <label>Login Now</label> */}
                <input type="submit" id="submit" className="btn btn-primary" name="submit-button"></input>
                <br/><hr/><br/>
                <p id="login-to-register"><b>New User?</b> <Link to="/register">Signup here!</Link></p>
            </form>
        </div>
    );
}