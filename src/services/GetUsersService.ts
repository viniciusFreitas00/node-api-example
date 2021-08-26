import database from '../database';

interface Response {
  nome: string;
  email: string;
  data_cadastro: string;
}

async function CreateUserService(): Promise<Array<Response>> {

  const usuarios = await database.query<Array<Response>>(
    'select nome, email, data_cadastro from usuario',
  );


  return usuarios;
}

export default CreateUserService;
