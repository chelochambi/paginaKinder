import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
      <NavLink className="navbar-brand" to="/">Kínder</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              end
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/nosotros" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/salas" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Salas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/actividades" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Actividades
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/galeria" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Galería
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/noticias" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Noticias
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/inscripciones" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Inscripciones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
