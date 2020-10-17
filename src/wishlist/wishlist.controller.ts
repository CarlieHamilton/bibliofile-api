import { Request, Response, NextFunction } from 'express';
// import axios from 'axios';
// import { ServerResponse } from 'http';
// import wishlistModel from './wishlist.model';
// import { BookId } from '../books/book.interface';
// import bookModel from '../books/book.model';
// import { getBookFromGoogle } from 'books/books.controller';
import { checkBookInDatabase, convertGoogleBookToBook, retrieveBookByGoogleId, retrieveBookFromGoogleById, saveBookToDatabase } from '../books/books.service';

// POST wishlist to database
export const addBookToWishlist = async (request: Request, response: Response) => {
    const { bookId: googleBookId } = request.body;
    const book = await checkBookInDatabase(googleBookId);
    console.log(book);


    // need the current logged in user.
    // have book id
    // have the user id
    // then, add new row to the database
}