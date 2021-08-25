import { Router } from 'express';

import userLoginService from '../services/userLoginService';

const loginRouter = Router();

loginRouter.post('/', async (request, response) => {
  try {
    const { body } = request;

    const usuario = await userLoginService(body);

    return response.json(usuario);
  } catch (e) {
    return response.status(500).json({ message: e.message });
  }
});

export default loginRouter;
