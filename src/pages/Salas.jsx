function Salas() {
  return (
    <div>
      <h2>Nuestras Salas</h2>
      <p>Ofrecemos espacios para distintas edades, adaptados a las necesidades de cada niño.</p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
              className="card-img-top"
              alt="Sala Lactantes"
            />
            <div className="card-body">
              <h5 className="card-title">Sala Lactantes</h5>
              <p className="card-text">Para niños de 6 meses a 1 año, con atención personalizada.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1532619187604-5590f49432ea?auto=format&fit=crop&w=600&q=80"
              className="card-img-top"
              alt="Sala 1 a 2 años"
            />
            <div className="card-body">
              <h5 className="card-title">Sala 1 a 2 años</h5>
              <p className="card-text">Actividades para estimular el desarrollo psicomotor.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba0d3aa6f8?auto=format&fit=crop&w=600&q=80"
              className="card-img-top"
              alt="Sala 3 a 5 años"
            />
            <div className="card-body">
              <h5 className="card-title">Sala 3 a 5 años</h5>
              <p className="card-text">Preparación para la etapa escolar, con énfasis en la creatividad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salas;
