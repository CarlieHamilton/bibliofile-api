import express from "express";
import cors from "cors";
import { pool } from "./psqlconfig";

// Routes
import {router as rootRouter } from "./src/routes/rootRoutes";

// Environment Variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 3003;

// Defining Express Server
const app = express();
app.use(cors());
app.use(express.json())
// connect to the database, process.env.NODE_ENV

// Defining the routes
app.use("/", rootRouter);

// testing database here
const getBooks = (request:any, response:any) => {
  pool.query('SELECT * FROM books', (error:any, results:any) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app
  .route('/books')
  // GET endpoint
  .get(getBooks)

// Listen to server
app.listen( port, () => {
    console.log( `BiblioFile - server listening at http://localhost:${ port }` );
} );

// export app
module.exports = {
    app
}