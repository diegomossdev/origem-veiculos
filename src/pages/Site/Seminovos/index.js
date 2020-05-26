import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteContent from '../../../pages/Site/_layout/SiteContent';
import { Container, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import { useDispatch, useSelector } from 'react-redux';
import { getVehiclesRequest } from '../../../store/modules/vehicles/actions';

import Subtitle from '../../../components/Site/Subtitle';

import noImg from '../../../assets/site/no-img.jpg';

export default function Seminovos() {
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
        <Subtitle subtitle="Carros disponíveis" description="Visualize seu carro e entre em contato conosco" />
        <div className="page page-seminovos">
          <Container>
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
          </Container>
        </div>
      </SiteContent>
    </>
  )
}