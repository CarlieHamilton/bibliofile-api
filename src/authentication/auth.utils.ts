import User from "users/user.interface";
import { TokenData, DataStoredInToken } from "./auth.interface";
import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from "express";
import RequestWithUser from "users/requestWithUser.interface";

export const createToken = (user: User) => {
    const expiry = 60*60;
    const secret = process.env.JWT;

    return jwt.sign({
        _id: user._id,
        username: user.username,
        role: user.role
    },
    secret,
    {
        subject: user._id.toString(),
        expiresIn: expiry
    })
}

export const checkToken =  (request: RequestWithUser, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;
    const secret = process.env.JWT;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, secret, (err, user: User) => {
            if (err) {
                return response.sendStatus(403);
            }

            request.user = user;
            next();
        });
    } else {
        response.sendStatus(401);
    }
}