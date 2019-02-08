import { Router as ExpressRouter } from 'express';
import TestController from './controllers/test';
import ProjectsController from './controllers/projects';
import { Request, Response } from 'express';

const json = require('../test-data/test.json');

export default class Router {
    private static router: ExpressRouter = ExpressRouter()

    public static get routes() {
        this.router.use('/test', TestController.getElements)
        this.router.get('/projects', ProjectsController.getElements)
        this.router.get('/json', (req: Request, res: Response) => {
            res.send(json);
            res.status(200);
        })
        return this.router;
    }
}