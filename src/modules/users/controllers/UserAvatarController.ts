import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService(); // intance of service 💘

    const user = updateAvatar.execute({
      userId: request.user.id,
      avatarFilename: request.file?.filename,
    });

    return response.json(user);
  }
}
