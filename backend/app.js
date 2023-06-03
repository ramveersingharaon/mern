import express  from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import './db/conn.js'
import { userRouter } from './routes/UserRouter.js';

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173"}))





app.use('/user',userRouter)

app.listen((port),()=>{
    console.log(`The server is running port http://localhost:${port}`);
})