import { getRepository } from 'typeorm';
import { Projects } from '../entities/Projects';

const progects = new Projects();

export default class ProjectsModel {
    /**
     * Метод получает все проекты
     */
    public static async getElements() {
        return await getRepository(Projects)
            .find()
            .then(result => result)
            .catch(error => {
                throw error
            })
    }

    /**
     * Метод создает проект
     */
    public static async createElement(body) {
        progects.name = body.name;
        progects.url = body.url;

        return await getRepository(Projects)
            .save(progects)
            .then(result => result)
            .catch(error => {
                throw error
            })
    }
}