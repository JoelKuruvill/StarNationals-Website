/*
Footer Component
Created: 2024-APR-29
*/
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import "./Footer.css";
//import 'font-awesome/css/font-awesome.min.css'; /* https://stackoverflow.com/questions/42522233/react-fontawesome-not-displaying-icons */

export function Footer() {
    return (
        <footer className="footer container pt-5">
            <div className="row">
            <div className="col mb-3">
                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <h1>Star Nationals</h1>
                </a>
                <p className="text-body-secondary">&copy; 2012-2024</p>
            </div>
            <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link to="/projects" className="nav-link p-0 text-body-secondary">Projects</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/about" className="nav-link p-0 text-body-secondary">About Us</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <HashLink smooth to='/about#careers' className="nav-link p-0 text-body-secondary"> Careers </HashLink>
                    </li>
                </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
                <h5>Portfolio</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://web.cs.dal.ca/~kuruvilla/" className="nav-link p-0 text-body-secondary"
                 target='_blank' rel="noreferrer">Portfolio Home  <i className="fa fa-external-link" /></a></li>
                <li className="nav-item mb-2"><a href="https://web.cs.dal.ca/~kuruvilla/My_Coding.html" className="nav-link p-0 text-body-secondary"
                 target='_blank' rel="noreferrer">Portfolio <i className="fa fa-external-link" /></a></li>
                </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
                <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
            </div>
            </div>
        </footer>
    )
}