import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '~/assets/site/slider/banner1.jpg';
import banner2 from '~/assets/site/slider/banner2.jpg';
import banner3 from '~/assets/site/slider/banner3.jpg';

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Primeiro slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Segundo slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Terceiro slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
