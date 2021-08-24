import { Router } from 'express';

import testeRouter from './teste.routes';

const routes = Router();

routes.use('/teste', testeRouter);

export default routes;
