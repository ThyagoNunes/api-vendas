import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    //create Method from SessionController
    const { email, password } = request.body; // receive 2 values
    const createSession = new CreateSessionsService(); // new instance from CreateSessionService

    const user = await createSession.execute({
      email,
      password,
    });
    return response.json(user);
  }
}
