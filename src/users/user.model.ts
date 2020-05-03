import mongoose from 'mongoose';
import User from './user.interface';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    userType: {
        type: String,
        enum: ['Reader', 'Author'],
        default: 'Reader'
    }
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default userModel;