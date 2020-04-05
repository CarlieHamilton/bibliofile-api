import express from 'express';
import { router } from './rootRoutes';
import { getUser, createUser, getUsers } from '../controllers/userController';
export const userRouter = express.Router();

router.get('/users', getUsers);
router.get('/user/:userId', getUser);
router.post('/user', createUser);