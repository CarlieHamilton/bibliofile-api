import express, { Request, Response } from 'express';
import axios from 'axios';
import { ServerResponse } from 'http';
import { Book } from './book.interface';
import bookModel from './book.model';
import { booksRouter } from './books.routes';

// GET books from a google search
export const bookSearch = async (request: Request, response: Response) => {
    const { title, author } = request.body;

    console.log(`GET on '/books/' - search for title - ${title}, author - ${author}`);

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${process.env.GOOGLE_API_KEY}`)
        .then(res => {
            const searchResponse = res.data.items;
            response.status(200).send(searchResponse);
        })
        .catch(err => {
            response.status(500).send(err);
        })
}

// Get a book by id
export const getBookFromGoogle = async (request: Request, response: Response) => {
    const { id } = request.params;
    console.log(`GET on '/book/:id' - book with ID ${id}`);

    axios.get<ServerResponse>(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_API_KEY}`)
        .then(res => {
            const bookData = res.data;
            response.send(bookData);
        })
        .catch(err => {
            response.status(500).send(err);
        })
}

// GET all books from database
export const getAllBooks = (request: Request, response: Response) => {
    bookModel.find()
        .then(books => {
            response.send(books);
        })
}

// GET a book from database by ID
export const getBookById = (request: Request, response: Response) => {
    const id = request.params.id;
    bookModel.findById(id)
        .then(book => {
            response.send(book);
        })
}

// POST book to database
export const createBook = async (request: Request, response: Response) => {
    const bookData: Book = request.body;

    const book = new bookModel(bookData)

    book.save()
        .then(book => {
            response.status(200).json({
                message: 'Book successfully saved',
                book: book
            })
        })
}

// PATCH book to database (remember Carlie, PATCH updates some, PUT replaces)
export const updateBook = (request: Request, response: Response) => {
    const id = request.params.id;
    const bookData: Book = request.body;
    bookModel.findByIdAndUpdate(id, bookData, { new: true })
        .then(book => {
            response.status(200).json({
                message: "your book has been updated!",
                book: book })
        })
}

