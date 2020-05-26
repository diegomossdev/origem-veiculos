import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Site/Home';
import QuemSomos from '../pages/Site/QuemSomos';
import Seminovos from '../pages/Site/Seminovos';
import Seminovo from '../pages/Site/Seminovo';
import Contato from '../pages/Site/Contato';

import SignIn from '../pages/Auth/SignIn';
// import SignUp from '../pages/Auth/SignUp';

import Dashboard from '../pages/Admin/Dashboard';
import Profile from '../pages/Admin/Profile';

import AllVehicles from '../pages/Admin/Vehicles/All';
import AddVehicle from '../pages/Admin/Vehicles/Add';
import AddImagesVehicle from '../pages/Admin/Vehicles/AddImages';
import EditVehicle from '../pages/Admin/Vehicles/Edit';

import AllClientes from '../pages/Admin/Clientes/All';
import AddCliente from '../pages/Admin/Clientes/Add';
import EditCliente from '../pages/Admin/Clientes/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/seminovos/:id/:slug" component={Seminovo} />
      <Route path="/seminovos" component={Seminovos} />
      <Route path="/contato" component={Contato} />

      {/* <Route path="/admin/register" component={SignUp} /> */}
      <Route path="/admin/login" component={SignIn} />

      <Route path="/admin/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/admin/veiculos" component={AllVehicles} isPrivate />
      <Route path="/admin/novo/veiculo/:id/imagens" component={AddImagesVehicle} isPrivate />
      <Route path="/admin/novo/veiculo" component={AddVehicle} isPrivate />
      <Route path="/admin/editar/veiculo/:id" component={EditVehicle} isPrivate />

      <Route path="/admin/clientes" component={AllClientes} isPrivate />
      <Route path="/admin/novo/cliente" component={AddCliente} isPrivate />
      <Route path="/admin/editar/cliente" component={EditCliente} isPrivate />
    </Switch>
  );
}
