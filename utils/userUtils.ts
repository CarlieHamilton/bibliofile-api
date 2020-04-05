import { Request } from 'express';
import { userModel } from '../models/user';

export const getAllUsers = (req: Request) => {
    return userModel.find();
}

export const getUserById = (req: Request) => {
    return userModel.findById(req.params.userId);
}