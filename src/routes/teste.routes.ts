import { Router } from 'express';

const testeRouter = Router();

testeRouter.get('/', async (request, response) => {
  try{

    return response.json({ data: 'trrerer' });
  } catch(e){
    console.log(e)
    return response.status(500).json(e)
  }
});

export default testeRouter;