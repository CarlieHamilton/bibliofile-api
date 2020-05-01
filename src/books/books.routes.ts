import express from 'express';
import { getBook, getBooks, addBookToWishlist } from '../books/books.controller';
import { checkJwt } from '../utils/authz.middleware';

export const booksRouter = express.Router();

booksRouter.get('/search', getBooks);
booksRouter.get('/:id', getBook);

booksRouter.use(checkJwt);
booksRouter.post('/add', addBookToWishlist);