import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { Subtitle } from '../../../components/Site';

import api from '../../../services/api';

import noImg from '../../../assets/no-img.jpg';

interface VehiclesData {
  id: number;
  title: string;
  value: string;
  value_per: string;
  short_description: string;
  slug: string;
  status: number;
  thumbimage: {
    id: number;
    url: string;
    name: string;
    path: string;
  };
}

const Marca: React.FC = () => {
  const { slug } = useParams();
  const [vehicles, setVehicles] = React.useState<[VehiclesData] | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    async function getAllVehicles() {
      setLoading(true);
      const { data } = await api.get(`category/${slug}`);
      setLoading(false);
      console.log(data[0]?.vehicles);

      setVehicles(data[0]?.vehicles);
    }

    getAllVehicles();
  }, []);

  return (
    <>
      <Subtitle
        subtitle="Carros disponíveis"
        description="Visualize seu carro e entre em contato conosco"
      />
      <div className="page page-seminovos">
        <Container>
          <Row>
            {loading && <div>carregando</div>}
            {vehicles?.map((vehicle) => (
              <Col key={vehicle.id} md={4} style={{ marginTop: 30 }}>
                <div
                  className="shadow-sm each-car"
                  style={{ backgroundColor: '#fff' }}
                >
                  <div>
                    {vehicle.status === 1 && (
                      <div className="container-sale">
                        <img src="/img/vendido.png" />
                      </div>
                    )}
                    <Link to={`/seminovos/${vehicle.id}/${vehicle.slug}`}>
                      <img
                        src={vehicle.thumbimage?.url || noImg}
                        alt={vehicle.title}
                      />
                    </Link>
                  </div>
                  <div style={{ padding: 15 }}>
                    <div className="short-description">
                      <Link to={`/seminovos/${vehicle.id}/${vehicle.slug}`}>
                        <h6 className="brand-name">{vehicle.title}</h6>
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
                          renderText={(value) => (
                            <h3
                              className={`value ${
                                vehicle.value_per ? 'value-before' : null
                              }`}
                            >
                              {value}
                            </h3>
                          )}
                        />

                        {vehicle.value_per && (
                          <NumberFormat
                            value={vehicle.value_per}
                            displayType={'text'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            prefix={'R$'}
                            renderText={(value) => (
                              <h3 className="value">{value}</h3>
                            )}
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export { Marca };
