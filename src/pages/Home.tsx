import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <header className="text-center mb-5">
        <h1 className="display-4">Bienvenidos al Kínder "Pequeños Exploradores"</h1>
        <p className="lead">Un espacio de aprendizaje, juego y crecimiento para tus niños.</p>
      </header>

      <section className="row">
        <div className="col-md-6">
          <img
            src="/images/kinder-play.jpg"
            alt="Niños jugando en el kínder"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>Nuestra misión</h2>
          <p>
            En "Pequeños Exploradores", fomentamos el desarrollo integral de los niños mediante
            actividades educativas, recreativas y artísticas, garantizando un ambiente seguro y
            afectivo.
          </p>
          <ul>
            <li>Educación personalizada y afectuosa</li>
            <li>Actividades lúdicas y creativas</li>
            <li>Instalaciones modernas y seguras</li>
            <li>Equipo docente capacitado y comprometido</li>
          </ul>
        </div>
      </section>

      <section className="mt-5 text-center">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Porque entendemos que cada niño es único y merece un espacio donde pueda crecer feliz y
          acompañado.
        </p>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Seguridad</h5>
                <p className="card-text">
                  Instalaciones adaptadas con estrictos protocolos para cuidar a nuestros niños.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Aprendizaje</h5>
                <p className="card-text">
                  Metodologías activas y participativas que despiertan la curiosidad y creatividad.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Comunidad</h5>
                <p className="card-text">
                  Fomentamos vínculos sanos entre niños, familias y docentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
