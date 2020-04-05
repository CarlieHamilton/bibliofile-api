import express from "express";
import cors from "cors";
import { mongooseConnection } from './config/mongooseConnection';
import google from 'googleapis';
import jwt from 'jsonwebtoken';
import { oauth2Credentials } from './config/googleAuthConfig';
import cookieParser from 'cookie-parser';

// Routes
import { router as rootRouter } from "./src/routes/rootRoutes";
import { booksRouter } from './src/routes/bookRoutes';

// Environment Variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 3003;
export const baseURL = `http://localhost:${port}`;

// Defining Express Server
export const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// connect to the database, process.env.NODE_ENV
mongooseConnection(process.env.NODE_ENV);

// Defining the routes
app.use("/books", booksRouter);
app.use("/", rootRouter);

// Listen to server
app.listen( port, () => {
    console.log( `BiblioFile - server listening at ${baseURL}` );
} );