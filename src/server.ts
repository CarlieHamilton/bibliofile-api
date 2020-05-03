import express from 'express';
import cors from 'cors';
import mongooseConnection from './config/mongooseConfig';

// Import Routes
import { booksRouter } from './books/books.routes';
import { usersRouter } from './users/users.routes';

// Import Handlers
import { errorHandler } from './utils/error.middleware';
import { notFoundHandler } from './utils/notFound.middleware';

// Environment Variable Setup
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT;

// Defining Express Server
const app = express();
app.use(cors());
app.use(express.json());
mongooseConnection(process.env.NODE_ENV);

// Defining Routes
app.use('/book', booksRouter);
app.use('/user', usersRouter);

// Defining handlers
app.use(errorHandler);
app.use(notFoundHandler);


// Listen to the server! Can you hear her sing?
app.listen(port, () => {
  console.log("");
  console.log(`BiblioFile - server listening at http://localhost:${port}`);
});