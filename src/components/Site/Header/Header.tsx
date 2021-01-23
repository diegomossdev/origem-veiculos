import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../../../assets/site/logo.png';

const Header: React.FC = () => {
  return (
    <>
      <Navbar expand="lg" className="header-color">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="Origem Veículos"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: 'flex-end' }}
          >
            <Nav>
              <Link to="/" className="nav-link">
                Página inicial
              </Link>
              <Link to="/quem-somos" className="nav-link">
                Quem somos
              </Link>
              <Link to="/marcas" className="nav-link">
                Marcas
              </Link>
              <Link to="/seminovos" className="nav-link">
                Seminovos
              </Link>
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export { Header };
