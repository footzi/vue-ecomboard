import { Request, Response } from 'express';
const json = require('../../test-data/test.json');

export default class TestController {
    public static getElements(req: Request, res: Response) {
        res.send(json);
        res.status(200);
    }
}