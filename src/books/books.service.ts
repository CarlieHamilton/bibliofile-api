import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { ServerResponse } from 'http';
import bookModel from './book.model';
import { BookId, Book } from './book.interface';

export const retrieveBookById = (id: BookId) => {
    return bookModel.findById(id);
}

export const retrieveBookByGoogleId = async (id: BookId) => {
    const book = await bookModel.findOne({googleInfo: {id: id}}).exec();
    return book;
}

export const retrieveBookFromGoogleById = async (id) => {
    try {
        const {data:response} = await axios.get<ServerResponse>(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_API_KEY}`)
        return response
      }

      catch (error) {
        console.log(error);
      }
};

export const convertGoogleBookToBook = (googleBookData) => {

}

export const saveBookToDatabase = async (bookData) => {
    const book = new bookModel(bookData);
    book.save()
        .then(book => {
            console.log("saved")
        })
}