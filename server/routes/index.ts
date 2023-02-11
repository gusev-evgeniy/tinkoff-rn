import { Router } from 'express';

import UserController from '../controllers/user';
import AccountController from '../controllers/account';
import isAuth from '../middleware/auth';

const router = Router();

router.post('/auth/create', UserController.create);
router.post('/auth/login', UserController.login);
router.get('/auth/me', isAuth, UserController.me);
router.delete('/auth/logout', isAuth, UserController.logout);
router.put('/user/update', isAuth, UserController.update);

router.post('/account/create', isAuth, AccountController.create);
router.get('/user/get', isAuth, AccountController.get);

export default router;
