import { Request, Response } from 'express';

const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const path = require('path');
const port = process.env.PORT || 3030;
const json = require('./test.json');

app.get('/api/test',(req: Request, res: Response) => {
    res.status(200);
    res.send(json);
})

app.use(serveStatic(path.join(__dirname, '../')));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});