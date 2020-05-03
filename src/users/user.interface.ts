export default interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    role: Role
}

enum Role {
    Reader,
    Author
}