/* User Profile Page */
/* Created: 2025-Mar-20 */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import mainImage from '../assets/Star Nationals Inc Official Logo 2016.png';
import './UserProfilePage.css';
// import { } from '../api';

export default function AboutUs() {

    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user_info'));

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
            <p><b> ERROR: </b><br/> You are not logged in!</p>
            <a> Login Now </a>
        </div>)
        navigate("/login");
    }
}