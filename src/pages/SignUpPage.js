/*
SignUp Page
Created: 2024-APR-29
~
Photo by <a href="https://unsplash.com/@paulearlephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Earle</a> on <a href="https://unsplash.com/photos/mountains-cover-by-fogs-wVjd0eWNqI8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import './SignUpPage.css';
import { createUser } from '../api.js'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Register() {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userPasswordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Sign-Up | Star Nationals";

        //Password Input Field's error response indicators:
        if (isPasswordValid(userPassword))
            document.getElementById("password").style.color = "Green";
        else
            document.getElementById("password").style.color = "Red";
        
        if (isPasswordMatch(userPasswordConfirm))
            document.getElementById("confirmPassword").style.color = "Green";
        else
            document.getElementById("confirmPassword").style.color = "Red";
    }, [userPassword, userPasswordConfirm]);

    // Form Validations
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const isPasswordValid = (password) => {
        const passwordPattern = /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=.*\W+).{8,}/ //RE from CSCI 2170!
        return passwordPattern.test(password);
    }
    const isPasswordMatch = (password) => {
        if (password === userPassword)
            return true;
        else
            return false;
    }
    const formValidation = () => {
        if (isEmailValid(userEmail) && isPasswordValid(userPassword) && isPasswordMatch(userPasswordConfirm))
            return true;
        else
            return false;
    }

    // Form Interactions
    function handleInputUserName(event) {
        setUserName(event.target.value);
        document.getElementById("userName").style.color = "Green"
    }
    function handleInputUserEmail(event) {
        const emailValue = event.target.value;
        setEmail(emailValue);
        if (isEmailValid(emailValue)) {
            document.getElementById("email").style.color = "Green";
        }
        else {
            document.getElementById("email").style.color = "Red";
        }
    }
    function handleInputPassword(event) {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
    }
    function handleInputPasswordConfirm(event) {
        const passwordConfirmValue = event.target.value;
        setPasswordConfirm(passwordConfirmValue);
    }
    function showPassword() {
        /* Modified code from https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/ */
        const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        // toggle the type attribute
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        // toggle the icon
        togglePassword.classList.toggle("bi-eye");
    }
    function showPasswordConfirm() {
        /* Modified code from https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/ */
        const togglePasswordConfirm = document.querySelector("#togglePasswordConfirm");
        const confirmPassword = document.querySelector("#confirmPassword");

        // toggle the type attribute
        const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
        confirmPassword.setAttribute("type", type);
        
        // toggle the icon
        togglePasswordConfirm.classList.toggle("bi-eye");
    }

    //Form Submission
    async function handleSubmit(event) {
        event.preventDefault();
        if (formValidation()) {
            document.getElementById("submit").disabled = true;
            const data = await createUser({ userName, userEmail, userPassword });
            if (data.response === undefined) {
                alert("Registration Completed Successfully! Please login now with your new account!!")
                registrationCompletionProtocol();
                return;
            }
        }
        else {
            if (!isPasswordValid(userPassword))
                alert("Password Is not valid, please ensure it matches requires outlined.")
            else if (!isPasswordMatch(userPasswordConfirm))
                alert("Passwords do not match, please ensure that passwords provided are same.")
            else if (!isEmailValid(userEmail))
                alert("Email provided is not correctly provided. Please ensure it is provided as needed.")
            else {
                alert("Error processing registration, please try again later!")
            }

        }
    }
    function registrationCompletionProtocol() {
        navigate("/login");
        window.location.reload();
    }

    return (
        <div id="signupPageBG"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
            <form id="signUpPageUI" onSubmit={handleSubmit}>
                <h2>Sign Up Now!</h2> <br />
                <div>
                    <label for="userName"> Create your username: </label>
                    <input type="text" id="userName" name="userName" placeholder="Name / Username" onChange={handleInputUserName} value={userName} required></input>
                    <span className='text-danger'>*</span> <br/>
                    <i> Example: John </i>
                </div> <hr />
                <div>
                    <label for="email"> Email address: </label>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={handleInputUserEmail} value={userEmail} required></input>
                    <span className='text-danger'>*</span><br />
                    <i> Example: yourName@email.com </i>
                </div> <hr />
                <div>
                    <label for="passwordInputs"> Create your password. Remeber to remeber it! </label><br />
                    <div id='passwordInputs'>
                        <input type="password" id="password" name="password-field" placeholder="Password" onChange={handleInputPassword} value={userPassword} required></input>
                        <i class="passwordVisibility bi bi-eye-slash" id="togglePassword" onClick={showPassword}></i>
                        <label for="password"><span className='text-danger'>*</span></label>
                        <br />
                        <input type="password" id="confirmPassword" name="password-field" placeholder="Re-Confirm Password" onChange={handleInputPasswordConfirm} value={userPasswordConfirm} required></input>
                        <i class="passwordVisibility bi bi-eye-slash" id="togglePasswordConfirm" onClick={showPasswordConfirm}></i>
                        <label for="confirmPassword"><span className='text-danger'>*</span></label>
                    </div>
                    
                    <i> Passwords should be at minimum 8 characters long, with one upper case ('A'), one lowercase ('a'), a number ('1'), and a special character ('#'). </i>
                </div> <hr />
                <div>
                    <b>Acknowledgements and Agreements</b>
                    <p>By ticking the checkboxes below..</p>
                    <div className="Checkboxes">
                        <div>
                            <label for="isProject"> You recognize this is a personal project website and not a real company <span className='text-danger'>*</span></label>
                            <input type="checkbox" id="isProject" name="isProject-field" required></input>
                        </div>
                        <div>
                            <label for="privacyTOS_A"> The information provided will be sent once submitted. <span className='text-danger'   >*</span></label>
                            <input type="checkbox" id="privacyTOS_A" name="privacyTOS_A-field" required></input>
                        </div>
                        <div>
                            <label for="privacyTOS_B"> The information provided will be retained and deleted after some time. <span className='text-danger'>*</span></label>
                            <input type="checkbox" id="privacyTOS_B" name="privacyTOS_B-field" required></input>
                        </div>
                    </div>
                </div> <hr />
                <input type="submit" id="submit" className="btn btn-primary" name="submit-button"></input>
                <br /><hr /><br />
                <p id="register-to-login"><b>Returning User?</b> <Link to="/login">Login here!</Link></p>
            </form>
        </div>
    );
}