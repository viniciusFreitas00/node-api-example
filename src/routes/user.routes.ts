import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import GetUsersService from '../services/GetUsersService';

const userRouter = Router();

userRouter.get('/', async (request, response) =>{
  try {
    const usuario = await GetUsersService();

    return response.json(usuario);
  } catch (e) {
    return response.status(500).json({ message: e.message });
  }

})

userRouter.post('/', async (request, response) => {
  try {
    const { body } = request;

    const usuario = await CreateUserService(body);

    return response.json(usuario);
  } catch (e) {
    return response.status(400).json({ message: e.message });
  }
});

userRouter.put('/', async (request, response) => {
  try {
    const { body } = request;

    const usuario = await UpdateUserService(body);
    return response.json(usuario);
  } catch (e) {
    return response.status(500).json({ message: e.message });
  }
});

export default userRouter;
