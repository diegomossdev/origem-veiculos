import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SiteContent from '~/pages/Site/_layout/SiteContent';
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

import Subtitle from '~/components/Site/Subtitle';
import ListGroupItemInside from '~/components/Site/ListGroupItemInside';

import { useDispatch, useSelector } from 'react-redux';
import { getVehicleDetailRequest } from '~/store/modules/vehicles/actions';

export default function Seminovo(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const loading = useSelector(state => state.vehicles.loading)
  const { vehicle } = useSelector(state => state.vehicles)
  const [imagesCar, setImagesCar] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    function getVehicleDetail() {
      dispatch(getVehicleDetailRequest(id))
    }

    getVehicleDetail()
  }, [id, dispatch])

  useEffect(() => {
    console.log(vehicle);
  }, [vehicle])

  const car = vehicle?.vehicle[0]
  const images = vehicle?.images

  useEffect(() => {
    let imgs = []
    let thumb = car?.thumbimage
    imgs.push(thumb)

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

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <SiteContent>
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
                  {imagesCar?.map((image) => (
                    <Carousel.Item key={image.id}>
                      <img
                        className="d-block w-100"
                        src={image.url}
                        alt={`slide-${id}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="images-car">
                  <Row>
                    {loading && <Spinner animation="border" variant="primary" />}
                    {imagesCar?.map((image, index) => (
                    <Col key={image.id} xs={3}>
                      <button onClick={() => handleSelect(index)}>
                        <img
                          src={image.url}
                          alt={`img-${id}`}
                        />
                      </button>
                    </Col>
                    ))}
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
      </SiteContent>
    </>
  )
}