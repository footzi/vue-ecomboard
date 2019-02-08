import { ConnectionOptions } from 'typeorm';

export default interface IConfig {
	app: {
		port: number | string
	}
	
	database: ConnectionOptions
}