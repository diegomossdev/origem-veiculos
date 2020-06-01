import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import {Slider} from '../../../components/Site';

import api from '../../../services/api';

import noImg from '../../../assets/no-img.jpg';

interface VehiclesData {
  id: number;
  title: string;
  value: string;
  value_per: string;
  short_description: string;
  slug: string;
  thumbimage: {
    id: number;
    url: string;
    name: string;
    path: string;
  };
}

const Home: React.FC = () => {
  const [vehicles, setVehicles] = React.useState<[VehiclesData] | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0)

    async function getAllVehicles() {
      setLoading(true);
      const {data} = await api.get('vehicles');
      setLoading(false);

      setVehicles(data);
    };

    getAllVehicles();
  }, []);

  return (
    <>
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
    </>
  );
}

export { Home };