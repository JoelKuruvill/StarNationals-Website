/*
Navigation Bar Component
Created: 2024-MAY-1
*/
import h1 from '../assets/Gaming - Minecraft (4-25-2020).png';
import h2 from '../assets/My Photography (5-10-2020).jpg';
import h3 from '../assets/Teal Futuristic Technology Facebook Cover.png';

export default function Homepage() {
    return(
      <main className="row">
        <div className="hero-image">{/* Homepage Main image */}</div>
        <div className="col-lg-4">
          <img src={h1} width={140} height={140} className='heading-img' alt='Homepage Highlight Icon - Gaming'></img>
          <h2 className="fw-normal">Gaming</h2>
          <p>A leading developer of AAA games and supporter of indie developers</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img src={h2} width={140} height={140} className='heading-img' alt='Homepage Highlight Icon - Construction'></img>
          <h2 className="fw-normal">Construction</h2>
          <p>A keen investor of construction projects around the world</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <img src={h3} width={140} height={140} className='heading-img' alt='Homepage Highlight Icon - Business Analytics'></img>
          <h2 className="fw-normal">Business Analytics</h2>
          <p>Cutting edge innovation in business analysis and intelligence</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
      </main>
    );
}