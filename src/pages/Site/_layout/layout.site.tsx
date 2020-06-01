import * as React from 'react';
import {Header, Footer} from '../../../components/Site'

const SiteLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}

export default SiteLayout;