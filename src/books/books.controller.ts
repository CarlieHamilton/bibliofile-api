import express, { Request, Response } from 'express';
import axios from 'axios';
import { ServerResponse } from 'http';
import { Book } from './book.interface';
import bookModel from './book.model';

// GET books from a google search
export const getBooks = async (request: Request, response: Response) => {
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
export const getBook = async (request: Request, response: Response) => {
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

// POST book to wishlist
export const addBookToWishlist = async (request: Request, response: Response) => {
    const {
        title,
        author,
        description
    } = request.body;

    const book = new bookModel({
        title,
        author,
        description
    })

    book.save()
        .then(() => {
            response.status(200).json({
                message: 'Book successfully saved'
            })
        })
        .catch(err => {
            response.status(500).send(err);
        })
}