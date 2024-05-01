import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from './pages/components/Nav';
import Homepage from './pages/Homepage';
import { Footer } from './pages/components/Footer';

function App() {
  return (
    <div className="App">
      <header class="App-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 m-3 mb-4 border-bottom">
       <Nav></Nav>
      </header>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
