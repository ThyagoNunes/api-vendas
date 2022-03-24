import 'reflect-metadata'; //database
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';
import AppError from '@shared/errors/AppError'; // In case of Middleware Error Handler gotcha error, return class return error message.
import '@shared/typeorm'; // where is located archieve from create connection DB

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

app.use(
  //Middleware for Error Handling [ Error Controllers ]
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'Error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'Error',
      message: 'Internal Server Error - ISV',
    });
  },
);

app.listen(3333, () => console.log('👾 Server starter at http://localhost:3333');
);
