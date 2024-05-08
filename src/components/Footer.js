/*
Footer Component
Created: 2024-APR-29
*/
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";
//import 'font-awesome/css/font-awesome.min.css'; /* https://stackoverflow.com/questions/42522233/react-fontawesome-not-displaying-icons */

export function Footer() {
    return (
        <footer class="footer container pt-5">
            <div class="row">
            <div class="col mb-3">
                <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                <h1>Star Nationals</h1>
                </a>
                <p class="text-body-secondary">&copy; 2012-2024</p>
            </div>
            <div class="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                        <Link to="/projects" class="nav-link p-0 text-body-secondary">Projects</Link>
                    </li>
                    <li class="nav-item mb-2">
                        <Link to="/faq" class="nav-link p-0 text-body-secondary">FAQs</Link>
                    </li>
                    <li class="nav-item mb-2">
                        <Link to="/about" class="nav-link p-0 text-body-secondary">About Us</Link>
                    </li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>Portfolio</h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://web.cs.dal.ca/~kuruvilla/" class="nav-link p-0 text-body-secondary"
                 target='_blank'>Portfolio Home  <i className="fa fa-external-link" /></a></li>
                <li class="nav-item mb-2"><a href="https://web.cs.dal.ca/~kuruvilla/My_Coding.html" class="nav-link p-0 text-body-secondary"
                 target='_blank'>Portfolio <i className="fa fa-external-link" /></a></li>
                </ul>
            </div>
            <div class="col-md-5 offset-md-1 mb-3">
                <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                    <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
            </div>
            </div>
        </footer>
    )
}