import express from 'express';
import {
    getBookFromGoogle,
    bookSearch,
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
} from './books.controller';
import { checkJwt } from '../utils/authz.middleware';

export const booksRouter = express.Router();

booksRouter.get('/google/search', bookSearch);
booksRouter.get('/google/:id', getBookFromGoogle);
booksRouter.get('/all', getAllBooks);
booksRouter.get('/:id', getBookById);

// booksRouter.use(checkJwt);
booksRouter.post('/add', createBook);
booksRouter.patch('/:id', updateBook);
booksRouter.delete('/:id', deleteBook);