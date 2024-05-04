/*
Navigation Bar Component
Created: 2024-APR-29
*/
import logo from '../assets/Star Nationals Inc Logo 2016.jpg';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export function Nav() {
    return (
      <header class="App-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 m-3 border-bottom"> 
        <div class="col-md-2 mb-2 mb-md-0" id='NavHome'>
          <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={logo} id="navLogo"/>
            <p><b>Star Nationals</b><br/>A Company!</p>
          </a>
        </div>

        <nav className='main-nav'>
          <ul class="nav justify-content-center mb-md-0">
            <li>
              <NavLink to="/" class="nav-link px-2 link-secondary">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" class="nav-link px-2">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/faq" class="nav-link px-2">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/about" class="nav-link px-2">About Us</NavLink>
            </li>
          </ul>
        </nav>

        <div class="user-auth">
          <button type="button" class="btn btn-outline-primary me-2">
            <Link to="/login" class="nav-link px-2">Login</Link>
          </button>
          <button type="button" class="btn btn-primary">
            <Link to="/register" class="nav-link px-2">Sign up</Link>
          </button>
        </div>
      </header>
    );
}