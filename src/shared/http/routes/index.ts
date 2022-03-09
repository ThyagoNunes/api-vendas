import { Router } from 'express';

const routes = Router();
routes.get('/', (request, response) => {
  response.json({ message: 'Você está em processo de aprendizagem 💘 ' });
});

export default routes;
