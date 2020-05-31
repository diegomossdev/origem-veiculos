import * as React from 'react';
import { Switch } from 'react-router-dom'
import Route from './Route';

import { Dashboard } from '../pages/Admin';
import { SignIn, Home, Page404 } from '../pages/Site';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" component={Dashboard} isPrivate={true}/>

      <Route path="/" exact component={Home}/>
      
      <Route path="/login" component={SignIn} authRoutes/>
      
      <Route component={Page404}/>
    </Switch>
  );
};

export default Routes;