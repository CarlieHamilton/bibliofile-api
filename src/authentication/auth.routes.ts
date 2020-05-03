import express from 'express';
import { registration, logIn } from './auth.controller';

export const authRouter = express.Router();

authRouter.post('/register', registration);
authRouter.post('/login', logIn);