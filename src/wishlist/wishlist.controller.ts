import { Request, Response, NextFunction } from 'express';
// import axios from 'axios';
// import { ServerResponse } from 'http';
// import wishlistModel from './wishlist.model';
// import { BookId } from '../books/book.interface';
// import bookModel from '../books/book.model';
// import { getBookFromGoogle } from 'books/books.controller';
import { convertGoogleBookToBook, retrieveBookByGoogleId, retrieveBookFromGoogleById, saveBookToDatabase } from '../books/books.service';

// POST wishlist to database
export const addBookToWishlist = async (request: Request, response: Response) => {
    const { bookId: googleBookId } = request.body;
    let book = await retrieveBookByGoogleId(googleBookId);

    if (book == null) {
        const bookFromGoogle = await retrieveBookFromGoogleById(googleBookId);
        const convertedBook = convertGoogleBookToBook(bookFromGoogle);
        saveBookToDatabase(convertedBook);
    }

    // need the current logged in user.
    // have book id
    // have the user id
    // then, add new row to the database
}