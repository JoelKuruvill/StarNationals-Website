/*
Navigation Bar Component
Created: 2024-APR-29
*/
export function Nav() {
    return (
        <>
        <div class="col-md-2 mb-2 mb-md-0">
          <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
            <p><b>Star Nationals</b><br/>A Company!</p>
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" class="nav-link px-2">Features</a></li>
          <li><a href="#" class="nav-link px-2">Pricing</a></li>
          <li><a href="#" class="nav-link px-2">FAQs</a></li>
          <li><a href="#" class="nav-link px-2">About</a></li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">Login</button>
          <button type="button" class="btn btn-primary">Sign-up</button>
        </div>
        </>
    ); 
}