import express from 'express';
import { registration } from './users.controller';

export const usersRouter = express.Router();

usersRouter.post('/register', registration);