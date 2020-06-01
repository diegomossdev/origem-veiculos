import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Carousel,
  ListGroup,
  Spinner
} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import ReactHtmlParser from 'react-html-parser'; 

import api from '../../../services/api';

import {
  Subtitle,
  ListGroupItemInside,
} from '../../../components/Site';

import noImg from '../../../assets/no-img.jpg';

interface ThumbImgData {
  id: number;
  url: string;
  path: string;
  name: string;
}

interface VehicleData {
  vehicle: [
    {
      brand: string;
      description: string;
      doors: string;
      fuel: string;
      id: number;
      mileage: string;
      model: string;
      optionals: string;
      short_description: string;
      slug: string;
      thumbimage: ThumbImgData | null;
      title: string;
      transmission: string;
      value: string;
      value_per: string;
      year_fab: string;
      year_mod: string;
    }
  ];
  images: [
    {
      id: number;
      url: string;
      path: string;
    }
  ]
}

interface imagesCarData {
  id: number;
  url: string;
}

const Seminovo: React.FC = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = React.useState<VehicleData>({ 
    vehicle:[{
      brand: '',
      description: '',
      doors: '',
      fuel: '',
      id: 0,
      mileage: '',
      model: '',
      optionals: '',
      short_description: '',
      slug: '',
      thumbimage: null,
      title: '',
      transmission: '',
      value: '',
      value_per: '',
      year_fab: '',
      year_mod: '',
    }], 
    images:[{
      id: 0,
      url: '',
      path: '',
    }] 
  });
  const [loading, setLoading] = React.useState(false);

  const [imagesCar, setImagesCar] = React.useState<[imagesCarData]>([
    {
      id: 0,
      url: '',
    }
  ]);

  React.useEffect(() => {
    window.scrollTo(0, 0)

    async function getVehicleDetails() {
      setLoading(true);
      const {data} = await api.get(`vehicles/${id}`);

      setVehicle(data);
      setLoading(false);
    };

    getVehicleDetails();
  }, []);
  
  const car = vehicle?.vehicle[0];
  const images = vehicle?.images;

  React.useEffect(() => {
    console.log(imagesCar)
  }, [imagesCar]);

  React.useEffect(() => {
    let imgs: any = []
    let thumb: any = car?.thumbimage
    if(thumb !== null) {
      imgs.push(thumb)
    }

    images && images.forEach(element => {
      let newImgs = {}
      newImgs = {
        id: element.id + 1,
        url: element.url,
        path: element.path
      }
      imgs.push(newImgs)
    })

    if(imgs[0]) {
      setImagesCar(imgs)
    }
  }, [car, images])

  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Subtitle
        subtitle={car?.title}
        description={car?.short_description}
      />
      <div className="page page-seminovo">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              {loading && <Spinner animation="border" variant="primary" />}
              <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                {imagesCar[0].url !== '' ? imagesCar?.map((image) => (
                  <Carousel.Item key={image.id}>
                    <img
                      className="d-block w-100"
                      src={image.url}
                      alt={`slide-${id}`}
                    />
                  </Carousel.Item>
                )) 
                : <img
                    className="d-block w-100"
                    src={noImg}
                    alt="no-image"
                  />}
              </Carousel>

              <div className="images-car">
                <Row>
                  {loading && <Spinner animation="border" variant="primary" />}
                  {imagesCar[0].url !== '' ? imagesCar?.map((image, index) => (
                  <Col key={image.id} xs={3}>
                    <button onClick={() => handleSelect(index)}>
                      <img
                        src={image.url}
                        alt={`img-${id}`}
                      />
                    </button>
                  </Col>
                  )) : null}
                </Row>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <h1 className="text-transoform-uppercase">
                {`${car?.brand} ${car?.model} ${car?.year_fab}`}
              </h1>
              <ListGroup style={{ marginTop: 15 }}>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='Marca'
                    subName={car?.brand}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='Modelo'
                    subName={car?.model}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='Fab/mod'
                    subName={`${car?.year_fab}/${car?.year_mod}`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='Portas'
                    subName={car?.doors}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='Câmbio'
                    subName={car?.transmission}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='Combustível'
                    subName={car?.fuel}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ListGroupItemInside
                    name='km'
                    subName={car?.mileage === '' ? 'Consultar' : `${car?.mileage} km`}
                  />
                </ListGroup.Item>

                <div style={{ marginTop: 15 }}>
                  <NumberFormat
                    value={car?.value}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    prefix={'R$'}
                    renderText={value => <h1 className={`value ${car?.value_per ? 'value-before' : null}`}>
                      {value}
                    </h1>}
                  />

                  {car?.value_per &&
                  <NumberFormat
                    value={car?.value_per}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    prefix={'R$'}
                    renderText={value => <h1 className="value">{value}</h1>}
                  />}
                </div>

                <ListGroup.Item>
                  <div className="description">
                    <h4>Descrições gerais</h4>
                    <div>{ ReactHtmlParser (car?.description) }</div>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item style={{ marginTop: 15 }}>
                  <div className="optionals">
                    <h4>Opcionais</h4>
                    <div>{ ReactHtmlParser (car?.optionals) }</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="call-to-action-seminovo">
        <Container>
          <div style={{ textAlign: 'center' }}>
            <h1>
              Agende uma visita
            </h1>
            <p>
              Entre em contato e agende uma visita para ver esse lindo carro.
            </p>
            <Link to="/contato" className="btn btn-origem-border">
              Contato
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export { Seminovo };