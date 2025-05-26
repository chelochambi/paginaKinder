import React from 'react';

interface Noticia {
  titulo: string;
  fecha: string;
  resumen: string;
  imagen: string;
}

const noticias: Noticia[] = [
  {
    titulo: 'Semana de la Lectura',
    fecha: '10 de mayo de 2025',
    resumen:
      'Durante toda la semana recibimos a familias que compartieron cuentos con los niños. ¡Gracias por sumarse!',
    imagen: 'reading,kids',
  },
  {
    titulo: 'Nueva Sala de Psicomotricidad',
    fecha: '1 de abril de 2025',
    resumen:
      'Inauguramos un nuevo espacio con materiales para el desarrollo motor y juegos cooperativos.',
    imagen: 'child,play',
  },
  {
    titulo: 'Taller de Arte con Padres',
    fecha: '15 de marzo de 2025',
    resumen:
      'Padres y niños compartieron una mañana creativa llena de pintura, música y risas.',
    imagen: 'kids,art',
  },
];

const Noticias: React.FC = () => {
  return (
    <div>
      <header className="mb-5 text-center">
        <h1>Noticias</h1>
        <p className="lead">Enterate de las últimas actividades y novedades del kínder.</p>
      </header>

      <div className="row">
        {noticias.map((noticia, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={`https://source.unsplash.com/600x400/?${noticia.imagen}`}
                alt={noticia.titulo}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{noticia.titulo}</h5>
                <p className="card-text">{noticia.resumen}</p>
              </div>
              <div className="card-footer text-muted text-end">
                <small>{noticia.fecha}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
