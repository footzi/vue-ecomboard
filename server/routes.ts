import { Router as ExpressRouter } from 'express';
import TestController from './controllers/test';
import ProjectController from './controllers/projects';
import multer from 'multer';

export default class Router {
    private static router: ExpressRouter = ExpressRouter()

    public static get routes() {
        const upload: multer.Instance = multer();

        this.router.use('/test', TestController.getElements)

        this.router.get('/projects', ProjectController.getElements);
        this.router.post('/projects', upload.none(), ProjectController.createElement);
        return this.router;
    }
}