import React from 'react';

const Salas: React.FC = () => {
  return (
    <div>
      <header className="mb-5 text-center">
        <h1>Nuestras Salas</h1>
        <p className="lead">Cada etapa del crecimiento con su propio espacio y enfoque pedagógico.</p>
      </header>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Sala Cuna</h4>
              <p className="card-text">
                Para bebés de 6 a 18 meses. Un ambiente cálido y seguro donde se promueve el vínculo afectivo, la estimulación temprana y el desarrollo motor.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Sala de 2 años</h4>
              <p className="card-text">
                Promovemos la autonomía, la exploración sensorial y el lenguaje a través del juego libre, la música y las rutinas diarias.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Sala de 3 años</h4>
              <p className="card-text">
                Enfocada en el desarrollo emocional y social, con actividades que favorecen el juego compartido, la expresión corporal y la creatividad.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Sala de 4 años</h4>
              <p className="card-text">
                Se refuerzan las habilidades cognitivas, la comprensión de normas y la iniciación a la lectoescritura de forma lúdica y progresiva.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="card-title">Sala de 5 años</h4>
              <p className="card-text">
                Preparamos a los niños para su ingreso a primaria mediante propuestas pedagógicas integradas y el fortalecimiento de su autoestima y autonomía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salas;
