import bookModel from './book.model';

export const retrieveBookById = (id) => {
    return bookModel.findById(id);
}