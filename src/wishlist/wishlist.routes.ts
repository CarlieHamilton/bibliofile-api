import express from 'express';
import { addBookToWishlist } from './wishlist.controller';
import { checkToken } from '../authentication/auth.utils';

export const wishlistRouter = express.Router();

wishlistRouter.use(checkToken);
wishlistRouter.post('/add', addBookToWishlist);