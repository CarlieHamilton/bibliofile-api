import express from 'express';
import { getUsersBySearch, getUserById } from './users.controller';
import { checkToken } from '../authentication/auth.utils';

export const usersRouter = express.Router();

usersRouter.get('/search', getUsersBySearch);
usersRouter.get('/:id', getUserById);