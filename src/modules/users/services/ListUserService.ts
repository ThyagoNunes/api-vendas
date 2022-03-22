import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

/*serviços deverão ter uma única funcionalidade

e com isso único método e ele irá executar essa responsabilidade específica do serviço */

class ListUserService {
  public async execute(): Promise<User[]> {
    // return array that contain all products

    const usersRepository = getCustomRepository(UsersRepository); //repo

    const users = await usersRepository.find();

    return users;
  }
}

export default ListUserService;
