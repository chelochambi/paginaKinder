function Contacto() {
  return (
    <div>
      <h2>Contacto</h2>
      <p>Podés encontrarnos en:</p>
      <address>
        Calle Falsa 123, Ciudad, País<br />
        Teléfono: +54 9 11 1234-5678<br />
        Email: contacto@kinderpequenos.com
      </address>

      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
