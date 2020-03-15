import mongoose from 'mongoose';

interface User {
    username: string,
    email: string,
    password: string
};

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

export const User = mongoose.model<User & mongoose.Document>('User', userSchema);