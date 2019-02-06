import IConfig from './interfaces';

const pathEntities = process.env.NODE_ENV === 'development' ? './server/entities/*.ts' : './dist/entities/*.js';

export const config:IConfig = {
	app: {
		port: process.env.PORT || 3030,
	},
	
	database: {
		type: 'mysql',
		host: 'eu-cdbr-west-02.cleardb.net',
		port: 3306,
		username: 'b37ebcac2f74d8',
		password: '01bb5906',
		database: 'heroku_1f06a195a622157',
		synchronize: true,
		entities: [
			pathEntities
		]
	}
}