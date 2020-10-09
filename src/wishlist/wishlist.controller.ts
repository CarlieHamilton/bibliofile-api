import { Request, Response, NextFunction } from 'express';
import wishlistModel from './wishlist.model';
import { BookId } from '../books/book.interface';
import bookModel from '../books/book.model';

// POST wishlist to database
export const addBookToWishlist = async (request: Request, response: Response) => {
    const { bookId } = request.body;
    // console.log(bookId);
    // check if the book is already in our database
    bookModel.findOne({googleInfo: {id: bookId }},  (err, response) => {
        if (err){
            console.log(err);
        }
        else{
            console.log("Result : ", response);
        }
    });
    // need the current logged in user.
    // if it isn't, add it to the database --> use POST in books.controller
    // then, add new row to the database
}