import express from 'express';
import axios from 'axios';

// Get books - from a search.
export const getBooks = async (req: express.Request, res: express.Response) => {
    const { title, author } = req.body;
    console.log("get on '/books/")
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${process.env.GOOGLE_API_KEY}`)
        .then(res => {
            const searchResponse = res.data.items;
            res.status(200).send(searchResponse);
        })
        .catch(err => {
            res.status(500).send(err)

        })
}

// Get a book
export const getBook =  async (req: express.Request, res: Express.Response) => {
    const { id } = req.params;
    console.log("get on '/book/:id")
    // axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.GOOGLE_API_KEY}`)
    axios.get(`https://www.googleapis.com/books/v1/volumes/QVn-CgAAQBAJ?key=${process.env.GOOGLE_API_KEY}`)
        .then(response => {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

