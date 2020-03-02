const express = require( "express" );
const cors = require("cors");
const app = express();

// Routes
app.get( "/", ( req:any, res:any ) => {
    res.send( "Hello world!" );
} );

// Environment Variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 3003;

// start the Express server
app.use(cors());
app.use(express.json())
// connect to the database, process.env.NODE_ENV

// Defining the routes

// Listen to server
app.listen( port, () => {
    console.log( `BiblioFile - server listening at http://localhost:${ port }` );
} );

// export app
module.exports = {
    app
}