import * as React from 'react';
import { Router } from 'react-router-dom';

import { AuthProvider } from './contexts/auth';

import history from './services/history';
import Routes from './routes';

import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';
import './styles/admin-panel.css';
import './styles/auth-styles.css';
import './styles/site-styles.css';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </Router>
  );
};

export default App;