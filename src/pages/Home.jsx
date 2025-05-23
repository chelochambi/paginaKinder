import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="my-5">
      {/* Header visual */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Bienvenidos a Kínder Arcoíris</h1>
        <p className="lead text-muted">
          Donde tus hijos aprenden, juegan y crecen felices en un ambiente seguro y amoroso.
        </p>
      </header>

      {/* Carrusel de imágenes */}
      <Carousel className="mb-5 shadow rounded">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
            alt="Niños jugando en jardín"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Juegos al aire libre</h5>
            <p>Fomentamos la creatividad y la actividad física todos los días.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
            alt="Niños pintando"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Actividades artísticas</h5>
            <p>Desarrollamos habilidades y autoestima a través del arte.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
            alt="Clase en aula"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Educación personalizada</h5>
            <p>Atención individualizada para que cada niño alcance su máximo potencial.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Valores / ventajas */}
      <section className="mb-5">
        <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
        <Row>
          <Col md={4} className="text-center mb-4">
            <i className="bi bi-people-fill" style={{ fontSize: "3rem", color: "#0d6efd" }}></i>
            <h4 className="mt-3">Personal Capacitado</h4>
            <p>Educadores profesionales que aman trabajar con niños y conocen sus necesidades.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <i className="bi bi-shield-lock-fill" style={{ fontSize: "3rem", color: "#0d6efd" }}></i>
            <h4 className="mt-3">Ambiente Seguro</h4>
            <p>Instalaciones protegidas y supervisadas para que los niños estén siempre seguros.</p>
          </Col>
          <Col md={4} className="text-center mb-4">
            <i className="bi bi-heart-fill" style={{ fontSize: "3rem", color: "#0d6efd" }}></i>
            <h4 className="mt-3">Atención Personalizada</h4>
            <p>Nos enfocamos en las necesidades y el desarrollo único de cada niño.</p>
          </Col>
        </Row>
      </section>

      {/* Llamado a la acción */}
      <section className="text-center">
        <h3>¿Querés inscribir a tu hijo?</h3>
        <p className="mb-4">Contactanos hoy mismo para reservar un lugar en nuestro kínder.</p>
        <Button href="/inscripciones" size="lg" variant="primary">
          Inscripciones Abiertas
        </Button>
      </section>
    </Container>
  );
}

export default Home;
