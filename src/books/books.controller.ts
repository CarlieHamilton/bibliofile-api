import * as express from 'express';
import Book from './book.interface';

class BooksController {
    public path = '/books';
    public router = express.Router();

    private books: Book[] = [
        {
            title: 'Way of Kings',
            author: 'Brandon Sanderson',
            description: "A super cool book yo"
        }
    ];

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path, this.getAllBooks);
        this.router.post(this.path, this.createABook);
    }

    getAllBooks = (request: express.Request, response: express.Response) => {
        response.send(this.books);
    }

    createABook = (request: express.Request, response: express.Response) => {
        const book: Book = request.body;
        this.books.push(book);
        response.send(book);
    }
}

export default BooksController;