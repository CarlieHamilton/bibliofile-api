import axios from 'axios';

// Get a book
export const getBook =  async (req: any, res: any) => {
    console.log("getting the books");
    console.log("get on '/books/")
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=way+of+kings+inauthor:keyes&key=${process.env.GOOGLE_API_KEY}`)
        .then(function (response) {
            // handle success
            console.log(response.data.items[0]);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }