import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const equipo = [
  {
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    area: "Parvulario",
  },
  {
    foto: "https://randomuser.me/api/portraits/men/46.jpg",
    area: "Kínder",
  },
  {
    foto: "https://randomuser.me/api/portraits/women/47.jpg",
    area: "Guardería",
  },
  {
    foto: "https://randomuser.me/api/portraits/men/48.jpg",
    area: "Todos",
  },
  {
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    area: "Parvulario",
  },
  {
    foto: "https://randomuser.me/api/portraits/men/46.jpg",
    area: "Kínder",
  },
  {
    foto: "https://randomuser.me/api/portraits/women/47.jpg",
    area: "Guardería",
  },
  {
    foto: "https://randomuser.me/api/portraits/men/48.jpg",
    area: "Todos",
  },
];

function Nosotros() {
  return (
    <Container className="my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Nuestro Equipo</h1>
        <p className="lead text-muted">
          Profesionales dedicados a cuidar y educar a tus hijos en todas las etapas del desarrollo infantil.
        </p>
      </header>

      <Row className="justify-content-center">
        {equipo.map(({ foto, area }, index) => (
          <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4">
            <Image
              src={foto}
              roundedCircle
              fluid
              alt={`Equipo área ${area}`}
              style={{ width: "150px", height: "150px", objectFit: "cover", border: "4px solid #0d6efd" }}
            />
            <p className="text-primary mt-3 fw-semibold">{area}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Nosotros;
