import Wishlist from '../wishlist/wishlist.interface'
export default interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    role: Role,
    wishlist: Wishlist[]
}

enum Role {
    Reader,
    Author
}