import React from 'react';

const Nosotros: React.FC = () => {
  return (
    <div>
      <header className="mb-5 text-center">
        <h1>Sobre Nosotros</h1>
        <p className="lead">
          Conoce la historia, valores y el equipo que hace posible nuestro kínder.
        </p>
      </header>

      <section className="mb-5">
        <h2>Nuestra Historia</h2>
        <p>
          Fundado en 2010, el Kínder "Pequeños Exploradores" nació con la visión de brindar un
          espacio cálido y educativo para los niños de nuestra comunidad. Desde entonces, hemos
          crecido gracias a la confianza de las familias y el compromiso de nuestro equipo docente.
        </p>
      </section>

      <section className="mb-5">
        <h2>Valores que nos guían</h2>
        <ul>
          <li>Respeto y cariño por cada niño</li>
          <li>Aprendizaje a través del juego</li>
          <li>Trabajo en equipo y colaboración</li>
          <li>Transparencia y comunicación abierta con las familias</li>
          <li>Innovación educativa constante</li>
        </ul>
      </section>

      <section>
  <h2>Nuestro Equipo</h2>
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 text-center">
        <img
          src="/images/equipo/maria.jpg"
          className="card-img-top rounded-circle mx-auto mt-3"
          alt="María Pérez"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">María Pérez</h5>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 text-center">
        <img
          src="/images/equipo/juan.jpg"
          className="card-img-top rounded-circle mx-auto mt-3"
          alt="Juan López"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">Juan López</h5>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 text-center">
        <img
          src="/images/equipo/ana.jpg"
          className="card-img-top rounded-circle mx-auto mt-3"
          alt="Ana Gómez"
          style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">Ana Gómez</h5>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Nosotros;
