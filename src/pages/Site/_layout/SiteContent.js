import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Site/Header'
import Footer from '../../../components/Site/Footer'

import { Wrapper } from './styles';

export default function SiteContent({ children }) {
  return (
    <>
      <Header />
        <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  )
}

SiteContent.propTypes = {
  children: PropTypes.element.isRequired,
};