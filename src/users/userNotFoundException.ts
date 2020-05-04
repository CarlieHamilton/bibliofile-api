import HttpException from '../utils/httpException';

export default class UserNotFoundException extends HttpException {
    constructor(id: string) {
        super(404, `User with id ${id} not found`, null);
    }
}