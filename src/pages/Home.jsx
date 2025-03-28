import Presentacion from '../components/Presentacion';
import Noticias from '../components/Noticias';
import Investigacion from '../components/Investigacion';
import ImageOverlay from '../components/ImageOverlay';

function Home() {
  return (
    <div className='flex flex-col'>
      {/* <Hero /> */}
      <Presentacion />
      <Noticias />
      <Investigacion />
      <ImageOverlay />
    </div>
  );
}

export default Home;
