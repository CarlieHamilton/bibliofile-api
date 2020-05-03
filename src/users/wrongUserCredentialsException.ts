import HttpException from '../utils/httpException';

export default class WrongUserCredentialsException extends HttpException {
    constructor() {
        super(401, "Wrong credentials provided", null);
    }
}