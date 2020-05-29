import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import { Wrapper, Content } from './styles';

export default function AdminLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
