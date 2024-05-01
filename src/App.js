import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUsPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
       </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
