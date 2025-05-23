import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';

const Footer = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    if (container && container._leaflet_id) {
      container._leaflet_id = null;
    }

    const etsiiLocation = [40.4394, -3.6892];
    const map = L.map('map').setView(etsiiLocation, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: '/public/MarcaMaps.png',
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
      <div id='map' className='h-124 w-full md:h-102 rounded-lg shadow-lg'></div>
    </div>

    <div className='md:w-1/2 flex flex-col items-center md:items-end gap-6'>
      <img src='/public/LogoETSII-blanco.png' alt='Logo UDII' className='h-30 mb-2' />
      <div className='text-right'>
        <div className='font-bold'>Dirección</div>
        <div>Escuela Técnica Superior de Ingenieros Industriales,</div>
        <div>José Gutiérrez Abascal 2, 28006 Madrid</div>
      </div>
      <div className='text-right'>
        <div className='font-bold'>Teléfono</div>
        <div>910 67 67 34</div>
      </div>
      <div className='text-right'>
        <div className='font-bold mb-1'>RRSS</div>
        <div className='flex gap-3 mb-2 justify-end'>
          <a href='https://x.com/industrialesupm' target='_blank' rel='noopener noreferrer'>
            <img src='/public/TwitterIcon.png' alt='Twitter' className='w-7 h-7' />
          </a>
          <a href='https://www.instagram.com/industrialesupm/' target='_blank' rel='noopener noreferrer'>
            <img src='/public/InstagramIcon.png' alt='Instagram' className='w-7 h-7' />
          </a>
          <a href='https://www.facebook.com/EscuelaIndustrialesUPM/' target='_blank' rel='noopener noreferrer'>
            <img src='/public/facebookIcon.png' alt='Facebook' className='w-7 h-7' />
          </a>
        </div>
      </div>
      <a href='https://www.industriales.upm.es/' className='underline text-white font-semibold' target='_blank' rel='noopener noreferrer'>
        Sobre nosotros
      </a>
    </div>
  </div>

  {/* ⚠️ Créditos, ya fuera del grid principal */}
  <div className='text-gray-200 text-center w-full mt-10 text-xs'>
    Sitio Web creado por{' '}
    <a
      href='https://www.linkedin.com/in/javier-herrera-137165349/'
      target='_blank'
      rel='noopener noreferrer'
      className='underline hover:text-blue-400'
    >
      Javier Herrera
    </a>{' '}
    y Sergio Berigüete
  </div>
</footer>
  );
}

export default Footer;
