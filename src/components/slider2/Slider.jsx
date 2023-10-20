import { useParams } from 'react-router-dom';
import Carousel from './carousel/Carousel';
import { imgs } from '../../assets/data';

function Slider() {
  const { id } = useParams();
  return (
    <div>
      <Carousel images={imgs[id - 1]} />
    </div>
  );
}

export default Slider;
