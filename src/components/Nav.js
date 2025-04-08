/*
Navigation Bar Component
Created: 2024-APR-29
*/
import logo from '../assets/Star Nationals Inc Logo 2016.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Nav.css';

export function Nav() {
  const navigate = useNavigate();
  
  function signOut () {
    try {
      localStorage.clear();
      navigate("/");
      alert("Successfully Logged Out!");
    } 
    catch (error) {
      alert("Error Logging Out: ", error);
    }
  }

  if (localStorage.getItem("isLoggedIn")) {
    return (
      <header className="App-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 m-3 border-bottom">
        <div className="col-md-2 mb-2 mb-md-0" id='NavHome'>
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={logo} id="navLogo" alt='Star Nationals Official Logo' />
            <p><b>Star Nationals</b><br />A Company!</p>
          </a>
        </div>
        <nav className='main-nav'>
          <ul className="nav justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 link-secondary">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link px-2">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="nav-link px-2">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link px-2">About Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="user-auth">
          <button type="button" className="btn btn-outline-primary me-2">
            <Link to="/profile" className="nav-link px-2">Welcome {JSON.parse(localStorage.getItem('user_info'))['userName']}!</Link>
          </button>
          <button type="button" className="btn btn-primary">
            <Link to="/" className="nav-link px-2" onClick={signOut}>Sign Out</Link>
          </button>
        </div>
      </header>
    );
  } 
  else {
    return (
      <header className="App-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 m-3 border-bottom">
        <div className="col-md-2 mb-2 mb-md-0" id='NavHome'>
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img src={logo} id="navLogo" alt='Star Nationals Official Logo' />
            <p><b>Star Nationals</b><br />A Company!</p>
          </a>
        </div>
        <nav className='main-nav'>
          <ul className="nav justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 link-secondary">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link px-2">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="nav-link px-2">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link px-2">About Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="user-auth">
          <button type="button" className="btn btn-outline-primary me-2">
            <Link to="/login" className="nav-link px-2">Login</Link>
          </button>
          <button type="button" className="btn btn-primary">
            <Link to="/register" className="nav-link px-2">Sign up</Link>
          </button>
        </div>
      </header>
    );
  }
}