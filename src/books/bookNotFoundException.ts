import HttpException from '../utils/httpException';

export default class BookNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `Book with id ${id} not found`, null);
    }
}