function Galeria() {
  return (
    <div>
      <h2>Galería</h2>
      <p>Algunas fotos de nuestros momentos especiales.</p>

      <div className="row">
        <div className="col-md-4 mb-3">
          <img
            src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80"
            alt="Niños pintando"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4 mb-3">
          <img
            src="https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=600&q=80"
            alt="Juego al aire libre"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4 mb-3">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Taller de música"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Galeria;
