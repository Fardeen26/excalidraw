import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';
import { middleware } from './middleware';

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    res.json({
        userId: "123"
    })
})

app.post('/signin', async (req, res) => {
    const userId = 1;

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        token
    })
})

app.post('/room', middleware, async (req, res) => {
    res.json({
        roomId: 123
    })
})

app.listen(3001, () => {
    console.log("Http backend on 3001");
})