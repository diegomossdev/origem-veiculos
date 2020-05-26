import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/admin/logo-adm.png';

import { Container, Logo, MenuSidebar, DivisorMenu } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="estatesys" />
      </Logo>

      <MenuSidebar>
        <nav>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>

            <DivisorMenu text="Veículos" />
            <li>
              <Link to="/admin/veiculos">Todos veículos</Link>
            </li>
            <li>
              <Link to="/admin/novo/veiculo">Novo veiculo</Link>
            </li>
            <DivisorMenu text="Clientes" />
            <li>
              <Link to="/admin/clientes">Todos clientes</Link>
            </li>
            <li>
              <Link to="/admin/novo/cliente">Cadastrar cliente</Link>
            </li>
          </ul>
        </nav>
      </MenuSidebar>
    </Container>
  );
}
