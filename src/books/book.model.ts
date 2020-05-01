import * as mongoose from 'mongoose';
import Book from './book.interface';

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String
});

const bookModel = mongoose.model<Book & mongoose.Document>('Book', bookSchema);

export default bookModel;