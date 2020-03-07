import express from 'express';
import { router } from './rootRoutes';
import { getBook } from '../../controllers/bookController';
import axios from 'axios';
export const booksRouter = express.Router();

router.get("/books", getBook);