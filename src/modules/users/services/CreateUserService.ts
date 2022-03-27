import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  //verify interfaces and study about
  name: string;
  email: string;
  password: string;
}

/*serviços deverão ter uma única funcionalidade
e com isso único método e ele irá executar essa responsabilidade específica do serviço */

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8); //bcryptjs hash salt

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
