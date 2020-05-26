import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function SiteLayout({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}

SiteLayout.propTypes = {
  children: PropTypes.element.isRequired,
};