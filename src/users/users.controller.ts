import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import userModel from './user.model';
import UserAlreadyExists from './userAlreadyExistsException';
import User from './user.interface';
import WrongUserCredentialsException from './wrongUserCredentialsException';

// Register a new user into the database
export const registration = (request: Request, response: Response, next: NextFunction) => {
    const userData: User = request.body;
    userModel.findOne({
        email: userData.email
    })
        .then(async user => {
            if (user) {
                next(new UserAlreadyExists(userData.email));
            } else {
                const hashedPassword = await bcrypt.hash(userData.password, 10);
                userModel.create({
                    ...userData,
                    password: hashedPassword
                })
                    .then((user) => {
                        response.status(200).json({
                            message: `user with username ${user.username} successfully created`
                        })
                    })
            }
        })
}

// Log in a user
export const logIn = (request: Request, response: Response, next: NextFunction) => {
    const userData = request.body;
    userModel.findOne({
        email: userData.email
    })
        .then(async user => {
            if (user) {
                const isPasswordAMatch = await bcrypt.compare(userData.password, user.password);
                if (isPasswordAMatch) {
                    response.status(200).json({
                        user: user
                    })
                } else {
                    next(new WrongUserCredentialsException());
                }
            } else {
                next(new WrongUserCredentialsException());
            }
        })
}