import { Router as ExpressRouter } from 'express';
import TestController from './controllers/test';
import ProjectsController from './controllers/projects';

export default class Router {
    private static router: ExpressRouter = ExpressRouter()

    public static get routes() {
        this.router.use('/test', TestController.getElements)
        this.router.get('/projects', ProjectsController.getElements)
        return this.router;
    }
}