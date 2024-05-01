/*
Navigation Bar Component
Created: 2024-MAY-1
*/
import h1 from '../pages/assets/Gaming - Minecraft (4-25-2020).png';
import h2 from '../pages/assets/My Photography (5-10-2020).jpg';
import h3 from '../pages/assets/Teal Futuristic Technology Facebook Cover.png';

export default function Homepage() {
    return(
        <>
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
      </>
    );
}