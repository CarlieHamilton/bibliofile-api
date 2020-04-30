import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { userInfo } from 'os';
import { User } from '../models/user';

const expiry = '24h';