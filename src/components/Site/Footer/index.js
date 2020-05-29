import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '~/assets/site/logo.png';
import facebook from '~/assets/site/facebook.png';
import instagram from '~/assets/site/instagram.png';

export default function Footer() {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <Container>
            <Row>
              <Col md={6}>
                <Link to="/">
                  <img
                    style={{ height: 60 }}
                    src={logo}
                    alt="Origem Veículos"
                  />
                </Link>
                <p style={{ marginTop: 15 }}>
                  Assessoria e venda de veículos com qualidade e procedência.
                </p>
              </Col>
              <Col md={3}>
                <h3>Menu</h3>
                <ul>
                  <li>
                    <Link to="/">
                      Página inicial
                    </Link>
                  </li>
                  <li>
                    <Link to="/quem-somos">
                      Quem somos
                    </Link>
                  </li>
                  <li>
                    <Link to="/seminovos">
                      Seminovos
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato">
                      Contato
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={3}>
                <h3>Atendimento ao cliente</h3>
                <ul>
                  <li>
                    (51) 99705-0540
                  </li>
                  <li>
                    (51) 99771-6533
                  </li>
                  <li>
                    contato@origemveiculos.com.br
                  </li>
                </ul>
              </Col>
              <Col>
                <div className="social">
                  <a href="https://fb.com/origemveiculosrs" target="_blank" rel="noopener noreferrer">
                    <img
                      src={facebook}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://instagram.com/origemveiculosrs" target="_blank" rel="noopener noreferrer">
                    <img
                      src={instagram}
                      alt="Instagram"
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <p className="copyright">
                Origem Veículos © 2020
              </p>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  )
}