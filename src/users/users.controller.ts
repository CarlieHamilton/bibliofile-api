import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import userModel from './user.model';
import UserAlreadyExists from './userAlreadyExistsException';
import User from './user.interface';

export const registration = async (request: Request, response: Response, next: NextFunction) => {
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