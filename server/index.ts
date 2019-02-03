import { Request, Response } from 'express';

const express = require('express');
const app = express();

app.get('/api/test',(req: Request, res: Response) => {
    res.status(200);
    res.send({"menu": "1"});
})

app.listen(3030, () => {
    console.log('Examplee app listening on port 3030!');
});