import express, { Request, Response } from 'express';
import axios from 'axios';
import { ServerResponse } from 'http';

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