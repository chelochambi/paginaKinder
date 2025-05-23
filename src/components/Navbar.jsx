import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Kínder</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/salas">Salas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/actividades">Actividades</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/galeria">Galería</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/noticias">Noticias</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/inscripciones">Inscripciones</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
