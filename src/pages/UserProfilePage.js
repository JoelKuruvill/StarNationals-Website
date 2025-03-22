/* User Profile Page */
/* Created: 2025-Mar-20 */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';

// import mainImage from '../assets/Star Nationals Inc Official Logo 2016.png';
import './UserProfilePage.css';
// import { } from '../api';

export default function AboutUs() {

    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user_info'));

    useEffect(() => {
        document.title = "Profile | Star Nationals";
    });    

    function redirectUser() {
        navigate('/login');
    }

    if (localStorage.getItem("isLoggedIn")) {
        return (
            <div>
                <p> Welcome Back {userData.userName}! </p>
            </div>
        );
    } 
    else {
        return (        
        <div>
            <p><b> ERROR: </b><br/> You are not logged in! </p>
            <p> You will be redirected to login page momentarily.. </p>
            {/* https://www.npmjs.com/package/react-countdown */}
            <Countdown date={Date.now() + 5000} onComplete={redirectUser}>
            </Countdown>
        </div>)
    }
}