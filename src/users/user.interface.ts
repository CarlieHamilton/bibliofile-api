import { Request } from "express"
import Wishlist from '../wishlist/wishlist.interface'
export default interface User {
    _id: UserId,
    username: string,
    email: string,
    password: string,
    role: Role,
    wishlist: string[]
}

enum Role {
    Reader,
    Author
}

export type UserId = string;

export interface GetUserAuthInfoRequest extends Request {
  user: {
      _id: UserId,
      username: string,
      role: string
  }
}