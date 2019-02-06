import { Request, Response } from 'express';
import ProjectsModel from '../models/projects';

export default class ProjectController {
    public static async getElements(req: Request, res: Response) {
        try {
            const data = await ProjectsModel.getElements()
            res.send(data);
            res.status(200);
        } catch {
            res.send('ERROR in ProjectController getElements');
            res.status(500);
        }
    }
}