import mongoose from 'mongoose';
import Wishlist from './wishlist.interface'

const wishlistSchema = new mongoose.Schema({
    book_id: String,
});

const wishlistModel = mongoose.model<Wishlist & mongoose.Document>('Wishlist', wishlistSchema);

export default wishlistModel;