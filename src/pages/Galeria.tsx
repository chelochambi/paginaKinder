import React from 'react';

const temas = [
  'kindergarten',
  'kids,art',
  'children,play',
  'child,painting',
  'school,toys',
  'education,fun',
  'learning,colors',
  'children,group',
  'reading,kids',
];

const Galeria: React.FC = () => {
  return (
    <div>
      <header className="mb-5 text-center">
        <h1>Galería</h1>
        <p className="lead">
          Un vistazo a nuestro entorno lleno de alegría, creatividad y aprendizaje.
        </p>
      </header>

      <div className="row">
        {temas.map((tema, index) => (
          <div className="col-sm-6 col-md-4 mb-4" key={index}>
            <div className="card shadow-sm">
              <img
                src={`https://source.unsplash.com/600x400/?${tema}`}
                alt={`Galería temática ${tema}`}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '220px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
