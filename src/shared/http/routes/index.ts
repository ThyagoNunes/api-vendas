import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  response.json({ message: 'Boa tarde seu Lindo, você é pica 💘' });
});

export default routes;
