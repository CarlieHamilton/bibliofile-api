import { Request, Response, NextFunction }from 'express';
import userModel from "./user.model";
import UserNotFoundException from './userNotFoundException';
import User from './user.interface';

// GET users by search for username
// eventually this should perhaps be an elastic search or something.
// hmmm, the search bit doesn't work :cries:
export const getUsersBySearch = (request: Request, response: Response) => {
    const { userSearchTerm } = request.body
    userModel.find({  })
        .then(users => {
            response.status(200).json({
                users: users
            })
        })
}

// GET user by ID
export const getUserById = (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    userModel.findById(id)
        .then(user => {
            if (user) {
                response.status(200).json({
                    message: "User retrieved",
                    user: user
                })
            } else {
                next(new UserNotFoundException(id));
            }
        })
}

// PATCH user
export const updateUser = (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    const userData: User = request.body;
    userModel.findByIdAndUpdate(id, userData, { new: true })
        .then(user => {
            if (user) {
                response.status(200).json({
                    message: "user has been updated",
                    user: user
                })
            } else {
                next(new UserNotFoundException(id));
            }
        })
}

// DELETE a user
export const deleteUser = (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    userModel.findByIdAndDelete(id, (err, user) => {
        if (user) {
            response.status(200).json({
                message: "User deleted"
            })
        } else {
            next(new UserNotFoundException(id));
        }
    })
}