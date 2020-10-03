import express from 'express';
import { addBookToWishlist } from './wishlist.controller';

export const wishlistRouter = express.Router();

wishlistRouter.post('/add', addBookToWishlist);