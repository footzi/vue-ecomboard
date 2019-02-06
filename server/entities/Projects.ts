import {Column, PrimaryGeneratedColumn, Entity} from 'typeorm';

@Entity()
export class Projects {
    constructor() {
        this.id = 0;
        this.name = '';
        this.url = '';
    }
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;
}