import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
  // convenção: Interface started with I
  iat: number;
  exp: number;
  sub: string;
}

//verified if user is authenticated
export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing. ');
  }

  // authHeader = Baerer ausheasdhasiehaldsahklsekhsadlke ( two chunks separeted for space )
  const [, token] = authHeader.split(' '); // return [0, 1] 💘

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);
    const { sub } = decodedToken as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token.');
  }
}
