import {Router} from 'express';
import studentController from '../controllers/studentController.js';

// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/', studentController.index);
routes.get('/register', studentController.get);
routes.post('/register', studentController.post);

export default routes;
