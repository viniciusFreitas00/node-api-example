import database from '../database';
import Usuario from '../models/Usuario';

interface Request {
  email: string;
  senha: string;
}

interface Response {
  id: number;
  name: string;
  email: string;
}

 async function userLoginService({
  email,
  senha,
}: Request): Promise<Response> {
  const usuario = await database.oneOrNone<Usuario>(
    'select * from usuario where email = $[email] and senha = $[senha]',
    {
      email,
      senha,
    },
  );

  if (!usuario) {
    throw new Error('Email/Senha incorretos.');
  }

  delete usuario.senha;

  return usuario;
}

export default userLoginService;