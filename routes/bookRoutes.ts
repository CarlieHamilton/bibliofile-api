import express from 'express';
import { router } from './rootRoutes';
import { getBook, getBooks } from '../controllers/bookController';
export const booksRouter = express.Router();

router.get("/books", getBooks);
router.get('/book/:id', getBook);