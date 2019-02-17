import { Request, Response } from 'express';
import ProjectsModel from '../models/projects';

export default class ProjectController {
    public static async getElements(req: Request, res: Response) {
        try {
            const result = await ProjectsModel.getElements()
            res.send(result);
            res.status(200);
        } catch(trace) {
            const error = {
                text: "Ошибка при при получении списка проектов",
                trace
            };

            res.send(error);
            res.status(500);
        }
    }

    public static async createElement(req: Request, res: Response) {
        try {
            const result = await ProjectsModel.createElement(req.body);
            res.send(result)
            res.status(200);

        } catch(trace) {
            const error = {
                text: "Ошибка при создании проекта",
                trace
            };

            res.status(500);
            res.send(error);
        }
    }
}