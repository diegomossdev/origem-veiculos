import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import { logout } from '~/store/modules/auth/actions';
import history from '~/services/history';

import {
  Container,
  HeaderTop,
  DateAndHour,
  Logout,
  SubHeader,
  TitlePage,
  Breadcrumb,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());

    toast.success('Logout feito com sucesso');
    history.replace('/admin/login');
  }

  return (
    <Container>
      <HeaderTop>
        <DateAndHour>Sex 13/03/2020 - 15:45</DateAndHour>
        <Logout>
          <button type="button" onClick={() => handleLogout()}>
            Sair
          </button>
        </Logout>
      </HeaderTop>
      <SubHeader>
        <TitlePage>
          <span>Dashboard</span>
        </TitlePage>
        <Breadcrumb>
          <ul>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
          </ul>
        </Breadcrumb>
      </SubHeader>
    </Container>
  );
}
