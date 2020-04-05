import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
}

export const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});

export const userModel = mongoose.model<User>('User', userSchema);