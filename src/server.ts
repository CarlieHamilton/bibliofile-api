import mongooseConnection from '../config/mongooseConfig';

import App from './app';
import BooksController from './books/books.controller';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongooseConnection(process.env.NODE_ENV);

const port = process.env.PORT;

const app = new App(
  [
    new BooksController(),
  ],
  port,
);

app.listen();