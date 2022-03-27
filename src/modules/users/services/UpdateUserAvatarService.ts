import AppError from '@shared/errors/AppError';
import path from 'path';
import fs from 'fs'; // lib native for FileSystem
import { getCustomRepository } from 'typeorm';
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import uploadConfig from '@config/upload';

interface IRequest {
  //verify interfaces and study about
  userId: string;
  avatarFilename: string;
}

/*serviços deverão ter uma única funcionalidade
e com isso único método e ele irá executar essa responsabilidade específica do serviço */

class UpdateUserAvatarService {
  public async execute({ userId, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar); // property directory = caminho completo onde os arquivos estão sendo armazenados
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath); // method that verified file or diretory existsArchieve in fs

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath); //method that remove archieve from FS
      }
    }
    user.avatar = avatarFilename;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
