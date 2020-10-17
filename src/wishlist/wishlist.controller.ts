import { Request, Response, NextFunction } from 'express';
import { GetUserAuthInfoRequest } from '../users/user.interface';
// import axios from 'axios';
// import { ServerResponse } from 'http';
// import wishlistModel from './wishlist.model';
// import { BookId } from '../books/book.interface';
// import bookModel from '../books/book.model';
// import { getBookFromGoogle } from 'books/books.controller';
import { checkBookInDatabase } from '../books/books.service';

// POST wishlist to database
export const addBookToWishlist = async (request: GetUserAuthInfoRequest, response: Response) => {
    const { bookId: googleBookId } = request.body;
    const book = await checkBookInDatabase(googleBookId);

    console.log(request.user._id);

    // need the current logged in user.
    // have book id
    // have the user id
    // then, add new row to the database
}