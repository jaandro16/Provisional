import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // ✅ Importar CSS al principio
import L from 'leaflet'; // ✅ Usar import, no require

const Footer = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    if (container && container._leaflet_id) {
      container._leaflet_id = null; // Evita error al recargar
    }

    const etsiiLocation = [40.4394, -3.6892];
    const map = L.map('map').setView(etsiiLocation, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: '/icons/marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    const marker = L.marker(etsiiLocation, { icon: customIcon }).addTo(map);
    marker.bindPopup(
      '<b>ETSII UPM</b><br>Escuela Técnica Superior de Ingenieros Industriales'
    ).openPopup();

    map.scrollWheelZoom.disable();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <footer className='w-full bg-blue-800 py-12 text-white'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between px-4'>
        <div className='md:w-1/2 mb-6 md:mb-0 flex items-center justify-center'>
          <div id='map' className='h-84 w-full md:h-102 rounded-lg shadow-lg'></div>
        </div>

        <div className='md:w-1/2 flex flex-col items-center md:items-end gap-6'>
          <img src='/public/LogoETSII-blanco.png' alt='Logo UDII' className='h-20 mb-2' />
          <div className='text-right'>
            <div className='font-bold'>Dirección</div>
            <div>Escuela Técnica Superior de Ingenieros Industriales,</div>
            <div>José Gutiérrez Abascal 2, 28006 Madrid</div>
          </div>
          <div className='text-right'>
            <div className='font-bold'>Teléfono</div>
            <div>910 67 67 343</div>
          </div>
          <div className='text-right'>
            <div className='font-bold mb-1'>RRSS</div>
            <div className='flex gap-3 mb-2 justify-end'>
              <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/icons/twitter.svg' alt='Twitter' className='w-7 h-7' />
              </a>
              <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/icons/instagram.svg' alt='Instagram' className='w-7 h-7' />
              </a>
              <a href='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/icons/facebook.svg' alt='Facebook' className='w-7 h-7' />
              </a>
            </div>
          </div>
          <a href='/sobre-nosotros' className='underline text-white font-semibold'>
            Sobre nosotros
          </a>
          <div className='text-xs text-gray-200 text-right mt-2'>
            Sitio Web creado por Javier Herrera y Sergio Berigüete
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
