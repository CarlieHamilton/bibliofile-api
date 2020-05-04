import express from 'express';
import { getUsersBySearch, getUserById, updateUser, deleteUser } from './users.controller';
import { checkToken } from '../authentication/auth.utils';

export const usersRouter = express.Router();

usersRouter.get('/search', getUsersBySearch);
usersRouter.get('/:id', getUserById);

usersRouter.use(checkToken);
usersRouter.patch('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);