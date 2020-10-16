import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { ServerResponse } from 'http';
import wishlistModel from './wishlist.model';
import { BookId } from '../books/book.interface';
import bookModel from '../books/book.model';
import { getBookFromGoogle } from 'books/books.controller';

// POST wishlist to database
export const addBookToWishlist = async (request: Request, response: Response) => {
    const { bookId: googleBookId } = request.body;
    // console.log(bookId);
    // check if the book is already in our database
    bookModel.findOne({googleInfo: {id: googleBookId }},  (err, response) => {
        if (err){
        //        axios.get<ServerResponse>(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.GOOGLE_API_KEY}`)
        // .then(res => {
        //     const bookData = res.data;
        //     response.send(bookData);
        // })
        // .catch(err => {
        //     response.status(500).send(err);
        // })
            // get the book from google
            // add the book to the database
        }
        else{
            console.log("Result : ", response);
        }
    });
    // need the current logged in user.
    // if it isn't, add it to the database --> use POST in books.controller
    // have book id
    // have the user id
    // then, add new row to the database
}