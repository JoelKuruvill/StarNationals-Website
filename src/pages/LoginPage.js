/*
About Us Page
Created: 2024-APR-29
*/
// Photo by <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a> on <a href="https://unsplash.com/photos/white-sticks-on-black-textile-rwVSwdGN3o8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import "./LoginPage.css";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div id="loginPageBG">
            <form id="loginPageUI">
                <h2>Login</h2>
                <label>Email</label>
                <input></input>
                <label>Password</label>
                <input></input>
                <br/>
                <h4>New User?</h4>
                <b><Link to="/signup">Signup here!</Link></b>
            </form>
        </div>
    );
}