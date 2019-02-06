import { getRepository } from 'typeorm';
import { Projects } from '../entities/Projects';

export default class ProjectsModel {
    public static async getElements() {
        try {
            return await getRepository(Projects).find()
        } catch {
            throw new Error('Error in ProjectsModel getElements');
        }
    }
}