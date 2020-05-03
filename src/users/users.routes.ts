import express from 'express';
import { registration, logIn } from './users.controller';

export const usersRouter = express.Router();

usersRouter.post('/register', registration);
usersRouter.post('/login', logIn);