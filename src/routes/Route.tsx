import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/auth';

import AdminLayout from '../pages/Admin/_layout/layout.admin';
import AuthLayout from '../pages/Admin/_layout/layout.auth';
import SiteLayout from '../pages/Site/_layout/layout.site';

function RouteWrapper({
  component: Component,
  isPrivate = false,
  authRoutes = false,
  ...rest
}) {
  const { signed } = React.useContext(AuthContext);

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/admin/dashboard" />;
  }

  let Layout = SiteLayout;

  switch (signed) {
    case true:
      Layout = AdminLayout;
      break;
    case false:
      authRoutes ? Layout = AuthLayout : Layout = SiteLayout;
      break;
  
    default:
      break;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;