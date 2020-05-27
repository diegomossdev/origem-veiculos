import React, { useEffect } from 'react';
import SiteContent from '~/pages/Site/_layout/SiteContent';

import { Container, Row, Col } from 'react-bootstrap';
import Subtitle from '~/components/Site/Subtitle';

export default function Contato() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SiteContent>
        <Subtitle subtitle="Contato" description="Envie um e-mail por aqui" />
        <div className="page page-contato">
          <Container>
            <Row>
              <Col md={4}>
                <div>
                  <h2>Telefones</h2>
                  <ul>
                    <li>(51) 99999-9999</li>
                    <li>(51) 99999-9999</li>
                    <li>(51) 99999-9999</li>
                  </ul>
                  <h2>E-mails</h2>
                  <ul>
                    <li>contato@email.com</li>
                    <li>veiculos@email.com</li>
                  </ul>
                  <h2>Redes sociais</h2>
                  <ul>
                    <li>@origemveiculos</li>
                    <li>fb.com/origemveiculos</li>
                  </ul>
                </div>
              </Col>
              <Col md={8}>
                <h2>Envie um e-mail por aqui</h2>
                <form>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Nome" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Telefone" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="E-mail" />
                  </div>
                  <div className="form-group">
                    <textarea class="form-control" name="message" placeholder="Mensagem" rows="5"></textarea>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </SiteContent>
    </>
  )
}