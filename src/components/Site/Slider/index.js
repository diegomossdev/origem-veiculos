import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import bg1 from '../../../assets/site/slider/bg1.jpg';
import bg2 from '../../../assets/site/slider/bg2.jpg';

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
            src={bg1}
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
            src={bg2}
            alt="Segundo slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
