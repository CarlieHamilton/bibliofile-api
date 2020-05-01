import mongoose from 'mongoose';
import { Book } from './book.interface';

const bookSchema = new mongoose.Schema({
    bookInfo: {
        title: String,
        subtitle: String,
        authors: [String],
        description: String,
        publisher: String,
        publishedDate: Date,
        pageCount: Number
    },
    cover: {
        thumbnail: String,
        medium: String,
        large: String
    }
});

const bookModel = mongoose.model<Book & mongoose.Document>('Book', bookSchema);

export default bookModel;