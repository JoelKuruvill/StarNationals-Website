import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/Nav'; //Component Imports
import { Footer } from './components/Footer';

import Homepage from './pages/Homepage'; //Page Imports
import AboutUs from './pages/AboutUsPage';
import Login from './pages/LoginPage';
import Projects from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorsPage';
import Register from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
       </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
