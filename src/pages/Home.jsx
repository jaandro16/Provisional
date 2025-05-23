import Presentacion from '../components/Presentacion';
import Noticias from '../components/Noticias';
import Investigacion from '../components/Investigacion';
import ImageOverlay from '../components/ImageOverlay';
import DocenciaSection from './Docencia';

function Home() {
  return (
    <div className='flex flex-col'>
      <Presentacion />
      <Noticias />
      <Investigacion />
      <ImageOverlay />
      <DocenciaSection />
    </div>
  );
}

export default Home;
