import { Router } from 'express';

import LoginService from '../services/LoginService';

const loginRouter = Router();

loginRouter.post('/', async (request, response) => {
  try {
    const { body } = request;

    const usuario = await LoginService(body);

    return response.json(usuario);
  } catch (e) {
    return response.status(401).json({ message: e.message });
  }
});

export default loginRouter;
