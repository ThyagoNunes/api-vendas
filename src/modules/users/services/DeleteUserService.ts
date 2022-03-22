import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  id: string;
}
/*serviços deverão ter uma única funcionalidade
e com isso único método e ele irá executar essa responsabilidade específica do serviço */

class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository); //repo

    const user = await usersRepository.findOne(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
