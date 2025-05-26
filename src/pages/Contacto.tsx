import React, { useState } from 'react';

interface Sucursal {
  id: string;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  horario: string;
  mapaUrl: string;
}

const sucursales: Sucursal[] = [
  {
    id: 'sucursal1',
    nombre: 'Sucursal Centro',
    direccion: 'Calle Principal 123, Ciudad',
    telefono: '(011) 1234-5678',
    email: 'centro@kinder-ejemplo.com',
    horario: 'Lunes a viernes, 8:30 a 17:00',
    mapaUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0000000000005!2d-58.00000000000001!3d-34.60000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc00000000001%3A0x0000000000000000!2sCalle%20Principal%20123!5e0!3m2!1ses-419!2sar!4v0000000000000000',
  },
  {
    id: 'sucursal2',
    nombre: 'Sucursal Norte',
    direccion: 'Avenida Norte 456, Ciudad',
    telefono: '(011) 8765-4321',
    email: 'norte@kinder-ejemplo.com',
    horario: 'Lunes a viernes, 9:00 a 18:00',
    mapaUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1000000000005!2d-58.01000000000001!3d-34.61000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc00000123456%3A0x0000000000000001!2sAvenida%20Norte%20456!5e0!3m2!1ses-419!2sar!4v0000000000000001',
  },
  {
    id: 'sucursal3',
    nombre: 'Sucursal Sur',
    direccion: 'Boulevard Sur 789, Ciudad',
    telefono: '(011) 5678-1234',
    email: 'sur@kinder-ejemplo.com',
    horario: 'Lunes a viernes, 8:00 a 16:00',
    mapaUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2000000000005!2d-58.02000000000001!3d-34.62000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc00000123457%3A0x0000000000000002!2sBoulevard%20Sur%20789!5e0!3m2!1ses-419!2sar!4v0000000000000002',
  },
];

const Contacto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(sucursales[0].id);

  return (
    <div>
      <header className="mb-5 text-center">
        <h1>Contacto</h1>
        <p className="lead">Seleccioná la sucursal que prefieras para ver los datos de contacto.</p>
      </header>

      <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
        {sucursales.map((sucursal) => (
          <li className="nav-item" key={sucursal.id}>
            <button
              className={`nav-link ${activeTab === sucursal.id ? 'active' : ''}`}
              onClick={() => setActiveTab(sucursal.id)}
              role="tab"
              aria-selected={activeTab === sucursal.id}
              aria-controls={`tab-${sucursal.id}`}
              id={`tab-${sucursal.id}-button`}
            >
              {sucursal.nombre}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {sucursales.map((sucursal) => (
          <div
            key={sucursal.id}
            role="tabpanel"
            id={`tab-${sucursal.id}`}
            aria-labelledby={`tab-${sucursal.id}-button`}
            className={`tab-pane fade ${activeTab === sucursal.id ? 'show active' : ''}`}
          >
            <p><strong>Dirección:</strong> {sucursal.direccion}</p>
            <p><strong>Teléfono:</strong> {sucursal.telefono}</p>
            <p><strong>Email:</strong> {sucursal.email}</p>
            <p><strong>Horario:</strong> {sucursal.horario}</p>

            <div className="ratio ratio-16x9 mt-3">
              <iframe
                title={`Mapa de ${sucursal.nombre}`}
                src={sucursal.mapaUrl}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacto;
