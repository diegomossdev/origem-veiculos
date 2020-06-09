import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {Subtitle} from '../../../components/Site';

import whatsapp from '../../../assets/site/whatsapp.png';

const Contato: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Subtitle subtitle="Contato" description="Envie um e-mail por aqui" />
      <div className="page page-contato">
        <Container>
          <Row>
            <Col md={6}>
              <div>
                <h2>Telefones</h2>
                <ul>
                  <li>(51) 99705-0540</li>
                  <li>(51) 99771-6533</li>
                </ul>
                <h2>E-mails</h2>
                <ul>
                  <li>contato@origemveiculos.com.br</li>
                </ul>
                <h2>Redes sociais</h2>
                <ul>
                  <li>@origemveiculos</li>
                  <li>fb.com/origemveiculos</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <h2>Envie uma mensagem para o nosso whatsapp</h2>
              <div style={{ display: 'flex', marginTop: 15 }}>
                <a href="https://api.whatsapp.com/send?phone=5551997716533&amp;text=Ola%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank">
                  <img
                    src={whatsapp}
                    alt="whats"
                  />
                  <div style={{ marginTop: 5 }}>
                    (51) 99771-6533
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export { Contato };