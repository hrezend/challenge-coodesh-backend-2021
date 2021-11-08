import { Router } from 'express';

import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
router.get('/', userController.landing);
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserByID);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

export { router };