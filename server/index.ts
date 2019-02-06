import express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import Router from './routes';
import { createConnection, ConnectionOptions } from 'typeorm';
import { config } from './config';
import IConfig from './interfaces';
import { Projects } from './entities/Projects';

// const db_config: ConnectionOptions = database_config;

class App {
    private static instanse: App
    private readonly config: IConfig
    private app: express.Application

    private constructor(config: IConfig) {
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
        createConnection(config.database)
            .then(() => {
                let project = new Projects();
                project.name = '100';

                //console.log(project);

                // return connection.manager
                //     .save(project)
                //     .then(project => {
                //         console.log("Photo has been saved. Photo i is", project.id);
                //     });

                this.app.listen(this.config.app.port, () => {
                    console.log(`Example app listening on port ${this.config.app.port}`);
                })
            })
            .catch((error: string) => {
                console.log(`Error connection to database ${error}`);
            });    
    }
}

const app = App.Instance;
app.start();