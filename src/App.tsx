import * as React from 'react';
import { Router } from 'react-router-dom';

import { AuthProvider } from './contexts/auth';

import history from './services/history';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  );
};

export default App;