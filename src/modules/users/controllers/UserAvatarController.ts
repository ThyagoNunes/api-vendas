import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService(); // intance of service 💘

    const user = updateAvatar.execute({
      userId: request.user.id, // id user
      avatarFilename: request.file?.filename, // name from archieve
    });

    return response.json(user);
  }
}
