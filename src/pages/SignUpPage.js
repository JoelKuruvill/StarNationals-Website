/*
SignUp Page
Created: 2024-APR-29
~
Photo by <a href="https://unsplash.com/@paulearlephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Earle</a> on <a href="https://unsplash.com/photos/mountains-cover-by-fogs-wVjd0eWNqI8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import './SignUpPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

//const bcrypt = require('bcryptjs');

export default function Register() {
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userPasswordConfirm, setPasswordConfirm] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
            document.title = "Sign-Up | Star Nationals";
    });

    const createUser = async (data) => {
        try {
          //const hashedPassword = await bcrypt.hash(data.password, 10);
      
          const requestData = {
            ...data
          };
          const res = await axios.post(`http://localhost:3001/addUser`, requestData);
          console.log(res.data)
          return res.data;
        } catch (error) {
          return error;
        }
    }

    // Validations
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const isPasswordValid = (password) => {
        const passwordPattern = /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=.*\W+).{8,}/ //RE from CSCI 2170!
        return passwordPattern.test(password);
    }
    const isPasswordMatch = (password) => {
        if (password === userPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    const formValidation = () => {
        if (isEmailValid(userEmail) && isPasswordValid(userPassword) && isPasswordMatch(userPasswordConfirm)) {
            return true
        }
        else {
            return false
        }
    }

    // Form Interactions
    function handleInputUserName(event) {
        setUserName(event.target.value); 
        document.getElementById("userName").style.color = "Green"  
    }
    function handleInputUserEmail(event) {
        const emailValue = event.target.value;
        setEmail(emailValue);
        // if (isEmailValid(emailValue)) {
        //     document.getElementById("email").style.color = "Green"
        // }
        // else {
        //     document.getElementById("email").style.color = "Red"
        // }
    }
    function handleInputPassword(event) {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        if (isPasswordValid(passwordValue)) {
            document.getElementById("password").style.color = "Green"
        }
        else {
            document.getElementById("password").style.color = "Red"
        }
    }
    function handleInputPasswordConfirm(event) {
        const passwordConfirmValue = event.target.value;
        setPasswordConfirm(passwordConfirmValue);
        if (isPasswordMatch(passwordConfirmValue)) {
            document.getElementById("confirmPassword").style.color = "Green"
        }
        else {
            document.getElementById("confirmPassword").style.color = "Red"
        }
    }
    async function handleSubmit(event){
        event.preventDefault();
        if(formValidation()) {
            const data  = await createUser({ userName, userEmail, userPassword });
            console.log(data)
            if (data.response === undefined){
                navigate("/login");
            } 
            else {
              alert(data.response.data.message);
            }
        }
    }

    return (
        <div id="signupPageBG">
            <form id="signUpPageUI" onSubmit={handleSubmit}>
                <h2>Sign Up Now!</h2> <br />
                <div>
                    <h5>Username</h5>
                    <p> Please create a username for your account </p>
                    <input type="text" id="userName" name="userName" placeholder="Name / Username" onChange={handleInputUserName} value={userName}></input>
                    <span className='text-danger'>*</span>
                </div> <hr />
                <div>
                    <h5>Email</h5>
                    <p> Please provide your email address </p>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={handleInputUserEmail} value={userEmail} required></input>
                    <span className='text-danger'>*</span><br />
                </div> <hr />
                <div>
                    <h4>Password</h4>
                    <p>Please create a password. Remeber to remeber it!</p>
                    <input type="password" id="password" name="password-field" placeholder="Password" onChange={handleInputPassword} value={userPassword} required></input>
                    <span className='text-danger'>*</span><br />
                    <input type="password" id="confirmPassword" name="password-field" placeholder="Re-Enter Password" onChange={handleInputPasswordConfirm} value={userPasswordConfirm} required></input>
                    <span className='text-danger'>*</span>
                </div> <hr />
                <div>
                    <b>Acknowledgements and Agreements</b>
                    <p>By ticking the checkboxes below..</p>
                    <label for="isProject"> You recognize this is a personal project website and not a real company </label>
                    <input type="checkbox" id="isProject" name="isProject-field" required></input>
                    <span className='text-danger'>*</span>
                    <label for="privacyTOS"> The information provided will be sent once submitted. </label>
                    <input type="checkbox" id="privacyTOS" name="privacyTOS-field" required></input>
                    <span className='text-danger'>*</span>
                    <label for="privacyTOS"> The information provided will be retained and deleted after some time. </label>
                    <input type="checkbox" id="privacyTOS" name="privacyTOS-field" required></input>
                    <span className='text-danger'>*</span>
                </div> <hr />
                {/* <label>Login Now</label> */}
                <input type="submit" id="submit" className="btn btn-primary" name="submit-button" onClick={handleSubmit}></input>
                <br /><hr /><br />
                <p id="register-to-login"><b>Returning User?</b> <Link to="/login">Login here!</Link></p>
            </form>
        </div>
    );
}