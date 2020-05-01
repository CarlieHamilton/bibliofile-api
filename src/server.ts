import * as express from 'express';
const app = express();
app.get('/', (request, response) => {
    response.send('Carlie is cool');
});

app.listen(3003);