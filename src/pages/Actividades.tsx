import React from 'react';

const Actividades: React.FC = () => {
  return (
    <div>
      <header className="mb-5 text-center">
        <h1>Actividades</h1>
        <p className="lead">
          Propuestas diseñadas para acompañar el crecimiento integral de cada niño.
        </p>
      </header>

      <div className="row">
        {[
          {
            titulo: 'Música y expresión corporal',
            descripcion:
              'Incorporamos ritmos, canciones y movimientos que estimulan la coordinación, el oído y la expresión emocional.',
            icono: '🎶',
          },
          {
            titulo: 'Arte y creatividad',
            descripcion:
              'Pintura, modelado, dibujo y collage. Fomentamos la imaginación y la expresión artística desde temprana edad.',
            icono: '🎨',
          },
          {
            titulo: 'Juegos al aire libre',
            descripcion:
              'Contamos con espacios amplios para que los niños exploren, se relacionen y desarrollen su motricidad gruesa.',
            icono: '🌳',
          },
          {
            titulo: 'Lectura de cuentos',
            descripcion:
              'Creamos momentos mágicos para fomentar el gusto por la lectura, la atención y la imaginación.',
            icono: '📚',
          },
          {
            titulo: 'Actividades sensoriales',
            descripcion:
              'Propuestas con texturas, sonidos y materiales diversos para explorar el mundo a través de los sentidos.',
            icono: '👐',
          },
          {
            titulo: 'Educación emocional',
            descripcion:
              'Trabajamos la identificación y expresión de emociones para fortalecer la empatía y la autoestima.',
            icono: '💖',
          },
        ].map((actividad, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 text-center">
              <div className="card-body">
                <div className="display-4 mb-3">{actividad.icono}</div>
                <h5 className="card-title">{actividad.titulo}</h5>
                <p className="card-text">{actividad.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actividades;
