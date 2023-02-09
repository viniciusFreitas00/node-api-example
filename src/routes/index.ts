import { Router } from 'express';

import loginRouter from './login.routes';
import userRouter from './user.routes';
import testRouter from './test.routes';

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/user', userRouter);
routes.use('/test', testRouter);

export default routes;
