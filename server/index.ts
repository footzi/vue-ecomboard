import { Request, Response } from 'express';

const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const path = require('path');
const port = process.env.PORT || 3030;

app.get('/api/test',(req: Request, res: Response) => {
    res.status(200);
    res.send({"menu": "1"});
})

app.use(serveStatic(path.join(__dirname, '../dist')));

app.listen(port, () => {
    console.log(`Examplee app listening on port ${port}`);
});