import userModel from 'users/user.model';
import { BookId } from '../books/book.interface';
import { UserId } from '../users/user.interface';

export const saveBookToWishlist = async (userId: UserId, bookId: BookId) => {
    const user = await userModel.findById(userId);

}