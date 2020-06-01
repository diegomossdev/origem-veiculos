import * as React from 'react';
import AdminStyle from '../../../styles/admin';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <>
      <AdminStyle />
      {children}
    </>
  );
}

export default AuthLayout;