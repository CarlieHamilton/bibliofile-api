import HttpException from '../utils/httpException';

export default class UserAlreadyExists extends HttpException {
    constructor(email: string) {
        super(400, `User with email ${email} already exists`, null);
    }
}