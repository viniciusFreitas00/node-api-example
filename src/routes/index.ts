import { Router } from 'express';

import loginRouter from './login.routes'

const routes = Router();

routes.use('/login', loginRouter);

export default routes;
