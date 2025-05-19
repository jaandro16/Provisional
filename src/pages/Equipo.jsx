import Presentacion from '../components/Presentacion';
import EquipoPage from '../components/EquipoPage';

function Home() {
  return (
    <div className='flex flex-col'>
      <Presentacion />
      <Noticias />
      <Investigacion />
      <ImageOverlay />
    </div>
  );
}

export default Home;
