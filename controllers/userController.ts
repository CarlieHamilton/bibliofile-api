import express, { Request, Response } from 'express';
import { userModel, User } from '../models/user';
import bcrypt from 'bcrypt';
import { getUserById, getAllUsers } from "../utils/userUtils";

// GET single user
export const getUser = (req: Request, res: Response) => {
    getUserById(req).exec((err: Error, user: User) => {
        if (err) {
            res.status(404);
            res.send("Oops, user doesn't exist!")
        }
        res.send(user)
    })
}

//  GET all users
export const getUsers = (req: Request, res: Response) => {
    getAllUsers(req)
        .sort({
            modified_date: -1
        })
        .exec((err: Error, users) => {
            if (err) {
                res.status(500);
                res.json({
                    error: err.message
                });
            }
            res.send(users)
        })
}

// POST create a new user
export const createUser = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
        username: username,
        password: hashedPassword,
        email: email
    });

    user.save((err: Error) => {
        if (!err) {
            res.status(201).json('User successfully created!');
        } else {
            res.status(500).json('Something went wrong');
        }
    })
}