/*
Login Page
Created: 2024-APR-29
~
Photo by <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a> on <a href="https://unsplash.com/photos/white-sticks-on-black-textile-rwVSwdGN3o8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import "./LoginPage.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Login() {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login | Star Nationals";
    });

    const loginUser = async (data) => {
        try {
          //const hashedPassword = await bcrypt.hash(data.password, 10);
      
          const requestData = {
            ...data
          };
          const res = await axios.post(`http://localhost:3001/login`, requestData);
          console.log(res.data)
          if (data.response === undefined){
            alert('Login successful');
            // localstorage referred from w3schools
            // URL: https://www.w3schools.com/jsref/prop_win_localstorage.asp
            // Date Accessed: 07/25/20230
            localStorage.setItem('user_info', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', true);
            navigate('/');
            window.location.reload();
            return;
          }
    
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
        if (isEmailValid(userEmail) && isPasswordValid(userPassword)) {
            return true
        }
        else {
            return false
        }
    }

    // Form Interactions
    function handleInputUserEmail(event) {
        const emailValue = event.target.value;
        setEmail(emailValue);
        if (isEmailValid(emailValue)) {
            document.getElementById("email").style.color = "Green"
        }
        else {
            document.getElementById("email").style.color = "Red"
        }
    }
    function handleInputUserPassword(event) {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        if (isPasswordValid(passwordValue)) {
            document.getElementById("password").style.color = "Green"
        }
        else {
            document.getElementById("password").style.color = "Red"
        }
    }
    
    async function handleSubmit(event){
        event.preventDefault();
        if(formValidation()) {
            const data  = await loginUser({ userEmail, userPassword });
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
        <div id="loginPageBG">
            <form id="loginPageUI" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {/* <label fo>Email</label> */}
                <input type="text" id="email" name="email" placeholder="Email" onChange={handleInputUserEmail}></input>
                <br/>
                {/* <label>Password</label> */}
                <input type="password" id="password" name="password-field"  placeholder="Password" onChange={handleInputUserPassword}></input>
                {/* <label>Login Now</label> */}
                <input type="submit" id="submit" className="btn btn-primary" name="submit-button" onClick={handleSubmit}></input>
                <br/><hr/><br/>
                <p id="login-to-register"><b>New User?</b> <Link to="/register">Signup here!</Link></p>
            </form>
        </div>
    );
}