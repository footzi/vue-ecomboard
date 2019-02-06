import { ConnectionOptions } from 'typeorm';

// export default interface IServerConfig {
//     port: number | string 
// }

export default interface IConfig {
	app: {
		port: number | string
    }
    
	database: ConnectionOptions
}