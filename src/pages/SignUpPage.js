/*
SignUp Page
Created: 2024-APR-29
~
Photo by <a href="https://unsplash.com/@paulearlephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Earle</a> on <a href="https://unsplash.com/photos/mountains-cover-by-fogs-wVjd0eWNqI8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import './SignUpPage.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div id="signupPageBG">
            <form id="signUpPageUI">
                <h2>Sign Up Now!</h2> <br/>
                <div>
                    <h5>Breif Introduction</h5>
                    <p>How should we refer to you? You may provide only your first name if you prefer. </p>
                    <input type="text" id="fname" name="fname" placeholder="First Name* / Username*"></input>
                    <input type="text" id="lname" name="fname" placeholder="Last Name"></input>
                </div> <hr/>
                <div>
                    <h5>Email</h5>
                    <p>Please provide your email<span className='text-danger'>*</span></p>
                    {/* <label fo>Email</label> */}
                    <input type="text" id="email" name="fname" placeholder="Email"></input> <br />
                    <input type="text" id="email" name="fname" placeholder="Re-enter Email"></input>
                </div> <hr/>
                <div>
                    <h4>Password</h4>
                    <p>Please create a password. Remeber to remeber it!<span className='text-danger'>*</span></p>
                    <input type="password" id="password" name="password-field" placeholder="Password"></input> <br />
                    <input type="password" id="password" name="password-field" placeholder="Re-Enter Password"></input>
                </div> <hr/>
                <div>
                    <b>Acknowledgements and Agreements</b>
                    <p>By ticking the checkboxes below..</p>
                    <label for="isProject"> You recognize this is a personal project website and not a real company </label>
                    <input type="checkbox" id="isProject" name="isProject-field"></input>
                    <label for="privacyTOS"> The information provided will be sent to a secure DB, and will/can be deleted regularily </label>
                    <input type="checkbox" id="privacyTOS" name="privacyTOS-field"></input>
                    <label for="privacyTOS"> The information provided will only be used for the context of this website project </label>
                    <input type="checkbox" id="privacyTOS" name="privacyTOS-field"></input>
                </div> <hr/>
                {/* <label>Login Now</label> */}
                <input type="submit" id="submit" className="btn btn-primary" name="submit-button"></input>
                <br /><hr /><br />
                <p id="register-to-login"><b>Returning User?</b> <Link to="/login">Login here!</Link></p>
            </form>
        </div>
    );
}