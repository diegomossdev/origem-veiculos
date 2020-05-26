import express, { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import VehicleController from './app/controllers/VehicleController';

import authMiddleware from './app/middlewares/auth';

import path from 'path';

const routes = new Router();
const upload = multer(multerConfig);

const configs = {
  caminho: "../../../../../../build",
  forcarHTTPS: false,
  port: process.env.PORT || 3000
}

if (configs.forcarHTTPS) //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
  routes.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
        if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP
            res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
        else //Se a requisição já é HTTPS
            next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    });

routes.use(express.static(configs.caminho));

routes.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/vehicles', VehicleController.index);
routes.get('/vehicles/:vehicleId', VehicleController.detail);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/vehicles', VehicleController.store);
routes.delete('/vehicle/remove/:vehicleId', VehicleController.remove);
routes.patch('/vehicles/:vehicleId', upload.single('file'), VehicleController.patch);
routes.post('/files/vehicle/:vehicleId', upload.array('files'), FileController.store);
routes.delete('/files/remove/:id', FileController.remove);

export default routes;
