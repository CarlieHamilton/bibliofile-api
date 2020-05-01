import App from './app';
import BooksController from './books/books.controller';

const app = new App(
  [
    new BooksController(),
  ],
  3003,
);

app.listen();