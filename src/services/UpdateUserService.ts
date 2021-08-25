import database from '../database';
import Usuario from '../models/Usuario';

interface Request {
  id: number;
  nome: string;
  senha: string;
}

async function UpdateUserService({ id, nome, senha }: Request) {
  const usuario = await database.one<Usuario>(
    'update usuario set nome = $[nome], senha = $[senha] where id = $[id] returning *',
    {
      id,
      nome,
      senha,
    },
  );

  delete usuario.senha;
  
  return usuario;
}

export default UpdateUserService;
