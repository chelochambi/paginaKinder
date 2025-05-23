import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import './styles/custom.css';

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Salas from "./pages/Salas";
import Actividades from "./pages/Actividades";
import Galeria from "./pages/Galeria";
import Noticias from "./pages/Noticias";
import Inscripciones from "./pages/Inscripciones";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/nosotros" element={<MainLayout><Nosotros /></MainLayout>} />
        <Route path="/salas" element={<MainLayout><Salas /></MainLayout>} />
        <Route path="/actividades" element={<MainLayout><Actividades /></MainLayout>} />
        <Route path="/galeria" element={<MainLayout><Galeria /></MainLayout>} />
        <Route path="/noticias" element={<MainLayout><Noticias /></MainLayout>} />
        <Route path="/inscripciones" element={<MainLayout><Inscripciones /></MainLayout>} />
        <Route path="/contacto" element={<MainLayout><Contacto /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
