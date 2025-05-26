import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Salas from './pages/Salas';
import Actividades from './pages/Actividades';
import Galeria from './pages/Galeria';
import Noticias from './pages/Noticias';
import Inscripciones from './pages/Inscripciones';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/salas" element={<Salas />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default App;
