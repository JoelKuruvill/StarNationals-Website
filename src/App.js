import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from './pages/components/Nav';
import h1 from './Gaming - Minecraft (4-25-2020).png';
import h2 from './My Photography (5-10-2020).jpg';
import h3 from './Teal Futuristic Technology Facebook Cover.png';

function App() {
  return (
    <div className="App">
      <header class="App-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 m-3 mb-4 border-bottom">
        <Nav />
      </header>
      <div class="hero-image">{/* Homepage Main image */}</div>
      <main class="row">
        <div class="col-lg-4">
          <img src={h1} width={140} height={140} className='heading-img'></img>
          <h2 class="fw-normal">Gaming</h2>
          <p>A leading developer of AAA games and supporter of indie developers</p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <img src={h2} width={140} height={140} className='heading-img'></img>
          <h2 class="fw-normal">Construction</h2>
          <p>A keen investor of construction projects around the world</p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div class="col-lg-4">
          <img src={h3} width={140} height={140} className='heading-img'></img>
          <h2 class="fw-normal">Business Analytics</h2>
          <p>Cutting edge innovation in business analysis and intelligence</p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
      </main>
      <footer class="container pt-5">
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
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Projects</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Portfolio</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="https://web.cs.dal.ca/~kuruvilla/" class="nav-link p-0 text-body-secondary">Portfolio Home</a></li>
              <li class="nav-item mb-2"><a href="https://web.cs.dal.ca/~kuruvilla/My_Coding.html" class="nav-link p-0 text-body-secondary">Portfolio</a></li>
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
    </div>
  );
}

export default App;
