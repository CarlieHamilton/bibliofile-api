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

export const retrieveBookFromGoogleById = async (id: BookId) => {
    try {
        const {data:response} = await axios.get<ServerResponse>(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_API_KEY}`)
        return response
      }

      catch (error) {
        console.log(error);
      }
};

export const convertGoogleBookToBook = (googleBookData) => {
    const convertedBook = {
        bookInfo: {
            title: googleBookData.volumeInfo.title,
            subtitle: googleBookData.volumeInfo.subtitle,
            authors: googleBookData.volumeInfo.authors,
            description: googleBookData.volumeInfo.description,
            publisher: googleBookData.volumeInfo.publisher,
            publishedDate: googleBookData.volumeInfo.publishedDate,
            pageCount: googleBookData.volumeInfo.pageCount
        },
        cover: {
            thumbnail: googleBookData.volumeInfo.imageLinks.thumbnail,
            medium: googleBookData.volumeInfo.imageLinks.medium,
            large: googleBookData.volumeInfo.imageLinks.large
        },
        googleInfo: {
            id: googleBookData.id
        }
    }

    return convertedBook
}

export const saveBookToDatabase = async (bookData: Book) => {
    const book = new bookModel(bookData);
    book.save()
        .then(book => {
            console.log("saved")
        })
}

export const checkBookInDatabase = async (id: BookId) => {
    let book = await retrieveBookByGoogleId(id);

    if (book == null) {
        const bookFromGoogle = await retrieveBookFromGoogleById(id);
        const convertedBook = convertGoogleBookToBook(bookFromGoogle);
        saveBookToDatabase(convertedBook);
        return convertedBook;
    }

    return book;
}