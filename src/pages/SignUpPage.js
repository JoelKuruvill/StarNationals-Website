/*
SignUp Page
Created: 2024-APR-29
~
Photo by <a href="https://unsplash.com/@paulearlephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Earle</a> on <a href="https://unsplash.com/photos/mountains-cover-by-fogs-wVjd0eWNqI8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import './SignUpPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    
    function handleInputChange(event) {
        event.target.name = event.target.value;    
    }

    return (
        <div id="signupPageBG">
            <form id="signUpPageUI">
                <h2>Sign Up Now!</h2> <br />
                <div>
                    <h5>Username</h5>
                    <p> Please create a username for your account </p>
                    <input type="text" id="userName" name="userName" placeholder="Name / Username" onChange={handleInputChange}></input>
                    <span className='text-danger'>*</span>
                </div> <hr />
                <div>
                    <h5>Email</h5>
                    <p> Please provide your email address </p>
                    <input type="text" id="email" name="email" placeholder="Email"></input><span className='text-danger'>*</span><br />
                    <input type="text" id="confirmEmail" name="confirmEmail" placeholder="Re-enter Email"></input><span className='text-danger'>*</span>
                </div> <hr />
                <div>
                    <h4>Password</h4>
                    <p>Please create a password. Remeber to remeber it!</p>
                    <input type="password" id="password" name="password-field" placeholder="Password"></input><span className='text-danger'>*</span><br />
                    <input type="password" id="confirmPassword" name="password-field" placeholder="Re-Enter Password"></input><span className='text-danger'>*</span>
                </div> <hr />
                <div>
                    <b>Acknowledgements and Agreements</b>
                    <p>By ticking the checkboxes below..</p>
                    <label for="isProject"> You recognize this is a personal project website and not a real company </label>
                    <input type="checkbox" id="isProject" name="isProject-field"></input><span className='text-danger'>*</span>
                    <label for="privacyTOS"> The information provided will be sent once submitted. </label>
                    <input type="checkbox" id="privacyTOS" name="privacyTOS-field"></input><span className='text-danger'>*</span>
                    <label for="privacyTOS"> The information provided will be retained and deleted after some time. </label>
                    <input type="checkbox" id="privacyTOS" name="privacyTOS-field"></input><span className='text-danger'>*</span>
                </div> <hr />
                {/* <label>Login Now</label> */}
                <input type="submit" id="submit" className="btn btn-primary" name="submit-button"></input>
                <br /><hr /><br />
                <p id="register-to-login"><b>Returning User?</b> <Link to="/login">Login here!</Link></p>
            </form>
        </div>
    );
}