import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";

function Inscripciones() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Proceso de Inscripción</h1>
      <p className="text-center text-muted mb-5">
        Te contamos todo lo que necesitás saber para inscribir a tu hijo en nuestro jardín. 
        ¡Estamos para acompañarte en esta hermosa etapa!
      </p>
      
      <Tabs defaultActiveKey="parvulario" id="inscripciones-tabs" className="mb-3" justify>
        {/* Parvulario */}
        <Tab eventKey="parvulario" title="Parvulario">
          <h3>Parvulario</h3>
          <p>
            Nuestro nivel Parvulario está pensado para niños de 2 a 3 años, con actividades lúdicas
            que promueven su desarrollo emocional, social y motor.
          </p>
          <h5>Requisitos para la inscripción</h5>
          <ul>
            <li>Edad: 2 a 3 años cumplidos.</li>
            <li>Presentar certificado de nacimiento.</li>
            <li>Cartilla de vacunas actualizada.</li>
            <li>Entrevista familiar para conocer al niño y sus necesidades.</li>
          </ul>
          <h5>Horarios y servicios</h5>
          <p>
            El horario es de lunes a viernes de 8:00 a 12:00 hs. Contamos con servicio de desayuno y recreación al aire libre.
          </p>
          <p>Para más detalles, visitanos o contactanos.</p>
        </Tab>

        {/* Kínder */}
        <Tab eventKey="kinder" title="Kínder">
          <h3>Kínder</h3>
          <p>
            En el nivel Kínder, para niños de 4 a 5 años, trabajamos con un enfoque integral para preparar a los niños para la primaria.
          </p>
          <h5>Requisitos para la inscripción</h5>
          <ul>
            <li>Edad: 4 a 5 años cumplidos.</li>
            <li>Certificado de nacimiento y vacunas.</li>
            <li>Entrevista familiar.</li>
            <li>Recomendaciones pedagógicas previas, si las hubiera.</li>
          </ul>
          <h5>Horarios y servicios</h5>
          <p>
            De lunes a viernes de 8:00 a 14:00 hs, con comedor incluido y actividades extracurriculares.
          </p>
          <p>Estamos para ayudarte en el proceso, acercate cuando quieras.</p>
        </Tab>

        {/* Guardería */}
        <Tab eventKey="guarderia" title="Guardería">
          <h3>Guardería</h3>
          <p>
            La guardería brinda un ambiente seguro y afectivo para bebés y niños de hasta 2 años,
            cuidando cada detalle de su bienestar.
          </p>
          <h5>Requisitos para la inscripción</h5>
          <ul>
            <li>Edad: 6 meses a 2 años.</li>
            <li>Certificado de nacimiento y vacunas al día.</li>
            <li>Información médica y de alimentación.</li>
            <li>Visita previa para conocer las instalaciones.</li>
          </ul>
          <h5>Horarios y servicios</h5>
          <p>
            De lunes a viernes de 7:00 a 17:00 hs, con personal especializado y seguimiento personalizado.
          </p>
          <p>Para cualquier consulta, estamos disponibles para vos y tu familia.</p>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Inscripciones;
