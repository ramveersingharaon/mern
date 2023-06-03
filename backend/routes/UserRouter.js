import express  from 'express';
import { login, register, test } from '../controllers/UserControllers.js';
import { auth } from '../middleware/auth.js';

export const userRouter = express.Router()

userRouter.get('/', auth ,test)
userRouter.post('/register',register)
userRouter.post('/login',login)