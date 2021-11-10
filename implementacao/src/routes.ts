import { Router } from 'express';

import { AppController } from './controllers/AppController';
import { UserController } from './controllers/UserController';

const router = Router();

const appController = new AppController();
router.get('/', appController.landing);

const userController = new UserController();
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserByID);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

export { router };