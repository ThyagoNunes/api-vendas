import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  //Middleware for Error Handling [ Error Controllers ]
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: 'piroca',
      });
    }
    return response.status(500).json({
      status: 'Error',
      message: 'Internal Server Error - ISV',
    });
  },
);

app.listen(3333, () => {
  console.log('👾 Server starter at http://localhost:3333');
});
