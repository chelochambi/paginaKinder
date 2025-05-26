import React, { useState } from 'react';

type Nivel = 'Inicial' | 'Preescolar' | 'Sala3';

const contenidoPorNivel: Record<Nivel, { fechas: string[]; requisitos: string[]; horarios: string[] }> = {
  Inicial: {
    fechas: [
      'Apertura: 2 de septiembre de 2024',
      'Cierre: 30 de noviembre de 2024',
      'Reunión informativa: 15 de octubre de 2024',
    ],
    requisitos: [
      'Niños desde 3 años cumplidos',
      'Ficha de inscripción completada',
      'Fotocopia DNI niño/a y tutor',
      'Certificado de vacunación',
      'Informe médico',
    ],
    horarios: ['Turno mañana: 8:00 a 12:00', 'Turno tarde: 13:00 a 17:00'],
  },
  Preescolar: {
    fechas: [
      'Apertura: 10 de septiembre de 2024',
      'Cierre: 15 de diciembre de 2024',
      'Reunión informativa: 20 de octubre de 2024',
    ],
    requisitos: [
      'Niños desde 4 años cumplidos',
      'Ficha de inscripción completada',
      'Fotocopia DNI niño/a y tutor',
      'Certificado de vacunación',
      'Informe médico',
    ],
    horarios: ['Turno mañana: 8:00 a 12:00', 'Turno tarde: 13:00 a 17:00', 'Jornada extendida hasta las 18:00'],
  },
  Sala3: {
    fechas: [
      'Apertura: 1 de octubre de 2024',
      'Cierre: 20 de diciembre de 2024',
      'Reunión informativa: 5 de noviembre de 2024',
    ],
    requisitos: [
      'Niños desde 2 años cumplidos',
      'Ficha de inscripción completada',
      'Fotocopia DNI niño/a y tutor',
      'Certificado de vacunación',
      'Informe médico',
    ],
    horarios: ['Turno mañana: 8:00 a 12:00'],
  },
};

const Inscripciones: React.FC = () => {
  const [nivelActivo, setNivelActivo] = useState<Nivel>('Inicial');

  const handleChangeNivel = (nivel: Nivel) => {
    setNivelActivo(nivel);
  };

  return (
    <div>
      <header className="mb-4 text-center">
        <h1>Inscripciones</h1>
        <p className="lead">Seleccioná el nivel para conocer los detalles de inscripción.</p>
      </header>

      <ul className="nav nav-tabs mb-4 justify-content-center" role="tablist">
        {Object.keys(contenidoPorNivel).map((nivel) => (
          <li className="nav-item" key={nivel}>
            <button
              className={`nav-link ${nivel === nivelActivo ? 'active' : ''}`}
              onClick={() => handleChangeNivel(nivel as Nivel)}
              role="tab"
              aria-selected={nivel === nivelActivo}
            >
              {nivel}
            </button>
          </li>
        ))}
      </ul>

      <div role="tabpanel" aria-labelledby={`tab-${nivelActivo}`}>
        <section className="mb-4">
          <h4>🗓️ Fechas importantes</h4>
          <ul>
            {contenidoPorNivel[nivelActivo].fechas.map((fecha, i) => (
              <li key={i}>{fecha}</li>
            ))}
          </ul>
        </section>

        <section className="mb-4">
          <h4>📋 Requisitos</h4>
          <ul>
            {contenidoPorNivel[nivelActivo].requisitos.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </section>

        <section className="mb-4">
          <h4>🕘 Horarios disponibles</h4>
          <ul>
            {contenidoPorNivel[nivelActivo].horarios.map((horario, i) => (
              <li key={i}>{horario}</li>
            ))}
          </ul>
        </section>
      </div>

      <section>
        <h4>📍 Dónde realizar la inscripción</h4>
        <p>
          Podés acercarte a nuestra institución de lunes a viernes, de 8:30 a 16:30, en Calle Ejemplo 123, Ciudad.
        </p>
        <p>
          Para más información, llamanos al <strong>(011) 1234-5678</strong> o escribinos por WhatsApp.
        </p>
      </section>
    </div>
  );
};

export default Inscripciones;
