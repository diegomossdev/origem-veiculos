import * as React from 'react';
import { Carousel } from 'react-bootstrap';

import banner01 from '../../../assets/site/slider/banner01.jpg';
import banner02 from '../../../assets/site/slider/banner02.jpg';
import banner03 from '../../../assets/site/slider/banner03.jpg';

const Slider: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner01}
            alt="Primeiro slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner02}
            alt="Segundo slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner03}
            alt="Terceiro slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export { Slider };