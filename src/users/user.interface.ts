export default interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    userType: UserType
}

enum UserType {
    Reader,
    Author
}