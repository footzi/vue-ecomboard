import { createConnection } from "typeorm";
import config from './config';
import IObject from './interfaces';
import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import Router from './routes';
import { Projects } from './entities/Projects';

class App {
    private static instanse: App
    private readonly config: IObject
    private app: express.Application

    private constructor(config: IObject) {
        this.config = config;
        this.app = express();
        this.app.use(serveStatic(path.join(__dirname, '../')));

        this.setRoutes();
    }

    public static get Instance(): App {
        return this.instanse || (this.instanse = new this(config))
    }

    private setRoutes() {
        this.app.use('/api', Router.routes)
    }

    public start() {
        createConnection()
            .then(() => {
                let project = new Projects();
                project.name = '100';

                //console.log(project);

                // return connection.manager
                //     .save(project)
                //     .then(project => {
                //         console.log("Photo has been saved. Photo i is", project.id);
                //     });

                this.app.listen(this.config.port, () => {
                    console.log(`Example app listening on port ${this.config.port}`);
                })
            })
            .catch((error: string) => {
                console.log(`Error connection to database ${error}`);
            });    
    }
}

const app = App.Instance;
app.start();