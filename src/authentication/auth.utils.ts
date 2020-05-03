import User from "users/user.interface";
import { TokenData, DataStoredInToken } from "./auth.interface";
import jwt from 'jsonwebtoken';

export const createToken = (user: User): TokenData => {
    const expiresIn = 60*60;
    const secret = process.env.JWT;
    const dataStoredInToken: DataStoredInToken = {
        _id: user._id
    };
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret, { expiresIn })
    }
}

export const createCookie = (tokenData: TokenData) => {
     return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
}

// const checkToken = () => {
//     const secret = process.env.JWT;
//     return jwt({ secret })
// }