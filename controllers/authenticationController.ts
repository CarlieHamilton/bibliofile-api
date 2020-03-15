import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import { User } from '../models/user';

export const register = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const userData = req.body;

    if (await User
                .findOne({
                    email: userData.email
                })) {
        // next(new UserWithThatEmailAlreadyExistsException(userData.email));
    } else {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await User.create({
            ...userData,
            password: hashedPassword,
        });
        user.password = undefined;
        res.send(user);
    }
}

export const login = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const logInData = req.body;
    const user = await User.findOne({
        email: logInData.email
    });

    if (user) {
        const isPasswordMatching = await bcrypt.compare(logInData.password, user.password);
        if (isPasswordMatching) {
            user.password = undefined;
            res.send(user);
        } else {
            // next(new WrongCredentialsException())
        }
    } else {
        // next(new WrongCredentialsException())
    }
}