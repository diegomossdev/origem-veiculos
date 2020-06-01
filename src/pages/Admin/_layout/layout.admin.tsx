import * as React from 'react';
import AdminStyle from '../../../styles/admin';
import { Sidebar, Top } from '../../../components/Admin';

const AdminLayout: React.FC = ({ children }) => {
  return (
    <>
      <AdminStyle />
      <Top />
      <Sidebar />
      {children}
    </>
  );
}

export default AdminLayout;