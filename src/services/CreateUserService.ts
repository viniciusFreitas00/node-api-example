import database from '../database';
import Usuario from '../models/Usuario';

interface Request {
  nome: string;
  email: string;
  senha: string;
}

interface Response {
  nome: string;
  email: string;
  data_cadastro: string;
}

async function CreateUserService({
  nome,
  email,
  senha,
}: Request): Promise<Response> {
  const userExists = await database.oneOrNone<Usuario>(
    'select * from usuario where email = $[email]',
    {
      email,
    },
  );

  if (userExists) {
    throw new Error('Email já cadastrado');
  }

  const usuario = await database.one<Usuario>(
    'insert into usuario values(default, $[nome], $[email],$[senha], now()) returning *',
    {
      nome,
      email,
      senha,
    },
  );

  delete usuario.senha;

  return usuario;
}

export default CreateUserService;
