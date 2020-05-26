import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteContent from '../../../pages/Site/_layout/SiteContent';
import { Container, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import Slider from '../../../components/Site/Slider';

import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesRequest } from '../../../store/modules/vehicles/actions';

import noImg from '../../../assets/site/no-img.jpg';

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.vehicles.loading);
  const { vehicles } = useSelector(state => state.vehicles);

  useEffect(() => {
    window.scrollTo(0, 0)

    function getAllVehicles() {
      dispatch(getVehiclesRequest());
    }

    getAllVehicles()
  }, [dispatch])

  return (
    <>
      <SiteContent>
        <Slider />
        <div className="page page-index">
          <Container>
            <Row>
              <Col md={12}>
                <div className="title-section index">
                  <Link to="/seminovos">
                    <h3>carros disponíveis</h3>
                    <h6>Visualize seu carro e entre em contato conosco</h6>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row>
              {loading && <div>carregando</div>}
              {vehicles?.map((vehicle) => (
                <Col key={vehicle.id} md={4} style={{ marginTop: 30 }}>
                  <div className="shadow-sm each-car" style={{ backgroundColor: '#fff' }}>
                    <div>
                      <Link to={`/seminovos/${vehicle.id}/${vehicle.slug}`}>
                        <img src={vehicle.thumbimage?.url || noImg} alt={vehicle.title} />
                      </Link>
                    </div>
                    <div style={{ padding: 15 }}>
                      <div className="short-description">
                        <Link to={`/seminovos/${vehicle.id}/${vehicle.slug}`}>
                          <h6 className="brand-name">
                            {vehicle.title}
                          </h6>
                          <h6 className="brand-name">
                            {vehicle.short_description}
                          </h6>
                        </Link>
                      </div>
                      <div className="value-car">
                        <Link to={`/seminovos/${vehicle.id}/${vehicle.slug}`}>
                          <NumberFormat
                            value={vehicle.value}
                            displayType={'text'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            prefix={'R$'}
                            renderText={value => <h3 className={`value ${vehicle.value_per ? 'value-before' : null}`}>
                              {value}
                            </h3>}
                          />

                          {vehicle.value_per &&
                          <NumberFormat
                            value={vehicle.value_per}
                            displayType={'text'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            prefix={'R$'}
                            renderText={value => <h3 className="value">{value}</h3>}
                          />}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <div style={{ marginTop: 30, marginBottom: 30 }}>
                <Link to="/seminovos" className="btn btn-origem-red">
                  Ver todos os carros
                </Link>
              </div>
            </Row>
          </Container>
        </div>
      </SiteContent>
    </>
  );
}
