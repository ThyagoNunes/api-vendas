import { Router } from 'express';

const routes = Router();
routes.get('/', (request, response) => {
  response.json({ message: '🔥 É US GURI 🔥 ' });
});

export default routes;
