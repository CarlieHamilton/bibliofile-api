import express from 'express';
import { getBook, getBooks } from '../books/books.controller';

export const booksRouter = express.Router();

booksRouter.get('/search', getBooks);
booksRouter.get('/:id', getBook);