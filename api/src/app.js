import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.options('*', cors());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'temp', 'uploads'))
    );
    this.server.use(express.static(path.resolve(__dirname, '..', '..', 'dist', 'public')));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
