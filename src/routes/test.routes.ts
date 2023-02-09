import { Router } from 'express';

const testRouter = Router();

testRouter.get('/', async (request, response) => {
  return response.json({ teste: 'teste' });
});

export default testRouter;
