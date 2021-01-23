import * as React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { Subtitle } from '../../../components/Site';

import api from '../../../services/api';

import noImg from '../../../assets/no-img.jpg';

interface CategoryData {
  id: number;
  name: string;
  slug: string;
  img: string;
}

const Marcas: React.FC = () => {
  const [categories, setCategories] = React.useState<[CategoryData] | null>(
    null
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    async function getAllVehicles() {
      try {
        setLoading(true);
        const { data } = await api.get('categories');
        console.log(data);

        setLoading(false);

        setCategories(data);
      } catch (error) {
        console.log('Erro, get categorias', error);
      }
    }

    getAllVehicles();
  }, []);

  return (
    <>
      <Subtitle subtitle="Marcas" description="Escolha ma marca" />
      <div className="page page-seminovos">
        <Container>
          <Row>
            {loading && <div>carregando</div>}
            {categories?.map((category) => (
              <Col key={category.id} md={4} style={{ marginTop: 30 }}>
                <div
                  className="shadow-sm each-car"
                  style={{ backgroundColor: '#fff' }}
                >
                  <div>
                    <Link to={`/marca/${category.slug}`}>
                      <img src={`img/${category.img}`} alt={category.name} />
                    </Link>
                  </div>
                  <div style={{ padding: 15 }}>
                    <div className="short-description">
                      <Link to={`/marca/${category.slug}`}>
                        <h6 className="brand-name">{category.name}</h6>
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

export { Marcas };
