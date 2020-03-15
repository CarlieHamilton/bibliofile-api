import express from "express";
import cors from "cors";
import { mongooseConnection } from './config/mongooseConnection';

// Routes
import { router as rootRouter } from "./src/routes/rootRoutes";
import { booksRouter } from './src/routes/bookRoutes';

// Environment Variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 3003;

// Defining Express Server
const app = express();
app.use(cors());
app.use(express.json());
// connect to the database, process.env.NODE_ENV
mongooseConnection(process.env.NODE_ENV);

// Defining the routes
app.use("/books", booksRouter);
app.use("/", rootRouter);

// Listen to server
app.listen( port, () => {
    console.log( `\n --------------------------------------------------------------------\n
        BiblioFile - server listening at http://localhost:${ port }
        \n --------------------------------------------------------------------\n` );
} );

// export app
module.exports = {
    app
}