import React from 'react';
import SiteContent from '../../../pages/Site/_layout/SiteContent';

import { Container, Row, Col } from 'react-bootstrap';
import Subtitle from '../../../components/Site/Subtitle';

export default function QuemSomos() {
  return (
    <>
      <SiteContent>
        <Subtitle subtitle="Quem somos" description="Um pouco sobre nós" />
        <div className="page page-quem-somos">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="content-qs">
                  <h2>Nossa missão</h2>
                  <p>
                    Ser a referência número 1 na venda assessorada de veículos no sul do Brasil.
                  </p>
                  <h2 style={{ marginTop: 30 }}>Nossa visão</h2>
                  <p>
                  Ser a referência número 1 na venda assessorada de veículos no sul do Brasil.
                  </p>
                  <h2 style={{ marginTop: 30 }}>Nossos valores</h2>
                  <p>
                    Comprometimento, integridade, ética e qualidade em todos os serviços prestados.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </SiteContent>
    </>
  )
}