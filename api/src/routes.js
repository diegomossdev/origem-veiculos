import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import cors from 'cors';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import VehicleController from './app/controllers/VehicleController';
import CategoryController from './app/controllers/CategoryController';

import authMiddleware from './app/middlewares/auth';

import path from 'path';

const routes = new Router();
const upload = multer(multerConfig);

routes.options('*', cors());
routes.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

// ROTAS DO FRONTEND!!!
routes.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/quem-somos', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/seminovos', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/seminovos/:id/:seminovo', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/marcas', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/marca/:id', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/contato', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/login', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/admin/editar/veiculo/:id', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/admin/veiculos', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/admin/dashboard', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/admin/novo/veiculo', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});
routes.get('/admin/novo/veiculo/:id/imagens', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../dist/public'),
  });
});

// ROTAS DO BACKEND (API)!!!
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/vehicles', VehicleController.index);
routes.get('/vehicles/:vehicleId', VehicleController.detail);

routes.get('/categories', CategoryController.index);
routes.get('/category/:id', CategoryController.detail);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/vehicles', VehicleController.store);
routes.delete('/vehicle/remove/:vehicleId', VehicleController.remove);
routes.patch(
  '/vehicles/:vehicleId',
  upload.single('file'),
  VehicleController.patch
);
routes.post(
  '/files/vehicle/:vehicleId',
  upload.array('files'),
  FileController.store
);
routes.delete('/files/remove/:id', FileController.remove);

export default routes;
