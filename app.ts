import express from "express";
import cors from "cors";
import { mongooseConnection } from './config/mongooseConnection';
// import bcrypt from 'bcrypt';
// import { User } from './models/user';

// Routes
import { router as rootRouter } from "./src/routes/rootRoutes";
import { booksRouter } from './src/routes/bookRoutes';
import { userRouter } from "./src/routes/userRoutes";

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

// const users: Array<User> = [
// ]

// Defining the routes
app.use("/books", booksRouter);
app.use("/user", userRouter);
app.use("/", rootRouter);
// app.get('/users', (req, res) => {
//     res.json(users)
// });

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.username == req.body.username)
//     console.log(user)
//     if (user == null) {
//         return res.status(400).send("Can't find user");
//     }
//     try {
//         if (bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success')
//         } else {
//             res.send('Not allowed');
//         }
//     } catch {
//         res.status(500).send();
//     }
// })

// app.post('/users', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10);
//         const user = {
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword
//         };
//         users.push(user);
//         res.status(201).send();
//     } catch {
//         res.status(500).send();
//     }
// })


// Listen to server
app.listen( port, () => {
    console.log("");
    console.log( `BiblioFile - server listening at http://localhost:${ port }` );
} );

// export app
module.exports = {
    app
}