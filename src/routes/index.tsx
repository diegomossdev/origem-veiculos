import * as React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import {
  Dashboard,
  Vehicles,
  VehicleDetails,
  VehicleAddNew,
  VehicleAddNewImages,
} from '../pages/Admin';

import {
  SignIn,
  Home,
  Page404,
  QuemSomos,
  Contato,
  Seminovos,
  Seminovo,
  Marcas,
  Marca,
} from '../pages/Site';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" component={Dashboard} isPrivate />

      <Route
        path="/admin/novo/veiculo/:id/imagens"
        component={VehicleAddNewImages}
        isPrivate
      />
      <Route path="/admin/novo/veiculo" component={VehicleAddNew} isPrivate />
      <Route
        path="/admin/editar/veiculo/:id"
        component={VehicleDetails}
        isPrivate
      />
      <Route path="/admin/veiculos" component={Vehicles} isPrivate />

      <Route path="/" exact component={Home} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/seminovos/:id/:slug" component={Seminovo} />
      <Route path="/seminovos" component={Seminovos} />
      <Route path="/marcas" component={Marcas} />
      <Route path="/marca/:slug" component={Marca} />
      <Route path="/contato" component={Contato} />

      <Route path="/login" component={SignIn} authRoutes />

      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;
